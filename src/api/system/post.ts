import { defHttp } from '@/utils'
export interface SearchParams {
  page: number
  pageSize: number
  name: string
  code: string
  beginTime: string
  endTime: string
}
export interface PostInfo {
  id: number
  name: string
  code: string
  sort: number
  remark: string
  createdAt: Date
  updatedAt: Date
  createBy: string
  updateBy: string
}
export interface CreatePost {
  name: string
  code: string
  sort: number
  remark: string
}

enum Api {
  Post = 'system/post'
}

// 获取岗位列表
export const getPostList = (params?: Partial<SearchParams>) =>
  defHttp.get<PostInfo[]>({ url: Api.Post, params })
// 创建岗位
export const createPost = (params: CreatePost) => defHttp.post({ url: Api.Post, params })
// 获取单个岗位详情
export const getPostDetail = (id: number) => defHttp.get<PostInfo>({ url: `${Api.Post}/${id}` })
// 更新岗位
export const updatePost = (params: Partial<PostInfo>) =>
  defHttp.patch({ url: `${Api.Post}/${params.id}`, params })
// 删除岗位
export const deletePost = (ids: number | string) => defHttp.delete({ url: `${Api.Post}/${ids}` })
