<script setup lang="ts">
import { getOperationLogList } from '@/api/monitor'
import { useTable } from '@/components/Table'

const [registerTable] = useTable({
  api: getOperationLogList, // 请求接口
  columns: [
    { title: '操作账号', key: 'account', width: 200 },
    { title: '操作模块', key: 'module', width: 200 },
    { title: '操作事件', key: 'title', width: 200 },
    { title: 'ip', key: 'ip', width: 200 },
    { title: '地址', key: 'address', width: 200 },
    { title: '操作时间', key: 'createdAt', width: 200 }
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
