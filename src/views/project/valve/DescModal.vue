<script setup lang="ts">
import type { ValveRunInfo } from '@/api/project/valve'
import { useModalInner } from '@/components/Modal'
const valveRunDataConfig = ref<ValveRunInfo[]>()
const valveRunData = ref<ValveRunInfo[]>()
// 诊断数据
const valueDiagnostic = ref<ValveRunInfo[]>()
const [registerModal] = useModalInner(async (data: ValveRunInfo[]) => {
  valveRunDataConfig.value = data.filter((item) => item.type === '0')
  valveRunData.value = data.filter((item) => item.type === '1')
  valueDiagnostic.value = data.filter((item) => item.type === '2')
})
</script>

<template>
  <Modal title="阀门运行数据详情" class="!w-300" @register="registerModal">
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
