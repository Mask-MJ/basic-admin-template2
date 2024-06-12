<script setup lang="ts" name="ReloadButton">
import useLoading from './useLoading'

const app = useAppStore()
const { loading, startLoading, endLoading } = useLoading()

function handleRefresh() {
  startLoading()
  app.reloadPage()
  setTimeout(() => {
    endLoading()
  }, 1000)
}
</script>

<template>
  <hover-container
    class="h-full w-64px"
    tooltip-content="重新加载"
    placement="bottom-end"
    @click="handleRefresh"
  >
    <i class="i-ant-design:reload-outlined text-16px" :class="{ 'animate-spin': loading }" />
  </hover-container>
</template>

<style scoped></style>
