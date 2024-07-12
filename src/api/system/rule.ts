import { defHttp } from '@/utils'
import type { UploadFileParams } from '@/utils/request/types'
export interface SearchParams {
  page: number
  pageSize: number
  name: string
  status: number
}

export interface RuleInfo {
  id: number
  name: string
  url: string
  fileName: string
  remark: string
  createdAt: Date
  updatedAt: Date
}
export interface CreateRule {
  name: string
  url: string
  fileName: string
  remark: string
}

enum Api {
  Rule = 'system/rule',
  Upload = 'system/rule/upload'
}

// 获取规则列表
export const getRuleList = (params?: Partial<SearchParams>) =>
  defHttp.get<RuleInfo[]>({ url: Api.Rule, params })
// 创建规则
export const createRule = (params: CreateRule) => defHttp.post({ url: Api.Rule, params })
// 获取单个规则详情
export const getRuleDetail = (id: number) => defHttp.get<RuleInfo>({ url: `${Api.Rule}/${id}` })
// 更新规则
export const updateRule = (params: Partial<RuleInfo>) =>
  defHttp.patch({ url: `${Api.Rule}/${params.id}`, params })
// 删除规则
export const deleteRule = (ids: number | string) => defHttp.delete({ url: `${Api.Rule}/${ids}` })
// 上传规则文件
export const uploadRuleFile = (params: UploadFileParams) =>
  defHttp.uploadFile({ url: Api.Upload }, params)
