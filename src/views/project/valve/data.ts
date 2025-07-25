import type { FormSchema } from '@/components/Form'
import type { BasicColumn } from '@/components/Table'

import { type FactoryInfo, getFactoryList } from '@/api/project/factory'
import { getDeviceList } from '@/api/project/device'

export const searchSchemas: FormSchema[] = [
  {
    path: 'factoryId',
    label: '最终用户',
    component: 'ApiTreeSelect',
    span: 6,
    componentProps: {
      immediate: true,
      api: getFactoryList,
      labelField: 'name',
      keyField: 'id',
      cascade: true
    }
  },
  { path: 'tag', label: '位号', component: 'NInput', span: 6 },
  { path: 'device', label: '装置', component: 'NInput', span: 6 },
  { path: 'serialNumber', label: '阀体序列号', component: 'NInput', span: 6 },
  { path: 'valveSeries', label: '阀体系列', component: 'NInput', span: 6 },
  {
    path: '[beginTime, endTime]',
    component: 'NDatePicker',
    label: '创建时间',
    span: 12,
    componentProps: { type: 'daterange' }
  }
]

export const columns: BasicColumn<FactoryInfo & { pendingStatus: boolean }>[] = [
  { title: '最终用户', key: 'factory.name', width: 300 },
  { title: '装置', key: 'device.name', width: 150 },
  { title: '位号', key: 'tag', width: 150 },
  { title: '阀体序列号', key: 'serialNumber', width: 150 },
  { title: '阀体系列', key: 'valveSeries', width: 100 },
  {
    title: '创建时间',
    key: 'createdAt',
    width: 100,
    render: ({ createdAt }) => createdAt.split(' ')[0]
  },
  {
    title: '更新时间',
    key: 'updatedAt',
    width: 100,
    render: ({ updatedAt }) => updatedAt.split(' ')[0]
  }
]

export const setSchemas: FormSchema[] = [
  { path: 'id', component: 'NInputNumber', show: false },
  { path: '', label: '', component: 'NDivider', renderComponentContent: '基础属性' },
  { path: 'tag', label: '位号', required: true, component: 'NInput', span: 8 },
  {
    path: 'factoryId',
    label: '所属最终用户',
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
  // { path: 'unit', label: '装置', component: 'NInput', span: 8 },
  { path: 'no', label: '序号', component: 'NInput', span: 8 },
  { path: 'fluidName', label: '介质', component: 'NInput', span: 8 },
  { path: 'criticalApplication', label: '关键应用', component: 'NInput', span: 8 },
  { path: 'since', label: '投用时间', component: 'NDatePicker', span: 8 },
  { path: '', label: '', component: 'NDivider', renderComponentContent: '阀体' },
  { path: 'serialNumber', label: '阀体序列号', component: 'NInput', span: 8 },
  { path: 'valveBrand', label: '阀体品牌', component: 'NInput', span: 8 },
  { path: 'valveSeries', label: '阀体系列', component: 'NInput', span: 8 },
  { path: 'valveCv', label: '阀体流量系数', component: 'NInput', span: 8 },
  { path: 'valveSize', label: '阀体口径', component: 'NInput', span: 8 },
  { path: 'valveRating', label: '阀体磅级', component: 'NInput', span: 8 },
  { path: 'valveEndConnection', label: '阀体连接形式', component: 'NInput', span: 8 },
  { path: 'valveStemSize', label: '阀体阀杆尺寸', component: 'NInput', span: 8 },
  { path: 'valveBodyMaterial', label: '阀体材质', component: 'NInput', span: 8 },
  { path: 'valveBonnet', label: '阀盖形式', component: 'NInput', span: 8 },
  { path: 'valveTrim', label: '流量特性', component: 'NInput', span: 8 },
  { path: 'valveSeatLeakage', label: '阀体泄漏等级', component: 'NInput', span: 8 },
  // { path: 'valveDescription', label: '阀体描述', component: 'NInput', span: 24 },
  { path: '', label: '', component: 'NDivider', renderComponentContent: '执行机构' },
  { path: 'actuatorBrand', label: '执行机构品牌', component: 'NInput', span: 8 },
  { path: 'actuatorSeries', label: '执行机构系列', component: 'NInput', span: 8 },
  { path: 'actuatorSize', label: '执行机构尺寸', component: 'NInput', span: 8 },
  { path: 'actuatorFailurePosition', label: '故障位置', component: 'NInput', span: 8 },
  { path: 'handwheel', label: '手轮', component: 'NInput', span: 8 },
  { path: 'stroke', label: '行程', component: 'NInput', span: 8 },
  // { path: 'actuatorDescription', label: '执行机构描述', component: 'NInput', span: 8 },
  { path: '', label: '', component: 'NDivider', renderComponentContent: '过滤减压阀' },
  { path: 'regulatorBrand', label: '过滤减压阀品牌', component: 'NInput', span: 8 },
  { path: 'regulatorModel', label: '过滤减压阀型号', component: 'NInput', span: 8 },
  { path: '', label: '', component: 'NDivider', renderComponentContent: '定位器' },
  { path: 'positionerBrand', label: '定位器品牌', component: 'NInput', span: 8 },
  { path: 'positionerModel', label: '定位器型号', component: 'NInput', span: 8 },
  { path: '', label: '', component: 'NDivider', renderComponentContent: '电磁阀' },
  { path: 'sovBrand', label: '电磁阀品牌', component: 'NInput', span: 8 },
  { path: 'sovModel', label: '电磁阀型号', component: 'NInput', span: 8 },
  { path: 'sovQty', label: '电磁阀数量', component: 'NInput', span: 8 },
  { path: '', label: '', component: 'NDivider', renderComponentContent: '限位开关' },
  { path: 'lsBrand', label: '限位开关品牌', component: 'NInput', span: 8 },
  { path: 'lsModel', label: '限位开关型号', component: 'NInput', span: 8 },
  { path: 'lsQty', label: '限位开关数量', component: 'NInput', span: 8 },
  { path: '', label: '', component: 'NDivider', renderComponentContent: '保位阀' },
  { path: 'tripValveBrand', label: '保位阀品牌', component: 'NInput', span: 8 },
  { path: 'tripValveModel', label: '保位阀型号', component: 'NInput', span: 8 },
  { path: '', label: '', component: 'NDivider', renderComponentContent: '放大器' },
  { path: 'vbBrand', label: '放大器品牌', component: 'NInput', span: 8 },
  { path: 'vbModel', label: '放大器型号', component: 'NInput', span: 8 },
  { path: 'vbQty', label: '放大器数量', component: 'NInput', span: 8 },
  { path: '', label: '', component: 'NDivider', renderComponentContent: '快排阀' },
  { path: 'qeBrand', label: '快排阀品牌', component: 'NInput', span: 8 },
  { path: 'qeModel', label: '快排阀型号', component: 'NInput', span: 8 },
  { path: 'qeQty', label: '快排阀数量', component: 'NInput', span: 8 },
  { path: '', label: '', component: 'NDivider', renderComponentContent: '气控阀' },
  { path: 'pilotBrand', label: '气控阀品牌', component: 'NInput', span: 8 },
  { path: 'pilotModel', label: '气控阀型号', component: 'NInput', span: 8 },
  { path: 'pilotQty', label: '气控阀数量', component: 'NInput', span: 8 },
  { path: '', label: '', component: 'NDivider', renderComponentContent: '信号比较器' },
  { path: 'signalComparatorBrand', label: '信号比较器品牌', component: 'NInput', span: 8 },
  { path: 'signalComparatorModel', label: '信号比较器型号', component: 'NInput', span: 8 },
  { path: '', label: '', component: 'NDivider', renderComponentContent: '备件' },
  { path: 'parts', label: '备件', component: 'NInput' }
]
