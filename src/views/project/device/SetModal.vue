<script setup lang="ts">
import { createDevice, updateDevice, type DeviceInfo } from '@/api/project/device'
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

const [registerModal, { closeModal, setModalProps }] = useModalInner(async (data: DeviceInfo) => {
  setModalProps({ title: data.id ? '编辑装置' : '新增装置' })
  if (data.id) {
    await setPathsValue(data)
  }
})

const handleSubmit = async () => {
  try {
    await validate()
    const result = getPathsValue()
    factoryId.value && (result.factoryId = factoryId.value)
    result.id ? await updateDevice(result) : await createDevice(result)
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
