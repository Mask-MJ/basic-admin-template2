<script setup lang="ts">
import { deleteMenu, getMenuDetail, getMenuList, type MenuInfo } from '@/api/system/menu'
import { useModal } from '@/components/Modal'
import { Action, useTable } from '@/components/Table'

import { columns, searchSchemas } from './data'
import SetModal from './SetModal.vue'

const [registerSetModal, { openModal: openSetModel }] = useModal()

const [registerTable, { reload }] = useTable({
  api: getMenuList, // 请求接口
  columns, // 展示的列
  useSearchForm: true, // 启用搜索表单
  formConfig: { labelWidth: 100, schemas: searchSchemas }, // 搜索表单配置
  bordered: true,
  rowKey: (rowData) => rowData.id,
  showIndexColumn: false,
  actionColumn: {
    width: 200,
    key: 'ACTION',
    render: (row: MenuInfo) =>
      h(Action, {
        actions: [
          {
            type: 'edit',
            onClick: async () => {
              const result = await getMenuDetail(row.id)
              return openSetModel(true, result)
            }
          },
          {
            type: 'del',
            onClick: async () => {
              await deleteMenu(row.id)
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
  <div class="flex h-full">
    <Table @register="registerTable">
      <template #toolbar>
        <n-button class="mr-2" type="primary" @click="handleAdd"> 新增 </n-button>
      </template>
    </Table>
    <SetModal @register="registerSetModal" @success="reload()" />
  </div>
</template>

<style lang="" scoped></style>
