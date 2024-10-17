<script setup lang="ts">
import { useModalInner } from '@/components/Modal'
import { getValveHistoryChart } from '@/api/project/valve'
import { getDictDataList } from '@/api/system/dict'
import { use } from 'echarts/core'
import VChart from 'vue-echarts'
import { CanvasRenderer } from 'echarts/renderers'
import { LineChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent
} from 'echarts/components'
use([CanvasRenderer, LineChart, GridComponent, TitleComponent, TooltipComponent, LegendComponent])

const option = ref<{
  xAxis: { type: string; data: string[] }
  yAxis: { type: string }
  series: { data: number[]; type: string }[]
}>({
  xAxis: { type: 'category', data: [] },
  yAxis: { type: 'value' },
  series: [{ data: [], type: 'line' }]
})
const valveId = ref()
const value = ref('')
const range = ref<[number, number]>()
const options = ref<any[]>([])
const [registerModal] = useModalInner(async (data) => {
  const source = data.source || 'hart'
  options.value = (await getDictDataList({ dictTypeValue: source, isChart: true })).rows
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

  option.value = {
    xAxis: { type: 'category', data: result.times },
    yAxis: { type: 'value' },
    series: [{ data: result.values, type: 'line' }]
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
