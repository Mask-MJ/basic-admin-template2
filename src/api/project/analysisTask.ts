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
}

enum Api {
  AnalysisTask = 'project/analysis-task',
  Upload = 'project/analysis-task/uploadPdf'
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
export const uploadAnalysisTaskPdf = (params: UploadFileParams) =>
  defHttp.uploadFile({ url: Api.Upload }, params)
