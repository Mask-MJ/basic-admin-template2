<script setup lang="ts">
import { createValve, updateValve, type ValveInfo } from '@/api/project/valve'
import { useForm } from '@/components/Form'
import { useModalInner } from '@/components/Modal'

import { setSchemas } from './data'
import { getDeviceDetail } from '@/api/project/device'
import dayjs from 'dayjs'

const emits = defineEmits(['success', 'register'])
const router = useRouter()
const formType = computed(
  () => (router.currentRoute.value.params as { id: string }).id?.split('-')[0]
)
const typeId = computed(() => {
  return (router.currentRoute.value.params as { id: string }).id?.split('-')[1]
})
const getSchemas = computed(() => {
  // 如果从 factoryId 进入
  if (formType.value === 'factoryId') {
    return setSchemas.filter((item) => item.path !== 'factoryId')
  } else if (formType.value === 'deviceId') {
    return setSchemas.filter((item) => !['factoryId', 'deviceId'].includes(item.path))
  } else {
    return setSchemas
  }
})
const [registerForm, { validate, getPathsValue, setPathsValue }] = useForm({
  labelWidth: 100,
  schemas: getSchemas.value
})

const [registerModal, { closeModal, setModalProps }] = useModalInner(async (data: ValveInfo) => {
  setModalProps({ title: data.id ? '编辑阀门' : '新增阀门' })
  if (data.id) {
    data.since = dayjs(data.since).valueOf()
    setPathsValue(data)
  }
})

const handleSubmit = async () => {
  try {
    await validate()
    const result = getPathsValue()
    // factoryId.value && (result.factoryId = factoryId.value)
    if (formType.value === 'factoryId') {
      result.factoryId = Number(typeId.value)
    } else if (formType.value === 'deviceId') {
      // 获取装置id对应的最终用户id
      const { factoryId } = await getDeviceDetail(Number(typeId.value))
      result.factoryId = factoryId
      result.deviceId = Number(typeId.value)
    }
    result.id ? await updateValve(result) : await createValve(result)
    emits('success')
    closeModal()
  } catch (error) {
    console.warn(error)
  }
}
</script>

<template>
  <Modal class="!w-250" @register="registerModal" @positive-click="handleSubmit">
    <Form @register="registerForm" />
  </Modal>
</template>

<style scoped></style>
