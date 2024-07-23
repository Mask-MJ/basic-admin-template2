<script setup lang="ts">
import { createDictDataTree, updateDictDataTree, type DictDataTreeInfo } from '@/api/system/dict'
import { useForm } from '@/components/Form'
import { useModalInner } from '@/components/Modal'

import { setSchemas } from './data'

const emits = defineEmits(['success', 'register'])

const [registerModal, { closeModal, setModalProps }] = useModalInner((data: DictDataTreeInfo) => {
  setModalProps({ title: data.id ? '编辑PDF树' : '新增PDF树' })
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
    result.id ? await updateDictDataTree(result) : await createDictDataTree(result)
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

<style lang="" scoped></style>
