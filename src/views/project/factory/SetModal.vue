<script setup lang="ts">
import { createFactory, updateFactory, type FactoryInfo } from '@/api/project/factory'
import { useForm } from '@/components/Form'
import { useModalInner } from '@/components/Modal'

import { setSchemas } from './data'
import { getAreaNameByCode } from './areaData'

const emits = defineEmits(['success', 'register'])
const [registerForm, { validate, getPathsValue, setPathsValue }] = useForm({
  labelWidth: 100,
  schemas: setSchemas
})

const [registerModal, { closeModal, setModalProps }] = useModalInner(async (data: FactoryInfo) => {
  setModalProps({ title: data.id ? '编辑最终用户' : '新增最终用户' })
  if (data.id) {
    await setPathsValue(data)
  }
})

const handleSubmit = async () => {
  try {
    await validate()
    const result = getPathsValue()
    // 根据编号的前两位分割出省市区
    const { province, city, county } = getAreaNameByCode(result.code)
    const params = {
      ...result,
      province,
      city,
      county
    }
    result.id ? await updateFactory(params) : await createFactory(params)
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
