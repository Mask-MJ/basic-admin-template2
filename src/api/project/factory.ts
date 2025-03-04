import type { UploadFileParams } from '@/utils/request/types'
import { defHttp, defHttp2 } from '@/utils'

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
  filterId: number | null
}

enum Api {
  Factory = 'project/factory',
  FactoryRemoveAll = 'project/factory/removeAll',
  Import = 'project/factory/import',
  Chart = 'project/factory/chart'
}

// 获取最终用户列表
export const getFactoryList = (params?: Partial<SearchParams>) =>
  defHttp.get<FactoryInfo[]>({ url: Api.Factory, params })

// 创建最终用户
export const createFactory = (params: CreatedFactory) => defHttp.post({ url: Api.Factory, params })
// 获取单个最终用户信息
export const getFactoryDetail = (id: number) =>
  defHttp.get<FactoryInfo>({ url: `${Api.Factory}/${id}` })
// 获取最终用户图表数据
export const getFactoryChart = (id: number) => defHttp.get({ url: `${Api.Chart}/${id}` })
// 导入阀门基础数据
export const importValveData = (params: UploadFileParams) =>
  defHttp.uploadFile({ url: Api.Import }, params)
// 更新最终用户
export const updateFactory = (params: Partial<FactoryInfo>) =>
  defHttp.patch({ url: `${Api.Factory}/${params.id}`, params })
// 删除最终用户
export const deleteFactory = (ids: number | string) =>
  defHttp.delete({ url: `${Api.Factory}/${ids}` })
// 生成报告
export const getFactoryReportData = (id: number) =>
  defHttp2.post(
    { url: `${Api.Factory}/report/${id}`, responseType: 'blob' },
    { isReturnNativeResponse: true, isTransformResponse: false }
  )
// 删除所有最终用户
export const deleteAllFactory = () => defHttp.delete({ url: Api.FactoryRemoveAll })
