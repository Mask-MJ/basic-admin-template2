import type { MenuOption } from 'naive-ui'
import type { RemovableRef } from '@vueuse/core'

import { getMenuList, type MenuInfo } from '@/api/system/menu'
import { getUserInfo, login, type LoginParams, type UserInfo } from '@/api/system/user'
import { router } from '@/router'
import { CACHE_ROUTES, PageEnum, TOKEN_KEY, USER_INFO_KEY } from '@/settings/enums'
import { defineStore } from 'pinia'
import { flatMapDeep } from 'lodash-es'
import { transformersMenus } from './helper/user-helper'

interface UserState {
  /** Token */
  token: RemovableRef<string | null>
  /** 用户信息 */
  userInfo: RemovableRef<UserInfo>
  /** 路由是否动态添加 */
  isDynamicAddedRoute: boolean
  /** 后台返回的路由列表 */
  backendRouteList: MenuInfo[]
  /** 菜单列表 */
  menus: MenuOption[]
  /** 缓存路由页面 */
  cacheRoutes: RemovableRef<string[]>
}

export const useUserStore = defineStore('user-store', {
  state: (): UserState => ({
    token: useStorage(TOKEN_KEY, null),
    userInfo: useStorage(USER_INFO_KEY, {} as UserInfo),
    isDynamicAddedRoute: false,
    backendRouteList: [],
    menus: [],
    cacheRoutes: useStorage(CACHE_ROUTES, [])
  }),
  getters: {
    getToken(): string {
      return this.token || ''
    },
    getUserInfo(): UserInfo {
      return this.userInfo || ({} as UserInfo)
    },
    getMenuList(): MenuOption[] {
      return transformersMenus(this.backendRouteList)
    }
  },
  actions: {
    setToken(info: string | null = null) {
      this.token = info
    },
    setUserInfo(info?: UserInfo) {
      this.userInfo = info || ({} as UserInfo)
    },
    async login(params: LoginParams) {
      try {
        const { accessToken } = await login(params)
        this.setToken(accessToken)
        await this.getUserInfoAction()
        const redirect = router.currentRoute.value.query.redirect
        router.push(redirect ? (redirect as string) : PageEnum.BASE_HOME)
      } catch (error) {
        return Promise.reject(error)
      }
    },
    async getUserInfoAction(): Promise<UserInfo | null> {
      if (!this.getToken) return null
      const result = await getUserInfo()
      this.setUserInfo(result)
      return result
    },
    async logout() {
      if (this.getToken) {
        // await doLogout()
      }
      this.setToken()
      this.setUserInfo()
      router.push('/login')
    },
    async RedirectHome() {
      router.push(PageEnum.BASE_HOME)
    },
    /** 获取路由 */
    async getRoutesAction() {
      const data = await getMenuList()

      const routes = router.getRoutes()
      // 把路由同步到 router 中
      flatMapDeep(data, (route) => [route, route.children] as MenuInfo[]).forEach((route) => {
        routes.forEach((item) => {
          if (route?.path === item.path) {
            item.meta = { ...item.meta, ...(route as any) }
          }
        })
      })
      // const route = useRoute()
      // const tabStore = useMultipleTabStore()
      // console.log('route', route)
      // tabStore.iniTabStore(route)

      this.setBackendRouteList(data)
      this.isDynamicAddedRoute = true
      return data
    },
    /** 设置路由 */
    setBackendRouteList(list: MenuInfo[]) {
      this.backendRouteList = list
    },
    /** 设置缓存路由 */
    setCacheRoutes(list: string[]) {
      this.cacheRoutes = list
    },
    /** 设置菜单 */
    setMenus(list: any[]) {
      this.menus = list
    }
  }
})
