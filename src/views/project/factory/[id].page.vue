<script setup lang="ts">
import { getFactoryChart, getFactoryDetail } from '@/api/project/factory'
import { BarOption, LineOption } from '@/views/dashboard/workTable/data'
import { cloneDeep, map } from 'lodash-es'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import VChart from 'vue-echarts'
import { LineChart, BarChart, MapChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  MarkLineComponent,
  GeoComponent,
  VisualMapComponent
} from 'echarts/components'
use([
  CanvasRenderer,
  LineChart,
  BarChart,
  GridComponent,
  TitleComponent,
  TooltipComponent,
  GeoComponent,
  LegendComponent,
  MarkLineComponent,
  MapChart,
  VisualMapComponent
])

const router = useRouter()
const factoryDetail = ref<any>({})
const chartsData = ref<any>({})
const factoryId = computed(() => {
  return Number((router.currentRoute.value.params as { id: string }).id)
})

const valveBrandOption = computed(() => {
  const option = cloneDeep(BarOption)
  option.xAxis[0].data = map(chartsData.value.valveBrandGroup, 'name')
  option.series[0].data = map(chartsData.value.valveBrandGroup, 'value')
  return option
})

const positionerModelOption = computed(() => {
  const option = cloneDeep(BarOption)
  option.xAxis[0].data = map(chartsData.value.positionerModelGroup, 'name')
  option.series[0].data = map(chartsData.value.positionerModelGroup, 'value')
  return option
})

const getAddress = computed(() => {
  const { province, city, county, address } = factoryDetail.value
  if (province === city) {
    return province + county + address
  } else {
    return province + city + county + address
  }
})

const taskOption = computed(() => {
  const option = cloneDeep(LineOption)
  option.xAxis.data = map(chartsData.value.taskGroupByYear, 'name')
  option.series[0].data = map(chartsData.value.taskGroupByYear, 'value')
  return option
})

const maintenanceRecordOption = computed(() => {
  const option = cloneDeep(LineOption)
  option.xAxis.data = map(chartsData.value.maintenanceWorkOrderGroupByYear, 'name')
  option.series[0].data = map(chartsData.value.maintenanceWorkOrderGroupByYear, 'value')
  return option
})

const fieldServiceOption = computed(() => {
  const option = cloneDeep(LineOption)
  option.xAxis.data = map(chartsData.value.serviceWorkOrderGroupByYear, 'name')
  option.series[0].data = map(chartsData.value.serviceWorkOrderGroupByYear, 'value')
  return option
})

const tabsOptions = computed(() => [
  {
    name: '1',
    label: '维修记录',
    columns: [
      { title: '所属最终用户', key: 'factory.name' },
      { title: '任务名称', key: 'typeName' },
      {
        title: '位号',
        key: 'valve',
        render: (data: any) => {
          return data.valve?.map((item: any) => item.tag).join(', ')
        }
      },
      {
        title: '序列号',
        key: 'valve',
        render: (data: any) => {
          return data.valve?.map((item: any) => item.serialNumber).join(', ')
        }
      },
      { title: '故障类别', key: 'faultCategory' },
      { title: '处理措施', key: 'remedialActions' },
      { title: '维修完成时间', key: 'createdAt' },
      {
        title: '维修报告',
        key: 'attachment',
        render: (data: any) => {
          return data.attachment
            ? h(
                'a',
                {
                  href: data.attachment,
                  target: '_blank',
                  class: 'text-blue-500'
                },
                data.attachment?.split('/').pop()
              )
            : ''
        }
      }
    ],
    data: chartsData.value.maintenanceWorkOrderList
  },
  {
    name: '2',
    label: '现场服务记录',
    columns: [
      { title: '所属最终用户', key: 'factory.name' },
      { title: '任务名称', key: 'typeName' },
      {
        title: '位号',
        key: 'valve',
        render: (data: any) => {
          return data.valve?.map((item: any) => item.tag).join(', ')
        }
      },
      {
        title: '序列号',
        key: 'valve',
        render: (data: any) => {
          return data.valve?.map((item: any) => item.serialNumber).join(', ')
        }
      },
      { title: '故障类别', key: 'faultCategory' },
      { title: '处理措施', key: 'remedialActions' },
      { title: '维修完成时间', key: 'createdAt' },
      {
        title: '维修报告',
        key: 'attachment',
        render: (data: any) => {
          return data.attachment
            ? h(
                'a',
                {
                  href: data.attachment,
                  target: '_blank',
                  class: 'text-blue-500'
                },
                data.attachment?.split('/').pop()
              )
            : ''
        }
      }
    ],
    data: chartsData.value.serviceWorkOrderList
  },
  {
    name: '3',
    label: '诊断记录',
    columns: [
      { title: '任务名称', key: 'name' },
      { title: '所属最终用户', key: 'factory.name' },
      {
        title: '状态',
        key: 'status',
        render: (row: any) => {
          const statusMap = new Map([
            [0, '未开始'],
            [1, '进行中'],
            [2, '已完成'],
            [3, '失败']
          ])
          return statusMap.get(row.status)
        }
      },
      { title: '创建人员', key: 'createBy' },
      { title: '备注', key: 'remark' }
    ],
    data: chartsData.value.taskList
  }
])

onMounted(async () => {
  chartsData.value = await getFactoryChart(factoryId.value)
  factoryDetail.value = await getFactoryDetail(factoryId.value)
})
</script>

<template>
  <PageWrapper>
    <n-grid x-gap="12" y-gap="12" :cols="3" class="mb-3">
      <n-gi :span="2">
        <n-card title="最终用户详情">
          <ul>
            <li>名称：{{ factoryDetail.name || '' }}</li>
            <li>所属区域：{{ getAddress }}</li>
            <li>所属行业：{{ factoryDetail.industry || '' }}</li>
          </ul>
        </n-card>
      </n-gi>
      <n-gi>
        <n-card title="阀门" hoverable>
          <n-statistic label="数量" tabular-nums>
            <n-number-animation show-separator :from="0" :to="chartsData.valveTotal" />
          </n-statistic>
        </n-card>
      </n-gi>
      <n-gi>
        <n-card title="阀门品牌分析" hoverable>
          <VChart class="chart" :option="valveBrandOption" autoresize />
        </n-card>
      </n-gi>
      <n-gi>
        <n-card title="定位器型号分析" hoverable>
          <VChart class="chart" :option="positionerModelOption" autoresize />
        </n-card>
      </n-gi>
    </n-grid>
    <n-grid x-gap="12" y-gap="12" :cols="3">
      <n-gi>
        <n-card title="诊断分析任务历史量趋势" hoverable>
          <VChart class="chart" :option="taskOption" autoresize />
        </n-card>
      </n-gi>
      <n-gi>
        <n-card title="维修量历史趋势" hoverable>
          <VChart class="chart" :option="maintenanceRecordOption" autoresize />
        </n-card>
      </n-gi>
      <n-gi>
        <n-card title="现场服务量历史趋势" hoverable>
          <VChart class="chart" :option="fieldServiceOption" autoresize />
        </n-card>
      </n-gi>
      <n-gi :span="3">
        <n-card hoverable>
          <n-tabs type="line" animated>
            <n-tab-pane
              :name="item.name"
              :tab="item.label"
              v-for="item in tabsOptions"
              :key="item.name"
            >
              <n-data-table
                :columns="item.columns"
                :data="item.data"
                bordered
                :max-height="250"
                :min-height="250"
              />
            </n-tab-pane>
          </n-tabs>
        </n-card>
      </n-gi>
    </n-grid>
  </PageWrapper>
</template>

<style lang="scss" scoped>
.chart {
  height: 300px;
}
</style>
