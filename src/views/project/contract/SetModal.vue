<script setup lang="ts">
import { createContract, updateContract, type ContractInfo } from '@/api/project/contract'
import { useForm } from '@/components/Form'
import { useModalInner } from '@/components/Modal'

import { setSchemas } from './data'

const emits = defineEmits(['success', 'register'])
const [registerForm, { validate, getPathsValue, setPathsValue }] = useForm({
  formItem: {
    labelWidth: 120
  },
  schemas: setSchemas
})

const [registerModal, { closeModal, setModalProps }] = useModalInner(async (data: ContractInfo) => {
  if (data.id) {
    setModalProps({ title: '编辑装置' })
    await setPathsValue(data)
  }
})

const handleSubmit = async () => {
  try {
    await validate()
    const result = getPathsValue()
    result.id ? await updateContract(result) : await createContract(result)
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
