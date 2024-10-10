<script setup lang="ts">
import { createDictData, updateDictData, type DictDataInfo } from '@/api/system/dict'
import { useForm } from '@/components/Form'
import { useModalInner } from '@/components/Modal'

import { setSchemas } from './data'

const route = useRoute() as any
const emits = defineEmits(['success', 'register'])
const dictTypeId = computed(() => Number(route.params.id))

const [registerModal, { closeModal, setModalProps }] = useModalInner((data: DictDataInfo) => {
  setModalProps({ title: data.id ? '编辑关键字数据' : '新增关键字数据' })
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
    const params = { dictTypeId: dictTypeId.value, ...result }
    result.id ? await updateDictData(params) : await createDictData(params)
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
