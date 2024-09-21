import type { FormSchema } from '@/components/Form'
import type { BasicColumn } from '@/components/Table'

import { type FactoryInfo, getFactoryList } from '@/api/project/factory'
// import { getValveList } from '@/api/project/valve'

export const searchSchemas: FormSchema[] = [
  { path: 'name', label: '装置名称', component: 'NInput', span: 8 },
  {
    path: '[beginTime, endTime]',
    component: 'NDatePicker',
    label: '创建时间',
    span: 16,
    componentProps: { type: 'datetimerange' }
  },
  {
    path: 'factoryId',
    label: '所属最终用户',
    component: 'ApiTreeSelect',
    span: 8,
    componentProps: {
      immediate: true,
      api: getFactoryList,
      labelField: 'name',
      keyField: 'id',
      cascade: true
    }
  }
]

export const columns: BasicColumn<FactoryInfo & { pendingStatus: boolean }>[] = [
  { title: '装置名称', key: 'name', width: 200 },
  { title: '所属最终用户', key: 'factory.name', width: 300 },
  { title: '创建者', key: 'createBy', width: 100 },
  { title: '创建时间', key: 'createdAt', width: 200 }
]

export const setSchemas: FormSchema[] = [
  { path: 'id', component: 'NInputNumber', show: false },
  {
    path: 'factoryId',
    label: '所属最终用户',
    component: 'ApiTreeSelect',
    required: true,
    componentProps: {
      immediate: true,
      api: getFactoryList,
      labelField: 'name',
      keyField: 'id',
      cascade: true
    }
  },
  { path: 'name', label: '装置名称', required: true, component: 'NInput' },
  // {
  //   path: 'status',
  //   label: '状态',
  //   component: 'NRadioGroup',
  //   defaultValue: 1,
  //   componentProps: {
  //     options: [
  //       { label: '正常', value: 1 },
  //       { label: '停用', value: 0 }
  //     ]
  //   }
  // },
  // {
  //   path: 'valveIds',
  //   label: '绑定阀门',
  //   component: 'ApiSelect',
  //   componentProps: {
  //     immediate: true,
  //     api: getValveList,
  //     resultField: 'rows',
  //     labelField: 'tag',
  //     valueField: 'id',
  //     multiple: true
  //   }
  // },
  {
    path: 'remark',
    label: '备注',
    component: 'NInput',
    componentProps: { type: 'textarea', placeholder: '请输入内容' }
  }
]
