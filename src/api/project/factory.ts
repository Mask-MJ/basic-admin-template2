import type { Result } from '@/utils/request/types'
import { defHttp } from '@/utils'

export interface CreatedFactory {
  name: string
  status?: boolean
  remark: string
  address: string
  parentId: number
  location: [number, number]
}

export interface FactoryInfo {
  id: number
  name: string
  status: number
  address: string
  location: number[]
  remark: string
  createBy: string
  updateBy: string
  valves: number[]
  parentId: number | null
  createdAt: string
  updatedAt: string
}

export interface SearchParams {
  createdAt: number
  updatedAt: number
  name: string | null
}

enum Api {
  Factory = 'project/factory'
}

// 获取工厂列表
export const getFactoryList = (params?: Partial<SearchParams>) =>
  defHttp.get<Result<FactoryInfo[]>>({ url: Api.Factory, params })
// 创建工厂
export const createFactory = (params: CreatedFactory) => defHttp.post({ url: Api.Factory, params })
// 获取单个工厂信息
export const getFactoryDetail = (id: number) =>
  defHttp.get<FactoryInfo>({ url: `${Api.Factory}/${id}` })
// 更新工厂
export const updateFactory = (params: Partial<FactoryInfo>) =>
  defHttp.patch({ url: `${Api.Factory}/${params.id}`, params })
// 删除工厂
export const deleteFactory = (ids: number | string) =>
  defHttp.delete({ url: `${Api.Factory}/${ids}` })
