<script setup lang="ts">
import { useModalInner } from '@/components/Modal'
import { getValveHistoryChart } from '@/api/project/valve'
import { getDictDataList } from '@/api/system/dict'
import { useEcharts } from '@/utils/chart/use-echarts'
import EchartsUI from '@/utils/chart/echarts-ui.vue'

const chartData = ref()
const ChartRef = ref<HTMLElement>()
const { renderEcharts } = useEcharts(ChartRef)
const valveId = ref()
const value = ref('')
const range = ref<[number, number]>()
const options = ref<any[]>([])
const [registerModal] = useModalInner(async (data) => {
  options.value = (await getDictDataList({ dictTypeValue: 'chart' })).rows
  valveId.value = data.id
  value.value = options.value[0].name
  change()
})
const change = async () => {
  chartData.value = await getValveHistoryChart({
    id: valveId.value,
    type: value.value,
    beginTime: range.value?.[0],
    endTime: range.value?.[1]
  })
  renderEcharts({
    xAxis: { type: 'category', data: chartData.value.times },
    yAxis: { type: 'value' },
    series: [{ data: chartData.value.values, type: 'line' }]
  })
}

watch([range, value], () => {
  change()
})
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
    <EchartsUI ref="ChartRef" />
  </Modal>
</template>
