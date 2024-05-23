import { defHttp } from '@/utils'

export interface CreateMenu {
  name: string
  path: string
  icon: string
  hidden?: boolean
  status: number
  sort?: number
  remark?: string
  parentId?: number
}

export interface MenuInfo {
  id: number
  name: string
  path: string
  icon: string
  hidden: boolean
  status: boolean
  sort: number
  parentId: number | null
  remark: string
  createBy: string
  updateBy: string
  createdAt: Date
  updatedAt: Date
  children?: MenuInfo[]
}

export interface SearchParams {
  name: string | null
  beginTime: number
  endTime: number
}

enum Api {
  Menu = 'system/menu'
}

// 获取菜单列表
export const getMenuList = (params?: Partial<SearchParams>) =>
  defHttp.get<MenuInfo[]>({ url: Api.Menu, params })
// 创建菜单
export const createMenu = (params: CreateMenu) => defHttp.post({ url: Api.Menu, params })
// 获取单个菜单信息
export const getMenuDetail = (id: number) => defHttp.get<MenuInfo>({ url: `${Api.Menu}/${id}` })
// 更新菜单
export const updateMenu = (params: Partial<MenuInfo>) =>
  defHttp.patch({ url: `${Api.Menu}/${params.id}`, params })
// 删除菜单
export const deleteMenu = (ids: number | string) => defHttp.delete({ url: `${Api.Menu}/${ids}` })
