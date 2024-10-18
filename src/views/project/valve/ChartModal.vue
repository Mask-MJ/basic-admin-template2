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
  let result = await getValveHistoryChart({
    id: valveId.value,
    type: value.value,
    beginTime: range.value?.[0],
    endTime: range.value?.[1]
  })
  // result.times = ['2021-01-01', '2021-01-02', '2021-01-03', '2021-01-04', '2021-01-05']
  // result.values = [4, 2, null, 4, 15]
  const dictData = options.value.find((item) => item.name === value.value)
  const min =
    Math.min(...result.values, dictData.lowerLimit, dictData.upperLimit) === dictData.lowerLimit
      ? dictData.lowerLimit
      : undefined
  const max =
    Math.max(...result.values, dictData.lowerLimit, dictData.upperLimit) === dictData.upperLimit
      ? dictData.upperLimit
      : undefined
  option.value = {
    xAxis: { type: 'category', data: result.times },
    yAxis: { type: 'value', max, min },
    series: [
      {
        data: result.values,
        type: 'line',
        markLine: {
          data: [
            { name: '下限值', yAxis: dictData.lowerLimit },
            { name: '上限值', yAxis: dictData.upperLimit }
          ]
        }
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
