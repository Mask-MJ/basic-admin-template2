<script setup lang="ts">
import {
  createAnalysisTask,
  updateAnalysisTask,
  type AnalysisTaskInfo
} from '@/api/project/analysisTask'
import { useForm } from '@/components/Form'
import { useModalInner } from '@/components/Modal'

import { setSchemas } from './data'

const emits = defineEmits(['success', 'register'])
const router = useRouter()
const factoryId = computed(() => (router.currentRoute.value.params as { id: string }).id)
const getSchemas = computed(() =>
  factoryId.value ? setSchemas.filter((item) => item.path !== 'factoryId') : setSchemas
)
const [registerForm, { validate, getPathsValue, setPathsValue }] = useForm({
  formItem: { labelWidth: 120 },
  schemas: getSchemas.value
})

const [registerModal, { closeModal, setModalProps }] = useModalInner(
  async (data: AnalysisTaskInfo) => {
    setModalProps({ title: data.id ? '编辑任务' : '新增任务' })
    if (data.id) {
      await setPathsValue(data)
    }
  }
)

const handleSubmit = async () => {
  try {
    await validate()
    const result = getPathsValue()
    factoryId.value && (result.factoryId = factoryId.value)
    result.id ? await updateAnalysisTask(result) : await createAnalysisTask(result)
    emits('success')
    closeModal()
  } catch (error) {
    console.warn(error)
  }
}
</script>

<template>
  <Modal class="!w-120" @register="registerModal" @positive-click="handleSubmit">
    <Form @register="registerForm" />
  </Modal>
</template>

<style scoped></style>
