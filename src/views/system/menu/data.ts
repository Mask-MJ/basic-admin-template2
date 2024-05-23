import type { FormSchema } from '@/components/Form'
import { getMenuList, updateMenu, type MenuInfo } from '@/api/system/menu'
import { NPopconfirm, NSwitch } from 'naive-ui'
import type { BasicColumn } from '@/components/Table'

export const searchSchemas: FormSchema[] = [
  { path: 'name', label: '字典名称', component: 'NInput', span: 8 },
  {
    path: '[beginTime, endTime]',
    component: 'NDatePicker',
    label: '创建时间',
    span: 16,
    componentProps: { type: 'datetimerange' }
  }
]

export const columns: BasicColumn<MenuInfo & { pendingStatus: boolean }>[] = [
  { title: '菜单名称', key: 'name', width: 150 },
  { title: '菜单路径', key: 'path', width: 200 },
  { title: '菜单图标', key: 'icon', width: 150 },
  { title: '是否隐藏', key: 'hidden', width: 150 },
  { title: '状态', key: 'status', width: 150 },
  {
    title: '状态',
    key: 'status',
    width: 100,
    render: (rowData) =>
      h(
        NPopconfirm,
        {
          onPositiveClick() {
            if (!Reflect.has(rowData, 'pendingStatus')) {
              rowData.pendingStatus = false
            }
            updateMenu({ id: rowData.id, status: !rowData.status })
              .then(() => {
                rowData.status = !rowData.status
                window.$message.success(`已成功修改用户状态`)
              })
              .catch(() => {
                window.$message.error('修改用户状态失败')
              })
              .finally(() => {
                rowData.pendingStatus = false
              })
          },
          onNegativeClick() {
            rowData.pendingStatus = false
          }
        },
        {
          default: () => (rowData.status ? '是否停用用户' : '是否启用用户'),
          trigger: () =>
            h(
              NSwitch,
              {
                loading: rowData.pendingStatus,
                value: rowData.status,
                onUpdateValue() {
                  rowData.pendingStatus = true
                }
              },
              { checked: () => '启用', unchecked: () => '停用' }
            )
        }
      )
  },
  { title: '排序', key: 'sort', width: 150 },
  { title: '创建时间', key: 'createdAt', width: 200 },
  { title: '更新时间', key: 'updatedAt', width: 200 }
]

export const setSchemas: FormSchema[] = [
  { path: 'id', component: 'NInputNumber', show: false },
  {
    path: 'parentId',
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
  { path: 'name', label: '菜单名称', required: true, component: 'NInput' },
  { path: 'path', label: '菜单路径', required: true, component: 'NInput' },
  { path: 'icon', label: '菜单图标', required: true, component: 'NInput' },
  {
    path: 'hidden',
    label: '是否隐藏',
    required: true,
    component: 'NRadioGroup',
    componentProps: {
      options: [
        { label: '是', value: true },
        { label: '否', value: false }
      ]
    }
  },
  {
    path: 'status',
    label: '状态',
    required: true,
    component: 'NRadioGroup',
    componentProps: {
      options: [
        { label: '启用', value: true },
        { label: '禁用', value: false }
      ]
    }
  },
  { path: 'sort', label: '排序', required: true, component: 'NInputNumber' },
  {
    path: 'remark',
    label: '备注',
    component: 'NInput',
    componentProps: { type: 'textarea', placeholder: '请输入内容' }
  }
]
