<script setup lang="ts">
import { deleteDept, getDeptDetail, getDeptList, type DeptInfo } from '@/api/system/dept'
import { Action, useTable } from '@/components/Table'
import { useModal } from '@/components/Modal'
import SetModal from './SetModal.vue'
import { hasPermission } from '@/utils'

import { columns, searchSchemas } from './data'

const [registerSetModal, { openModal }] = useModal()

const [registerTable, { reload }] = useTable({
  api: getDeptList, // 请求接口
  columns, // 展示的列
  useSearchForm: true, // 启用搜索表单
  formConfig: { labelWidth: 100, schemas: searchSchemas }, // 搜索表单配置
  showIndexColumn: false,
  pagination: false,
  bordered: true, // 是否显示边框
  rowKey: (rowData) => rowData.id, // 表格行 key 的取值
  actionColumn: {
    width: 150,
    key: 'ACTION',
    render: (row: DeptInfo) =>
      h(Action, {
        actions: [
          {
            type: 'edit',
            auth: 'system:dept:update',
            onClick: async () => {
              const result = await getDeptDetail(row.id)
              return openModal(true, result)
            }
          },
          {
            type: 'del',
            auth: 'system:dept:delete',
            onClick: async () => {
              await deleteDept(row.id)
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
        <n-button
          v-if="hasPermission('project:dept:create')"
          class="mr-2"
          type="primary"
          @click="openModal(true)"
        >
          新增
        </n-button>
      </template>
    </Table>
    <SetModal @register="registerSetModal" @success="reload()" />
  </PageWrapper>
</template>
