import { useHttp } from '@/utils/http'
import { useFetch } from '@vueuse/core'

interface User {
  id: number
  isAdmin: boolean
  account: string
  password: string
  nickname: string
  avatar: string
  email: string
  phoneNumber: string
  sex: number
  status: boolean
  createBy: string
  createdAt: Date
  updatedAt: Date
  remark: string
}
type UserListParams = Partial<Pick<User, 'account' | 'nickname' | 'email' | 'phoneNumber' | 'sex'>>

export const getUserList = (params?: UserListParams) =>
  useHttp<User[]>('/system/user', { body: new URLSearchParams(params) }).post()
