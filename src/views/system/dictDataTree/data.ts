import type { DictDataTreeInfo } from '@/api/system/dict'
import type { FormSchema } from '@/components/Form'
import type { BasicColumn } from '@/components/Table'

export const searchSchemas: FormSchema[] = [
  { path: 'name', label: 'PDF名称', component: 'NInput', span: 8 }
  // {
  //   path: '[beginTime, endTime]',
  //   component: 'NDatePicker',
  //   label: '创建时间',
  //   span: 16,
  //   componentProps: { type: 'datetimerange' }
  // }
]
export const columns: BasicColumn<DictDataTreeInfo & { pendingStatus: boolean }>[] = [
  { title: 'pdf树名称', key: 'name', width: 200, align: 'left' },
  { title: 'pdf树值', key: 'value', width: 200 }
]
export const setSchemas: FormSchema[] = [
  { path: 'id', component: 'NInputNumber', show: false },
  { path: 'name', label: 'PDF树名称', required: true, component: 'NInput' },
  { path: 'value', label: 'PDF树值', required: true, component: 'NInput' },
  {
    path: 'remark',
    label: '备注',
    component: 'NInput',
    componentProps: { type: 'textarea', placeholder: '请输入内容' }
  }
]
