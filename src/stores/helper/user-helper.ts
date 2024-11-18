import type { MenuInfo } from '@/api/system/menu'
import type { MenuOption } from 'naive-ui'
import { RouterLink } from 'vue-router/auto'

export function transformersMenus(data: MenuInfo[]) {
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
      children:
        Array.isArray(item.children) && item.children.map((item) => item.hidden).includes(false)
          ? transformersMenus(item.children)
          : undefined
    }
    menuOption.push(menu)
  })
  return menuOption
}
