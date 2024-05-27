<script setup lang="ts">
import { createDevice, updateDevice, type DeviceInfo } from '@/api/project/device'
import { useForm } from '@/components/Form'
import { useModalInner } from '@/components/Modal'

import { setSchemas } from './data'

const emits = defineEmits(['success', 'register'])
const [registerForm, { validate, getPathsValue, setPathsValue }] = useForm({
  labelWidth: 100,
  schemas: setSchemas
})

const [registerModal, { closeModal, setModalProps }] = useModalInner(async (data: DeviceInfo) => {
  if (data.id) {
    setModalProps({ title: '编辑装置' })
    await setPathsValue(data)
  }
})

const handleSubmit = async () => {
  try {
    await validate()
    const result = getPathsValue()
    result.id ? await updateDevice(result) : await createDevice(result)
    emits('success')
    closeModal()
  } catch (error) {
    console.warn(error)
  }
}
</script>

<template>
  <Modal title="新增装置" class="!w-120" @register="registerModal" @positive-click="handleSubmit">
    <Form @register="registerForm" />
  </Modal>
</template>

<style scoped></style>
