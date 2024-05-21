import type { FormSchema } from '@/components/Form'
import type { BasicColumn } from '@/components/Table'

import { updateUser, type UserInfo } from '@/api/system/user'
import { NPopconfirm, NSwitch } from 'naive-ui'

export const schemas: FormSchema[] = [
  { path: 'account', label: '用户账号', component: 'NInput', span: 8 },
  { path: 'nickname', label: '用户昵称', component: 'NInput', span: 8 },
  {
    path: 'status',
    label: '状态',
    component: 'NSelect',
    componentProps: {
      options: [
        { label: '正常', value: 1 },
        { label: '停用', value: 0 }
      ]
    },
    span: 8
  },
  {
    path: '[beginTime, endTime]',
    component: 'NDatePicker',
    label: '创建时间',
    span: 16,
    componentProps: {
      type: 'datetimerange'
    }
  }
]

export const columns: BasicColumn<UserInfo & { pendingStatus: boolean }>[] = [
  { title: '账号', key: 'account', width: 100 },
  { title: '用户昵称', key: 'nickname', width: 100 },
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
            updateUser({ id: rowData.id, status: !rowData.status })
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
  {
    title: '角色',
    key: 'role',
    width: 150,
    render: (rowData) => h('div', {}, rowData.role.map((role) => role.name).join('、'))
  },
  { title: '创建时间', key: 'createdAt', width: 200 },
  { title: '更新时间', key: 'updatedAt', width: 200 }
]
