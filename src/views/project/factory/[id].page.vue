<script setup lang="ts">
import { getFactoryChart } from '@/api/project/factory'
import { BarOption } from '@/views/dashboard/workTable/data'
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

onMounted(async () => {
  chartsData.value = await getFactoryChart(factoryId.value)
})
</script>

<template>
  <PageWrapper>
    <n-grid x-gap="12" y-gap="12" :cols="3">
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
  </PageWrapper>
</template>

<style lang="scss" scoped>
.chart {
  height: 300px;
}
</style>
