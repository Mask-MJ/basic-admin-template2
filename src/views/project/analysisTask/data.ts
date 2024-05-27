import type { FormSchema } from '@/components/Form'
import type { BasicColumn } from '@/components/Table'

import { type ContractInfo } from '@/api/project/contract'
import { getFactoryList } from '@/api/project/factory'
import { getDictTypeList } from '@/api/system/dict'

export const searchSchemas: FormSchema[] = [
  { path: 'name', label: '任务名称', component: 'NInput', span: 8 },
  {
    path: '[beginTime, endTime]',
    component: 'NDatePicker',
    label: '创建时间',
    span: 16,
    componentProps: { type: 'datetimerange' }
  },
  {
    path: 'factoryId',
    label: '所属工厂',
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

export const columns: BasicColumn<ContractInfo & { pendingStatus: boolean }>[] = [
  { title: '任务名称', key: 'name', width: 200 },
  { title: '所属工厂', key: 'factory.name', width: 250 },
  { title: '使用模板', key: 'dict.name', width: 100 },
  { title: '创建时间', key: 'createdAt', width: 200 },
  { title: '更新时间', key: 'updatedAt', width: 200 }
]

export const setSchemas: FormSchema[] = [
  { path: 'id', component: 'NInputNumber', show: false },
  { path: 'name', label: '任务名称', required: true, component: 'NInput' },
  {
    path: 'factoryId',
    label: '所属工厂',
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
  {
    path: 'dictId',
    label: '使用模板',
    component: 'ApiSelect',
    required: true,
    componentProps: {
      immediate: true,
      api: getDictTypeList,
      resultField: 'rows',
      labelField: 'name',
      valueField: 'id'
    }
  },
  {
    path: 'remark',
    label: '备注',
    component: 'NInput',
    componentProps: { type: 'textarea', placeholder: '请输入内容' }
  }
]
