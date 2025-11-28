<script setup lang="ts">
import { useModal } from '@/components/Modal'
import { useTable, Action } from '@/components/Table'
import {
  deleteAnalysisTask,
  executeAnalysisTask,
  getAnalysisTaskDetail,
  getAnalysisTaskList,
  // deleteAllAnalysisTask,
  type AnalysisTaskInfo
} from '@/api/project/analysisTask'
import { columns, searchSchemas } from './data'
import SetModal from './SetModal.vue'
import HistoryModal from './HistoryModal.vue'
import type { PaginationProps } from 'naive-ui'
import { getFactoryReportData, getFactoryReportData2 } from '@/api/project/factory'
import { hasPermission } from '@/utils'
import { Workbook } from 'exceljs'
import dayjs from 'dayjs'

// const userStore = useUserStore()
const router = useRouter()

const formType = computed(
  () => (router.currentRoute.value.params as { id: string }).id?.split('-')[0]
)
const typeId = computed(() => {
  return (router.currentRoute.value.params as { id: string }).id?.split('-')[1]
})
const getSchemas = computed(() =>
  typeId.value ? searchSchemas.filter((item) => item.path !== 'factoryId') : searchSchemas
)

const [registerSetModal, { openModal: openSetModel }] = useModal()
const [registerHistoryModal, { openModal: openHistoryModel }] = useModal()

const [registerTable, { reload, setTableData, getPagination, getForm }] = useTable({
  api: getAnalysisTaskList, // 请求接口
  columns, // 展示的列
  useSearchForm: true, // 启用搜索表单
  formConfig: { labelWidth: 100, schemas: getSchemas.value }, // 搜索表单配置
  searchInfo: { [formType.value]: typeId }, // 额外参数
  bordered: true,
  rowKey: (rowData) => rowData.id,
  showIndexColumn: false,
  pagination: {
    pageSize: 10,
    suffix: ({ itemCount }) => h('span', {}, `共 ${itemCount} 条`)
  },
  actionColumn: {
    width: 250,
    key: 'ACTION',
    render: (row: AnalysisTaskInfo & { downloadLoading?: number }) =>
      h(Action, {
        actions: [
          {
            icon: 'i-ant-design:play-circle-outlined',
            tooltipProps: { content: '执行任务' },
            auth: 'project:analysisTask:create',
            buttonProps: {
              type: 'success',
              loading: row.status === 1,
              onClick: async () => {
                if (row.status === 1) {
                  return window.$message.warning('任务正在执行中')
                } else {
                  await executeAnalysisTask(row.id)
                  window.$message.warning('任务开始执行')
                  await reload()
                }
              }
            }
          },
          {
            type: 'edit',
            auth: 'project:analysisTask:update',
            onClick: async () => {
              const result = await getAnalysisTaskDetail(row.id)
              return openSetModel(true, result)
            }
          },
          {
            icon: 'i-ant-design:fund-view-outlined',
            tooltipProps: { content: '查看结果' },
            auth: 'project:analysisTask:query',
            ifShow: row.status === 2,
            buttonProps: {
              type: 'info',
              onClick: async () => {
                return openHistoryModel(true, row)
              }
            }
          },
          {
            icon: 'i-ant-design:dashboard-outlined',
            tooltipProps: { content: '阀门列表' },
            auth: 'project:valve:query',
            buttonProps: {
              type: 'success',
              onClick: () => router.push(`/project/valve/analysisTaskId-${row.id}`)
            }
          },
          {
            icon: 'i-ant-design:file-search-outlined',
            tooltipProps: { content: '生成报告' },
            auth: 'project:analysisTask:query',
            buttonProps: {
              type: 'info',
              loading: row.downloadLoading === 1,
              onClick: async () => {
                row.downloadLoading = 1
                const link = document.createElement('a')
                // 返回的是 streamableFile 对象
                try {
                  const response = await getFactoryReportData({
                    analysisTaskId: row.id,
                    reportMode: 'analysisTask'
                  })
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

                  const excelData = await getFactoryReportData2({
                    analysisTaskId: row.id,
                    reportMode: 'analysisTask'
                  })
                  const workbook = new Workbook()
                  const worksheet = workbook.addWorksheet('阀门问题数据')
                  worksheet.columns = [
                    { header: '位号', key: 'tag', width: 30 },
                    { header: '问题(判断依据文件中粗体字)', key: 'description', width: 30 },
                    { header: '潜在风险', key: 'risk', width: 50 },
                    { header: '建议措施', key: 'measures', width: 30 },
                    { header: '报告时间', key: 'time', width: 30 }
                  ]
                  excelData.forEach((item: any) => {
                    item.time = dayjs().format('YYYY-MM-DD HH:mm:ss')
                  })

                  worksheet.addRows(excelData)
                  const arraybuffer: any = new ArrayBuffer(10 * 1024 * 1024)
                  const res = await workbook.xlsx.writeBuffer(arraybuffer)
                  const excelLink = document.createElement('a')

                  const excelBlob = new Blob([res])
                  const excelUrl = URL.createObjectURL(excelBlob)

                  excelLink.href = excelUrl
                  excelLink.download = '阀门问题数据.xlsx'

                  document.body.appendChild(excelLink)

                  excelLink.click()
                  excelLink.addEventListener('click', () => {
                    row.downloadLoading = 0
                    excelLink.remove()
                  })
                } catch (e) {
                  row.downloadLoading = 0
                  window.$message.error('生成报告失败')
                }
              }
            }
          },
          {
            type: 'del',
            auth: 'project:analysisTask:delete',
            onClick: async () => {
              await deleteAnalysisTask(row.id)
              await reload()
            }
          }
        ]
      })
  }
})
let timer: any
onMounted(() => {
  timer = setInterval(async () => {
    const formValue = getForm().getPathsValue()
    const pagination = getPagination() as PaginationProps
    const result = (await getAnalysisTaskList({
      [formType.value]: typeId.value || undefined,
      page: pagination.page,
      pageSize: pagination.pageSize,
      ...formValue
    })) as any
    setTableData(result.rows)
  }, 5000)
})

// const handlePositiveClick = async () => {
//   await deleteAllAnalysisTask()
//   reload()
// }

onBeforeRouteLeave(() => {
  clearInterval(timer)
})
</script>

<template>
  <PageWrapper>
    <Table @register="registerTable">
      <template #toolbar>
        <n-button
          v-if="hasPermission('project:analysisTask:create')"
          class="mr-2"
          type="primary"
          @click="openSetModel(true)"
        >
          新增
        </n-button>
        <!-- <n-popconfirm @positive-click="handlePositiveClick" v-if="userStore.isAdmin">
          <template #trigger>
            <n-button class="mr-2" type="error"> 删除全部 </n-button>
          </template>
          是否确认删除, 如果有关联数据会一并删除
        </n-popconfirm> -->
      </template>
    </Table>
    <SetModal @register="registerSetModal" @success="reload()" />
    <HistoryModal @register="registerHistoryModal" />
  </PageWrapper>
</template>

<style lang="" scoped></style>
