<script setup lang="ts">
import { subscribeThemeStore } from '@/settings/theme'
import { getAppEnvConfig } from '@/utils'
import { dateZhCN, zhCN } from 'naive-ui'

const { VITE_GLOB_APP_TITLE } = getAppEnvConfig()
useHead({ title: VITE_GLOB_APP_TITLE })

const theme = useThemeStore()
subscribeThemeStore()
</script>

<template>
  <n-config-provider
    :theme="theme.naiveTheme"
    :theme-overrides="theme.naiveThemeOverrides"
    :locale="zhCN"
    :date-locale="dateZhCN"
    preflight-style-disabled
    class="h-full"
  >
    <naive-provider>
      <router-view />
    </naive-provider>
  </n-config-provider>
</template>
