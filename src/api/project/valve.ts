import { defHttp } from '@/utils'

export interface CreatedValve {
  name: string
  factoryId: number
  status?: number
  remark?: string
}

export interface ValveInfo {
  id: number
  /// 阀门位号
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
  since: string | number
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
  createBy: string
  updateBy: string
  createdAt: Date
  updatedAt: Date
}

export interface SearchParams {
  page: number
  pageSize: number
  name: string
  status: number
  factoryId: number
  deviceId: number
}

enum Api {
  Valve = 'project/valve'
}

// 获取阀门列表
export const getValveList = (params?: Partial<SearchParams>) =>
  defHttp.get<ValveInfo[]>({ url: Api.Valve, params })
// 创建阀门
export const createValve = (params: CreatedValve) => defHttp.post({ url: Api.Valve, params })
// 获取单个阀门信息
export const getValveDetail = (id: number) => defHttp.get<ValveInfo>({ url: `${Api.Valve}/${id}` })
// 更新阀门
export const updateValve = (params: Partial<ValveInfo>) =>
  defHttp.patch({ url: `${Api.Valve}/${params.id}`, params })
// 删除阀门
export const deleteValve = (ids: number | string) => defHttp.delete({ url: `${Api.Valve}/${ids}` })

// 获取阀门历史数据
export const getValveHistoryList = async () => {
  return [
    { id: 1, name: 'DVW-R1', createdAt: '2023-10-01' },
    { id: 2, name: 'DVW-R1', createdAt: '2022-12-02' },
    { id: 3, name: 'DVW-R1', createdAt: '2022-10-03' }
  ]
}
