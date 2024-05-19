import type { Result } from '@/utils/request/types'

import { defHttp } from '@/utils'

export interface CreatedRole {
  name: string
  roleKey: string
  sort: number
  remark: string
}

export interface RoleInfo {
  id: number
  name: string
  value: string
  roleKey: string
  sort: number
  remark: string
  createdAt: string
  updatedAt: string
}

export interface Routes {
  id: number
  name: string
  path: string
  icon: string
  hidden: boolean
  status: boolean
  sort: number
  parentId: number
  remark: string
  createBy: string
  updateBy: string
  createdAt: Date
  updatedAt: Date
  children?: Routes[]
}

export interface SearchParams {
  name: string | null
  beginTime: number | null
  endTime: number | null
  page: number
  pageSize: number
}

enum Api {
  Roles = 'system/role',
  Menu = 'system/menu'
}

// 获取角色列表
export const getRolesList = (params?: Partial<SearchParams>) =>
  defHttp.get<Result<RoleInfo[]>>({ url: Api.Roles, params })
// 创建角色
export const createRole = (params: CreatedRole) => defHttp.post({ url: Api.Roles, params })
// 获取单个角色信息
export const getRoleDetail = (id: number) => defHttp.get<RoleInfo>({ url: `${Api.Roles}/${id}` })
// 更新角色
export const updateRole = (params: Partial<RoleInfo>) =>
  defHttp.patch({ url: `${Api.Roles}/${params.id}`, params })
// 删除角色
export const deleteRole = (ids: number | string) => defHttp.delete({ url: `${Api.Roles}/${ids}` })

// 获取菜单权限
export const getMenuList = () => defHttp.get<Routes[]>({ url: Api.Menu })