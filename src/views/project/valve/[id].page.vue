<script setup lang="ts">
import VChart from 'vue-echarts'
import Page from './index.page.vue'
import { getDictDataCharts, type DictDataInfo } from '@/api/system/dict'
import { getValveDetail, getValveHistoryChart } from '@/api/project/valve'
import { use } from 'echarts/core'
import dayjs from 'dayjs'
import { LineChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
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

const router = useRouter()
const valveId = computed(() => {
  return Number((router.currentRoute.value.params as { id: string }).id)
})
const dictDatas = ref<DictDataInfo[]>([])
const valveDetail = ref()
const result = ref<any[]>([])
const getOption = (data: DictDataInfo) => {
  return result.value.filter((item) => item._id === data.id)[0]
}

watch(
  () => valveId.value,
  async (valveId) => {
    if (!valveId) return
    valveDetail.value = await getValveDetail(valveId)
    dictDatas.value = await getDictDataCharts({ dictTypeValue: valveDetail.value.source || 'hart' })
    const beginTime = dayjs().subtract(1, 'year').valueOf()
    const endTime = dayjs().valueOf()
    result.value = await Promise.all(
      dictDatas.value.map(async (item) => {
        try {
          const result = await getValveHistoryChart({
            valveId: valveId,
            keywordId: item.id,
            beginTime,
            endTime
          })
          const max = Math.max(...result.dataLine, item.upperLimit)
          const min = Math.min(...result.dataLine, item.lowerLimit)
          const lowerLimit = Number(item.lowerLimit)
          const upperLimit = Number(item.upperLimit)
          return {
            _id: item.id,
            legend: { data: ['数据线', '预测线', '辅助线', '标准线'] },
            tooltip: { trigger: 'axis' },
            xAxis: { type: 'category', data: result.times },
            yAxis: { type: 'value', max, min },
            series: [
              { type: 'line', name: '数据线', data: result.dataLine },
              { type: 'line', name: '预测线', data: result.predictionLine.linearRegression },
              { type: 'line', name: '辅助线', data: result.auxiliaryLine.averageValue },
              {
                type: 'line',
                name: '标准线',
                markLine: {
                  lineStyle: { color: 'red' },
                  data: [
                    { name: '下限值', yAxis: lowerLimit },
                    { name: '上限值', yAxis: upperLimit }
                  ]
                }
              }
            ]
          }
        } catch (error) {
          window.$message.error(item.name + '获取数据失败')
          return {}
        }
      })
    )
  },
  { immediate: true }
)

// onMounted(async () => {
//   if (!valveId.value) return
//   valveDetail.value = await getValveDetail(valveId.value)
//   dictDatas.value = await getDictDataCharts({ dictTypeValue: valveDetail.value.source || 'hart' })
//   const beginTime = dayjs().subtract(1, 'year').valueOf()
//   const endTime = dayjs().valueOf()
//   result.value = await Promise.all(
//     dictDatas.value.map(async (item) => {
//       try {
//         const result = await getValveHistoryChart({
//           valveId: valveId.value,
//           keywordId: item.id,
//           beginTime,
//           endTime
//         })
//         // const result = {
//         //   keywordName: '行程',
//         //   keywordId: 1,
//         //   valveId: valveId,
//         //   dataLine: [46.83, 17.66, 41.32, 98.17, 24.37, 13.45, 8.59, 18.61, 11.29, 30.1],
//         //   auxiliaryLine: {
//         //     averageValue: [36.83, 27.66, 31.32, 78.17, 34.37, 13.45, 8.59, 18.61, 11.29, 30.1]
//         //   },
//         //   predictionLine: {
//         //     linearRegression: [22.83, 44.66, 55.32, 66.17, 77.37, 13.45, 8.59, 18.61, 11.29, 30.1]
//         //   },
//         //   times: [
//         //     '2024-01-01',
//         //     '2024-01-02',
//         //     '2024-01-03',
//         //     '2024-01-04',
//         //     '2024-01-05',
//         //     '2024-01-06',
//         //     '2024-01-07',
//         //     '2024-01-08',
//         //     '2024-01-09',
//         //     '2024-01-10'
//         //   ]
//         // }
//         const max = Math.max(...result.dataLine, item.upperLimit)
//         const min = Math.min(...result.dataLine, item.lowerLimit)
//         const lowerLimit = Number(item.lowerLimit)
//         const upperLimit = Number(item.upperLimit)
//         return {
//           _id: item.id,
//           legend: { data: ['数据线', '预测线', '辅助线', '标准线'] },
//           tooltip: { trigger: 'axis' },
//           xAxis: { type: 'category', data: result.times },
//           yAxis: { type: 'value', max, min },
//           series: [
//             { type: 'line', name: '数据线', data: result.dataLine },
//             { type: 'line', name: '预测线', data: result.predictionLine.linearRegression },
//             { type: 'line', name: '辅助线', data: result.auxiliaryLine.averageValue },
//             {
//               type: 'line',
//               name: '标准线',
//               markLine: {
//                 lineStyle: { color: 'red' },
//                 data: [
//                   { name: '下限值', yAxis: lowerLimit },
//                   { name: '上限值', yAxis: upperLimit }
//                 ]
//               }
//             }
//           ]
//         }
//       } catch (error) {
//         window.$message.error(item.name + '获取数据失败')
//         return {}
//       }
//     })
//   )
// })
</script>

<template>
  <div class="h-full">
    <div v-if="valveId">
      <n-card title="阀门详情">
        <ul>
          <li>所属最终用户：{{ valveDetail?.factory?.name || '' }}</li>
          <li>所属装置：{{ valveDetail?.device?.name || '' }}</li>
          <li>阀门位号：{{ valveDetail?.tag || '' }}</li>
        </ul>
      </n-card>
      <n-grid x-gap="12" :cols="3" class="mt-4">
        <n-gi v-for="item in dictDatas" :key="item.id">
          <n-card :title="item.name">
            <VChart class="chart" :option="getOption(item)" autoresize />
          </n-card>
        </n-gi>
      </n-grid>
    </div>
    <Page v-else />
  </div>
</template>

<style scoped>
.chart {
  height: 300px;
}
</style>
