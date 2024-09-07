import type { UploadFileParams } from '@/utils/request/types'
import { defHttp } from '@/utils'

export interface CreatedAnalysisTask {
  name: string
  status: number
  pdf: { name: string; url: string }[]
  dictId: number
  factoryId: number
  remark: string
}

export interface AnalysisTaskInfo {
  id: number
  name: string
  status: number
  pdf: { name: string; url: string }[]
  remark: string
  dictId: number
  factoryId: number
  createBy: string
  updateBy: string
  createdAt: string
  updatedAt: string
}

export interface SearchParams {
  page: number
  pageSize: number
  name: string
  factoryId: number
}

enum Api {
  AnalysisTask = 'project/analysis-task',
  AnalysisTaskResult = 'project/analysis-task/result',
  Upload = 'project/analysis-task/uploadPdf',
  Execute = 'project/analysis-task/execute',
  ExecuteStatus = 'project/analysis-task/executeStatus'
}

// 获取分析任务列表
export const getAnalysisTaskList = (params?: Partial<SearchParams>) =>
  defHttp.get<AnalysisTaskInfo[]>({ url: Api.AnalysisTask, params })
// 创建分析任务
export const createAnalysisTask = (params: CreatedAnalysisTask) =>
  defHttp.post({ url: Api.AnalysisTask, params })
// 获取单个分析任务信息
export const getAnalysisTaskDetail = (id: number) =>
  defHttp.get<AnalysisTaskInfo>({ url: `${Api.AnalysisTask}/${id}` })
// 更新分析任务
export const updateAnalysisTask = (params: Partial<AnalysisTaskInfo>) =>
  defHttp.patch({ url: `${Api.AnalysisTask}/${params.id}`, params })
// 删除分析任务
export const deleteAnalysisTask = (ids: number | string) =>
  defHttp.delete({ url: `${Api.AnalysisTask}/${ids}` })
// 上传分析任务pdf
export const uploadAnalysisTaskPdf = (params: UploadFileParams) =>
  defHttp.uploadFile({ url: Api.Upload }, params)
// 执行分析任务
export const executeAnalysisTask = (id: number) => defHttp.post({ url: `${Api.Execute}/${id}` })
// 获取执行状态
export const getExecuteStatus = (id: number) => defHttp.get({ url: `${Api.ExecuteStatus}/${id}` })
// 获取分析任务结果
export const getAnalysisTaskResult = (params: { id: number }) =>
  defHttp.get({ url: `${Api.AnalysisTaskResult}/${params.id}` })
