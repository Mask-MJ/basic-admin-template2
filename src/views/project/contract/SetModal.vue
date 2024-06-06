<script setup lang="ts">
import { createContract, updateContract, type ContractInfo } from '@/api/project/contract'
import { useForm } from '@/components/Form'
import { useModalInner } from '@/components/Modal'
import dayjs from 'dayjs'
import { setSchemas } from './data'

const emits = defineEmits(['success', 'register'])
const router = useRouter()
const factoryId = computed(() => (router.currentRoute.value.params as { id: string }).id)
const getSchemas = computed(() =>
  factoryId.value ? setSchemas.filter((item) => item.path !== 'factoryId') : setSchemas
)
const [registerForm, { validate, getPathsValue, setPathsValue }] = useForm({
  formItem: { labelWidth: 120 },
  schemas: getSchemas.value
})

const [registerModal, { closeModal, setModalProps }] = useModalInner(async (data: ContractInfo) => {
  if (data.id) {
    // 把合同时间转为时间戳
    data.contractTime = dayjs(data.contractTime).valueOf()
    setModalProps({ title: '编辑项目' })
    await setPathsValue(data)
  }
})

const handleSubmit = async () => {
  try {
    await validate()
    const result = getPathsValue()
    factoryId.value && (result.factoryId = factoryId.value)
    result.id ? await updateContract(result) : await createContract(result)
    emits('success')
    closeModal()
  } catch (error) {
    console.warn(error)
  }
}
</script>

<template>
  <Modal title="新增项目" class="!w-120" @register="registerModal" @positive-click="handleSubmit">
    <Form @register="registerForm" />
  </Modal>
</template>

<style scoped></style>
