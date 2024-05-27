import type { FormSchema } from '@/components/Form'
import type { BasicColumn } from '@/components/Table'

import { type FactoryInfo, getFactoryList } from '@/api/project/factory'

export const searchSchemas: FormSchema[] = [
  { path: 'name', label: '工厂名称', component: 'NInput', span: 8 },
  {
    path: '[beginTime, endTime]',
    component: 'NDatePicker',
    label: '创建时间',
    span: 16,
    componentProps: { type: 'datetimerange' }
  }
]

export const columns: BasicColumn<FactoryInfo & { pendingStatus: boolean }>[] = [
  { title: '工厂名称', key: 'name', width: 300 },
  { title: '工厂地址', key: 'address', width: 400 },
  { title: '创建者', key: 'createBy', width: 100 }
]

export const setSchemas: FormSchema[] = [
  { path: 'id', component: 'NInputNumber', show: false },
  {
    path: 'parentId',
    label: '上级菜单',
    component: 'ApiTreeSelect',
    componentProps: {
      immediate: true,
      api: getFactoryList,
      labelField: 'name',
      keyField: 'id',
      cascade: true
    }
  },
  { path: 'name', label: '工厂名称', required: true, component: 'NInput' },
  {
    path: 'address',
    label: '工厂地址',
    component: 'NInput',
    componentProps: {
      type: 'text',
      placeholder: '请输入工厂地址'
    }
  },
  {
    path: 'status',
    label: '状态',
    component: 'NRadioGroup',
    defaultValue: 1,
    componentProps: {
      options: [
        { label: '正常', value: 1 },
        { label: '停用', value: 0 }
      ]
    }
  },
  {
    path: 'remark',
    label: '备注',
    component: 'NInput',
    componentProps: { type: 'textarea', placeholder: '请输入内容' }
  }
]

export const resetSchemas: FormSchema[] = [
  { path: 'id', component: 'NInputNumber', show: false },
  {
    path: 'password',
    label: '新密码',
    component: 'NInput',
    componentProps: { type: 'password', showPasswordOn: 'click' },
    rule: [
      {
        required: true,
        trigger: 'change',
        validator: (_rule, value) =>
          new RegExp(/^.{4,20}$/).test(value)
            ? Promise.resolve()
            : Promise.reject('用户密码长度必须介于 4 和 20 之间')
      }
    ]
  }
]
