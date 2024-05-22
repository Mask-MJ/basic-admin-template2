import type { FormSchema } from '@/components/Form'

import { getMenuList } from '@/api/system/role'
import { getFactoryList } from '@/api/project/factory'

export const schemas: FormSchema[] = [
  { path: 'id', component: 'NInputNumber', show: false },
  { path: 'name', label: '角色名称', required: true, component: 'NInput' },
  { path: 'sort', label: '排序', required: true, component: 'NInputNumber' },
  { path: 'value', label: '权限字符', required: true, component: 'NInput' },
  {
    path: 'menuIds',
    label: '菜单权限',
    component: 'ApiTreeSelect',
    componentProps: {
      immediate: true,
      api: getMenuList,
      multiple: true,
      labelField: 'name',
      keyField: 'id',
      checkable: true,
      cascade: true
    }
  },
  {
    path: 'factoryIds',
    label: '工厂权限',
    component: 'ApiTreeSelect',
    componentProps: {
      immediate: true,
      api: getFactoryList,
      multiple: true,
      labelField: 'name',
      keyField: 'id',
      checkable: true,
      cascade: true
    }
  },
  {
    path: 'remark',
    label: '备注',
    component: 'NInput',
    componentProps: { type: 'textarea', placeholder: '请输入内容' }
  }
]
