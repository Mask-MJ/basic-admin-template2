import type { AxiosTransform, CreateAxiosOptions } from './transform'
import type { RequestOptions, Result } from './types'
import type { AxiosResponse } from 'axios'

import { clone, isString, merge } from 'lodash-es'

import { ContentTypeEnum, RequestMethodEnum, ResultEnum } from './enum'
import { formatRequestDate, joinTimestamp } from './helper'
import { Request } from './request'
import { getAppEnvConfig } from '@/utils/env'
import { TOKEN_KEY } from '@/settings/enums'

const { VITE_GLOB_API_URL_PREFIX } = getAppEnvConfig()

export function setObjToUrlParams(baseUrl: string, obj: any): string {
  let parameters = ''
  for (const key in obj) parameters += `${key}=${encodeURIComponent(obj[key])}&`

  parameters = parameters.replace(/&$/, '')
  return /\?$/.test(baseUrl) ? baseUrl + parameters : baseUrl.replace(/\/?$/, '?') + parameters
}

/**
 * @description: 数据处理，方便区分多种处理方式
 */
const transform: AxiosTransform = {
  /**
   * @description: 处理请求数据。如果数据不是预期格式，可直接抛出错误
   */
  transformRequestHook: (res: AxiosResponse<Result>, options: RequestOptions) => {
    const { isTransformResponse, isReturnNativeResponse } = options
    // 是否返回原生响应头 比如：需要获取响应头时使用该属性
    if (isReturnNativeResponse) return res

    // 不进行任何处理，直接返回
    if (!isTransformResponse) return res.data

    // 错误的时候返回
    if (!res) return '[HTTP] Request has no return value'
    const { data, status } = res
    if (status.toString().startsWith('2')) {
      return data as Result
    }
  },

  // 请求之前处理config
  beforeRequestHook: (config, options) => {
    const { joinPrefix, joinParamsToUrl, formatDate, joinTime = true, urlPrefix } = options
    if (joinPrefix) config.url = `${urlPrefix}${config.url}`
    const params = config.params || {}
    const data = config.data || false
    formatDate && data && !isString(data) && formatRequestDate(data)
    if (config.method?.toUpperCase() === RequestMethodEnum.GET) {
      if (!isString(params)) {
        // 给 get 请求加上时间戳参数，避免从缓存中拿数据。
        config.params = Object.assign(params || {}, joinTimestamp(joinTime, false))
      } else {
        // 兼容restful风格
        config.url = `${config.url + params}${joinTimestamp(joinTime, true)}`
        config.params = undefined
      }
    } else {
      if (!isString(params)) {
        formatDate && formatRequestDate(params)
        if (Reflect.has(config, 'data') && config.data && Object.keys(config.data).length > 0) {
          config.data = data
          config.params = params
        } else {
          // 非GET请求如果没有提供data，则将params视为data
          config.data = params
          config.params = undefined
        }
        if (joinParamsToUrl) {
          config.url = setObjToUrlParams(
            config.url as string,
            Object.assign({}, config.params, config.data)
          )
        }
      } else {
        // 兼容restful风格
        config.url = config.url + params
        config.params = undefined
      }
    }
    return config
  },

  /**
   * @description: 请求拦截器处理
   */
  requestInterceptors: (config, options) => {
    // 请求之前处理config
    const token = useStorage(TOKEN_KEY, null)

    if (token.value && config?.requestOptions?.withToken !== false) {
      // jwt token
      config.headers.Authorization = options.authenticationScheme
        ? `${options.authenticationScheme} ${token.value}`
        : token.value
    }
    return config
  },

  /**
   * @description: 响应拦截器处理
   */
  responseInterceptors: (res: AxiosResponse<any>) => {
    return res
  },

  /**
   * @description: 响应错误处理
   */
  responseInterceptorsCatch: (error: any) => {
    const userStore = useUserStore()
    const { statusCode, message } = error.response.data
    if (statusCode === ResultEnum.TIMEOUT) {
      setTimeout(() => {
        userStore.logout()
      }, 3000)
    }
    // else if (statusCode === ResultEnum.FORBIDDEN) {
    // 无权限 重定向到首页
    // userStore.RedirectHome()
    // }

    message && window.$message.error(`${statusCode}: ${message}`)
    return Promise.reject(error)
  }
}

function createAxios(opt?: Partial<CreateAxiosOptions>) {
  return new Request(
    merge(
      {
        authenticationScheme: 'Bearer',
        timeout: 10 * 1000,
        headers: { 'Content-Type': ContentTypeEnum.JSON },
        // 数据处理方式
        transform: clone(transform),
        // 配置项，下面的选项都可以在独立的接口请求中覆盖
        requestOptions: {
          // 默认将prefix 添加到url
          joinPrefix: true,
          // 是否返回原生响应头 比如：需要获取响应头时使用该属性
          isReturnNativeResponse: false,
          // 需要对返回数据进行处理
          isTransformResponse: true,
          // post请求的时候添加参数到url
          joinParamsToUrl: false,
          // 格式化提交参数时间
          formatDate: true,
          // 接口拼接地址头
          urlPrefix: VITE_GLOB_API_URL_PREFIX,
          // 是否携带token
          withToken: true,
          // 是否加入时间戳
          joinTime: true
        }
      },
      opt || {}
    )
  )
}
export const defHttp = createAxios()
export const defHttp2 = createAxios({
  timeout: 120 * 1000
})
