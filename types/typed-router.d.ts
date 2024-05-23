/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// Generated by unplugin-vue-router. ‼️ DO NOT MODIFY THIS FILE ‼️
// It's recommended to commit this file.
// Make sure to add this file to your tsconfig.json file as an "includes" or "files" entry.

declare module 'vue-router/auto-routes' {
  import type {
    RouteRecordInfo,
    ParamValue,
    ParamValueOneOrMore,
    ParamValueZeroOrMore,
    ParamValueZeroOrOne,
  } from 'unplugin-vue-router/types'

  /**
   * Route name map generated by unplugin-vue-router
   */
  export interface RouteNamedMap {
    '/[...path]': RouteRecordInfo<'/[...path]', '/:path(.*)', { path: ParamValue<true> }, { path: ParamValue<false> }>,
    '/dashboard/workTable/': RouteRecordInfo<'/dashboard/workTable/', '/dashboard/workTable', Record<never, never>, Record<never, never>>,
    '/login/': RouteRecordInfo<'/login/', '/login', Record<never, never>, Record<never, never>>,
    '/system/dictData/': RouteRecordInfo<'/system/dictData/', '/system/dictData', Record<never, never>, Record<never, never>>,
    '/system/dictData/[id]': RouteRecordInfo<'/system/dictData/[id]', '/system/dictData/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    '/system/dictType/': RouteRecordInfo<'/system/dictType/', '/system/dictType', Record<never, never>, Record<never, never>>,
    '/system/menu/': RouteRecordInfo<'/system/menu/', '/system/menu', Record<never, never>, Record<never, never>>,
    '/system/role/': RouteRecordInfo<'/system/role/', '/system/role', Record<never, never>, Record<never, never>>,
    '/system/user/': RouteRecordInfo<'/system/user/', '/system/user', Record<never, never>, Record<never, never>>,
  }
}
