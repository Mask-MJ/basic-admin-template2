<script lang="ts" setup name="UserAvatar">
import type { DropdownOption } from 'naive-ui'

const { t } = useI18n()
const user = useUserStore()
const theme = useThemeStore()
const options: DropdownOption[] = [
  {
    label: () => t('header.userInfo'),
    key: 'user-center',
    icon: () => h('i', { class: 'i-ant-design:user-outlined' })
  },
  {
    type: 'divider',
    key: 'divider'
  },
  {
    label: () => t('header.dropdownItemLoginOut'),
    key: 'logout',
    icon: () => h('i', { class: 'i-ant-design:export-outlined' })
  }
]

type DropdownKey = 'user-center' | 'logout'

function handleDropdown(optionKey: string) {
  const key = optionKey as DropdownKey
  if (key === 'logout') {
    window.$dialog?.info({
      title: t('app.logoutTip'),
      content: t('app.logoutMessage'),
      positiveText: t('components.modal.positiveText'),
      negativeText: t('components.modal.negativeText'),
      onPositiveClick: () => user.logout()
    })
  }
}
</script>

<template>
  <n-dropdown :options="options" @select="handleDropdown">
    <hover-container class="px-12px" :inverted="theme.header.inverted">
      <n-avatar round size="small" :src="user.userInfo.avatar || ''" />
      <span class="pl-8px text-16px font-medium">
        {{ user.userInfo.nickname || user.userInfo.account }}
      </span>
    </hover-container>
  </n-dropdown>
</template>

<style scoped></style>
