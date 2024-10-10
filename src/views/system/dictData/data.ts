import { getDictDataTreeList, type DictDataInfo } from '@/api/system/dict'
import type { FormSchema } from '@/components/Form'
import type { BasicColumn } from '@/components/Table'

export const searchSchemas: FormSchema[] = [
  { path: 'name', label: '关键字名称', component: 'NInput', span: 8 }
]

export const columns: BasicColumn<DictDataInfo>[] = [
  { title: '关键字名称', key: 'name', width: 150 },
  { title: '关键字', key: 'value', width: 200 },
  { title: '排序', key: 'sort', width: 100 },
  {
    title: '类别',
    key: 'type',
    width: 100,
    render: (rowData) => ['配置', '运行数据', '诊断'][Number(rowData.type)]
  },
  { title: '所属PDF树', key: 'tree.name', width: 200 },
  { title: '创建时间', key: 'createdAt', width: 200 },
  { title: '更新时间', key: 'updatedAt', width: 200 }
]

export const setSchemas: FormSchema[] = [
  { path: 'id', component: 'NInputNumber', show: false },
  { path: 'dictTypeId', component: 'NInputNumber', show: false },
  { path: 'name', label: '关键字名称', required: true, component: 'NInput' },
  { path: 'value', label: '关键字', required: true, component: 'NInput' },
  { path: 'cnTitle', label: '中文标题', component: 'NInput' },
  { path: 'enTitle', label: '英文标题', component: 'NInput' },
  {
    path: 'treeId',
    label: '所属PDF树',
    component: 'ApiTreeSelect',
    required: true,
    componentProps: {
      immediate: true,
      api: getDictDataTreeList,
      labelField: 'name',
      keyField: 'id',
      cascade: true
    }
  },
  {
    path: 'type',
    label: '类别',
    component: 'NSelect',
    defaultValue: '0',
    componentProps: {
      options: [
        { label: '配置', value: '0' },
        { label: '运行数据', value: '1' },
        { label: '诊断', value: '2' }
      ]
    }
  },
  { path: 'sort', label: '排序', component: 'NInputNumber' },
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
