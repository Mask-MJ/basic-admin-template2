<script setup lang="ts">
import { createValve, updateValve, getValveDetail } from '@/api/project/valve'
import { useForm } from '@/components/Form'

import { setSchemas } from '../data'
import { getDeviceDetail } from '@/api/project/device'
import dayjs from 'dayjs'

const router = useRouter()
const formType = computed(
  () => (router.currentRoute.value.params as { id: string }).id?.split('-')[0]
)
const typeId = computed(() => {
  return (router.currentRoute.value.params as { id: string }).id?.split('-')[1]
})
const valveDetail = ref<any>({})

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
  formItem: {
    labelWidth: 120
  },
  schemas: getSchemas.value
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
    router.push(`/project/valve`)
  } catch (error) {
    console.warn(error)
  }
}

watch(
  () => (router.currentRoute.value.params as { id: string }).id,
  async (val) => {
    if (!val || !Number(val)) return
    const result = await getValveDetail(Number(val))
    result.since = result.since ? dayjs(result.since).valueOf() : null
    valveDetail.value = result
    setPathsValue(result)
  },
  { immediate: true }
)
</script>

<template>
  <div class="flex">
    <n-card class="mr-2 w-1/4" title="编辑阀门">
      <div>最终用户：{{ valveDetail.factory?.name }}</div>
      <div>装置：{{ valveDetail.unit }}</div>
      <div>位号：{{ valveDetail.tag }}</div>
    </n-card>
    <n-card>
      <n-scrollbar style="max-height: 700px">
        <Form @register="registerForm" />
      </n-scrollbar>
      <template #footer>
        <n-flex justify="end">
          <n-button @click="() => router.push(`/project/valve`)">取消</n-button>
          <n-button type="primary" @click="handleSubmit">保存</n-button>
        </n-flex>
      </template>
    </n-card>
  </div>
</template>

<style scoped></style>
