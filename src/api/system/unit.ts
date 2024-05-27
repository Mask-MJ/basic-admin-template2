import { defHttp } from '@/utils'
export interface SearchParams {
  page: number
  pageSize: number
  name: string
  value: string
  status: number
}

export interface UnitInfo {
  id: number
  name: string
  value: string
  status: number
  remark: string
  createdAt: Date
  updatedAt: Date
}
export interface CreateUnit {
  name: string
  value: string
  remark: string
}

enum Api {
  Unit = 'system/unit'
}

// 获取单位列表
export const getUnitList = (params?: Partial<SearchParams>) =>
  defHttp.get<UnitInfo[]>({ url: Api.Unit, params })
// 创建单位
export const createUnit = (params: CreateUnit) => defHttp.post({ url: Api.Unit, params })
// 获取单个单位详情
export const getUnitDetail = (id: number) => defHttp.get<UnitInfo>({ url: `${Api.Unit}/${id}` })
// 更新单位
export const updateUnit = (params: Partial<UnitInfo>) =>
  defHttp.patch({ url: `${Api.Unit}/${params.id}`, params })
// 删除单位
export const deleteUnit = (ids: number | string) => defHttp.delete({ url: `${Api.Unit}/${ids}` })
