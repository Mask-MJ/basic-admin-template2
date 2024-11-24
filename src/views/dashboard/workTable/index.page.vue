<script setup lang="ts">
import { use, registerMap } from 'echarts/core'
import VChart, { THEME_KEY } from 'vue-echarts'
import { CanvasRenderer } from 'echarts/renderers'
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
import { BarOption, LineOption, MapData } from './data'
import { cloneDeep, flatMap, sortBy, map } from 'lodash-es'
import china from '@/assets/json/china.json'
import { getCharts, type Charts } from '@/api/system/user'

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
const themeStore = useThemeStore()
if (themeStore.darkMode) {
  provide(THEME_KEY, 'dark')
}

const chartsData = ref<Charts>({
  factoryTotal: 0,
  valveTotal: 0,
  taskTotal: 0,
  taskCount: [],
  operationLog: []
})

const weekTaskOption = computed(() => {
  const option = cloneDeep(BarOption)

  option.xAxis[0].data = map(chartsData.value.taskCount, 'name')
  option.series[0].data = map(chartsData.value.taskCount, 'value')
  return option
})

const factoryMapOption = computed(() => {
  const option = {
    title: { text: '最终用户区域分布' },
    tooltip: {
      trigger: 'item', //设置该属性之后，会与series中data数据对应。注意data中对象的键名为name。如果单纯的展示数据可用此属性，不与formatter同用。
      formatter: (params: any) => {
        return `${params.name}<br/>${params.value || 0} 个`
      }
    },
    visualMap: {
      min: 0,
      max: 1000,
      text: ['High', 'Low'],
      realtime: false,
      calculable: true,
      inRange: {
        color: ['lightskyblue', 'yellow', 'orangered']
      }
    },
    series: [
      {
        type: 'map',
        name: '',
        map: 'china', //这里的名称需要和 echarts.registerMap('china',{})中的名称一致
        roam: true, //缩放
        layoutCenter: ['50%', '80%'], //地图位置
        layoutSize: '150%',
        zoom: true, //默认地图在容器中显示zoom:1,可根据需求放大缩小地图
        label: { show: true, color: '#fff' },
        // 数据
        data: MapData
      }
    ]
  }
  return option
})

const factoryBarOption = computed(() => {
  const option: any = cloneDeep(BarOption)
  const data = sortBy(MapData, (item) => item.value)
  option.xAxis = { type: 'value', boundaryGap: [0, 0.01] }
  option.yAxis = {
    type: 'category',
    data: flatMap(data, (item) => item.name)
  }
  option.series[0].label = { show: true, position: 'inside' }
  option.series[0].data = flatMap(data, (item) => item.value)
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

onMounted(async () => {
  registerMap('china', china as any)
  chartsData.value = await getCharts()
})
</script>

<template>
  <n-grid x-gap="12" y-gap="12" :cols="3">
    <n-gi>
      <n-card title="最终用户" hoverable>
        <n-statistic label="数量" tabular-nums>
          <n-number-animation show-separator :from="0" :to="chartsData.factoryTotal" />
        </n-statistic>
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
      <n-card title="分析任务" hoverable>
        <n-statistic label="数量" tabular-nums>
          <n-number-animation show-separator :from="0" :to="chartsData.taskTotal" />
        </n-statistic>
      </n-card>
    </n-gi>
    <n-gi :span="2">
      <n-card title="本周任务数量" hoverable>
        <VChart class="chart" :option="weekTaskOption" autoresize />
      </n-card>
    </n-gi>
    <n-gi>
      <n-card title="工作记录" hoverable>
        <ul class="list">
          <n-scrollbar style="max-height: 280px">
            <li
              class="mb-2 border border-slate-400 rounded px-2 py-1"
              v-for="item in chartsData.operationLog"
              :key="item.id"
            >
              <span class="mr-4">{{ item.createdAt }}</span>
              <span class="">{{ item.title }}</span>
            </li>
          </n-scrollbar>
        </ul>
      </n-card>
    </n-gi>
    <n-gi :span="2">
      <n-card hoverable>
        <VChart class="map" :option="factoryMapOption" autoresize />
      </n-card>
    </n-gi>
    <n-gi>
      <n-card hoverable>
        <VChart class="map" :option="factoryBarOption" autoresize />
      </n-card>
    </n-gi>
    <n-gi>
      <n-card title="最终用户行业分析" hoverable>
        <VChart class="chart" :option="industryOption" autoresize />
      </n-card>
    </n-gi>
    <n-gi>
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
.chart,
.list {
  height: 300px;
}
.map {
  height: 500px;
}
</style>
