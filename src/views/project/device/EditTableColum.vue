<script setup lang="ts">
import { updateDevice } from '@/api/project/device'

const props = defineProps<{
  id: number
  value: string | number
  onUpdateValue: Function
}>()
const isEdit = ref(false)
const inputRef = ref<any>(null)
const inputValue = ref(props.value)

function handleOnClick() {
  isEdit.value = true
  nextTick(() => {
    inputRef.value.Focus()
  })
}
async function handleChange() {
  await updateDevice({ id: props.id, name: inputValue.value as string })
  props.onUpdateValue(inputValue.value)
  isEdit.value = false
}
</script>

<template>
  <div style="min-height: 22px" @click="handleOnClick">
    <NInput
      v-if="isEdit"
      ref="inputRef"
      v-model="inputValue"
      @update:value="inputValue = $event"
      @change="handleChange"
      @blur="handleChange"
    />
    <span v-else>{{ props.value }}</span>
  </div>
</template>

<style lang="" scoped></style>
