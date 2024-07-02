<script setup lang="ts">
import type { BasicColumn } from '@/components/Table'
import { useModalInner } from '@/components/Modal'
import { useTable } from '@/components/Table'
import { getValveHistoryList } from '@/api/project/valve'
import { getDictDataList, type DictTypeInfo } from '@/api/system/dict'
const valveId = ref()
const tableData = ref([])
const [registerModal] = useModalInner(async (data) => {
  valveId.value = data.id
  const result = (await getValveHistoryList({ valveId: data.id })).rows
  tableData.value = result.map((item: any) => {
    // 数组转对象

    const condition: any = {}
    item.valveHistoryData.map((itm: any) => {
      condition[itm.name] = itm.value
    })
    return { tag: item.tag, time: item.time, ...condition }
  })
  const dictData = (await getDictDataList({ dictTypeId: 12, pageSize: 1000 })).rows
  const columns: BasicColumn[] = dictData.map((item: DictTypeInfo) => {
    return {
      title: item.name,
      key: item.name,
      resizable: true,
      minWidth: 100,
      maxWidth: 300
    }
  })
  setColumns([
    { title: '阀门位号', key: 'tag', resizable: true },
    { title: '读取时间', key: 'time', minWidth: 200, resizable: true },
    ...columns
  ])
})

const [registerTable, { setColumns }] = useTable({
  data: tableData,
  // api: getValveHistoryList, // 请求接口
  columns: [
    { title: '阀门位号', key: 'tag', resizable: true },
    { title: '读取时间', key: 'time', resizable: true }
  ], // 展示的列
  bordered: true,
  searchInfo: { valveId }, // 额外参数
  rowKey: (rowData) => rowData.id,
  showToolbars: false,
  showIndexColumn: false
})
</script>

<template>
  <Modal title="阀门历史数据" class="!w-250" @register="registerModal">
    <Table @register="registerTable"> </Table>
  </Modal>
</template>

<style lang="" scoped></style>
