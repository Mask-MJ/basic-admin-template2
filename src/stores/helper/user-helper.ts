import type { Routes } from '@/api/system/role'
import type { MenuOption } from 'naive-ui'
import { RouterLink } from 'vue-router/auto'

export function transformersMenus(data: Routes[]) {
  const menuOption: MenuOption[] = []
  data.forEach((item) => {
    if (item.hidden) return
    const label = item.name as string
    const menu: MenuOption = {
      key: item.path,
      label: () =>
        item.parentId === 0
          ? h('span', () => label)
          : h(RouterLink, { to: item.path }, { default: () => label }),
      icon: () => h('i', { class: item.icon }),
      children: item.children ? transformersMenus(item.children) : undefined
    }
    menuOption.push(menu)
  })
  return menuOption
}
