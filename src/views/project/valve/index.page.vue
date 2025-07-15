<script setup lang="ts">
import { useModal } from '@/components/Modal'
import { useTable, Action } from '@/components/Table'
import {
  deleteValve,
  getValveList,
  getAllValveList,
  type ValveInfo,
  deleteAllValve
} from '@/api/project/valve'
import { columns, searchSchemas, setSchemas } from './data'
import SetModal from './SetModal.vue'
import ChartModal from './ChartModal.vue'
import { Workbook } from 'exceljs'
import { hasPermission } from '@/utils'

const userStore = useUserStore()
const router = useRouter()
const formType = ref((router.currentRoute.value.params as { id: string }).id?.split('-')[0] || '')
const typeId = ref((router.currentRoute.value.params as { id: string }).id?.split('-')[1] || '')

const getSchemas = computed(() => {
  if (formType.value === 'factoryId' || formType.value === 'deviceId') {
    return searchSchemas.filter((item) => item.path !== 'factoryId')
  } else {
    return searchSchemas
  }
})

const [registerSetModal, { openModal: openSetModel }] = useModal()
const [registerChartModal, { openModal: openChartModel }] = useModal()

const [registerTable, { reload, getForm }] = useTable({
  api: getValveList, // 请求接口
  columns, // 展示的列
  useSearchForm: true, // 启用搜索表单
  formConfig: { labelWidth: 100, schemas: getSchemas.value }, // 搜索表单配置
  searchInfo: { [formType.value]: typeId }, // 额外参数
  bordered: true,
  rowKey: (rowData) => rowData.id,
  showIndexColumn: false,
  actionColumn: {
    width: 450,
    key: 'ACTION',
    render: (row: ValveInfo) =>
      h(Action, {
        actions: [
          {
            icon: 'i-ant-design:laptop-outlined',
            auth: 'project:valve:query',
            tooltipProps: { content: '工作台' },
            buttonProps: {
              type: 'success',
              onClick: () => router.push(`/project/valve/workTable/${row.id}`)
            }
          },
          {
            type: 'edit',
            auth: 'project:valve:update',
            onClick: async () => {
              // const result = await getValveDetail(row.id)
              // return openSetModel(true, result)
              router.push(`/project/valve/detail/${row.id}`)
            }
          },
          {
            icon: 'i-ant-design:eye-outlined',
            tooltipProps: { content: '查看运行数据' },
            auth: 'project:valve:runInfo',
            buttonProps: {
              type: 'success',
              onClick: async () => {
                // const result = await getValveRunInfo(row.id)
                // openDescModel(true, result)
                router.push(`/project/valve/runInfo/${row.id}`)
              }
            }
          },
          {
            icon: 'i-ant-design:line-chart-outlined',
            tooltipProps: { content: '图表' },
            auth: 'project:valve:query',
            buttonProps: {
              type: 'info',
              onClick: () => {
                openChartModel(true, row)
              }
            }
          },
          {
            icon: 'i-ant-design:audit-outlined',
            tooltipProps: { content: '评分' },
            auth: 'project:valve:score',
            buttonProps: {
              type: 'success',
              onClick: () => {
                // openScoreModal(true, row)
                router.push(`/project/valve/score/${row.id}`)
              }
            }
          },
          {
            icon: 'i-ant-design:audit-outlined',
            tooltipProps: { content: '历史评分' },
            auth: 'project:valve:history',
            buttonProps: {
              type: 'info',
              onClick: () => {
                // openScoreModal(true, row)
                router.push(`/project/valve/history/${row.id}`)
              }
            }
          },
          {
            icon: 'i-ant-design:bar-chart-outlined',
            tooltipProps: { content: '查看历史数据' },
            auth: 'project:valve:historyData',
            buttonProps: {
              type: 'warning',
              onClick: () => {
                // openHistoryModel(true, row)
                router.push(`/project/valve/historyData/${row.id}`)
              }
            }
          },
          {
            icon: 'i-ant-design:code-sandbox-outlined',
            tooltipProps: { content: '工单' },
            auth: 'project:valve:workOrder',
            buttonProps: {
              type: 'success',
              onClick: () => {
                router.push(`/project/valve/workOrder/${row.id}`)
              }
            }
          },
          {
            icon: 'i-ant-design:line-chart-outlined',
            tooltipProps: { content: '分析任务' },
            auth: 'project:analysisTask:query',
            buttonProps: {
              type: 'info',
              onClick: () => {
                router.push(`/project/analysisTask/valveId-${row.id}`)
              }
            }
          },
          {
            type: 'del',
            auth: 'project:valve:delete',
            ifShow: ['factoryId', 'deviceId'].includes(formType.value),
            onClick: async () => {
              await deleteValve(row.id)
              await reload()
            }
          }
        ]
      })
  }
})

const exportData = async () => {
  const workbook = new Workbook()
  const worksheet = workbook.addWorksheet('解析结果')
  const columns = setSchemas
    .filter((item) => item.path !== 'id' && item.path)
    .map((item) => {
      return { header: item.label, key: item.path, width: 30 }
    })
  worksheet.columns = columns

  const formValue = getForm().getPathsValue()
  const data = await getAllValveList({
    ...formValue,
    [formType.value]: Number(typeId.value)
  })
  data.map((item: any) => {
    item['factoryId'] = item.factory.name
    item['deviceId'] = item.device?.name || ''
  })
  if (!data.length) {
    return window.$message.error('暂无数据')
  }
  worksheet.addRows(data)
  const arraybuffer: any = new ArrayBuffer(10 * 1024 * 1024)
  const res = await workbook.xlsx.writeBuffer(arraybuffer)
  download(res)
}
function download(arrayBuffer: any) {
  const link = document.createElement('a')

  const blob = new Blob([arrayBuffer])
  const url = URL.createObjectURL(blob)
  link.href = url
  link.download = '阀门数据.xlsx'

  document.body.appendChild(link)

  link.click()
  link.addEventListener('click', () => {
    link.remove()
  })
}
const handlePositiveClick = async () => {
  await deleteAllValve()
  reload()
}

watch(
  () => (router.currentRoute.value.params as { id: string }).id,
  (val) => {
    console.log('formType.value1', val)
    if (!val) {
      return
    }
    formType.value = val.split('-')[0]
    typeId.value = val.split('-')[1]

    console.log('formType.value2', val)
    // 重新获取表单数据
    reload({
      [formType.value]: typeId.value
    })
  },
  { immediate: true }
)
</script>

<template>
  <PageWrapper>
    <Table @register="registerTable">
      <template #toolbar>
        <n-button
          v-if="hasPermission('project:valve:create')"
          class="mr-2"
          type="primary"
          @click="openSetModel(true)"
        >
          新增
        </n-button>
        <n-button
          v-if="hasPermission('project:valve:query')"
          class="mr-2"
          type="success"
          @click="exportData"
        >
          导出全部数据
        </n-button>
        <n-popconfirm @positive-click="handlePositiveClick" v-if="userStore.isAdmin">
          <template #trigger>
            <n-button class="mr-2" type="error"> 删除全部 </n-button>
          </template>
          是否确认删除, 如果有关联数据会一并删除
        </n-popconfirm>
      </template>
    </Table>
    <SetModal @register="registerSetModal" @success="reload()" />
    <ChartModal @register="registerChartModal" />
  </PageWrapper>
</template>

<style lang="" scoped></style>
