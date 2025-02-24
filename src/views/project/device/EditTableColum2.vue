<script setup lang="ts">
import { type FactoryInfo } from '@/api/project/factory'
import { updateDevice } from '@/api/project/device'
const props = defineProps<{
  id: number
  value: string | number
  onUpdateValue: Function
  data: FactoryInfo[]
}>()
const isEdit = ref(false)
const options = computed(() => {
  return props.data as any[]
})
const defaultVal = computed(() => {
  return options.value.find((item) => item.name === props.value)?.id
})
function handleOnClick() {
  isEdit.value = true
}
async function handleChange(e: any) {
  await updateDevice({ id: props.id, factoryId: e })
  const name = options.value.find((item) => item.id === e)?.name
  props.onUpdateValue(name)
  isEdit.value = false
}
</script>

<template>
  <div style="min-height: 22px" @click="handleOnClick">
    <n-tree-select
      v-if="isEdit"
      :options="options"
      :default-value="defaultVal"
      @update:value="handleChange"
      key-field="id"
      label-field="name"
    />
    <span v-else>{{ props.value }}</span>
  </div>
</template>

<style lang="" scoped></style>
