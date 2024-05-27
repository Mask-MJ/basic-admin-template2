<script setup lang="ts">
import { useModal } from '@/components/Modal'
import { useTable, Action } from '@/components/Table'
import {
  deleteContract,
  getContractDetail,
  getContractList,
  type ContractInfo
} from '@/api/project/contract'
import { columns, searchSchemas } from './data'
import SetModal from './SetModal.vue'

const [registerSetModal, { openModal: openSetModel }] = useModal()
const [registerTable, { reload }] = useTable({
  api: getContractList, // 请求接口
  columns, // 展示的列
  useSearchForm: true, // 启用搜索表单
  formConfig: { labelWidth: 100, schemas: searchSchemas }, // 搜索表单配置
  bordered: true,
  rowKey: (rowData) => rowData.id,
  showIndexColumn: false,
  pagination: false,
  actionColumn: {
    width: 100,
    key: 'ACTION',
    render: (row: ContractInfo) =>
      h(Action, {
        actions: [
          {
            type: 'edit',
            onClick: async () => {
              const result = await getContractDetail(row.id)
              return openSetModel(true, result)
            }
          },
          {
            type: 'del',
            onClick: async () => {
              await deleteContract(row.id)
              await reload()
            }
          }
        ]
      })
  }
})
</script>

<template>
  <PageWrapper>
    <Table @register="registerTable">
      <template #toolbar>
        <n-button class="mr-2" type="primary" @click="openSetModel(true)"> 新增 </n-button>
      </template>
    </Table>
    <SetModal @register="registerSetModal" @success="reload()" />
  </PageWrapper>
</template>

<style lang="" scoped></style>
