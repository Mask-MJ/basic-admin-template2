<script setup lang="ts">
import { useModal } from '@/components/Modal'
import { useTable, Action } from '@/components/Table'
import {
  deleteFactory,
  getFactoryReportData,
  getFactoryDetail,
  getFactoryList,
  type FactoryInfo
} from '@/api/project/factory'
import { columns, searchSchemas } from './data'
import SetModal from './SetModal.vue'
import ImportModal from './ImportModal.vue'
const router = useRouter()
const [registerSetModal, { openModal: openSetModel }] = useModal()
const [registerImportModal, { openModal: openImportModel }] = useModal()

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
    width: 200,
    key: 'ACTION',
    render: (row: FactoryInfo) =>
      h(Action, {
        actions: [
          {
            icon: 'i-ant-design:laptop-outlined',
            tooltipProps: { content: '工作台' },
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
            icon: 'i-ant-design:dashboard-outlined',
            tooltipProps: { content: '阀门管理' },
            buttonProps: {
              type: 'warning',
              onClick: () => router.push(`/project/valve/factoryId-${row.id}`)
            }
          },
          {
            icon: 'i-ant-design:file-search-outlined',
            tooltipProps: { content: '生成报告' },
            buttonProps: {
              type: 'info',
              onClick: async () => {
                const link = document.createElement('a')
                // 返回的是 streamableFile 对象
                try {
                  const response = await getFactoryReportData(row.id)
                  // 转换成 blob 对象
                  const disposition = response.headers['content-disposition']
                  const fileName = decodeURI(disposition.split("filename*=UTF-8''")[1])
                  const blob = new Blob([response.data], {
                    type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document;charset=utf-8'
                  })
                  const url = URL.createObjectURL(blob)
                  link.href = url
                  link.download = fileName
                  document.body.appendChild(link)

                  link.click()
                  link.addEventListener('click', () => {
                    link.remove()
                  })
                } catch (e) {
                  window.$message.error('生成报告失败')
                }
              }
            }
          }
        ],
        dropDownActions: [
          {
            props: {
              icon: 'i-ant-design:deployment-unit-outlined',
              onClick: () => router.push(`/project/device/${row.id}`)
            },
            label: '装置管理'
          },
          {
            props: {
              icon: 'i-ant-design:line-chart-outlined',
              onClick: () => router.push(`/project/analysisTask/${row.id}`)
            },
            label: '分析任务'
          },
          {
            props: {
              icon: 'i-ant-design:file-search-outlined',
              onClick: () => openImportModel(true, row)
            },
            label: '导入数据'
          },
          {
            props: {
              icon: 'i-ant-design:delete-outlined',
              onClick: async () => {
                await deleteFactory(row.id)
                await reload()
              }
            },
            label: '删除'
          }
        ]
      })
  }
})

const download = async () => {
  const link = document.createElement('a')
  link.href =
    'http://200.200.200.18:9000/pdf/1729251279478-%E9%98%80%E9%97%A8%E5%AF%BC%E5%85%A5%E6%95%B0%E6%8D%AE%E6%A8%A1%E6%9D%BF.xlsx'
  link.click()
}
</script>

<template>
  <PageWrapper>
    <Table @register="registerTable">
      <template #toolbar>
        <n-button class="mr-2" type="primary" @click="openSetModel(true)"> 新增 </n-button>
        <n-button class="mr-2" type="success" @click="download"> 下载模板 </n-button>
      </template>
    </Table>
    <SetModal @register="registerSetModal" @success="reload()" />
    <ImportModal @register="registerImportModal" @success="reload()" />
  </PageWrapper>
</template>

<style scoped></style>
