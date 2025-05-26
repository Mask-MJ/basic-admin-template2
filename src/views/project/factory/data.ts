import type { FormSchema } from '@/components/Form'
import type { BasicColumn } from '@/components/Table'
import { type FactoryInfo } from '@/api/project/factory'
import { useCascaderAreaData } from './areaData'
const areaData = useCascaderAreaData()
export const searchSchemas: FormSchema[] = [
  { path: 'name', label: '最终用户名称', component: 'NInput', span: 8 },
  {
    path: '[beginTime, endTime]',
    component: 'NDatePicker',
    label: '创建时间',
    span: 16,
    componentProps: { type: 'datetimerange' }
  }
]

export const columns: BasicColumn<FactoryInfo & { pendingStatus: boolean }>[] = [
  { title: '最终用户名称', key: 'name', width: 300 },
  { title: '所属行业', key: 'industry', width: 200 },
  { title: '最终用户地址', key: 'address', width: 400 },
  { title: '创建者', key: 'createBy', width: 100 }
]

export const setSchemas: FormSchema[] = [
  { path: 'id', component: 'NInputNumber', show: false },
  {
    path: 'parentId',
    label: '上级菜单',
    component: 'NTreeSelect',
    componentProps: {
      labelField: 'name',
      keyField: 'id',
      cascade: true
    }
  },
  { path: 'name', label: '名称', required: true, component: 'NInput' },
  { path: 'industry', label: '所属行业', component: 'NInput' },
  {
    path: 'code',
    label: '城市',
    required: true,
    component: 'NCascader',
    componentProps: {
      options: areaData,
      checkStrategy: 'child'
    }
  },
  {
    path: 'address',
    label: '详细地址',
    component: 'NInput',
    componentProps: {
      type: 'text',
      placeholder: '请输入详细地址'
    }
  },
  {
    path: 'location',
    label: '经纬度',
    component: 'NInput',
    slot: 'location'
  },
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
  {
    path: 'remark',
    label: '备注',
    component: 'NInput',
    componentProps: { type: 'textarea', placeholder: '请输入内容' }
  }
]
