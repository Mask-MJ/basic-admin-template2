<script setup lang="ts">
import type { FormAction, FormSchema } from '../types'
import type { FormItemGiProps, GridProps } from 'naive-ui'

const { t } = useI18n()
const emits = defineEmits(['action'])
const props = defineProps({
  schemas: { type: Array as PropType<FormSchema[]>, default: () => [] },
  formGrid: { type: Object as PropType<GridProps>, required: true },
  formItem: { type: Object as PropType<FormItemGiProps>, required: true },
  formAction: { type: Object as PropType<FormAction>, required: true }
})
const collapsed = ref(false)
const getResetBtnOptions = computed(() =>
  Object.assign({ label: t('components.form.resetText') }, props.formAction.resetButtonOptions)
)
const getSubmitBtnOptions = computed(() =>
  Object.assign({ label: t('components.form.queryText') }, props.formAction.submitButtonOptions)
)

// 当小于搜索临界值时，不显示收起按钮
const isShowAdvanced = computed(() => {
  const total = props.schemas.reduce(
    (prev, next) => prev + (Number(next.span) || Number(props.formItem.span)),
    0
  )
  return Number(props.formGrid.collapsedRows) * Number(props.formGrid.cols) >=
    total + Number(props.formAction.actionGi.span)
    ? false
    : props.formAction.showAdvancedButton
})
/** 重置 */
const resetAction = () => emits('action', 'reset')
/** 提交 */
const submitAction = () => emits('action', 'submit')
/** 更改收起状态 */
const toggleAdvanced = () => emits('action', 'toggle')

watch(
  () => props,
  () => {
    collapsed.value = props.formGrid.collapsed || false
  },
  { deep: true }
)
</script>

<template>
  <n-space class="w-full" justify="end">
    <n-button
      v-if="formAction.resetButtonOptions.show"
      v-bind="getResetBtnOptions"
      @click="resetAction"
    >
      {{ getResetBtnOptions.label }}
    </n-button>
    <n-button
      v-if="formAction.submitButtonOptions.show"
      v-bind="getSubmitBtnOptions"
      type="primary"
      @click="submitAction"
    >
      {{ getSubmitBtnOptions.label }}
    </n-button>
    <n-button v-if="isShowAdvanced" quaternary @click="toggleAdvanced">
      {{ collapsed ? t('components.form.unfold') : t('components.form.putAway') }}
      <template #icon>
        <i :class="collapsed ? 'i-ant-design:down-outlined' : 'i-ant-design:up-outlined'"> </i>
      </template>
    </n-button>
  </n-space>
</template>

<style scoped></style>
