import { defHttp } from '@/utils'

export interface SearchParams {
  page: number
  pageSize: number
  name: string
  factoryId?: number
  beginTime: number
  endTime: number
}

export interface DeviceInfo {
  id: number
  name: string
  status: boolean
  remark: string
  factoryId: number
  createBy: string
  updateBy: string
  createdAt: Date
  updatedAt: Date
}
export interface CreatedDevice {
  name: string
  status?: number
  remark?: string
  factoryId: number
  valveIds?: number[]
}

enum Api {
  Device = 'project/device',
  DeviceRemoveAll = 'project/device/removeAll'
}

// 获取装置列表
export const getDeviceList = (params?: Partial<SearchParams>) =>
  defHttp.get({ url: Api.Device, params })
// 创建装置
export const createDevice = (params: CreatedDevice) => defHttp.post({ url: Api.Device, params })
// 获取单个装置信息
export const getDeviceDetail = (id: number) =>
  defHttp.get<DeviceInfo>({ url: `${Api.Device}/${id}` })
// 更新装置
export const updateDevice = (params: Partial<DeviceInfo>) =>
  defHttp.patch({ url: `${Api.Device}/${params.id}`, params })
// 删除装置
export const deleteDevice = (ids: number | string) =>
  defHttp.delete({ url: `${Api.Device}/${ids}` })
// 删除所有装置
export const deleteAllDevice = () => defHttp.post({ url: Api.DeviceRemoveAll })
