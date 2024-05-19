<script setup lang="ts" name="ReloadButton">
const app = useAppStore()
const loading = ref(false)

function handleRefresh() {
  loading.value = true
  app.reloadPage()
  setTimeout(() => {
    loading.value = false
  }, 1000)
}
</script>

<template>
  <hover-container
    class="w-64px h-full"
    tooltip-content="重新加载"
    placement="bottom-end"
    @click="handleRefresh"
  >
    <i class="text-16px i-ant-design:reload-outlined" :class="{ 'animate-spin': loading }" />
  </hover-container>
</template>

<style scoped></style>
