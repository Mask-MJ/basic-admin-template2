import { defHttp } from '@/utils'

export interface SearchParams {
  page: number
  pageSize: number
  name: string
  customer: string
  factoryId?: number
  beginTime: number
  endTime: number
}

export interface ContractInfo {
  id: number
  name: string
  contractTime: string | number
  highValveCount: number
  valveCount: number
  customer: string
  customerPhone: string
  saler: string
  remark?: string
  factoryId: number
  createrId: number
  createdAt: string
  updatedAt: string
}
export interface CreatedContract {
  name: string
  contractTime: number
  valveCount: number
  highValveCount?: number
  customer?: string
  customerPhone?: string
  saler?: string
  remark?: string
  factoryId: number
}

enum Api {
  Contract = 'project/contract'
}

// 获取合同列表
export const getContractList = (params?: Partial<SearchParams>) =>
  defHttp.get<ContractInfo[]>({ url: Api.Contract, params })
// 创建合同
export const createContract = (params: CreatedContract) =>
  defHttp.post({ url: Api.Contract, params })
// 获取单个合同信息
export const getContractDetail = (id: number) =>
  defHttp.get<ContractInfo>({ url: `${Api.Contract}/${id}` })
// 更新合同
export const updateContract = (params: Partial<ContractInfo>) =>
  defHttp.patch({ url: `${Api.Contract}/${params.id}`, params })
// 删除合同
export const deleteContract = (ids: number | string) =>
  defHttp.delete({ url: `${Api.Contract}/${ids}` })
