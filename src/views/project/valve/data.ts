import type { FormSchema } from '@/components/Form'
import type { BasicColumn } from '@/components/Table'

import { type FactoryInfo, getFactoryList } from '@/api/project/factory'
import { getDeviceList } from '@/api/project/device'

export const searchSchemas: FormSchema[] = [
  { path: 'name', label: '阀门名称', component: 'NInput', span: 8 },
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

export const columns: BasicColumn<FactoryInfo & { pendingStatus: boolean }>[] = [
  { title: '阀门名称', key: 'name', width: 200 },
  { title: '所属工厂', key: 'factory.name', width: 300 },
  { title: '阀门品牌', key: 'brand', width: 100 },
  { title: '阀门型号', key: 'model', width: 100 },
  { title: '创建时间', key: 'createdAt', width: 200 }
]

export const setSchemas: FormSchema[] = [
  { path: 'id', component: 'NInputNumber', show: false },
  { path: 'name', label: '阀门名称', required: true, component: 'NInput', span: 8 },
  {
    path: 'factoryId',
    label: '所属工厂',
    component: 'ApiTreeSelect',
    required: true,
    span: 8,
    componentProps: {
      immediate: true,
      api: getFactoryList,
      labelField: 'name',
      keyField: 'id',
      cascade: true
    }
  },
  {
    path: 'deviceId',
    label: '所属装置',
    component: 'ApiSelect',
    span: 8,
    componentProps: {
      immediate: true,
      api: getDeviceList,
      resultField: 'rows',
      labelField: 'name',
      valueField: 'id'
    }
  },
  { path: 'brand', label: '阀门品牌', component: 'NInput', span: 8 },
  { path: 'model', label: '阀门型号', component: 'NInput', span: 8 },
  { path: 'serial', label: '阀门序列号', component: 'NInput', span: 8 },
  { path: 'caliber', label: '阀门口径', component: 'NInput', span: 8 },
  { path: 'level', label: '阀门磅级', component: 'NInput', span: 8 },
  { path: 'material', label: '阀体材质', component: 'NInput', span: 8 },
  { path: 'leak', label: '泄露等级', component: 'NInput', span: 8 },
  { path: 'locator', label: '定位器型号', component: 'NInput', span: 8 },
  { path: 'fault', label: '阀门故障位', component: 'NInput', span: 8 },
  { path: 'actuator', label: '执行机构型号', component: 'NInput', span: 8 },
  {
    path: 'remark',
    label: '备注',
    component: 'NInput',
    componentProps: { type: 'textarea', placeholder: '请输入内容' }
  }
]
