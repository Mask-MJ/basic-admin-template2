import type { CreateAxiosOptions } from './transform'
import type {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig
} from 'axios'
import axios from 'axios'
import { cloneDeep, isFunction } from 'lodash-es'
import { ContentTypeEnum, RequestMethodEnum } from './enum'
import qs from 'qs'
import type { RequestOptions, Result, UploadFileParams } from './types'
import { getAppEnvConfig } from '@/utils/env'

export class Request {
  private axiosInstance: AxiosInstance
  private readonly options: CreateAxiosOptions

  constructor(options: CreateAxiosOptions) {
    this.options = options
    this.axiosInstance = axios.create(options)
    this.setupInterceptors()
  }

  getAxios(): AxiosInstance {
    return this.axiosInstance
  }
  configAxios(config: CreateAxiosOptions) {
    if (!this.axiosInstance) return
    this.axiosInstance = axios.create(config)
  }
  setHeader(headers: any): void {
    if (!this.axiosInstance) return
    Object.assign(this.axiosInstance.defaults.headers, headers)
  }
  /**
   * @description: 拦截器配置
   */
  private setupInterceptors() {
    const transform = this.options.transform
    if (!transform) return

    const {
      requestInterceptors,
      requestInterceptorsCatch,
      responseInterceptors,
      responseInterceptorsCatch
    } = transform

    const controller = new AbortController()
    // Request interceptor configuration processing
    this.axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
      if (requestInterceptors && isFunction(requestInterceptors)) {
        config = requestInterceptors(config, this.options)
      }
      return config
    })
    // Request interceptor error capture
    isFunction(requestInterceptorsCatch) &&
      this.axiosInstance.interceptors.request.use(undefined, requestInterceptorsCatch)
    // Response result interceptor processing
    this.axiosInstance.interceptors.response.use((res: AxiosResponse<any>) => {
      res && controller.abort()
      if (responseInterceptors && isFunction(responseInterceptors)) res = responseInterceptors(res)
      return res
    })
    // Response result interceptor error capture
    isFunction(responseInterceptorsCatch) &&
      this.axiosInstance.interceptors.response.use(undefined, (error) => {
        return responseInterceptorsCatch(error)
      })
  }
  /**
   * @description:  File Upload
   */
  uploadFile<T = any>(config: AxiosRequestConfig, params: UploadFileParams) {
    const { VITE_GLOB_API_URL_PREFIX } = getAppEnvConfig()
    const formData = new window.FormData()
    const customFilename = params.name || 'file'
    // 加上前缀
    config.url = `${VITE_GLOB_API_URL_PREFIX}${config.url}`

    if (params.filename) {
      formData.append(customFilename, params.file, params.filename)
    } else {
      formData.append(customFilename, params.file)
    }

    if (params.data) {
      Object.keys(params.data).forEach((key) => {
        const value = params.data![key]
        if (Array.isArray(value)) {
          value.forEach((item) => {
            formData.append(`${key}[]`, item)
          })
          return
        }

        formData.append(key, params.data![key])
      })
    }
    // console.log(this.options)
    // return axios.post(config.url, formData, {
    //   headers: {
    //     'Content-Type': 'multipart/form-data; charset=utf-8',
    //     ignoreCancelToken: true
    //   }
    // })
    // return axios.create(this.options).request<T>({
    //   // ...config,
    //   url: config.url,
    //   method: 'POST',
    //   data: formData,
    //   headers: {
    //     'Content-Type': ContentTypeEnum.FORM_DATA,
    //     ignoreCancelToken: true
    //   }
    // })
    return this.axiosInstance.request<T>({
      ...config,
      method: 'POST',
      data: formData,
      headers: {
        'Content-Type': ContentTypeEnum.FORM_DATA,
        ignoreCancelToken: true
      }
    })
  }
  // support form-data
  supportFormData(config: AxiosRequestConfig) {
    const headers = config.headers || this.options.headers
    const contentType = headers?.['Content-Type']

    if (
      contentType !== ContentTypeEnum.FORM_URLENCODED ||
      !Reflect.has(config, 'data') ||
      config.method?.toUpperCase() === RequestMethodEnum.GET
    ) {
      return config
    }
    return {
      ...config,
      data: qs.stringify(config.data, { arrayFormat: 'brackets' })
    }
  }
  request<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T> {
    let conf: CreateAxiosOptions = cloneDeep(config)
    const { requestOptions, transform } = this.options
    const opt: RequestOptions = Object.assign({}, requestOptions, options)

    const { beforeRequestHook, requestCatchHook, transformRequestHook } = transform || {}
    if (beforeRequestHook && isFunction(beforeRequestHook)) {
      conf = beforeRequestHook(conf, opt)
    }

    conf.requestOptions = opt

    conf = this.supportFormData(conf)
    return new Promise((resolve, reject) => {
      this.axiosInstance
        .request<any, AxiosResponse<Result>>(conf)
        .then((res: AxiosResponse<Result>) => {
          if (transformRequestHook && isFunction(transformRequestHook)) {
            try {
              const ret = transformRequestHook(res, opt)
              resolve(ret)
            } catch (err) {
              reject(err || new Error('request error!'))
            }
            return
          }
          resolve(res as unknown as Promise<T>)
        })
        .catch((e: Error | AxiosError) => {
          if (requestCatchHook && isFunction(requestCatchHook)) {
            reject(requestCatchHook(e, opt))
            return
          }
          reject(e)
        })
    })
  }

  get<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T> {
    return this.request({ ...config, method: 'GET' }, options)
  }

  post<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T> {
    return this.request({ ...config, method: 'POST' }, options)
  }

  put<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T> {
    return this.request({ ...config, method: 'PUT' }, options)
  }

  patch<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T> {
    return this.request({ ...config, method: 'PATCH' }, options)
  }

  delete<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T> {
    return this.request({ ...config, method: 'DELETE' }, options)
  }
}
