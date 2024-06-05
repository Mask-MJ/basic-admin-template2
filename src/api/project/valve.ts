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

// 获取阀门历史数据
export const getValveHistoryList = async () => {
  return [
    { id: 1, name: 'DVW-R1', createdAt: '2023-10-01' },
    { id: 2, name: 'DVW-R1', createdAt: '2022-12-02' },
    { id: 3, name: 'DVW-R1', createdAt: '2022-10-03' }
  ]
}
