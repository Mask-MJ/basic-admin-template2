<script setup lang="ts">
import {
  createFactory,
  getFactoryList,
  updateFactory,
  type FactoryInfo
} from '@/api/project/factory'
import { useForm } from '@/components/Form'
import { useModal, useModalInner } from '@/components/Modal'

import { setSchemas } from './data'
import { getAreaNameByCode } from './areaData'
import MapModal from './MapModal.vue'

const emits = defineEmits(['success', 'register'])
const [registerMapModal, { openModal }] = useModal()

const [registerForm, { validate, getPathsValue, setPathsValue, updateSchema }] = useForm({
  labelWidth: 100,
  schemas: setSchemas
})

const [registerModal, { closeModal, setModalProps }] = useModalInner(async (data: FactoryInfo) => {
  setModalProps({ title: data.id ? '编辑最终用户' : '新增最终用户' })
  const factoryList = await getFactoryList({ filterId: data.id })
  await updateSchema({
    path: 'parentId',
    componentProps: {
      options: factoryList as any
    }
  })
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
    <Form @register="registerForm">
      <template #location>
        <NButton @click="openModal(true)">
          <span>选择坐标</span>
        </NButton>
      </template>
    </Form>
    <MapModal @register="registerMapModal" />
  </Modal>
</template>

<style scoped></style>
