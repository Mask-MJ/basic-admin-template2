<script setup lang="ts">
import { useModalInner } from '@/components/Modal'
import { useTable } from '@/components/Table'
import { getValveHistoryList } from '@/api/project/valve'
import { getDictDataList, getDictDataTreeListAll, getDictTypeList } from '@/api/system/dict'
import dayjs from 'dayjs'
import { Workbook } from 'exceljs'
import { groupBy, flattenDepth } from 'lodash-es'
// import { history } from './mock.data'

const valveId = ref()
const tableData = ref<any[]>([])
const language = ref('zh')
const dictData = ref<any[]>([])

const [registerModal] = useModalInner(async (data) => {
  valveId.value = data.id
  const result = (await getValveHistoryList({ valveId: data.id })).rows
  const dictDataTreeList = await getDictDataTreeListAll()
  // const result = history
  tableData.value = transformData(result, dictDataTreeList)
  const dictType = (await getDictTypeList({ name: 'HART', pageSize: 1000 })).rows
  const dictTypeId = dictType[0].id
  dictData.value = (await getDictDataList({ dictTypeId, pageSize: 1000 })).rows

  setColumns([
    { title: '位号', key: 'tag', resizable: true, fixed: 'left' },
    { title: '读取时间', key: 'time', minWidth: 200, resizable: true },
    ...transformColums()
  ])
})

const [registerTable, { setColumns, getTableData, getColumns }] = useTable({
  data: tableData,
  columns: [
    { title: '位号', key: 'tag', resizable: true, fixed: 'left' },
    { title: '读取时间', key: 'time', resizable: true }
  ], // 展示的列
  bordered: true,
  searchInfo: { valveId }, // 额外参数
  rowKey: (rowData) => rowData.id,
  showToolbars: false,
  showIndexColumn: false
})
const transformData = (data: any[], dictDataTreeList: any[]) => {
  return data.map((item: any) => {
    // 数组转对象
    const condition: any = {}
    const repeatArray = flattenDepth(
      Object.values(groupBy(item.valveHistoryData, (i: any) => i.name)).filter(
        (value) => value.length > 1
      ),
      1
    )
    item.valveHistoryData.map((itm: any) => {
      let value = itm.value === null ? '----' : itm.value + (itm.unit || '')
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

const transformColums = () => {
  const columns: any[] = []
  const repeatArray = flattenDepth(
    Object.values(groupBy(dictData.value, (item: any) => item.name)).filter(
      (value) => value.length > 1
    )
  )

  dictData.value.forEach((item: any) => {
    // const name = language.value === 'zh' ? item.name : item.value
    let name = item.name
    if (language.value === 'zh') {
      name = item.cnTitle || item.name
    } else {
      name = item.enTitle || item.value
    }
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
  const valveTag = tableData.value[0]?.tag
  if (!valveTag) {
    window.$message.error('暂无数据')
    return
  }
  link.href = url
  link.download = valveTag + ' - 阀门历史数据.xlsx'

  document.body.appendChild(link)

  link.click()
  link.addEventListener('click', () => {
    link.remove()
  })
}
</script>

<template>
  <Modal title="阀门历史数据" class="!w-250" @register="registerModal">
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
