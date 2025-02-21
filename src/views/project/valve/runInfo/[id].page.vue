<script setup lang="ts">
import { getValveRunInfo, getValveDetail, type ValveRunInfo } from '@/api/project/valve'
import { getDictDataList, getDictDataTreeListAll, getDictTypeList } from '@/api/system/dict'
import { runInfo } from '../mock.data'
import { cloneDeep, flattenDepth, groupBy } from 'lodash-es'
import dayjs from 'dayjs'

const router = useRouter()
const language = ref('zh')
const valveRunDataConfig = ref<ValveRunInfo[]>()
const valveRunData = ref<ValveRunInfo[]>()
const dictData = ref<any[]>([])
const time = ref('')
const dictDataTreeList = ref<any[]>([])
const valveDetail = ref<any>({})
const runInfoData = ref<ValveRunInfo[]>([])

// 诊断数据
const valueDiagnostic = ref<ValveRunInfo[]>()

const transformData = (runInfoData: ValveRunInfo[]) => {
  const data = cloneDeep(runInfoData)
  const repeatArray = flattenDepth(
    Object.values(groupBy(data, (i: any) => i.name)).filter((value) => value.length > 1),
    1
  )
  data.forEach((item) => {
    if (language.value === 'zh') {
      if (repeatArray.filter((i) => i.name === item.name).length) {
        // 重复的数据,加上数据来源
        const source = dictDataTreeList.value.find((i) => i.id === item.treeId)?.value
        item.name = `${item.name}(${source})`
      }
    } else {
      item.name = dictData.value.find((i) => i.name === item.name)?.value || item.name
      if (repeatArray.filter((i) => i.name === item.name).length) {
        // 重复的数据,加上数据来源
        const source = dictDataTreeList.value.find((i) => i.id === item.treeId)?.value
        item.name = `${item.name}(${source})`
      }
    }
  })
  valveRunDataConfig.value = data.filter((item) => item.type === '0')
  valveRunData.value = data.filter((item) => item.type === '1')
  valueDiagnostic.value = data.filter((item) => item.type === '2')
}

const changeLanguage = (value: string) => {
  language.value = value
  transformData(runInfoData.value)
}

watch(
  () => (router.currentRoute.value.params as { id: string }).id,
  async (val) => {
    valveDetail.value = await getValveDetail(Number(val))

    const result = await getValveRunInfo(Number(val))
    time.value = dayjs(result[0]?.time).format('YYYY-MM-DD') || ''
    runInfoData.value = result
    runInfoData.value = runInfo as any[]
    // 对照关键字表把数据转换为对应的中英文
    const dictType = (await getDictTypeList({ name: 'HART', pageSize: 1000 })).rows
    const dictTypeId = dictType[0].id
    dictData.value = (await getDictDataList({ dictTypeId, pageSize: 1000 })).rows
    dictDataTreeList.value = await getDictDataTreeListAll()
    transformData(runInfoData.value)
  },
  { immediate: true }
)
</script>

<template>
  <div class="flex">
    <n-card class="mr-2 w-1/4" title="阀门运行数据详情">
      <div>更新时间：{{ time }}</div>
      <div>最终用户：{{ valveDetail.factory?.name }}</div>
      <div>装置：{{ valveDetail.unit }}</div>
      <div>位号：{{ valveDetail.tag }}</div>
    </n-card>
    <n-card>
      <n-radio-group v-model:value="language" name="radiogroup" @update:value="changeLanguage">
        <n-radio-button value="zh">中文</n-radio-button>
        <n-radio-button value="en">English</n-radio-button>
      </n-radio-group>
      <n-descriptions
        title="阀门设置参数"
        label-placement="left"
        :column="3"
        bordered
        label-style="width: 120px"
      >
        <n-descriptions-item v-for="item in valveRunDataConfig" :key="item.name" :label="item.name">
          {{ item.value }} {{ item.unit ? `${item.unit}` : '' }}
        </n-descriptions-item>
      </n-descriptions>
      <n-descriptions title="阀门运行数据" label-placement="left" :column="3" bordered>
        <n-descriptions-item v-for="item in valveRunData" :key="item.name" :label="item.name">
          {{ item.value }} {{ item.unit ? `${item.unit}` : '' }}
        </n-descriptions-item>
      </n-descriptions>
      <n-descriptions title="诊断数据" label-placement="left" :column="1" bordered>
        <n-descriptions-item v-for="item in valueDiagnostic" :key="item.name" :label="item.name">
          {{ item.value }} {{ item.unit ? `${item.unit}` : '' }}
        </n-descriptions-item>
      </n-descriptions>
    </n-card>
  </div>
</template>

<style lang="" scoped></style>
