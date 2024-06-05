<script setup lang="ts">
import { useModalInner } from '@/components/Modal'
import { useModal } from '@/components/Modal'
import { useTable, Action } from '@/components/Table'
import DescModal from './DescModal.vue'
import { getValveHistoryList } from '@/api/project/valve'

const [registerModal] = useModalInner(async () => {})
const [registerDescModal, { openModal: openDescModel }] = useModal()

const [registerTable] = useTable({
  api: getValveHistoryList, // 请求接口
  columns: [
    { title: '阀门位号', key: 'name', width: 200 },
    { title: '读取时间', key: 'createdAt', width: 200 }
  ], // 展示的列
  bordered: true,
  rowKey: (rowData) => rowData.id,
  showIndexColumn: false,
  actionColumn: {
    width: 100,
    key: 'ACTION',
    render: () =>
      h(Action, {
        actions: [
          {
            icon: 'i-ant-design:eye-outlined',
            tooltipProps: { content: '查看数据' },
            buttonProps: {
              type: 'success',
              onClick: () => {
                openDescModel(true)
              }
            }
          }
        ]
      })
  }
})
</script>

<template>
  <Modal title="阀门历史数据" class="!w-250" @register="registerModal">
    <Table @register="registerTable"> </Table>
    <DescModal @register="registerDescModal" />
  </Modal>
</template>

<style lang="" scoped></style>
