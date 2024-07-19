<script setup lang="ts">
import { useModalInner } from '@/components/Modal'
import { useModal } from '@/components/Modal'
import { useTable, Action } from '@/components/Table'
import DescModal from './DescModal.vue'
import { getAnalysisTaskResult } from '@/api/project/analysisTask'

const id = ref()
const [registerModal] = useModalInner(async (data) => {
  id.value = data.id
})
const [registerDescModal, { openModal: openDescModel }] = useModal()

const [registerTable] = useTable({
  api: getAnalysisTaskResult, // 请求接口
  columns: [
    { title: '阀门位号', key: 'tag', width: 200 },
    { title: '读取时间', key: 'time', width: 200 }
  ], // 展示的列
  bordered: true,
  searchInfo: { id }, // 额外参数
  rowKey: (rowData) => rowData.id,
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
                openDescModel(true, row.data.data)
              }
            }
          }
        ]
      })
  }
})
</script>

<template>
  <Modal title="解析结果" class="!w-250" @register="registerModal">
    <Table @register="registerTable"> </Table>
    <DescModal @register="registerDescModal" />
  </Modal>
</template>

<style lang="" scoped></style>
