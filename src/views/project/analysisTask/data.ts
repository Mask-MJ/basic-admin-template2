import type { FormSchema } from '@/components/Form'
import type { BasicColumn } from '@/components/Table'

import { getFactoryList } from '@/api/project/factory'
import { getDictTypeList } from '@/api/system/dict'
import { uploadAnalysisTaskPdf, type AnalysisTaskInfo } from '@/api/project/analysisTask'
import { getRuleList } from '@/api/system/rule'

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

export const columns: BasicColumn<AnalysisTaskInfo & { pendingStatus: boolean }>[] = [
  { title: '任务名称', key: 'name', width: 200 },
  { title: '所属最终用户', key: 'factory.name', width: 250 },
  { title: '使用模板', key: 'dict.name', width: 100 },
  {
    title: '状态',
    key: 'status',
    width: 100,
    render: (rowData) => {
      const map = new Map([
        [0, '未执行'],
        [1, '执行中'],
        [2, '已完成'],
        [3, '解析失败']
      ])
      return map.get(rowData.status)
    }
  },
  { title: '创建时间', key: 'createdAt', width: 200 },
  { title: '更新时间', key: 'updatedAt', width: 200 }
]

export const setSchemas: FormSchema[] = [
  { path: 'id', component: 'NInputNumber', show: false },
  { path: 'name', label: '任务名称', required: true, component: 'NInput' },
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
  {
    path: 'dictTypeId',
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
    path: 'ruleId',
    label: '评分规则',
    component: 'ApiSelect',
    required: true,
    componentProps: {
      immediate: true,
      api: getRuleList,
      resultField: 'rows',
      labelField: 'name',
      valueField: 'id'
    }
  },
  {
    path: 'pdf',
    component: 'Upload',
    label: '上传PDF文件',
    required: true,
    componentProps: {
      // api: uploadAnalysisTaskPdf,
      // http://localhost:3100/api/project/analysisTask/uploadPdf
      // http://localhost:3100/api/project/analysis-task/uploadPdf
      action: '/api/project/analysis-task/uploadPdf',
      listType: 'text'
    }
  },
  {
    path: 'remark',
    label: '备注',
    component: 'NInput',
    componentProps: { type: 'textarea', placeholder: '请输入内容' }
  }
]
