<script setup lang="ts">
import { useModalInner } from '@/components/Modal'
import { useTable, type BasicColumn } from '@/components/Table'
// import { mockResultData } from './mock'
import { getDictDataList, getDictTypeList, type DictTypeInfo } from '@/api/system/dict'
import dayjs from 'dayjs'
import { Workbook } from 'exceljs'
import { getAnalysisTaskResult } from '@/api/project/analysisTask'

const id = ref()
const tableData = ref<any[]>([])
const task = ref<any>({})
const [registerModal] = useModalInner(async (data) => {
  task.value = data
  id.value = data.id
  const res: any[] = []
  const result = await getAnalysisTaskResult({ id: data.id })
  // const result = mockResultData
  if (!result.length) {
    return
  } else {
    result.forEach((item: any) => {
      res.push(...item.data)
    })
  }
  tableData.value = res.map((item: any) => {
    // 数组转对象
    const condition: any = {}
    item.data.map((itm: any) => {
      let value = itm.value === null ? '----' : itm.value
      if (typeof value === 'object') {
        value = Object.keys(value)
          .map((key) => `${key}: ${value[key]}`)
          .join('; ')
      }
      condition[itm.name] = value
    })
    return { tag: item.tag, time: item.time, ...condition }
  })
  const dictType = (await getDictTypeList({ name: 'hart', pageSize: 1000 })).rows
  const dictTypeId = dictType[0].id
  const dictData = (await getDictDataList({ dictTypeId, pageSize: 1000 })).rows
  const columns: BasicColumn[] = dictData.map((item: DictTypeInfo) => {
    return {
      title: item.name,
      key: item.name,
      width: 150
    }
  })
  setColumns([
    { title: '阀门位号', key: 'tag', width: 150 },
    {
      title: '读取时间',
      key: 'time',
      width: 200,
      render(rowData: any) {
        return dayjs(rowData.time).format('YYYY-MM-DD HH:mm:ss')
      }
    },
    ...columns
  ])
})

const [registerTable, { setColumns, getTableData, getColumns }] = useTable({
  data: tableData,
  columns: [
    { title: '阀门位号', key: 'tag', width: 200 },
    { title: '采集时间', key: 'time', width: 200 }
  ], // 展示的列
  bordered: true,
  searchInfo: { id }, // 额外参数
  rowKey: (rowData) => rowData.id,
  showIndexColumn: false
})

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
  link.download = task.value.name + ' - 解析结果.xlsx'

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
      </template>
    </Table>
  </Modal>
</template>

<style lang="" scoped></style>
