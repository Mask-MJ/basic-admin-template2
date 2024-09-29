<script setup lang="ts">
import { useModal } from '@/components/Modal'
import { useTable, Action } from '@/components/Table'
import {
  deleteAnalysisTask,
  executeAnalysisTask,
  getAnalysisTaskDetail,
  getAnalysisTaskList,
  type AnalysisTaskInfo
} from '@/api/project/analysisTask'
import { columns, searchSchemas } from './data'
import SetModal from './SetModal.vue'
import HistoryModal from './HistoryModal.vue'
import type { PaginationProps } from 'naive-ui'

const router = useRouter()

const factoryId = computed(() => (router.currentRoute.value.params as { id: string }).id)
const getSchemas = computed(() =>
  factoryId.value ? searchSchemas.filter((item) => item.path !== 'factoryId') : searchSchemas
)

const [registerSetModal, { openModal: openSetModel }] = useModal()
const [registerHistoryModal, { openModal: openHistoryModel }] = useModal()

const [registerTable, { reload, setTableData, getPagination, getForm }] = useTable({
  api: getAnalysisTaskList, // 请求接口
  columns, // 展示的列
  useSearchForm: true, // 启用搜索表单
  formConfig: { labelWidth: 100, schemas: getSchemas.value }, // 搜索表单配置
  searchInfo: { factoryId: factoryId.value }, // 额外参数
  bordered: true,
  rowKey: (rowData) => rowData.id,
  showIndexColumn: false,
  actionColumn: {
    width: 200,
    key: 'ACTION',
    render: (row: AnalysisTaskInfo) =>
      h(Action, {
        actions: [
          {
            icon: 'i-ant-design:play-circle-outlined',
            tooltipProps: { content: '执行任务' },
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
            onClick: async () => {
              const result = await getAnalysisTaskDetail(row.id)
              return openSetModel(true, result)
            }
          },
          {
            type: 'del',
            onClick: async () => {
              await deleteAnalysisTask(row.id)
              await reload()
            }
          },
          {
            icon: 'i-ant-design:fund-view-outlined',
            tooltipProps: { content: '查看结果' },
            ifShow: row.status === 2,
            buttonProps: {
              type: 'info',
              onClick: async () => {
                return openHistoryModel(true, row)
              }
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
      factoryId: Number(factoryId.value) || undefined,
      page: pagination.page,
      pageSize: pagination.pageSize,
      ...formValue
    })) as any
    setTableData(result.rows)
  }, 5000)
})

onBeforeRouteLeave(() => {
  clearInterval(timer)
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
    <HistoryModal @register="registerHistoryModal" />
  </PageWrapper>
</template>

<style lang="" scoped></style>
