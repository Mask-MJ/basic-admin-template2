import { defHttp } from '@/utils'

export interface CreateDictType {
  name: string
  value: string
  remark: string
}

export interface DictTypeInfo {
  id: number
  name: string
  value: string
  remark: string
  createdAt: string
  updatedAt: string
}

export interface SearchParams {
  page: number
  pageSize: number
  name: string
  value: string
}

export interface CreateDictData {
  name: string
  value: string
  dictTypeId: number
  sort?: number
  status?: boolean
  remark?: string
}

export interface DictDataInfo {
  id: number
  name: string
  value: string
  sort: number
  status: boolean
  dictTypeId: number
  createBy: string
  updateBy: string | null
  remark: string | null
  createdAt: Date
  updatedAt: Date
}

enum Api {
  DictType = 'system/dict-type',
  DictData = 'system/dict-data'
}

// 获取字典列表
export const getDictTypeList = (params?: Partial<SearchParams>) =>
  defHttp.get<DictTypeInfo[]>({ url: Api.DictType, params })
// 创建字典
export const createDictType = (params: CreateDictType) =>
  defHttp.post({ url: Api.DictType, params })
// 获取单个字典信息
export const getDictTypeDetail = (id: number) =>
  defHttp.get<DictTypeInfo>({ url: `${Api.DictType}/${id}` })
// 更新字典
export const updateDictType = (params: Partial<DictTypeInfo>) =>
  defHttp.patch({ url: `${Api.DictType}/${params.id}`, params })
// 删除字典
export const deleteDictType = (ids: number | string) =>
  defHttp.delete({ url: `${Api.DictType}/${ids}` })

// 获取字典数据列表
export const getDictDataList = (params: SearchParams) =>
  defHttp.get<DictDataInfo[]>({ url: Api.DictData, params })
// 创建字典数据
export const createDictData = (params: CreateDictData) =>
  defHttp.post({ url: Api.DictData, params })
// 获取单个字典数据信息
export const getDictDataDetail = (id: number) =>
  defHttp.get<DictDataInfo>({ url: `${Api.DictData}/${id}` })
// 更新字典数据
export const updateDictData = (params: Partial<DictDataInfo>) =>
  defHttp.patch({ url: `${Api.DictData}/${params.id}`, params })
// 删除字典数据
export const deleteDictData = (ids: number | string) =>
  defHttp.delete({ url: `${Api.DictData}/${ids}` })
