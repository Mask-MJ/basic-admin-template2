export interface RequestOptions {
  // 默认将prefix 添加到url
  joinPrefix?: boolean
  // 是否返回原生响应头 比如：需要获取响应头时使用该属性
  isReturnNativeResponse?: boolean
  // 需要对返回数据进行处理
  isTransformResponse?: boolean
  // post请求的时候添加参数到url
  joinParamsToUrl?: boolean
  // 格式化提交参数时间
  formatDate?: boolean
  // 请求拼接路径
  urlPrefix?: string
  // 带上token
  withToken?: boolean
  // 是否加入时间戳
  joinTime?: boolean
}

export interface Result<T = any> {
  statusCode: number
  message: string
  rows: T
  page?: number
  pageSize?: number
  total: number
}

export interface UploadFileParams {
  // Other parameters
  data?: Recordable
  // File parameter interface field name
  name?: string
  // file name
  file: File | Blob
  // file name
  fileName?: string
  [key: string]: any
}
