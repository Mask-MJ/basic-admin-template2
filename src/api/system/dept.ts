import { defHttp } from '@/utils'

export interface SearchParams {
  page: number
  pageSize: number
  name: string
  beginTime: string
  endTime: string
}
export interface DeptInfo {
  id: number
  name: string
  sort: number
  leader: string
  phone: string
  email: string
  parentId: number
  remark: string
  children: DeptInfo[]
  createBy: string
  updateBy: string
  createdAt: Date
  updatedAt: Date
}
export interface CreateDept {
  name: string
  sort: number
  leader: string
  phone: string
  email: string
  parentId: number
  remark: string
}

enum Api {
  Dept = 'system/dept'
}
// 获取部门列表
export const getDeptList = (params?: Partial<SearchParams>) =>
  defHttp.get<DeptInfo[]>({ url: Api.Dept, params })
// 创建部门
export const createDept = (params: CreateDept) => defHttp.post({ url: Api.Dept, params })
// 获取单个部门详情
export const getDeptDetail = (id: number) => defHttp.get<DeptInfo>({ url: `${Api.Dept}/${id}` })
// 更新部门
export const updateDept = (params: Partial<DeptInfo>) =>
  defHttp.patch({ url: `${Api.Dept}/${params.id}`, params })
// 删除部门
export const deleteDept = (ids: number | string) => defHttp.delete({ url: `${Api.Dept}/${ids}` })
