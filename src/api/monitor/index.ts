import { defHttp } from '@/utils'

export interface LoginLogInfo {
  id: number
  sessionId: string
  account: string
  ip: string
  address: string
  createdAt: string
}

export interface OperationLogInfo {
  id: number
  title: string
  businessType: number
  module: string
  account: string
  ip: string
  address: string
  createdAt: string
}

export interface SearchParams {
  name: string | null
  beginTime: number | null
  endTime: number | null
  page: number
  pageSize: number
}

enum Api {
  LoginLog = 'monitor/login-log',
  OperationLog = 'monitor/operation-log'
}

// 获取登录日志列表
export const getLoginLogList = (params?: Partial<SearchParams>) =>
  defHttp.get<LoginLogInfo[]>({ url: Api.LoginLog, params })
// 获取操作日志列表
export const getOperationLogList = (params?: Partial<SearchParams>) =>
  defHttp.get<OperationLogInfo[]>({ url: Api.OperationLog, params })
