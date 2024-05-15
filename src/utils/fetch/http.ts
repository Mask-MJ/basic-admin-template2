import { createFetch } from '@vueuse/core'
import { getAppEnvConfig } from '../env'

const { VITE_PROXY } = getAppEnvConfig()

export const useHttp = createFetch({
  baseUrl: '/api',
  options: {
    async beforeFetch({ options }: any) {
      const token = useStorage('TOKEN__', '')
      options.headers!.Authorization = `Bearer ${token.value}`

      return { options }
    }
  }
})
