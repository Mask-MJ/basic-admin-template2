<script setup lang="ts">
import type { ValveRunInfo } from '@/api/project/valve'
import { useModalInner } from '@/components/Modal'
const valveRunData = ref<ValveRunInfo[]>()
const [registerModal] = useModalInner(async (data: ValveRunInfo[]) => {
  valveRunData.value = data
})
</script>

<template>
  <Modal title="阀门运行数据详情" class="!w-200" @register="registerModal">
    <n-descriptions label-placement="left" bordered :column="2">
      <n-descriptions-item v-for="item in valveRunData" :key="item.name" :label="item.name">
        {{ item.value }} {{ item.unit ? `${item.unit}` : '' }}
      </n-descriptions-item>
    </n-descriptions>
  </Modal>
</template>

<style lang="" scoped></style>
