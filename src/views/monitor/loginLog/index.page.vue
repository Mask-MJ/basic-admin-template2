<script setup lang="ts">
import { getLoginLogList } from '@/api/monitor'
import { useTable } from '@/components/Table'

const [registerTable] = useTable({
  api: getLoginLogList, // 请求接口
  columns: [
    { title: '账号', key: 'account', width: 200 },
    { title: '登陆地址', key: 'address', width: 300 },
    { title: 'IP', key: 'ip', width: 200 },
    { title: '标识符', key: 'sessionId', width: 200 },
    { title: '登陆时间', key: 'createdAt', width: 200 }
  ], // 展示的列
  useSearchForm: true, // 启用搜索表单
  formConfig: {
    labelWidth: 100,
    schemas: [
      { path: 'account', label: '账号', component: 'NInput', span: 8 },
      {
        path: '[beginTime, endTime]',
        component: 'NDatePicker',
        label: '创建时间',
        span: 16,
        componentProps: { type: 'datetimerange' }
      }
    ]
  }, // 搜索表单配置
  bordered: true, // 是否显示边框
  rowKey: (rowData) => rowData.id // 表格行 key 的取值
})
</script>

<template>
  <PageWrapper>
    <Table @register="registerTable"> </Table>
  </PageWrapper>
</template>

<style lang="" scoped></style>
