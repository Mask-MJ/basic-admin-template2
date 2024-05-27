<script setup lang="ts">
import { createFactory, updateFactory, type FactoryInfo } from '@/api/project/factory'
import { useForm } from '@/components/Form'
import { useModalInner } from '@/components/Modal'

import { setSchemas } from './data'

const emits = defineEmits(['success', 'register'])
const [registerForm, { validate, getPathsValue, setPathsValue }] = useForm({
  labelWidth: 100,
  schemas: setSchemas
})

const [registerModal, { closeModal, setModalProps }] = useModalInner(async (data: FactoryInfo) => {
  if (data.id) {
    setModalProps({ title: '编辑工厂' })
    await setPathsValue(data)
  }
})

const handleSubmit = async () => {
  try {
    await validate()
    const result = getPathsValue()
    result.id ? await updateFactory(result) : await createFactory(result)
    emits('success')
    closeModal()
  } catch (error) {
    console.warn(error)
  }
}
</script>

<template>
  <Modal title="新增工厂" class="!w-120" @register="registerModal" @positive-click="handleSubmit">
    <Form @register="registerForm" />
  </Modal>
</template>

<style scoped></style>
