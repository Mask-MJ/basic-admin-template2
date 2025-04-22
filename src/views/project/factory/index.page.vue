<script setup lang="ts">
import { useModal } from '@/components/Modal'
import { useTable, Action } from '@/components/Table'
import {
  deleteFactory,
  getFactoryDetail,
  getFactoryList,
  type FactoryInfo,
  deleteAllFactory
} from '@/api/project/factory'
import { columns, searchSchemas } from './data'
import SetModal from './SetModal.vue'
import ImportModal from './ImportModal.vue'
import ReportModal from './reportModal.vue'
const userStore = useUserStore()
const router = useRouter()
const [registerSetModal, { openModal: openSetModel }] = useModal()
const [registerImportModal, { openModal: openImportModel }] = useModal()
const [registerReportModal, { openModal: openReportModel }] = useModal()

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
    width: 350,
    key: 'ACTION',
    render: (row: FactoryInfo) =>
      h(Action, {
        actions: [
          {
            icon: 'i-ant-design:laptop-outlined',
            tooltipProps: { content: '工作台' },
            ifShow: userStore.isAdmin,
            buttonProps: {
              type: 'success',
              onClick: () => router.push(`/project/factory/${row.id}`)
            }
          },
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
              type: 'warning',
              onClick: () => router.push(`/project/device/${row.id}`)
            }
          },
          {
            icon: 'i-ant-design:dashboard-outlined',
            tooltipProps: { content: '阀门管理' },
            buttonProps: {
              type: 'success',
              onClick: () => router.push(`/project/valve/factoryId-${row.id}`)
            }
          },
          {
            icon: 'i-ant-design:line-chart-outlined',
            tooltipProps: { content: '分析任务' },
            buttonProps: {
              type: 'warning',
              onClick: () => router.push(`/project/analysisTask/${row.id}`)
            }
          },
          {
            icon: 'i-ant-design:file-search-outlined',
            tooltipProps: { content: '生成报告' },
            buttonProps: {
              type: 'info',
              onClick: async () => {
                return openReportModel(true, row)
              }
            }
          },
          {
            icon: 'i-ant-design:file-search-outlined',
            tooltipProps: { content: '导入数据' },
            buttonProps: {
              type: 'warning',
              onClick: () => openImportModel(true, row)
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

const download = async () => {
  const link = document.createElement('a')
  link.href = 'http://200.200.200.18:9000/pdf/阀门导入数据模板 V4.xlsx'
  link.click()
}
const handlePositiveClick = async () => {
  await deleteAllFactory()
  reload()
}
</script>

<template>
  <PageWrapper>
    <Table @register="registerTable">
      <template #toolbar>
        <n-button class="mr-2" type="primary" @click="openSetModel(true)"> 新增 </n-button>
        <n-button class="mr-2" type="success" @click="download"> 下载模板 </n-button>
        <n-popconfirm @positive-click="handlePositiveClick" v-if="userStore.isAdmin">
          <template #trigger>
            <n-button class="mr-2" type="error"> 删除全部 </n-button>
          </template>
          是否确认删除, 如果有关联数据会一并删除
        </n-popconfirm>
      </template>
    </Table>
    <SetModal @register="registerSetModal" @success="reload()" />
    <ImportModal @register="registerImportModal" @success="reload()" />
    <ReportModal @register="registerReportModal" />
  </PageWrapper>
</template>

<style scoped></style>
