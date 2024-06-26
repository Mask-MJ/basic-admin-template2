import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    title: string
    icon: string
    hidden: boolean
    link?: string
    parentId: number | null
    sort: number
    affix?: boolean
  }
}
