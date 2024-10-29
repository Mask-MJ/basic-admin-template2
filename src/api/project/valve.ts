import { defHttp } from '@/utils'

export interface CreatedValve {
  name: string
  factoryId: number
  status?: number
  remark?: string
}

export interface ValveInfo {
  id: number
  /// 位号
  tag: string
  /// 装置
  unit: string
  /// 介质
  fluidName: string
  /// 关键应用
  criticalApplication: string
  /// 阀体序列号
  serialNumber: string
  /// 投用时间
  since: string | number | null
  /// 阀体品牌
  valveBrand: string
  /// 阀体类型
  valveType: string
  /// 阀体口径
  valveSize: string
  /// 阀体连接形式
  valveEndConnection: string
  /// 阀体阀体材质
  valveBodyMaterial: string
  /// 阀盖形式
  valveBonnet: string
  /// 阀内件
  valveTrim: string
  /// 阀体泄漏等级
  valveSeatLeakage: string
  /// 阀体描述
  valveDescription: string
  /// 执行机构品牌
  actuatorBrand: string
  /// 执行机构类型
  actuatorType: string
  /// 执行机构尺寸
  actuatorSize: string
  /// 手轮
  handwheel: string
  /// 执行机构描述
  actuatorDescription: string
  /// 定位器品牌
  positionerBrand: string
  /// 定位器类型
  positionerType: string
  /// 定位器描述
  positionerDescription: string
  /// 附件种类
  accessory: string
  /// 附件品牌
  accessoryBrand: string
  /// 附件类型
  accessoryType: string
  /// 附件数量
  accessoryQuantity: number
  accessoryDescription: string
  /// 仪表品牌
  instrumentBrand: string
  /// 仪表类型
  instrumentType: string
  /// 仪表描述
  instrumentDescription: string
  remark: string
  /// 关联装置id
  deviceId: number
  /// 分析任务id
  analysisTaskId: number
  factoryId: number
  factory: {
    id: number
    name: string
  }
  device: {
    id: number
    name: string
  }
  createBy: string
  updateBy: string
  createdAt: Date
  updatedAt: Date
}

export interface SearchParams {
  page: number
  pageSize: number
  status: number
  factoryId: number
  deviceId: number
  device: string
  tag: string
  serialNumber: string
  valveSeries: string
}

export interface ValveRunInfo {
  /// 阀门id
  id: number
  /// 状态名
  name: string
  /// 状态值
  value: string
  /// 单位
  unit: string
  /// 类型 0: 配置 1: 运行
  type: string
  ///  pdf 树 id
  treeId: number
  /// 读取时间
  time: Date
  /// 阀门id
  valveId: number
}

export interface ValveHistory {
  dataLine: number[]
  predictionLine: {
    linearRegression: number[]
  }
  auxiliaryLine: {
    averageValue: number[]
  }
  times: string[]
}

// export interface ValveScore {
//   id: number
//   name: string
//   value: string
//   unit: string
//   time: Date
//   valveHistoryDataListId: number
// }

enum Api {
  Valve = 'project/valve',
  ValveAll = 'project/valve/all',
  ValveRunInfo = 'project/valve/run-info',
  ValveHistory = 'project/valve/history',
  ValveScore = 'project/valve/score',
  ValveHistoryChart = 'project/valve/historyChart'
}

// 获取阀门列表
export const getValveList = (params?: Partial<SearchParams>) =>
  defHttp.get<ValveInfo[]>({ url: Api.Valve, params })
// 获取全部阀门列表
export const getAllValveList = (params?: Partial<SearchParams>) =>
  defHttp.get<ValveInfo[]>({ url: Api.ValveAll, params })
// 创建阀门
export const createValve = (params: CreatedValve) => defHttp.post({ url: Api.Valve, params })
// 获取单个阀门信息
export const getValveDetail = (id: number) => defHttp.get<ValveInfo>({ url: `${Api.Valve}/${id}` })
// 更新阀门
export const updateValve = (params: Partial<ValveInfo>) =>
  defHttp.patch({ url: `${Api.Valve}/${params.id}`, params })
// 删除阀门
export const deleteValve = (ids: number | string) => defHttp.delete({ url: `${Api.Valve}/${ids}` })
// 获取阀门运行数据
export const getValveRunInfo = (id: number) =>
  defHttp.get<ValveRunInfo>({ url: `${Api.ValveRunInfo}/${id}` })
// 获取阀门历史数据
export const getValveHistoryList = (params: { valveId: number }) =>
  defHttp.get({ url: Api.ValveHistory, params })
// 获取阀门历史数据详情
export const getValveHistoryDetail = (id: number) =>
  defHttp.get<ValveRunInfo>({ url: `${Api.ValveHistory}/${id}` })
// 获取阀门健康评分
export const getValveScore = (id: number) => defHttp.get({ url: `${Api.ValveScore}/${id}` })
// 获取阀门运行历史数据
export const getValveHistoryChart = (params: {
  valveId: number
  keywordId: number
  beginTime?: number
  endTime?: number
}) => defHttp.get<ValveHistory>({ url: `${Api.ValveHistoryChart}`, params })
