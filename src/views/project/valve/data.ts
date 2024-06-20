import type { FormSchema } from '@/components/Form'
import type { BasicColumn } from '@/components/Table'

import { type FactoryInfo, getFactoryList } from '@/api/project/factory'
import { getDeviceList } from '@/api/project/device'

export const searchSchemas: FormSchema[] = [
  { path: 'tag', label: '阀门位号', component: 'NInput', span: 8 },
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
  { title: '阀门位号', key: 'tag', width: 200 },
  { title: '所属工厂', key: 'factory.name', width: 300 },
  { title: '阀门品牌', key: 'brand', width: 100 },
  { title: '阀门型号', key: 'model', width: 100 },
  { title: '创建时间', key: 'createdAt', width: 200 }
]

export const setSchemas: FormSchema[] = [
  { path: 'id', component: 'NInputNumber', show: false },
  { path: 'tag', label: '阀门位号', required: true, component: 'NInput', span: 8 },
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
    ifShow: ({ values }) => !!values.factoryId,
    span: 8,
    componentProps: ({ formModel }) => {
      return {
        immediate: true,
        api: getDeviceList,
        params: { factoryId: formModel.factoryId },
        resultField: 'rows',
        labelField: 'name',
        valueField: 'id'
      }
    }
  },
  { path: 'unit', label: '装置', component: 'NInput', span: 8 },
  { path: 'fluidName', label: '介质', component: 'NInput', span: 8 },
  { path: 'serialNumber', label: '阀体序列号', component: 'NInput', span: 8 },
  { path: 'since', label: '投用时间', component: 'NDatePicker', span: 8 },
  { path: 'valveBrand', label: '阀体品牌', component: 'NInput', span: 8 },
  { path: 'valveType', label: '阀体类型', component: 'NInput', span: 8 },
  { path: 'valveSize', label: '阀体口径', component: 'NInput', span: 8 },
  { path: 'valveBodyMaterial', label: '阀体材质', component: 'NInput', span: 8 },
  { path: 'valveEndConnection', label: '阀体连接形式', component: 'NInput', span: 8 },
  { path: 'valveBonnet', label: '阀盖形式', component: 'NInput', span: 8 },
  { path: 'valveTrim', label: '阀内件', component: 'NInput', span: 8 },
  { path: 'valveSeatLeakage', label: '阀体泄漏等级', component: 'NInput', span: 8 },
  { path: 'criticalApplication', label: '关键应用', component: 'NInput', span: 24 },
  { path: 'valveDescription', label: '阀体描述', component: 'NInput', span: 24 },
  { path: '', label: '', component: 'NDivider', renderComponentContent: '执行机构' },
  { path: 'actuatorBrand', label: '执行机构品牌', component: 'NInput', span: 8 },
  { path: 'actuatorType', label: '执行机构类型', component: 'NInput', span: 8 },
  { path: 'handwheel', label: '手轮', component: 'NInput', span: 8 },
  { path: 'actuatorSize', label: '执行机构尺寸', component: 'NInput', span: 8 },
  { path: 'actuatorDescription', label: '执行机构描述', component: 'NInput', span: 8 },
  { path: '', label: '', component: 'NDivider', renderComponentContent: '定位器' },
  { path: 'positionerBrand', label: '定位器品牌', component: 'NInput', span: 8 },
  { path: 'positionerType', label: '定位器类型', component: 'NInput', span: 8 },
  { path: 'positionerDescription', label: '定位器描述', component: 'NInput', span: 8 },
  { path: '', label: '', component: 'NDivider', renderComponentContent: '附件' },
  { path: 'accessory', label: '附件种类', component: 'NInput', span: 8 },
  { path: 'accessoryBrand', label: '附件品牌', component: 'NInput', span: 8 },
  { path: 'accessoryType', label: '附件类型', component: 'NInput', span: 8 },
  { path: 'accessoryQuantity', label: '附件数量', component: 'NInputNumber', span: 8 },
  { path: 'accessoryDescription', label: '附件描述', component: 'NInput', span: 8 },
  { path: '', label: '', component: 'NDivider', renderComponentContent: '仪表' },
  { path: 'instrumentBrand', label: '仪表品牌', component: 'NInput', span: 8 },
  { path: 'instrumentType', label: '仪表类型', component: 'NInput', span: 8 },
  { path: 'instrumentDescription', label: '仪表描述', component: 'NInput', span: 8 },
  {
    path: 'remark',
    label: '备注',
    component: 'NInput',
    componentProps: { type: 'textarea', placeholder: '请输入内容' }
  }
]
