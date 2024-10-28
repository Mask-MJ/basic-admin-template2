<script setup lang="ts">
import { useModalInner } from '@/components/Modal'
import { getValveHistoryChart } from '@/api/project/valve'
import { getDictDataCharts } from '@/api/system/dict'
import { use } from 'echarts/core'
import VChart from 'vue-echarts'
import { CanvasRenderer } from 'echarts/renderers'
import { LineChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  MarkLineComponent
} from 'echarts/components'
use([
  CanvasRenderer,
  LineChart,
  GridComponent,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  MarkLineComponent
])

const option = ref<any>({
  xAxis: { type: 'category', data: [] },
  yAxis: { type: 'value' },
  series: [{ data: [], type: 'line', markLine: { data: [] } }]
})
const valveId = ref()
const value = ref('')
const range = ref<[number, number]>()
const options = ref<any[]>([])
const [registerModal] = useModalInner(async (data) => {
  const source = data.source || 'hart'
  options.value = await getDictDataCharts({ dictTypeValue: source })
  valveId.value = data.id
  value.value = options.value[0].name
})
const change = async () => {
  const dictData = options.value.find((item) => item.name === value.value)
  console.log(value.value)
  // let result = await getValveHistoryChart({
  //   // valveId: valveId.value,
  //   // keywordId: dictData.id,
  //   valveId: 1,
  //   keywordId: 1,
  //   beginTime: range.value?.[0],
  //   endTime: range.value?.[1]
  // })
  let result = {
    dataLine: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    predictionLine: {
      linearRegression: [11, 12, 13, 14, 15, 6, 7, 8, 19, 10]
    },
    auxiliaryLine: {
      averageValue: [12, 12, 23, 4, 15, 6, 7, 18, 9, 10]
    },
    times: [
      '2021-01-01',
      '2021-01-02',
      '2021-01-03',
      '2021-01-04',
      '2021-01-05',
      '2021-01-06',
      '2021-01-07',
      '2021-01-08',
      '2021-01-09',
      '2021-01-10'
    ]
  }
  const lowerLimit = Number(dictData.lowerLimit)
  const upperLimit = Number(dictData.upperLimit)
  option.value = {
    legend: { data: ['数据线', '预测线', '辅助线'] },
    tooltip: { trigger: 'axis' },
    xAxis: { type: 'category', data: result.dataLine[1] },
    yAxis: { type: 'value' },
    series: [
      {
        type: 'line',
        name: '数据线',
        data: result.dataLine[0],
        markLine: {
          data: [
            { name: '下限值', yAxis: lowerLimit },
            { name: '上限值', yAxis: upperLimit }
          ]
        }
      },
      {
        type: 'line',
        name: '预测线',
        data: result.predictionLine.linearRegression[0]
      },
      {
        type: 'line',
        name: '辅助线',
        data: result.auxiliaryLine.averageValue[0]
      }
    ]
  }
}
watch(
  [range, value, options],
  () => {
    change()
  },
  { deep: true }
)
</script>

<template>
  <Modal title="阀门运行数据可视化" class="!w-250" @register="registerModal">
    <n-grid x-gap="12" :cols="4" class="mt-4">
      <n-gi>
        <n-select v-model:value="value" label-field="name" :options="options" />
      </n-gi>
      <n-gi :span="3">
        <n-date-picker v-model:value="range" type="daterange" clearable />
      </n-gi>
    </n-grid>
    <VChart class="chart" :option="option" autoresize />
  </Modal>
</template>

<style scoped>
.chart {
  height: 300px;
}
</style>
