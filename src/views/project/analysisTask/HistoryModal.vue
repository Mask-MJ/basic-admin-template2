<script setup lang="ts">
import { useModalInner } from '@/components/Modal'
import { useModal } from '@/components/Modal'
import { useTable, Action, type BasicColumn } from '@/components/Table'
import DescModal from './DescModal.vue'
import { getAnalysisTaskResult } from '@/api/project/analysisTask'
// import { mockResultData } from './mock'
import { getDictDataList, getDictTypeList, type DictTypeInfo } from '@/api/system/dict'

const id = ref()
const tableData = ref<any[]>([])
const [registerModal] = useModalInner(async (data) => {
  id.value = data.id
  const result = (await getAnalysisTaskResult({ id: data.id })).rows
  tableData.value = result.map((item: any) => {
    // 数组转对象

    const condition: any = {}
    item.data.map((itm: any) => {
      let value = itm.value === null ? '无' : itm.value
      if (typeof value === 'object') {
        value = Object.keys(value)
          .map((key) => `${key}: ${value[key]}`)
          .join('; ')
      }
      condition[itm.name] = value
    })
    return { tag: item.tag, time: item.time, ...condition }
  })
  const dictType = (await getDictTypeList({ name: 'hard', pageSize: 1000 })).rows
  const dictTypeId = dictType[0].id
  const dictData = (await getDictDataList({ dictTypeId, pageSize: 1000 })).rows
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
const [registerDescModal, { openModal: openDescModel }] = useModal()

const [registerTable, { setColumns }] = useTable({
  // api: getAnalysisTaskResult, // 请求接口
  data: tableData,
  columns: [
    { title: '阀门位号', key: 'tag', width: 200 },
    { title: '采集时间', key: 'time', width: 200 }
  ], // 展示的列
  bordered: true,
  searchInfo: { id }, // 额外参数
  rowKey: (rowData) => rowData.id,
  afterFetch: (data) => {
    const result: any[] = []
    data.forEach((item: any) => {
      result.push(...item.data)
    })
    return result
  },
  showIndexColumn: false,
  actionColumn: {
    width: 100,
    key: 'ACTION',
    render: (row) =>
      h(Action, {
        actions: [
          {
            icon: 'i-ant-design:eye-outlined',
            tooltipProps: { content: '查看数据' },
            buttonProps: {
              type: 'success',
              onClick: async () => {
                openDescModel(true, row)
              }
            }
          }
        ]
      })
  }
})
</script>

<template>
  <Modal
    title="解析结果"
    class="!w-250"
    @register="registerModal"
    positiveText=""
    negativeText="关闭"
  >
    <Table @register="registerTable"> </Table>
    <DescModal @register="registerDescModal" />
  </Modal>
</template>

<style lang="" scoped></style>
import { getDictTypeList, getDictDataList, type DictTypeInfo } from '@/api/system/dict' import {
getDictTypeList, getDictDataList, type DictTypeInfo } from '@/api/system/dict'
