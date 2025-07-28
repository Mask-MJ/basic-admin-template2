<script setup lang="ts">
import { useModalInner } from '@/components/Modal'
import BaiduMap from './Map.vue'

const emits = defineEmits(['success', 'register'])
const factoryLocation = ref({
  longitude: 116.404,
  latitude: 39.915,
  code: '',
  address: ''
})
const [registerModal, { closeModal }] = useModalInner((data) => {
  data.latitude && (factoryLocation.value.latitude = data.latitude)
  data.longitude && (factoryLocation.value.longitude = data.longitude)
})

const handleSubmit = async () => {
  emits('success', factoryLocation)
  closeModal()
}

const submit = (location: {
  longitude: number
  latitude: number
  code: string
  address: string
}) => {
  factoryLocation.value = location
}
</script>

<template>
  <Modal
    class="!h-180 !w-300"
    :height="700"
    @register="registerModal"
    @positive-click="handleSubmit"
  >
    <BaiduMap :location="factoryLocation" @submit="submit" />
  </Modal>
</template>

<style scoped></style>
