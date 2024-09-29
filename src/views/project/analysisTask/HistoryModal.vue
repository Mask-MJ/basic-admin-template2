<script setup lang="ts">
import { useModalInner } from '@/components/Modal'
import { useTable } from '@/components/Table'
// import { mockResultData2 } from './mock'
import { getDictDataList, getDictTypeList, getDictDataTreeListAll } from '@/api/system/dict'
import dayjs from 'dayjs'
import { Workbook } from 'exceljs'
import { getAnalysisTaskResult, type AnalysisTaskInfo } from '@/api/project/analysisTask'
import { groupBy, flattenDepth } from 'lodash-es'

const taskData = ref<AnalysisTaskInfo>()
const tableData = ref<any[]>([])
const dictData = ref<any[]>([])
const language = ref('zh')
const [registerModal] = useModalInner(async (data) => {
  const dictName = data.dict.name
  const dictType = (await getDictTypeList({ name: dictName, pageSize: 1000 })).rows
  const dictTypeId = dictType[0].id
  dictData.value = (await getDictDataList({ dictTypeId, pageSize: 1000 })).rows
  const dictDataTreeList = await getDictDataTreeListAll()
  taskData.value = data
  const res: any[] = []
  const result = await getAnalysisTaskResult({ id: data.id })
  // const result = mockResultData2
  if (!result.length) {
    return
  } else {
    result.forEach((item: any) => {
      res.push(...item.data)
    })
  }
  // 把数据转换成表格需要的格式
  tableData.value = transformData(res, dictDataTreeList)
  // 设置表格列
  setColumns([
    { title: '位号', key: 'tag', width: 150, fixed: 'left' },
    {
      title: '读取时间',
      key: 'time',
      width: 200,
      render(rowData: any) {
        return dayjs(rowData.time).format('YYYY-MM-DD HH:mm:ss')
      }
    },
    ...transformColums()
  ])
})

const [registerTable, { setColumns, getTableData, getColumns }] = useTable({
  data: tableData,
  columns: [
    { title: '位号', key: 'tag', width: 200, fixed: 'left' },
    { title: '采集时间', key: 'time', width: 200 }
  ], // 展示的列
  bordered: true,
  searchInfo: { id: taskData.value?.id }, // 额外参数
  rowKey: (rowData) => rowData.id,
  showIndexColumn: false
})

const transformColums = () => {
  const columns: any[] = []
  const repeatArray = flattenDepth(
    Object.values(groupBy(dictData.value, (item: any) => item.name)).filter(
      (value) => value.length > 1
    )
  )

  dictData.value.forEach((item: any) => {
    const name = language.value === 'zh' ? item.name : item.value
    const isRepeat = repeatArray.some((i: any) => JSON.stringify(i) === JSON.stringify(item))
    if (isRepeat && item.treeId) {
      columns.push({
        title: `${name}(${item.tree.value})`,
        key: `${item.name}(${item.tree.value})`,
        width: 150
      })
    } else {
      columns.push({ title: name, key: item.name, width: 150 })
    }
  })
  return columns
}

const transformData = (res: any[], dictDataTreeList: any[]) => {
  return res.map((item: any) => {
    // 数组转对象
    const condition: any = {}
    const repeatArray = flattenDepth(
      Object.values(groupBy(item.data, (i: any) => i.name)).filter((value) => value.length > 1),
      1
    )
    item.data.map(async (itm: any) => {
      let value = itm.value === null ? '----' : itm.value
      if (typeof value === 'object') {
        value = Object.keys(value)
          .map((key) => `${key}: ${value[key]}`)
          .join('; ')
      }

      // 判断 itm 是否和 repeatArray 数组中的对象完全相等
      const isRepeat = repeatArray.some((i: any) => JSON.stringify(i) === JSON.stringify(itm))
      if (isRepeat && itm.treeId) {
        const treeData = dictDataTreeList.find((i: any) => i.id === itm.treeId)
        const name = `${itm.name}(${treeData.value})`
        condition[name] = value
      } else {
        condition[itm.name] = value
      }
    })
    return { tag: item.tag, time: item.time, ...condition }
  })
}

const changeLanguage = () => {
  language.value = language.value === 'zh' ? 'en' : 'zh'

  setColumns([
    { title: language.value === 'zh' ? '位号' : 'tag', key: 'tag', width: 200, fixed: 'left' },
    {
      title: language.value === 'zh' ? '采集时间' : 'time',
      key: 'time',
      width: 200,
      render(rowData: any) {
        return dayjs(rowData.time).format('YYYY-MM-DD HH:mm:ss')
      }
    },
    ...transformColums()
  ])
}

const exportData = async () => {
  const workbook = new Workbook()
  const worksheet = workbook.addWorksheet('解析结果')
  worksheet.columns = getColumns().map((item: any) => {
    return { header: item.title, key: item.key, width: 30 }
  })
  const data = getTableData()
  worksheet.addRows(data)
  const arraybuffer: any = new ArrayBuffer(10 * 1024 * 1024)
  const res = await workbook.xlsx.writeBuffer(arraybuffer)
  download(res)
}
function download(arrayBuffer: any) {
  const link = document.createElement('a')

  const blob = new Blob([arrayBuffer])
  const url = URL.createObjectURL(blob)
  link.href = url
  link.download = taskData.value?.name + ' - 解析结果.xlsx'

  document.body.appendChild(link)

  link.click()
  link.addEventListener('click', () => {
    link.remove()
  })
}
</script>

<template>
  <Modal
    title="解析结果"
    class="!w-250"
    @register="registerModal"
    positiveText=""
    negativeText="关闭"
  >
    <Table @register="registerTable">
      <template #toolbar>
        <n-button class="mr-2" type="primary" @click="exportData()"> 导出数据 </n-button>
        <n-button class="mr-2" type="primary" @click="changeLanguage">
          {{ language === 'zh' ? '中文' : '英文' }}
        </n-button>
      </template>
    </Table>
  </Modal>
</template>

<style lang="" scoped></style>
