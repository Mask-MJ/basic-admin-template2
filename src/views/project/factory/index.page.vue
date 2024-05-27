<script setup lang="ts">
import { useModal } from '@/components/Modal'
import { useTable, Action } from '@/components/Table'
import {
  deleteFactory,
  getFactoryDetail,
  getFactoryList,
  type FactoryInfo
} from '@/api/project/factory'
import { columns, searchSchemas } from './data'
import SetModal from './SetModal.vue'

const router = useRouter()
const [registerSetModal, { openModal: openSetModel }] = useModal()
const [registerTable, { reload }] = useTable({
  api: getFactoryList, // 请求接口
  columns, // 展示的列
  useSearchForm: true, // 启用搜索表单
  formConfig: { labelWidth: 100, schemas: searchSchemas }, // 搜索表单配置
  bordered: true,
  rowKey: (rowData) => rowData.id,
  showIndexColumn: false,
  pagination: false,
  actionColumn: {
    width: 300,
    key: 'ACTION',
    render: (row: FactoryInfo) =>
      h(Action, {
        actions: [
          {
            type: 'edit',
            onClick: async () => {
              const result = await getFactoryDetail(row.id)
              return openSetModel(true, result)
            }
          },
          {
            icon: 'i-ant-design:deployment-unit-outlined',
            tooltipProps: { content: '装置管理' },
            buttonProps: {
              type: 'success',
              onClick: () => router.push(`/projects/device/${row.id}`)
            }
          },
          {
            icon: 'i-ant-design:dashboard-outlined',
            tooltipProps: { content: '阀门管理' },
            buttonProps: {
              type: 'info',
              onClick: () => router.push(`/projects/valve/${row.id}`)
            }
          },
          {
            icon: 'i-ant-design:cloud-server-outlined',
            tooltipProps: { content: '项目管理' },
            buttonProps: {
              type: 'warning',
              onClick: () => router.push(`/projects/contract/${row.id}`)
            }
          },
          {
            icon: 'i-ant-design:line-chart-outlined',
            tooltipProps: { content: '分析任务' },
            buttonProps: {
              type: 'success',
              onClick: () => router.push(`/projects/analysisTask/${row.id}`)
            }
          },
          {
            type: 'del',
            onClick: async () => {
              await deleteFactory(row.id)
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

<style scoped></style>
