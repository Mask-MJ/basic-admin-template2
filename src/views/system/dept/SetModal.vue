<script setup lang="ts">
import { createDept, updateDept, type DeptInfo } from '@/api/system/dept'
import { useForm } from '@/components/Form'
import { useModalInner } from '@/components/Modal'

import { setSchemas } from './data'

const emits = defineEmits(['success', 'register'])

const [registerModal, { closeModal, setModalProps }] = useModalInner((data: DeptInfo) => {
  setModalProps({ title: data.id ? '编辑部门' : '新增部门' })
  if (data.id) {
    setPathsValue(data)
  }
})

const [registerForm, { validate, getPathsValue, setPathsValue }] = useForm({
  labelWidth: 100,
  schemas: setSchemas
})

const handleSubmit = async () => {
  try {
    await validate()
    const result = getPathsValue()
    result.id ? await updateDept(result) : await createDept(result)
    emits('success')
    closeModal()
  } catch (error) {
    console.warn(error)
  }
}
</script>

<template>
  <Modal class="!w-100" @register="registerModal" @positive-click="handleSubmit">
    <Form @register="registerForm" />
  </Modal>
</template>

<style scoped></style>
