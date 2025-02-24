<script setup lang="ts">
import { useModal } from '@/components/Modal'
import { useTable, Action } from '@/components/Table'
import { deleteValve, getValveList, getAllValveList, type ValveInfo } from '@/api/project/valve'
import { columns, searchSchemas, setSchemas } from './data'
import SetModal from './SetModal.vue'
import HistoryModal from './HistoryModal.vue'
import ChartModal from './ChartModal.vue'
import { Workbook } from 'exceljs'

const router = useRouter()
const formType = computed(
  () => (router.currentRoute.value.params as { id: string }).id?.split('-')[0]
)
const typeId = computed(() => {
  return (router.currentRoute.value.params as { id: string }).id?.split('-')[1]
})

const getSchemas = computed(() => {
  if (formType.value === 'factoryId' || formType.value === 'deviceId') {
    return searchSchemas.filter((item) => item.path !== 'factoryId')
  } else {
    return searchSchemas
  }
})

const [registerSetModal, { openModal: openSetModel }] = useModal()
const [registerHistoryModal, { openModal: openHistoryModel }] = useModal()
const [registerChartModal, { openModal: openChartModel }] = useModal()

const [registerTable, { reload, getForm }] = useTable({
  api: getValveList, // 请求接口
  columns, // 展示的列
  useSearchForm: true, // 启用搜索表单
  formConfig: { labelWidth: 100, schemas: getSchemas.value }, // 搜索表单配置
  searchInfo: { [formType.value]: Number(typeId.value) }, // 额外参数
  bordered: true,
  rowKey: (rowData) => rowData.id,
  showIndexColumn: false,
  actionColumn: {
    width: 350,
    key: 'ACTION',
    render: (row: ValveInfo) =>
      h(Action, {
        actions: [
          {
            icon: 'i-ant-design:laptop-outlined',
            tooltipProps: { content: '工作台' },
            buttonProps: {
              type: 'success',
              onClick: () => router.push(`/project/valve/${row.id}`)
            }
          },
          {
            type: 'edit',
            onClick: async () => {
              // const result = await getValveDetail(row.id)
              // return openSetModel(true, result)
              router.push(`/project/valve/detail/${row.id}`)
            }
          },
          {
            icon: 'i-ant-design:eye-outlined',
            tooltipProps: { content: '查看运行数据' },
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
            buttonProps: {
              type: 'success',
              onClick: () => {
                // openScoreModal(true, row)
                router.push(`/project/valve/score/${row.id}`)
              }
            }
          },
          {
            icon: 'i-ant-design:bar-chart-outlined',
            tooltipProps: { content: '查看历史数据' },
            buttonProps: {
              type: 'warning',
              onClick: () => {
                openHistoryModel(true, row)
              }
            }
          },
          {
            type: 'del',
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
</script>

<template>
  <PageWrapper>
    <Table @register="registerTable">
      <template #toolbar>
        <n-button class="mr-2" type="primary" @click="openSetModel(true)"> 新增 </n-button>
        <n-button class="mr-2" type="success" @click="exportData"> 导出全部数据 </n-button>
      </template>
    </Table>
    <SetModal @register="registerSetModal" @success="reload()" />
    <HistoryModal @register="registerHistoryModal" />
    <ChartModal @register="registerChartModal" />
  </PageWrapper>
</template>

<style lang="" scoped></style>
