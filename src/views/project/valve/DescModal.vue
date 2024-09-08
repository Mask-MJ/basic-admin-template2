<script setup lang="ts">
import type { ValveRunInfo } from '@/api/project/valve'
import { getDictDataList, getDictDataTreeListAll, getDictTypeList } from '@/api/system/dict'
import { useModalInner } from '@/components/Modal'
// import { runInfo } from './mock.data'
import { cloneDeep, flattenDepth, groupBy } from 'lodash-es'
import dayjs from 'dayjs'

const language = ref('zh')
const valveRunDataConfig = ref<ValveRunInfo[]>()
const valveRunData = ref<ValveRunInfo[]>()
const dictData = ref<any[]>([])
const dictDataTreeList = ref<any[]>([])

const runInfoData = ref<ValveRunInfo[]>([])

// 诊断数据
const valueDiagnostic = ref<ValveRunInfo[]>()
const [registerModal, { setModalProps }] = useModalInner(async (data: ValveRunInfo[]) => {
  runInfoData.value = data
  const time = dayjs(data[0].time).format('YYYY-MM-DD') || ''
  setModalProps({ title: `阀门运行数据详情 ${time}` })
  // runInfoData.value = runInfo as any[]
  // 对照关键字表把数据转换为对应的中英文
  const dictType = (await getDictTypeList({ name: 'hart', pageSize: 1000 })).rows
  const dictTypeId = dictType[0].id
  dictData.value = (await getDictDataList({ dictTypeId, pageSize: 1000 })).rows
  dictDataTreeList.value = await getDictDataTreeListAll()
  transformData(runInfoData.value)
})

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
</script>

<template>
  <Modal title="阀门运行数据详情" class="!w-300" @register="registerModal">
    <n-radio-group v-model:value="language" name="radiogroup" @update:value="changeLanguage">
      <n-radio-button value="zh">中文</n-radio-button>
      <n-radio-button value="en">English</n-radio-button>
    </n-radio-group>
    <n-descriptions title="阀门设置参数" label-placement="left" :column="4">
      <n-descriptions-item v-for="item in valveRunDataConfig" :key="item.name" :label="item.name">
        {{ item.value }} {{ item.unit ? `${item.unit}` : '' }}
      </n-descriptions-item>
    </n-descriptions>
    <n-descriptions title="阀门运行数据" label-placement="left" :column="4">
      <n-descriptions-item v-for="item in valveRunData" :key="item.name" :label="item.name">
        {{ item.value }} {{ item.unit ? `${item.unit}` : '' }}
      </n-descriptions-item>
    </n-descriptions>
    <n-descriptions title="诊断数据" label-placement="left" :column="1">
      <n-descriptions-item v-for="item in valueDiagnostic" :key="item.name" :label="item.name">
        {{ item.value }} {{ item.unit ? `${item.unit}` : '' }}
      </n-descriptions-item>
    </n-descriptions>
  </Modal>
</template>

<style lang="" scoped></style>
