<script setup lang="ts">
import { deleteRole, getRoleDetail, getRoleList, type RoleInfo } from '@/api/system/role'
import SetModal from './SetModal.vue'
import { useModal } from '@/components/Modal'
import { Action, useTable } from '@/components/Table'
import { hasPermission } from '@/utils'

import { columns, searchSchemas } from './data'

const [registerSetModal, { openModal: openSetModel }] = useModal()
const [registerTable, { reload }] = useTable({
  api: getRoleList, // 请求接口
  columns, // 展示的列
  useSearchForm: true, // 启用搜索表单
  formConfig: { labelWidth: 100, schemas: searchSchemas }, // 搜索表单配置
  bordered: true,
  rowKey: (rowData) => rowData.id,
  actionColumn: {
    width: 100,
    key: 'ACTION',
    render: (row: RoleInfo) =>
      row.value === 'admin'
        ? null
        : h(Action, {
            actions: [
              {
                type: 'edit',
                auth: 'system:role:update',
                onClick: async () => {
                  const result = await getRoleDetail(row.id)
                  return openSetModel(true, result)
                }
              },
              {
                type: 'del',
                auth: 'system:role:delete',
                onClick: async () => {
                  await deleteRole(row.id)
                  await reload()
                }
              }
            ]
          })
  }
})

const handleAdd = () => {
  openSetModel(true)
}
</script>

<template>
  <PageWrapper>
    <Table @register="registerTable">
      <template #toolbar>
        <n-button
          v-if="hasPermission('system:role:create')"
          class="mr-2"
          type="primary"
          @click="handleAdd"
        >
          新增
        </n-button>
      </template>
    </Table>
    <SetModal @register="registerSetModal" @success="reload()" />
  </PageWrapper>
</template>

<style scoped></style>
./SetModal.vue
