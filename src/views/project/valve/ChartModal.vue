<script setup lang="ts">
import * as echarts from 'echarts'
import { useModalInner } from '@/components/Modal'
import { getValveHistoryList } from '@/api/project/valve'

const historyData = ref()
const ChartRef = ref<HTMLElement>()
const value = ref('1')
const range = ref()
const options = [
  { label: '实际行程', value: '1' },
  { label: '行程偏差', value: '2' },
  { label: '最高温度记录', value: '3' }
]
const [registerModal] = useModalInner(async (data) => {
  historyData.value = await getValveHistoryList({ valveId: data.id })
  const Chart = echarts.init(ChartRef.value)
  Chart.setOption({
    xAxis: {
      type: 'category',
      data: [
        '2022-01-05',
        '2022-02-05',
        '2022-03-05',
        '2022-04-05',
        '2022-05-05',
        '2022-06-05',
        '2022-07-05'
      ]
    },
    yAxis: { type: 'value' },
    series: [
      {
        data: [90, 100, 70, 110, 93, 96, 97],
        type: 'line'
      }
    ]
  })
})
</script>

<template>
  <Modal title="阀门运行数据可视化" class="!w-250" @register="registerModal">
    <n-grid x-gap="12" :cols="4" class="mt-4">
      <n-gi>
        <n-select v-model:value="value" :options="options" />
      </n-gi>
      <n-gi :span="3">
        <n-date-picker v-model:value="range" type="daterange" clearable />
      </n-gi>
    </n-grid>
    <div ref="ChartRef" class="h-100 w-full"></div>
  </Modal>
</template>

<style lang="" scoped></style>
