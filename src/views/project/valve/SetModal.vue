<script setup lang="ts">
import { createValve, updateValve, type ValveInfo } from '@/api/project/valve'
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
  labelWidth: 100,
  schemas: getSchemas.value
})

const [registerModal, { closeModal, setModalProps }] = useModalInner(async (data: ValveInfo) => {
  if (data.id) {
    setModalProps({ title: '编辑阀门' })
    await setPathsValue(data)
  }
})

const handleSubmit = async () => {
  try {
    await validate()
    const result = getPathsValue()
    factoryId.value && (result.factoryId = factoryId.value)
    result.id ? await updateValve(result) : await createValve(result)
    emits('success')
    closeModal()
  } catch (error) {
    console.warn(error)
  }
}
</script>

<template>
  <Modal title="新增阀门" class="!w-250" @register="registerModal" @positive-click="handleSubmit">
    <Form @register="registerForm" />
  </Modal>
</template>

<style scoped></style>
