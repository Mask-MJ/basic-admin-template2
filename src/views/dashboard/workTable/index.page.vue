<script setup lang="ts">
import { use } from 'echarts/core'
import VChart, { THEME_KEY } from 'vue-echarts'
import { CanvasRenderer } from 'echarts/renderers'
import { LineChart, BarChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  MarkLineComponent
} from 'echarts/components'
import { BarOption, LineOption } from './data'
import { cloneDeep } from 'lodash-es'
use([
  CanvasRenderer,
  LineChart,
  BarChart,
  GridComponent,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  MarkLineComponent
])
const themeStore = useThemeStore()
if (themeStore.darkMode) {
  provide(THEME_KEY, 'dark')
}
const factoryOption = computed(() => {
  const option = cloneDeep(BarOption)
  option.xAxis[0].data = ['广东省', '北京市', '上海市', '江苏省', '浙江省']
  option.series[0].data = [330, 200, 700, 400, 500]
  return option
})

const industryOption = computed(() => {
  const option = cloneDeep(BarOption)
  option.xAxis[0].data = ['新能源', '石油化工', '电力', '钢铁', '水泥']
  option.series[0].data = [430, 200, 500, 400, 500]
  return option
})

const brandOption = computed(() => {
  const option = cloneDeep(BarOption)
  option.xAxis[0].data = ['品牌1', '品牌2', '品牌3', '品牌4', '品牌5']
  option.series[0].data = [330, 200, 700, 400, 500]
  return option
})

const modelOption = computed(() => {
  const option = cloneDeep(BarOption)
  option.xAxis[0].data = ['型号1', '型号2', '型号3', '型号4', '型号5']
  option.series[0].data = [330, 200, 700, 400, 500]
  return option
})

const taskOption = computed(() => {
  const option = cloneDeep(LineOption)
  option.series[0].data = [218, 135, 147, 260, 230, 400, 500]
  return option
})

const maintenanceRecordOption = computed(() => {
  const option = cloneDeep(LineOption)
  option.series[0].data = [330, 200, 224, 218, 135, 300, 500]
  return option
})

const fieldServiceOption = computed(() => {
  const option = cloneDeep(LineOption)
  option.series[0].data = [150, 230, 224, 218, 135, 147, 260]
  return option
})
</script>

<template>
  <n-grid x-gap="12" y-gap="12" :cols="3">
    <n-gi>
      <n-card title="最终用户" hoverable>
        <n-statistic label="数量" tabular-nums>
          <n-number-animation show-separator :from="0" :to="557" />
        </n-statistic>
      </n-card>
    </n-gi>
    <n-gi>
      <n-card title="阀门" hoverable>
        <n-statistic label="数量" tabular-nums>
          <n-number-animation show-separator :from="0" :to="100000000" />
        </n-statistic>
      </n-card>
    </n-gi>
    <n-gi>
      <n-card title="分析任务" hoverable>
        <n-statistic label="数量" tabular-nums>
          <n-number-animation show-separator :from="0" :to="700023" />
        </n-statistic>
      </n-card>
    </n-gi>
    <n-gi :span="2">
      <n-card title="最终用户区域分析" hoverable>
        <VChart class="chart" :option="factoryOption" autoresize />
      </n-card>
    </n-gi>
    <n-gi>
      <n-card title="最终用户行业分析" hoverable>
        <VChart class="chart" :option="industryOption" autoresize />
      </n-card>
    </n-gi>
    <n-gi :span="2">
      <n-card title="阀门品牌分析" hoverable>
        <VChart class="chart" :option="brandOption" autoresize />
      </n-card>
    </n-gi>
    <n-gi>
      <n-card title="定位器型号分析" hoverable>
        <VChart class="chart" :option="modelOption" autoresize />
      </n-card>
    </n-gi>
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
  </n-grid>
</template>

<style scoped>
.chart {
  height: 300px;
}
</style>
