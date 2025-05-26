<script setup lang="ts">
import { useModalInner } from '@/components/Modal'

const emits = defineEmits(['success', 'register'])

const [registerModal] = useModalInner()

const handleSubmit = async () => {}
</script>

<template>
  <Modal class="!w-120" @register="registerModal" @positive-click="handleSubmit"> 222 </Modal>
</template>

<style scoped></style>
