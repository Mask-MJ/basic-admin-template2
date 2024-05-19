import { createFetch } from '@vueuse/core'

export const useHttp = createFetch({
  baseUrl: '/api',
  options: {
    beforeFetch({ options }: any) {
      const token = useStorage('TOKEN__', '')
      options.headers!.Authorization = `Bearer ${token.value}`
      console.log('beforeFetch', options)
      return { options }
    },

    afterFetch(ctx) {
      return JSON.parse(ctx.data)
    },

    onFetchError(ctx) {
      return ctx.error
    }
  }
})
