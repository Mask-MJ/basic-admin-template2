<script setup lang="ts">
import { useModalInner } from '@/components/Modal'
const valveRunData = ref<any>({})
const [registerModal] = useModalInner(async (data) => {
  valveRunData.value = data
})
</script>

<template>
  <Modal title="阀门运行数据详情" class="!w-200" @register="registerModal">
    <n-descriptions
      label-placement="left"
      :bordered="true"
      :column="2"
      :title="valveRunData.tag"
      class="mt-4"
    >
      <n-descriptions-item v-for="item in valveRunData.data" :key="item.name" :label="item.name">
        {{ item.value }} {{ item.unit ? `${item.unit}` : '' }}
      </n-descriptions-item>
    </n-descriptions>
  </Modal>
</template>

<style lang="" scoped></style>
