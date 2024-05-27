import { defHttp } from '@/utils'

export interface CreatedValve {
  name: string
  factoryId: number
  status?: number
  remark?: string
}

export interface ValveInfo {
  id: number
  name: string
  status: number
  brand: string
  model: string
  serial: string
  caliber: string
  level: string
  material: string
  leak: string
  actuator: string
  locator: string
  fault: string
  remark: string
  factoryId: number
  deviceId?: number
  createdAt: string
  updatedAt: string
}

export interface SearchParams {
  page: number
  pageSize: number
  name: string
  status: number
  factoryId: number
  deviceId: number
}

enum Api {
  Valve = 'project/valve'
}

// 获取阀门列表
export const getValveList = (params?: Partial<SearchParams>) =>
  defHttp.get<ValveInfo[]>({ url: Api.Valve, params })
// 创建阀门
export const createValve = (params: CreatedValve) => defHttp.post({ url: Api.Valve, params })
// 获取单个阀门信息
export const getValveDetail = (id: number) => defHttp.get<ValveInfo>({ url: `${Api.Valve}/${id}` })
// 更新阀门
export const updateValve = (params: Partial<ValveInfo>) =>
  defHttp.patch({ url: `${Api.Valve}/${params.id}`, params })
// 删除阀门
export const deleteValve = (ids: number | string) => defHttp.delete({ url: `${Api.Valve}/${ids}` })
