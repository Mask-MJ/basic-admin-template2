export const FF_Online = [
  {
    name: 'Monitor',
    depth: 1,
    data: [
      { name: 'Setpoint', value: 0.0, unit: '%' },
      { name: 'Travel Dechar', value: 0.52, unit: '%' },
      { name: 'Travel Target', value: -25.0, unit: '%' },
      { name: 'Travel', value: 0.52, unit: '%' },
      { name: 'Setpoint_D', value: 'OPEN', unit: '' },
      { name: 'Travel_D', value: 'CLOSED', unit: '' },
      { name: 'Travel Deviation', value: 0.52, unit: '%' },
      { name: 'Pressure A', value: 61.72, unit: 'psi' },
      { name: 'Pressure B', value: 0.18, unit: 'psi' },
      { name: 'A Minus B', value: 61.54, unit: 'psi' },
      { name: 'B Minus A', value: -61.54, unit: 'psi' },
      { name: 'Supply Pressure', value: 61.68, unit: 'psi' },
      { name: 'Tvl Press State', value: 'Tvl', unit: '' },
      { name: 'Drive Signal', value: 100.0, unit: '%' },
      { name: 'Protection', value: 'None', unit: '' },
      { name: 'PD Inside Status', value: 'Running', unit: '' },
      { name: 'Travel Count', value: 3095, unit: '' },
      { name: 'Cycle Count', value: 13039, unit: 'counts' },
      { name: 'Travel Accumulator', value: 23150, unit: '%' },
      { name: 'Input Characteristic', value: 'Linear', unit: '%' },
      { name: 'Temperature', value: 91.98, unit: 'F' },
      { name: 'Travel Sensor', value: 'Detected', unit: '' }
    ]
  },
  {
    name: 'Instrument',
    depth: 1,
    data: [
      {
        name: 'TRANSDUCER',
        depth: 2,
        data: [
          { name: 'Instrument Family', value: 'DVC6200f' },
          { name: 'Tag Description', value: '1341-FV-81303' },
          { name: 'Calibration Person', value: '' },
          { name: 'Calibration Loc.', value: '' },
          { name: 'Calibration Date', value: '2023-7-21 19:56:00' },
          { name: 'Last Travel Calib Type', value: 'Auto' }
        ]
      },
      {
        name: 'RESOURCE',
        depth: 2,
        data: [
          { name: 'Tag Description', value: '' },
          { name: 'Field Serial Number', value: 'F003005609' },
          { name: 'Manufacturer', value: 'Fisher Controls' }
        ]
      }
    ]
  }
]

export const hard_Online = [
  {
    name: '基本',
    key: 'Basic',
    data: [
      {
        name: '设备标识',
        key: 'Device Identification',
        data: [
          {
            name: '标签',
            key: 'Tag',
            data: [
              {
                name: 'HART 标签',
                key: 'HART Tag',
                value: 'DVW-R1'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: '状态监视器',
    key: 'Status Monitor',
    data: [
      {
        name: '监视器',
        key: 'Monitor',
        data: [
          {
            name: '',
            key: '',
            data: [
              {
                name: '行程',
                key: 'Travel',
                value: '62.59 %'
              },
              {
                name: '行程偏差',
                key: 'Travel Deviation',
                value: '0.09 %'
              },
              {
                name: '供气压力',
                key: 'Supply Pressure',
                value: '5.01 bar'
              },
              {
                name: '驱动信号',
                key: 'Drive Signal',
                value: '70.44 %'
              },
              {
                name: '仪表模式',
                key: 'Instrument Mode',
                value: '投用状态'
              },
              {
                name: '循环计数',
                key: 'Cycle Count',
                value: '910 counts'
              },
              {
                name: '行程累计器',
                key: 'Travel Accumulator',
                value: '82150 %'
              },
              {
                name: '放大器调整',
                key: 'Relay Adjustment',
                value: '63.52 %'
              },
              {
                name: '最高温度记录',
                key: 'Max Recorded Temp',
                value: '30.13 C'
              },
              {
                name: '运行时间',
                key: 'Run Time',
                value: '123 days'
              },
              {
                name: '启动次数',
                key: 'Number of Powerups',
                value: '56'
              }
            ]
          }
        ]
      },
      {
        name: '设备',
        key: 'Device',
        data: [
          {
            name: '',
            key: '',
            data: [
              {
                name: '仪表等级',
                key: 'Instrument Level',
                value: 'PD'
              },
              {
                name: '阀门型式',
                key: 'Valve Style',
                value: '旋转轴'
              },
              {
                name: '执行机构类型',
                key: 'Actuator Style',
                value: '不带弹簧双动作气缸式'
              },
              {
                name: '标定日期',
                key: 'Calibration Date',
                value: '2 Jul 2023'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: '阶跃响应',
    key: 'Step Response',
    data: [
      {
        name: '组态',
        key: 'Configuration',
        data: [
          {
            name: '',
            key: '',
            data: [
              {
                name: '反馈连接方式',
                key: 'Feedback Connection',
                value: '旋转式阵列'
              },
              {
                name: '零功率状态:',
                key: 'Zero Power Condition',
                value: '阀门开启'
              }
            ]
          },
          {
            name: '整定',
            key: 'Tuning',
            data: [
              {
                name: '行程整定参数',
                key: 'Travel Tuning Set',
                value: '专家级'
              },
              {
                name: '零功率状态:',
                key: 'Zero Power Condition',
                value: '阀门开启'
              }
            ]
          },
          {
            name: '增益',
            key: 'Tuning',
            data: [
              {
                name: '比例',
                key: 'Proportional',
                value: '6.80'
              },
              {
                name: '速度',
                key: 'Velocity',
                value: '4.00'
              },
              {
                name: 'MLF',
                key: 'MLF',
                value: '45.00'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: '完全扫描',
    key: 'Total Scan',
    data: [
      {
        name: '输入',
        key: 'Inputs',
        data: [
          {
            name: '',
            key: '',
            data: [
              {
                name: '扫描时间',
                key: 'Scan Time',
                value: '50.0 秒'
              }
            ]
          },
          {
            name: '已分析的数据',
            key: 'Analyzed Data',
            data: [
              {
                name: '平均动态误差',
                key: 'Avg. Dynamic Error',
                value: '38.33%'
              },
              {
                name: '动态线性度（独立）:',
                key: 'Dyn. Linearity (Ind.)',
                value: '1.46%'
              },
              {
                name: '平均扭矩:',
                key: 'Average Torque:',
                value: '131 lbf.in'
              },
              {
                name: '弹簧预紧力:',
                key: 'Bench Se',
                value: 'NA'
              }
            ]
          },
          {
            name: '增益',
            key: 'Tuning',
            data: [
              {
                name: '比例',
                key: 'Proportional',
                value: '6.80'
              },
              {
                name: '速度',
                key: 'Velocity',
                value: '4.00'
              },
              {
                name: 'MLF',
                key: 'MLF',
                value: '45.00'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: '完全扫描-规格表',
    key: 'Total Scan-Spec Sheet',
    data: [
      {
        name: '阀门',
        key: 'Valve',
        data: [
          {
            name: '',
            key: '',
            data: [
              {
                name: '额定行程',
                key: 'Rated Travel',
                value: '90.0 deg'
              },
              {
                name: '实际行程',
                key: 'Actual Travel',
                value: '96.10088 deg'
              }
            ]
          }
        ]
      },
      {
        name: '执行机构',
        key: 'Actuator',
        data: [
          {
            name: '',
            key: '',
            data: [
              {
                name: '下方弹簧预紧力',
                key: 'Lower Bench Set',
                value: '0.0 psi'
              },
              {
                name: '上方弹簧预紧力',
                key: 'Upper Bench Set',
                value: '0.0 psi'
              }
            ]
          }
        ]
      }
    ]
  }
]

export const score = [
  {
    infor: {
      总分: 0,
      规则评分: {
        r行程累计: 100,
        供气压力: 70,
        供气压力性能诊断: 60,
        启动次数: 50,
        平均扭矩: 100,
        平均死区: 100,
        报警: 100,
        放大器调整: 100,
        最高温度记录: 100,
        行程偏差: 100,
        驱动信号: 100
      },
      趋势评分: {}
    },
    uptotime: 'Mon, 17 Jul 2023 00:00:00 GMT',
    valveid: 3
  }
]

export const history = {
  rows: [
    {
      id: 2010,
      tag: 'FV101_4',
      valveId: 1815,
      time: '2024-11-15 08:00:00',
      valveHistoryData: [
        {
          id: 648787,
          name: '行程',
          value: '-0.22',
          unit: '%',
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648788,
          name: '行程偏差',
          value: '0.22',
          unit: '%',
          type: '1',
          treeId: 85,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648789,
          name: '供气压力',
          value: '56.44',
          unit: 'psi',
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648790,
          name: '驱动信号',
          value: '0.00',
          unit: '%',
          type: '1',
          treeId: 85,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648791,
          name: '仪表模式',
          value: '投用状态',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648792,
          name: '循环计数',
          value: '5126',
          unit: 'counts',
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648793,
          name: '行程累计器',
          value: '111131',
          unit: '%',
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648794,
          name: '放大器调整',
          value: 'N/A',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648795,
          name: '最高温度记录',
          value: '31.56',
          unit: 'C',
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648796,
          name: '运行时间',
          value: '1362',
          unit: 'days',
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648797,
          name: '启动次数',
          value: '61',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648798,
          name: '仪表等级',
          value: 'PD',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648799,
          name: '阀门型式',
          value: '直行程阀',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648800,
          name: '执行机构类型',
          value: '弹簧膜片式',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648801,
          name: '标定日期',
          value: '09 Apr 2024',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648802,
          name: '行程高',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648803,
          name: '行程低',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648804,
          name: '行程高高',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648805,
          name: '行程低低',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648806,
          name: '行程偏差',
          value: '----',
          unit: null,
          type: '1',
          treeId: 87,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648807,
          name: '循环计数高',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648808,
          name: '行程累计高',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648809,
          name: '驱动信号',
          value: '----',
          unit: null,
          type: '1',
          treeId: 87,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648810,
          name: '供气压力低',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648811,
          name: '组态已更改',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648812,
          name: '回路电流验证报警',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648813,
          name: '内部传感器超出限制范围',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648814,
          name: '变量超出范围',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648815,
          name: '处于标定模式',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648816,
          name: '自动校验进行中',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648817,
          name: '诊断进行中',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648818,
          name: '小回路传感器故障',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648819,
          name: '行程传感器故障',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648820,
          name: '温度传感器故障',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648821,
          name: '压力传感器故障',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648822,
          name: '驱动电流故障',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648823,
          name: '关键 NVM 故障',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648824,
          name: '闪存完整性故障',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648825,
          name: '参考电压故障',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648826,
          name: '报警记录非空',
          value: '开',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648827,
          name: '报警记录已满',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648828,
          name: '积分器饱和高',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648829,
          name: '积分器饱和低',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648830,
          name: '关机激活',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648831,
          name: '压力偏差',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648832,
          name: '非关键 NVM 故障',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648833,
          name: '仪表时间为大概值',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648834,
          name: '诊断数据可用',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648835,
          name: '要求手动复位',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648836,
          name: '行程高限位/截止',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648837,
          name: '行程低限位/截止',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648838,
          name: '压力切换激活',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648839,
          name: 'NVM 过度写入',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648840,
          name: '供气压力高',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648841,
          name: '端口 A 过压',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648842,
          name: 'SOV 测试最低要求压降',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648843,
          name: 'SOV 测试最高可允许压降',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648844,
          name: '供气压力性能诊断',
          value: '',
          unit: null,
          type: '2',
          treeId: 88,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648845,
          name: '行程偏差性能诊断',
          value: '',
          unit: null,
          type: '2',
          treeId: 89,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648846,
          name: 'I/P和放大器完整性性能诊断',
          value: '',
          unit: null,
          type: '2',
          treeId: 90,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648847,
          name: '放大器调整性能诊断',
          value: '',
          unit: null,
          type: '2',
          treeId: 91,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648848,
          name: '空气质量流量性能诊断',
          value: '',
          unit: null,
          type: '2',
          treeId: 92,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648849,
          name: '阀门摩擦力性能诊断',
          value: '',
          unit: null,
          type: '2',
          treeId: 93,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648850,
          name: '平均扭矩',
          value: '',
          unit: null,
          type: '1',
          treeId: 93,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648851,
          name: '平均摩擦力',
          value: '',
          unit: null,
          type: '1',
          treeId: 93,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648852,
          name: '平均死区',
          value: '',
          unit: null,
          type: '1',
          treeId: 93,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648853,
          name: '扫描时间',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648854,
          name: '平均动态误差',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648855,
          name: '动态线性度（独立）',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648856,
          name: '平均扭矩',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648857,
          name: '弹簧预紧力',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648858,
          name: '测试状态阀座负载',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648859,
          name: '投用状态阀座负载',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648860,
          name: '所需阀座负载',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648861,
          name: '预期总摩擦力',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648862,
          name: '类型',
          value: '',
          unit: null,
          type: '1',
          treeId: 106,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648863,
          name: '尺寸',
          value: '',
          unit: null,
          type: '1',
          treeId: 106,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648864,
          name: '额定行程',
          value: '',
          unit: null,
          type: '1',
          treeId: 105,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648865,
          name: '实际行程',
          value: '',
          unit: null,
          type: '1',
          treeId: 105,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648866,
          name: '阀杆直径',
          value: '',
          unit: null,
          type: '1',
          treeId: 105,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648867,
          name: '填料类型',
          value: '',
          unit: null,
          type: '1',
          treeId: 105,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648868,
          name: '增速器',
          value: '',
          unit: null,
          type: '1',
          treeId: 105,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648869,
          name: '有效面积',
          value: '',
          unit: null,
          type: '1',
          treeId: 105,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648870,
          name: '下方弹簧预紧力',
          value: '',
          unit: null,
          type: '1',
          treeId: 105,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648871,
          name: '上方弹簧预紧力',
          value: '',
          unit: null,
          type: '1',
          treeId: 105,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648872,
          name: '反馈连接方式',
          value: '',
          unit: null,
          type: '1',
          treeId: 110,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648873,
          name: '零功率状态',
          value: '',
          unit: null,
          type: '1',
          treeId: 110,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648874,
          name: '行程整定参数',
          value: '',
          unit: null,
          type: '1',
          treeId: 110,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648875,
          name: '比例',
          value: '',
          unit: null,
          type: '1',
          treeId: 110,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648876,
          name: '速度',
          value: '',
          unit: null,
          type: '1',
          treeId: 110,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648877,
          name: 'MLF',
          value: '',
          unit: null,
          type: '1',
          treeId: 110,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648878,
          name: '截止和表征',
          value: '',
          unit: null,
          type: '1',
          treeId: 110,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648879,
          name: '死区时间最大值及步数',
          value: '',
          unit: null,
          type: '1',
          treeId: 117,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648880,
          name: '超量 最大值及步数',
          value: '',
          unit: null,
          type: '1',
          treeId: 117,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648881,
          name: '误差 最大值及步数',
          value: '',
          unit: null,
          type: '1',
          treeId: 117,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648882,
          name: '第10步行程时间',
          value: '',
          unit: null,
          type: '1',
          treeId: 117,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648883,
          name: '第11步行程时间',
          value: '',
          unit: null,
          type: '1',
          treeId: 117,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648884,
          name: '第10步误差',
          value: '',
          unit: null,
          type: '1',
          treeId: 117,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        },
        {
          id: 648885,
          name: '第11步误差',
          value: '',
          unit: null,
          type: '1',
          treeId: 117,
          valveHistoryDataListId: 2010,
          time: '2024-11-15T00:00:00.000Z'
        }
      ]
    },
    {
      id: 2009,
      tag: 'FV101_4',
      valveId: 1815,
      time: '2024-10-28 08:00:00',
      valveHistoryData: [
        {
          id: 649282,
          name: '行程',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649283,
          name: '行程偏差',
          value: '',
          unit: null,
          type: '1',
          treeId: 85,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649284,
          name: '供气压力',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649285,
          name: '驱动信号',
          value: '',
          unit: null,
          type: '1',
          treeId: 85,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649286,
          name: '仪表模式',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649287,
          name: '循环计数',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649288,
          name: '行程累计器',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649289,
          name: '放大器调整',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649290,
          name: '最高温度记录',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649291,
          name: '运行时间',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649292,
          name: '启动次数',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649293,
          name: '仪表等级',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649294,
          name: '阀门型式',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649295,
          name: '执行机构类型',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649296,
          name: '标定日期',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649297,
          name: '行程高',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649298,
          name: '行程低',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649299,
          name: '行程高高',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649300,
          name: '行程低低',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649301,
          name: '行程偏差',
          value: '',
          unit: null,
          type: '1',
          treeId: 87,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649302,
          name: '循环计数高',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649303,
          name: '行程累计高',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649304,
          name: '驱动信号',
          value: '',
          unit: null,
          type: '1',
          treeId: 87,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649305,
          name: '供气压力低',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649306,
          name: '组态已更改',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649307,
          name: '回路电流验证报警',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649308,
          name: '内部传感器超出限制范围',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649309,
          name: '变量超出范围',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649310,
          name: '处于标定模式',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649311,
          name: '自动校验进行中',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649312,
          name: '诊断进行中',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649313,
          name: '小回路传感器故障',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649314,
          name: '行程传感器故障',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649315,
          name: '温度传感器故障',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649316,
          name: '压力传感器故障',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649317,
          name: '驱动电流故障',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649318,
          name: '关键 NVM 故障',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649319,
          name: '闪存完整性故障',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649320,
          name: '参考电压故障',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649321,
          name: '报警记录非空',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649322,
          name: '报警记录已满',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649323,
          name: '积分器饱和高',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649324,
          name: '积分器饱和低',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649325,
          name: '关机激活',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649326,
          name: '压力偏差',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649327,
          name: '非关键 NVM 故障',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649328,
          name: '仪表时间为大概值',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649329,
          name: '诊断数据可用',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649330,
          name: '要求手动复位',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649331,
          name: '行程高限位/截止',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649332,
          name: '行程低限位/截止',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649333,
          name: '压力切换激活',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649334,
          name: 'NVM 过度写入',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649335,
          name: '供气压力高',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649336,
          name: '端口 A 过压',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649337,
          name: 'SOV 测试最低要求压降',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649338,
          name: 'SOV 测试最高可允许压降',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649339,
          name: '供气压力性能诊断',
          value: '',
          unit: null,
          type: '2',
          treeId: 88,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649340,
          name: '行程偏差性能诊断',
          value: '',
          unit: null,
          type: '2',
          treeId: 89,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649341,
          name: 'I/P和放大器完整性性能诊断',
          value: '',
          unit: null,
          type: '2',
          treeId: 90,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649342,
          name: '放大器调整性能诊断',
          value: '',
          unit: null,
          type: '2',
          treeId: 91,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649343,
          name: '空气质量流量性能诊断',
          value: '',
          unit: null,
          type: '2',
          treeId: 92,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649344,
          name: '阀门摩擦力性能诊断',
          value:
            "{'未检测到活动报警': '', '供气压力正常': '', '分析正在进行': '行程往复次数达到足以计算出可信的值后，将报告摩擦力估计值。', '不确定摩擦力': '？?？？？?？？ = 0.00 Ibf?？??????？？??？？??？X?？10.00 - 100.00 Ibf?? 可能原因： 行程往复不足，无法计算出可信的摩擦力值。'}",
          unit: null,
          type: '2',
          treeId: 93,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649345,
          name: '平均扭矩',
          value: '',
          unit: null,
          type: '1',
          treeId: 93,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649346,
          name: '平均摩擦力',
          value: 'N/A',
          unit: null,
          type: '1',
          treeId: 93,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649347,
          name: '平均死区',
          value: 'N/A',
          unit: null,
          type: '1',
          treeId: 93,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649348,
          name: '扫描时间',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649349,
          name: '平均动态误差',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649350,
          name: '动态线性度（独立）',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649351,
          name: '平均扭矩',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649352,
          name: '弹簧预紧力',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649353,
          name: '测试状态阀座负载',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649354,
          name: '投用状态阀座负载',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649355,
          name: '所需阀座负载',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649356,
          name: '预期总摩擦力',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649357,
          name: '类型',
          value: '',
          unit: null,
          type: '1',
          treeId: 106,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649358,
          name: '尺寸',
          value: '',
          unit: null,
          type: '1',
          treeId: 106,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649359,
          name: '额定行程',
          value: '',
          unit: null,
          type: '1',
          treeId: 105,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649360,
          name: '实际行程',
          value: '',
          unit: null,
          type: '1',
          treeId: 105,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649361,
          name: '阀杆直径',
          value: '',
          unit: null,
          type: '1',
          treeId: 105,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649362,
          name: '填料类型',
          value: '',
          unit: null,
          type: '1',
          treeId: 105,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649363,
          name: '增速器',
          value: '',
          unit: null,
          type: '1',
          treeId: 105,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649364,
          name: '有效面积',
          value: '',
          unit: null,
          type: '1',
          treeId: 105,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649365,
          name: '下方弹簧预紧力',
          value: '',
          unit: null,
          type: '1',
          treeId: 105,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649366,
          name: '上方弹簧预紧力',
          value: '',
          unit: null,
          type: '1',
          treeId: 105,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649367,
          name: '反馈连接方式',
          value: '',
          unit: null,
          type: '1',
          treeId: 110,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649368,
          name: '零功率状态',
          value: '',
          unit: null,
          type: '1',
          treeId: 110,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649369,
          name: '行程整定参数',
          value: '',
          unit: null,
          type: '1',
          treeId: 110,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649370,
          name: '比例',
          value: '',
          unit: null,
          type: '1',
          treeId: 110,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649371,
          name: '速度',
          value: '',
          unit: null,
          type: '1',
          treeId: 110,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649372,
          name: 'MLF',
          value: '',
          unit: null,
          type: '1',
          treeId: 110,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649373,
          name: '截止和表征',
          value: '',
          unit: null,
          type: '1',
          treeId: 110,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649374,
          name: '死区时间最大值及步数',
          value: '',
          unit: null,
          type: '1',
          treeId: 117,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649375,
          name: '超量 最大值及步数',
          value: '',
          unit: null,
          type: '1',
          treeId: 117,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649376,
          name: '误差 最大值及步数',
          value: '',
          unit: null,
          type: '1',
          treeId: 117,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649377,
          name: '第10步行程时间',
          value: '',
          unit: null,
          type: '1',
          treeId: 117,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649378,
          name: '第11步行程时间',
          value: '',
          unit: null,
          type: '1',
          treeId: 117,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649379,
          name: '第10步误差',
          value: '',
          unit: null,
          type: '1',
          treeId: 117,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        },
        {
          id: 649380,
          name: '第11步误差',
          value: '',
          unit: null,
          type: '1',
          treeId: 117,
          valveHistoryDataListId: 2009,
          time: '2024-10-28T00:00:00.000Z'
        }
      ]
    },
    {
      id: 2013,
      tag: 'FV101_4',
      valveId: 1815,
      time: '2024-10-27 08:00:00',
      valveHistoryData: [
        {
          id: 651262,
          name: '行程',
          value: '-0.21',
          unit: '%',
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651263,
          name: '行程偏差',
          value: '0.21',
          unit: '%',
          type: '1',
          treeId: 85,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651264,
          name: '供气压力',
          value: '56.28',
          unit: 'psi',
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651265,
          name: '驱动信号',
          value: '0.00',
          unit: '%',
          type: '1',
          treeId: 85,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651266,
          name: '仪表模式',
          value: '投用状态',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651267,
          name: '循环计数',
          value: '5126',
          unit: 'counts',
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651268,
          name: '行程累计器',
          value: '111131',
          unit: '%',
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651269,
          name: '放大器调整',
          value: 'N/A',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651270,
          name: '最高温度记录',
          value: '31.56',
          unit: 'C',
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651271,
          name: '运行时间',
          value: '1343',
          unit: 'days',
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651272,
          name: '启动次数',
          value: '61',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651273,
          name: '仪表等级',
          value: 'PD',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651274,
          name: '阀门型式',
          value: '直行程阀',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651275,
          name: '执行机构类型',
          value: '弹簧膜片式',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651276,
          name: '标定日期',
          value: '09 Apr 2024',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651277,
          name: '行程高',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651278,
          name: '行程低',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651279,
          name: '行程高高',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651280,
          name: '行程低低',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651281,
          name: '行程偏差',
          value: '----',
          unit: null,
          type: '1',
          treeId: 87,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651282,
          name: '循环计数高',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651283,
          name: '行程累计高',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651284,
          name: '驱动信号',
          value: '----',
          unit: null,
          type: '1',
          treeId: 87,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651285,
          name: '供气压力低',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651286,
          name: '组态已更改',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651287,
          name: '回路电流验证报警',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651288,
          name: '内部传感器超出限制范围',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651289,
          name: '变量超出范围',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651290,
          name: '处于标定模式',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651291,
          name: '自动校验进行中',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651292,
          name: '诊断进行中',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651293,
          name: '小回路传感器故障',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651294,
          name: '行程传感器故障',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651295,
          name: '温度传感器故障',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651296,
          name: '压力传感器故障',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651297,
          name: '驱动电流故障',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651298,
          name: '关键 NVM 故障',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651299,
          name: '闪存完整性故障',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651300,
          name: '参考电压故障',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651301,
          name: '报警记录非空',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651302,
          name: '报警记录已满',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651303,
          name: '积分器饱和高',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651304,
          name: '积分器饱和低',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651305,
          name: '关机激活',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651306,
          name: '压力偏差',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651307,
          name: '非关键 NVM 故障',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651308,
          name: '仪表时间为大概值',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651309,
          name: '诊断数据可用',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651310,
          name: '要求手动复位',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651311,
          name: '行程高限位/截止',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651312,
          name: '行程低限位/截止',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651313,
          name: '压力切换激活',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651314,
          name: 'NVM 过度写入',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651315,
          name: '供气压力高',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651316,
          name: '端口 A 过压',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651317,
          name: 'SOV 测试最低要求压降',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651318,
          name: 'SOV 测试最高可允许压降',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651319,
          name: '供气压力性能诊断',
          value: '',
          unit: null,
          type: '2',
          treeId: 88,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651320,
          name: '行程偏差性能诊断',
          value: '',
          unit: null,
          type: '2',
          treeId: 89,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651321,
          name: 'I/P和放大器完整性性能诊断',
          value: '',
          unit: null,
          type: '2',
          treeId: 90,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651322,
          name: '放大器调整性能诊断',
          value: '',
          unit: null,
          type: '2',
          treeId: 91,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651323,
          name: '空气质量流量性能诊断',
          value: '',
          unit: null,
          type: '2',
          treeId: 92,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651324,
          name: '阀门摩擦力性能诊断',
          value: '',
          unit: null,
          type: '2',
          treeId: 93,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651325,
          name: '平均扭矩',
          value: '',
          unit: null,
          type: '1',
          treeId: 93,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651326,
          name: '平均摩擦力',
          value: '',
          unit: null,
          type: '1',
          treeId: 93,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651327,
          name: '平均死区',
          value: '',
          unit: null,
          type: '1',
          treeId: 93,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651328,
          name: '扫描时间',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651329,
          name: '平均动态误差',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651330,
          name: '动态线性度（独立）',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651331,
          name: '平均扭矩',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651332,
          name: '弹簧预紧力',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651333,
          name: '测试状态阀座负载',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651334,
          name: '投用状态阀座负载',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651335,
          name: '所需阀座负载',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651336,
          name: '预期总摩擦力',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651337,
          name: '类型',
          value: '',
          unit: null,
          type: '1',
          treeId: 106,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651338,
          name: '尺寸',
          value: '',
          unit: null,
          type: '1',
          treeId: 106,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651339,
          name: '额定行程',
          value: '',
          unit: null,
          type: '1',
          treeId: 105,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651340,
          name: '实际行程',
          value: '',
          unit: null,
          type: '1',
          treeId: 105,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651341,
          name: '阀杆直径',
          value: '',
          unit: null,
          type: '1',
          treeId: 105,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651342,
          name: '填料类型',
          value: '',
          unit: null,
          type: '1',
          treeId: 105,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651343,
          name: '增速器',
          value: '',
          unit: null,
          type: '1',
          treeId: 105,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651344,
          name: '有效面积',
          value: '',
          unit: null,
          type: '1',
          treeId: 105,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651345,
          name: '下方弹簧预紧力',
          value: '',
          unit: null,
          type: '1',
          treeId: 105,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651346,
          name: '上方弹簧预紧力',
          value: '',
          unit: null,
          type: '1',
          treeId: 105,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651347,
          name: '反馈连接方式',
          value: '',
          unit: null,
          type: '1',
          treeId: 110,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651348,
          name: '零功率状态',
          value: '',
          unit: null,
          type: '1',
          treeId: 110,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651349,
          name: '行程整定参数',
          value: '',
          unit: null,
          type: '1',
          treeId: 110,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651350,
          name: '比例',
          value: '',
          unit: null,
          type: '1',
          treeId: 110,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651351,
          name: '速度',
          value: '',
          unit: null,
          type: '1',
          treeId: 110,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651352,
          name: 'MLF',
          value: '',
          unit: null,
          type: '1',
          treeId: 110,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651353,
          name: '截止和表征',
          value: '',
          unit: null,
          type: '1',
          treeId: 110,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651354,
          name: '死区时间最大值及步数',
          value: '',
          unit: null,
          type: '1',
          treeId: 117,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651355,
          name: '超量 最大值及步数',
          value: '',
          unit: null,
          type: '1',
          treeId: 117,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651356,
          name: '误差 最大值及步数',
          value: '',
          unit: null,
          type: '1',
          treeId: 117,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651357,
          name: '第10步行程时间',
          value: '',
          unit: null,
          type: '1',
          treeId: 117,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651358,
          name: '第11步行程时间',
          value: '',
          unit: null,
          type: '1',
          treeId: 117,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651359,
          name: '第10步误差',
          value: '',
          unit: null,
          type: '1',
          treeId: 117,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        },
        {
          id: 651360,
          name: '第11步误差',
          value: '',
          unit: null,
          type: '1',
          treeId: 117,
          valveHistoryDataListId: 2013,
          time: '2024-10-27T00:00:00.000Z'
        }
      ]
    },
    {
      id: 2014,
      tag: 'FV101_4',
      valveId: 1815,
      time: '2024-10-26 08:00:00',
      valveHistoryData: [
        {
          id: 651163,
          name: '行程',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651164,
          name: '行程偏差',
          value: '',
          unit: null,
          type: '1',
          treeId: 85,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651165,
          name: '供气压力',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651166,
          name: '驱动信号',
          value: '',
          unit: null,
          type: '1',
          treeId: 85,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651167,
          name: '仪表模式',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651168,
          name: '循环计数',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651169,
          name: '行程累计器',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651170,
          name: '放大器调整',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651171,
          name: '最高温度记录',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651172,
          name: '运行时间',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651173,
          name: '启动次数',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651174,
          name: '仪表等级',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651175,
          name: '阀门型式',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651176,
          name: '执行机构类型',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651177,
          name: '标定日期',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651178,
          name: '行程高',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651179,
          name: '行程低',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651180,
          name: '行程高高',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651181,
          name: '行程低低',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651182,
          name: '行程偏差',
          value: '',
          unit: null,
          type: '1',
          treeId: 87,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651183,
          name: '循环计数高',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651184,
          name: '行程累计高',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651185,
          name: '驱动信号',
          value: '',
          unit: null,
          type: '1',
          treeId: 87,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651186,
          name: '供气压力低',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651187,
          name: '组态已更改',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651188,
          name: '回路电流验证报警',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651189,
          name: '内部传感器超出限制范围',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651190,
          name: '变量超出范围',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651191,
          name: '处于标定模式',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651192,
          name: '自动校验进行中',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651193,
          name: '诊断进行中',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651194,
          name: '小回路传感器故障',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651195,
          name: '行程传感器故障',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651196,
          name: '温度传感器故障',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651197,
          name: '压力传感器故障',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651198,
          name: '驱动电流故障',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651199,
          name: '关键 NVM 故障',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651200,
          name: '闪存完整性故障',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651201,
          name: '参考电压故障',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651202,
          name: '报警记录非空',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651203,
          name: '报警记录已满',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651204,
          name: '积分器饱和高',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651205,
          name: '积分器饱和低',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651206,
          name: '关机激活',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651207,
          name: '压力偏差',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651208,
          name: '非关键 NVM 故障',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651209,
          name: '仪表时间为大概值',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651210,
          name: '诊断数据可用',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651211,
          name: '要求手动复位',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651212,
          name: '行程高限位/截止',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651213,
          name: '行程低限位/截止',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651214,
          name: '压力切换激活',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651215,
          name: 'NVM 过度写入',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651216,
          name: '供气压力高',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651217,
          name: '端口 A 过压',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651218,
          name: 'SOV 测试最低要求压降',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651219,
          name: 'SOV 测试最高可允许压降',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651220,
          name: '供气压力性能诊断',
          value: "{'未检测到活动报警': ''}",
          unit: null,
          type: '2',
          treeId: 88,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651221,
          name: '行程偏差性能诊断',
          value: "{'未检测到活动报警': '', '廣供气压力正常專': ''}",
          unit: null,
          type: '2',
          treeId: 89,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651222,
          name: 'I/P和放大器完整性性能诊断',
          value:
            "{'未检测到活动报警': '', '供气压力正常': '', '行程接近截止点': '设备接近行程截止点。在设备离开截止点之前数据分析将一直挂起。'}",
          unit: null,
          type: '2',
          treeId: 90,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651223,
          name: '放大器调整性能诊断',
          value: '',
          unit: null,
          type: '2',
          treeId: 91,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651224,
          name: '空气质量流量性能诊断',
          value: "{'未检测到活动报警': ''}",
          unit: null,
          type: '2',
          treeId: 92,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651225,
          name: '阀门摩擦力性能诊断',
          value:
            "{'未检测到活动报警': '', '供气压力正常': '', '分析正在进行': '行程往复次数达到足以计算出可信的值后，将报告摩擦力估计值。', '不确定摩擦力': '？?？？???？ = 0.00 Ibf??？？？??？???？???？?X?？10.00 - 100.00 Ibf?? 可能原因： 行程往复不足，无法计算出可信的摩擦力值。'}",
          unit: null,
          type: '2',
          treeId: 93,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651226,
          name: '平均扭矩',
          value: '',
          unit: null,
          type: '1',
          treeId: 93,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651227,
          name: '平均摩擦力',
          value: 'N/A',
          unit: null,
          type: '1',
          treeId: 93,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651228,
          name: '平均死区',
          value: 'N/A',
          unit: null,
          type: '1',
          treeId: 93,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651229,
          name: '扫描时间',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651230,
          name: '平均动态误差',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651231,
          name: '动态线性度（独立）',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651232,
          name: '平均扭矩',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651233,
          name: '弹簧预紧力',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651234,
          name: '测试状态阀座负载',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651235,
          name: '投用状态阀座负载',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651236,
          name: '所需阀座负载',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651237,
          name: '预期总摩擦力',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651238,
          name: '类型',
          value: '',
          unit: null,
          type: '1',
          treeId: 106,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651239,
          name: '尺寸',
          value: '',
          unit: null,
          type: '1',
          treeId: 106,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651240,
          name: '额定行程',
          value: '',
          unit: null,
          type: '1',
          treeId: 105,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651241,
          name: '实际行程',
          value: '',
          unit: null,
          type: '1',
          treeId: 105,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651242,
          name: '阀杆直径',
          value: '',
          unit: null,
          type: '1',
          treeId: 105,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651243,
          name: '填料类型',
          value: '',
          unit: null,
          type: '1',
          treeId: 105,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651244,
          name: '增速器',
          value: '',
          unit: null,
          type: '1',
          treeId: 105,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651245,
          name: '有效面积',
          value: '',
          unit: null,
          type: '1',
          treeId: 105,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651246,
          name: '下方弹簧预紧力',
          value: '',
          unit: null,
          type: '1',
          treeId: 105,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651247,
          name: '上方弹簧预紧力',
          value: '',
          unit: null,
          type: '1',
          treeId: 105,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651248,
          name: '反馈连接方式',
          value: '',
          unit: null,
          type: '1',
          treeId: 110,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651249,
          name: '零功率状态',
          value: '',
          unit: null,
          type: '1',
          treeId: 110,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651250,
          name: '行程整定参数',
          value: '',
          unit: null,
          type: '1',
          treeId: 110,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651251,
          name: '比例',
          value: '',
          unit: null,
          type: '1',
          treeId: 110,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651252,
          name: '速度',
          value: '',
          unit: null,
          type: '1',
          treeId: 110,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651253,
          name: 'MLF',
          value: '',
          unit: null,
          type: '1',
          treeId: 110,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651254,
          name: '截止和表征',
          value: '',
          unit: null,
          type: '1',
          treeId: 110,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651255,
          name: '死区时间最大值及步数',
          value: '',
          unit: null,
          type: '1',
          treeId: 117,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651256,
          name: '超量 最大值及步数',
          value: '',
          unit: null,
          type: '1',
          treeId: 117,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651257,
          name: '误差 最大值及步数',
          value: '',
          unit: null,
          type: '1',
          treeId: 117,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651258,
          name: '第10步行程时间',
          value: '',
          unit: null,
          type: '1',
          treeId: 117,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651259,
          name: '第11步行程时间',
          value: '',
          unit: null,
          type: '1',
          treeId: 117,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651260,
          name: '第10步误差',
          value: '',
          unit: null,
          type: '1',
          treeId: 117,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        },
        {
          id: 651261,
          name: '第11步误差',
          value: '',
          unit: null,
          type: '1',
          treeId: 117,
          valveHistoryDataListId: 2014,
          time: '2024-10-26T00:00:00.000Z'
        }
      ]
    },
    {
      id: 2081,
      tag: 'FV101_4',
      valveId: 1815,
      time: '2024-10-14 08:00:00',
      valveHistoryData: [
        {
          id: 724495,
          name: '行程',
          value: '63.28',
          unit: '%',
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724496,
          name: '行程偏差',
          value: '0.16',
          unit: '%',
          type: '1',
          treeId: 85,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724497,
          name: '供气压力',
          value: '56.03',
          unit: 'psi',
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724498,
          name: '驱动信号',
          value: '80.75',
          unit: '%',
          type: '1',
          treeId: 85,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724499,
          name: '仪表模式',
          value: '投用状态',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724500,
          name: '循环计数',
          value: '5119',
          unit: 'counts',
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724501,
          name: '行程累计器',
          value: '110987',
          unit: '%',
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724502,
          name: '放大器调整',
          value: 'N/A',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724503,
          name: '最高温度记录',
          value: '31.56',
          unit: 'C',
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724504,
          name: '运行时间',
          value: '1336',
          unit: 'days',
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724505,
          name: '启动次数',
          value: '60',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724506,
          name: '仪表等级',
          value: 'PD',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724507,
          name: '阀门型式',
          value: '直行程阀',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724508,
          name: '执行机构类型',
          value: '弹簧膜片式',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724509,
          name: '标定日期',
          value: '09 Apr 2024',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724510,
          name: '行程高',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724511,
          name: '行程低',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724512,
          name: '行程高高',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724513,
          name: '行程低低',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724514,
          name: '行程偏差',
          value: '----',
          unit: null,
          type: '1',
          treeId: 87,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724515,
          name: '循环计数高',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724516,
          name: '行程累计高',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724517,
          name: '驱动信号',
          value: '----',
          unit: null,
          type: '1',
          treeId: 87,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724518,
          name: '供气压力低',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724519,
          name: '组态已更改',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724520,
          name: '回路电流验证报警',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724521,
          name: '内部传感器超出限制范围',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724522,
          name: '变量超出范围',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724523,
          name: '处于标定模式',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724524,
          name: '自动校验进行中',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724525,
          name: '诊断进行中',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724526,
          name: '小回路传感器故障',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724527,
          name: '行程传感器故障',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724528,
          name: '温度传感器故障',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724529,
          name: '压力传感器故障',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724530,
          name: '驱动电流故障',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724531,
          name: '关键 NVM 故障',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724532,
          name: '闪存完整性故障',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724533,
          name: '参考电压故障',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724534,
          name: '报警记录非空',
          value: '开',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724535,
          name: '报警记录已满',
          value: '开',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724536,
          name: '积分器饱和高',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724537,
          name: '积分器饱和低',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724538,
          name: '关机激活',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724539,
          name: '压力偏差',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724540,
          name: '非关键 NVM 故障',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724541,
          name: '仪表时间为大概值',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724542,
          name: '诊断数据可用',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724543,
          name: '要求手动复位',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724544,
          name: '行程高限位/截止',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724545,
          name: '行程低限位/截止',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724546,
          name: '压力切换激活',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724547,
          name: 'NVM 过度写入',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724548,
          name: '供气压力高',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724549,
          name: '端口 A 过压',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724550,
          name: 'SOV 测试最低要求压降',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724551,
          name: 'SOV 测试最高可允许压降',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724552,
          name: '供气压力性能诊断',
          value: "{'未检测到活动报警': ''}",
          unit: null,
          type: '2',
          treeId: 88,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724553,
          name: '行程偏差性能诊断',
          value: "{'未检测到活动报警': '', '供气压力正常': ''}",
          unit: null,
          type: '2',
          treeId: 89,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724554,
          name: 'I/P和放大器完整性性能诊断',
          value: "{'未检测到活动报警': '', '供气压力正常': ''}",
          unit: null,
          type: '2',
          treeId: 90,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724555,
          name: '放大器调整性能诊断',
          value: '',
          unit: null,
          type: '2',
          treeId: 91,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724556,
          name: '空气质量流量性能诊断',
          value: "{'未检测到活动报警': ''}",
          unit: null,
          type: '2',
          treeId: 92,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724557,
          name: '阀门摩擦力性能诊断',
          value:
            "{'未检测到活动报警': '', '供气压力正常': '', '超出最大摩擦力': '？？？?？??？ = 124.00 Ibf?????????????？???X??10.00- 100.00 Ibf?? 可能原因： 阀门总成摩擦力超出用户定义的最大摩擦力 检查阀门总成是否可能存在损坏或变更'}",
          unit: null,
          type: '2',
          treeId: 93,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724558,
          name: '平均扭矩',
          value: '',
          unit: null,
          type: '1',
          treeId: 93,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724559,
          name: '平均摩擦力',
          value: '124',
          unit: 'lbf',
          type: '1',
          treeId: 93,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724560,
          name: '平均死区',
          value: '0.80',
          unit: '%',
          type: '1',
          treeId: 93,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724561,
          name: '扫描时间',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724562,
          name: '平均动态误差',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724563,
          name: '动态线性度（独立）',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724564,
          name: '平均扭矩',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724565,
          name: '弹簧预紧力',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724566,
          name: '测试状态阀座负载',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724567,
          name: '投用状态阀座负载',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724568,
          name: '所需阀座负载',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724569,
          name: '预期总摩擦力',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724570,
          name: '类型',
          value: '',
          unit: null,
          type: '1',
          treeId: 106,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724571,
          name: '尺寸',
          value: '',
          unit: null,
          type: '1',
          treeId: 106,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724572,
          name: '额定行程',
          value: '',
          unit: null,
          type: '1',
          treeId: 105,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724573,
          name: '实际行程',
          value: '',
          unit: null,
          type: '1',
          treeId: 105,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724574,
          name: '阀杆直径',
          value: '',
          unit: null,
          type: '1',
          treeId: 105,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724575,
          name: '填料类型',
          value: '',
          unit: null,
          type: '1',
          treeId: 105,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724576,
          name: '增速器',
          value: '',
          unit: null,
          type: '1',
          treeId: 105,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724577,
          name: '有效面积',
          value: '',
          unit: null,
          type: '1',
          treeId: 105,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724578,
          name: '下方弹簧预紧力',
          value: '',
          unit: null,
          type: '1',
          treeId: 105,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724579,
          name: '上方弹簧预紧力',
          value: '',
          unit: null,
          type: '1',
          treeId: 105,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724580,
          name: '反馈连接方式',
          value: '',
          unit: null,
          type: '1',
          treeId: 110,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724581,
          name: '零功率状态',
          value: '',
          unit: null,
          type: '1',
          treeId: 110,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724582,
          name: '行程整定参数',
          value: '',
          unit: null,
          type: '1',
          treeId: 110,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724583,
          name: '比例',
          value: '',
          unit: null,
          type: '1',
          treeId: 110,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724584,
          name: '速度',
          value: '',
          unit: null,
          type: '1',
          treeId: 110,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724585,
          name: 'MLF',
          value: '',
          unit: null,
          type: '1',
          treeId: 110,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724586,
          name: '截止和表征',
          value: '',
          unit: null,
          type: '1',
          treeId: 110,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724587,
          name: '死区时间最大值及步数',
          value: '',
          unit: null,
          type: '1',
          treeId: 117,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724588,
          name: '超量 最大值及步数',
          value: '',
          unit: null,
          type: '1',
          treeId: 117,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724589,
          name: '误差 最大值及步数',
          value: '',
          unit: null,
          type: '1',
          treeId: 117,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724590,
          name: '第10步行程时间',
          value: '',
          unit: null,
          type: '1',
          treeId: 117,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724591,
          name: '第11步行程时间',
          value: '',
          unit: null,
          type: '1',
          treeId: 117,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724592,
          name: '第10步误差',
          value: '',
          unit: null,
          type: '1',
          treeId: 117,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        },
        {
          id: 724593,
          name: '第11步误差',
          value: '',
          unit: null,
          type: '1',
          treeId: 117,
          valveHistoryDataListId: 2081,
          time: '2024-10-14T00:00:00.000Z'
        }
      ]
    },
    {
      id: 2080,
      tag: 'FV101_4',
      valveId: 1815,
      time: '2024-10-13 08:00:00',
      valveHistoryData: [
        {
          id: 717961,
          name: '行程',
          value: '43.19',
          unit: '%',
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 717962,
          name: '行程偏差',
          value: '0.00',
          unit: '%',
          type: '1',
          treeId: 85,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 717963,
          name: '供气压力',
          value: '56.03',
          unit: 'psi',
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 717964,
          name: '驱动信号',
          value: '82.25',
          unit: '%',
          type: '1',
          treeId: 85,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 717965,
          name: '仪表模式',
          value: '投用状态',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 717966,
          name: '循环计数',
          value: '4848',
          unit: 'counts',
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 717967,
          name: '行程累计器',
          value: '108187',
          unit: '%',
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 717968,
          name: '放大器调整',
          value: 'N/A',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 717969,
          name: '最高温度记录',
          value: '31.56',
          unit: 'C',
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 717970,
          name: '运行时间',
          value: '1335',
          unit: 'days',
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 717971,
          name: '启动次数',
          value: '60',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 717972,
          name: '仪表等级',
          value: 'PD',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 717973,
          name: '阀门型式',
          value: '直行程阀',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 717974,
          name: '执行机构类型',
          value: '弹簧膜片式',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 717975,
          name: '标定日期',
          value: '09 Apr 2024',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 717976,
          name: '行程高',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 717977,
          name: '行程低',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 717978,
          name: '行程高高',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 717979,
          name: '行程低低',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 717980,
          name: '行程偏差',
          value: '----',
          unit: null,
          type: '1',
          treeId: 87,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 717981,
          name: '循环计数高',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 717982,
          name: '行程累计高',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 717983,
          name: '驱动信号',
          value: '----',
          unit: null,
          type: '1',
          treeId: 87,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 717984,
          name: '供气压力低',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 717985,
          name: '组态已更改',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 717986,
          name: '回路电流验证报警',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 717987,
          name: '内部传感器超出限制范围',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 717988,
          name: '变量超出范围',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 717989,
          name: '处于标定模式',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 717990,
          name: '自动校验进行中',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 717991,
          name: '诊断进行中',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 717992,
          name: '小回路传感器故障',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 717993,
          name: '行程传感器故障',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 717994,
          name: '温度传感器故障',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 717995,
          name: '压力传感器故障',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 717996,
          name: '驱动电流故障',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 717997,
          name: '关键 NVM 故障',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 717998,
          name: '闪存完整性故障',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 717999,
          name: '参考电压故障',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 718000,
          name: '报警记录非空',
          value: '开',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 718001,
          name: '报警记录已满',
          value: '开',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 718002,
          name: '积分器饱和高',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 718003,
          name: '积分器饱和低',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 718004,
          name: '关机激活',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 718005,
          name: '压力偏差',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 718006,
          name: '非关键 NVM 故障',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 718007,
          name: '仪表时间为大概值',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 718008,
          name: '诊断数据可用',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 718009,
          name: '要求手动复位',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 718010,
          name: '行程高限位/截止',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 718011,
          name: '行程低限位/截止',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 718012,
          name: '压力切换激活',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 718013,
          name: 'NVM 过度写入',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 718014,
          name: '供气压力高',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 718015,
          name: '端口 A 过压',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 718016,
          name: 'SOV 测试最低要求压降',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 718017,
          name: 'SOV 测试最高可允许压降',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 718018,
          name: '供气压力性能诊断',
          value: "{'未检测到活动报警': ''}",
          unit: null,
          type: '2',
          treeId: 88,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 718019,
          name: '行程偏差性能诊断',
          value: "{'未检测到活动报警': '', '廣供气压力正常專': ''}",
          unit: null,
          type: '2',
          treeId: 89,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 718020,
          name: 'I/P和放大器完整性性能诊断',
          value: "{'未检测到活动报警': '', '供气压力正常': ''}",
          unit: null,
          type: '2',
          treeId: 90,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 718021,
          name: '放大器调整性能诊断',
          value: '',
          unit: null,
          type: '2',
          treeId: 91,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 718022,
          name: '空气质量流量性能诊断',
          value: "{'未检测到活动报警': ''}",
          unit: null,
          type: '2',
          treeId: 92,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 718023,
          name: '阀门摩擦力性能诊断',
          value:
            "{'未检测到活动报警': '', '供气压力正常': '', '分析正在进行': '行程往复次数达到足以计算出可信的值后，将报告摩擦力估计值。', '不确定摩擦力': '？?？？？?？？ = 0.00 Ibf?？??????？？??？？??？X?？10.00 - 100.00 Ibf?? 可能原因： 行程往复不足，无法计算出可信的摩擦力值。'}",
          unit: null,
          type: '2',
          treeId: 93,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 718024,
          name: '平均扭矩',
          value: '',
          unit: null,
          type: '1',
          treeId: 93,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 718025,
          name: '平均摩擦力',
          value: 'N/A',
          unit: null,
          type: '1',
          treeId: 93,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 718026,
          name: '平均死区',
          value: 'N/A',
          unit: null,
          type: '1',
          treeId: 93,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 718027,
          name: '扫描时间',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 718028,
          name: '平均动态误差',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 718029,
          name: '动态线性度（独立）',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 718030,
          name: '平均扭矩',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 718031,
          name: '弹簧预紧力',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 718032,
          name: '测试状态阀座负载',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 718033,
          name: '投用状态阀座负载',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 718034,
          name: '所需阀座负载',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 718035,
          name: '预期总摩擦力',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 718036,
          name: '类型',
          value: '',
          unit: null,
          type: '1',
          treeId: 106,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 718037,
          name: '尺寸',
          value: '',
          unit: null,
          type: '1',
          treeId: 106,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 718038,
          name: '额定行程',
          value: '',
          unit: null,
          type: '1',
          treeId: 105,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 718039,
          name: '实际行程',
          value: '',
          unit: null,
          type: '1',
          treeId: 105,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 718040,
          name: '阀杆直径',
          value: '',
          unit: null,
          type: '1',
          treeId: 105,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 718041,
          name: '填料类型',
          value: '',
          unit: null,
          type: '1',
          treeId: 105,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 718042,
          name: '增速器',
          value: '',
          unit: null,
          type: '1',
          treeId: 105,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 718043,
          name: '有效面积',
          value: '',
          unit: null,
          type: '1',
          treeId: 105,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 718044,
          name: '下方弹簧预紧力',
          value: '',
          unit: null,
          type: '1',
          treeId: 105,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 718045,
          name: '上方弹簧预紧力',
          value: '',
          unit: null,
          type: '1',
          treeId: 105,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 718046,
          name: '反馈连接方式',
          value: '',
          unit: null,
          type: '1',
          treeId: 110,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 718047,
          name: '零功率状态',
          value: '',
          unit: null,
          type: '1',
          treeId: 110,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 718048,
          name: '行程整定参数',
          value: '',
          unit: null,
          type: '1',
          treeId: 110,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 718049,
          name: '比例',
          value: '',
          unit: null,
          type: '1',
          treeId: 110,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 718050,
          name: '速度',
          value: '',
          unit: null,
          type: '1',
          treeId: 110,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 718051,
          name: 'MLF',
          value: '',
          unit: null,
          type: '1',
          treeId: 110,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 718052,
          name: '截止和表征',
          value: '',
          unit: null,
          type: '1',
          treeId: 110,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 718053,
          name: '死区时间最大值及步数',
          value: '',
          unit: null,
          type: '1',
          treeId: 117,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 718054,
          name: '超量 最大值及步数',
          value: '',
          unit: null,
          type: '1',
          treeId: 117,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 718055,
          name: '误差 最大值及步数',
          value: '',
          unit: null,
          type: '1',
          treeId: 117,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 718056,
          name: '第10步行程时间',
          value: '',
          unit: null,
          type: '1',
          treeId: 117,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 718057,
          name: '第11步行程时间',
          value: '',
          unit: null,
          type: '1',
          treeId: 117,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 718058,
          name: '第10步误差',
          value: '',
          unit: null,
          type: '1',
          treeId: 117,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        },
        {
          id: 718059,
          name: '第11步误差',
          value: '',
          unit: null,
          type: '1',
          treeId: 117,
          valveHistoryDataListId: 2080,
          time: '2024-10-13T00:00:00.000Z'
        }
      ]
    },
    {
      id: 2079,
      tag: 'FV101_4',
      valveId: 1815,
      time: '2024-10-12 08:00:00',
      valveHistoryData: [
        {
          id: 717664,
          name: '行程',
          value: '47.72',
          unit: '%',
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717665,
          name: '行程偏差',
          value: '0.16',
          unit: '%',
          type: '1',
          treeId: 85,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717666,
          name: '供气压力',
          value: '56.09',
          unit: 'psi',
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717667,
          name: '驱动信号',
          value: '82.00',
          unit: '%',
          type: '1',
          treeId: 85,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717668,
          name: '仪表模式',
          value: '投用状态',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717669,
          name: '循环计数',
          value: '4540',
          unit: 'counts',
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717670,
          name: '行程累计器',
          value: '104783',
          unit: '%',
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717671,
          name: '放大器调整',
          value: 'N/A',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717672,
          name: '最高温度记录',
          value: '31.56',
          unit: 'C',
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717673,
          name: '运行时间',
          value: '1334',
          unit: 'days',
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717674,
          name: '启动次数',
          value: '60',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717675,
          name: '仪表等级',
          value: 'PD',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717676,
          name: '阀门型式',
          value: '直行程阀',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717677,
          name: '执行机构类型',
          value: '弹簧膜片式',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717678,
          name: '标定日期',
          value: '09 Apr 2024',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717679,
          name: '行程高',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717680,
          name: '行程低',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717681,
          name: '行程高高',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717682,
          name: '行程低低',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717683,
          name: '行程偏差',
          value: '----',
          unit: null,
          type: '1',
          treeId: 87,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717684,
          name: '循环计数高',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717685,
          name: '行程累计高',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717686,
          name: '驱动信号',
          value: '----',
          unit: null,
          type: '1',
          treeId: 87,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717687,
          name: '供气压力低',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717688,
          name: '组态已更改',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717689,
          name: '回路电流验证报警',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717690,
          name: '内部传感器超出限制范围',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717691,
          name: '变量超出范围',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717692,
          name: '处于标定模式',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717693,
          name: '自动校验进行中',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717694,
          name: '诊断进行中',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717695,
          name: '小回路传感器故障',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717696,
          name: '行程传感器故障',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717697,
          name: '温度传感器故障',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717698,
          name: '压力传感器故障',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717699,
          name: '驱动电流故障',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717700,
          name: '关键 NVM 故障',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717701,
          name: '闪存完整性故障',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717702,
          name: '参考电压故障',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717703,
          name: '报警记录非空',
          value: '开',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717704,
          name: '报警记录已满',
          value: '开',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717705,
          name: '积分器饱和高',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717706,
          name: '积分器饱和低',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717707,
          name: '关机激活',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717708,
          name: '压力偏差',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717709,
          name: '非关键 NVM 故障',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717710,
          name: '仪表时间为大概值',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717711,
          name: '诊断数据可用',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717712,
          name: '要求手动复位',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717713,
          name: '行程高限位/截止',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717714,
          name: '行程低限位/截止',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717715,
          name: '压力切换激活',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717716,
          name: 'NVM 过度写入',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717717,
          name: '供气压力高',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717718,
          name: '端口 A 过压',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717719,
          name: 'SOV 测试最低要求压降',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717720,
          name: 'SOV 测试最高可允许压降',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717721,
          name: '供气压力性能诊断',
          value: "{'未检测到活动报警': ''}",
          unit: null,
          type: '2',
          treeId: 88,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717722,
          name: '行程偏差性能诊断',
          value: "{'未检测到活动报警': '', '供气压力正常': ''}",
          unit: null,
          type: '2',
          treeId: 89,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717723,
          name: 'I/P和放大器完整性性能诊断',
          value: "{'未检测到活动报警': '', '供气压力正常': ''}",
          unit: null,
          type: '2',
          treeId: 90,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717724,
          name: '放大器调整性能诊断',
          value: '',
          unit: null,
          type: '2',
          treeId: 91,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717725,
          name: '空气质量流量性能诊断',
          value: "{'未检测到活动报警': ''}",
          unit: null,
          type: '2',
          treeId: 92,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717726,
          name: '阀门摩擦力性能诊断',
          value:
            "{'未检测到活动报警': '', '供气压力正常': '', '分析正在进行': '行程往复次数达到足以计算出可信的值后，将报告摩擦力估计值。', '通讯错误': 'ValveL",
          unit: 'in',
          type: '2',
          treeId: 93,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717727,
          name: '平均扭矩',
          value: '',
          unit: null,
          type: '1',
          treeId: 93,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717728,
          name: '平均摩擦力',
          value: 'N/A',
          unit: null,
          type: '1',
          treeId: 93,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717729,
          name: '平均死区',
          value: 'N/A',
          unit: null,
          type: '1',
          treeId: 93,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717730,
          name: '扫描时间',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717731,
          name: '平均动态误差',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717732,
          name: '动态线性度（独立）',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717733,
          name: '平均扭矩',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717734,
          name: '弹簧预紧力',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717735,
          name: '测试状态阀座负载',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717736,
          name: '投用状态阀座负载',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717737,
          name: '所需阀座负载',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717738,
          name: '预期总摩擦力',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717739,
          name: '类型',
          value: '',
          unit: null,
          type: '1',
          treeId: 106,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717740,
          name: '尺寸',
          value: '',
          unit: null,
          type: '1',
          treeId: 106,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717741,
          name: '额定行程',
          value: '',
          unit: null,
          type: '1',
          treeId: 105,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717742,
          name: '实际行程',
          value: '',
          unit: null,
          type: '1',
          treeId: 105,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717743,
          name: '阀杆直径',
          value: '',
          unit: null,
          type: '1',
          treeId: 105,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717744,
          name: '填料类型',
          value: '',
          unit: null,
          type: '1',
          treeId: 105,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717745,
          name: '增速器',
          value: '',
          unit: null,
          type: '1',
          treeId: 105,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717746,
          name: '有效面积',
          value: '',
          unit: null,
          type: '1',
          treeId: 105,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717747,
          name: '下方弹簧预紧力',
          value: '',
          unit: null,
          type: '1',
          treeId: 105,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717748,
          name: '上方弹簧预紧力',
          value: '',
          unit: null,
          type: '1',
          treeId: 105,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717749,
          name: '反馈连接方式',
          value: '',
          unit: null,
          type: '1',
          treeId: 110,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717750,
          name: '零功率状态',
          value: '',
          unit: null,
          type: '1',
          treeId: 110,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717751,
          name: '行程整定参数',
          value: '',
          unit: null,
          type: '1',
          treeId: 110,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717752,
          name: '比例',
          value: '',
          unit: null,
          type: '1',
          treeId: 110,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717753,
          name: '速度',
          value: '',
          unit: null,
          type: '1',
          treeId: 110,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717754,
          name: 'MLF',
          value: '',
          unit: null,
          type: '1',
          treeId: 110,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717755,
          name: '截止和表征',
          value: '',
          unit: null,
          type: '1',
          treeId: 110,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717756,
          name: '死区时间最大值及步数',
          value: '',
          unit: null,
          type: '1',
          treeId: 117,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717757,
          name: '超量 最大值及步数',
          value: '',
          unit: null,
          type: '1',
          treeId: 117,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717758,
          name: '误差 最大值及步数',
          value: '',
          unit: null,
          type: '1',
          treeId: 117,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717759,
          name: '第10步行程时间',
          value: '',
          unit: null,
          type: '1',
          treeId: 117,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717760,
          name: '第11步行程时间',
          value: '',
          unit: null,
          type: '1',
          treeId: 117,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717761,
          name: '第10步误差',
          value: '',
          unit: null,
          type: '1',
          treeId: 117,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        },
        {
          id: 717762,
          name: '第11步误差',
          value: '',
          unit: null,
          type: '1',
          treeId: 117,
          valveHistoryDataListId: 2079,
          time: '2024-10-12T00:00:00.000Z'
        }
      ]
    },
    {
      id: 2078,
      tag: 'FV101_4',
      valveId: 1815,
      time: '2024-10-11 08:00:00',
      valveHistoryData: [
        {
          id: 717268,
          name: '行程',
          value: '41.94',
          unit: '%',
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717269,
          name: '行程偏差',
          value: '0.03',
          unit: '%',
          type: '1',
          treeId: 85,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717270,
          name: '供气压力',
          value: '56.03',
          unit: 'psi',
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717271,
          name: '驱动信号',
          value: '81.88',
          unit: '%',
          type: '1',
          treeId: 85,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717272,
          name: '仪表模式',
          value: '投用状态',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717273,
          name: '循环计数',
          value: '4280',
          unit: 'counts',
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717274,
          name: '行程累计器',
          value: '102141',
          unit: '%',
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717275,
          name: '放大器调整',
          value: 'N/A',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717276,
          name: '最高温度记录',
          value: '31.56',
          unit: 'C',
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717277,
          name: '运行时间',
          value: '1333',
          unit: 'days',
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717278,
          name: '启动次数',
          value: '60',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717279,
          name: '仪表等级',
          value: 'PD',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717280,
          name: '阀门型式',
          value: '直行程阀',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717281,
          name: '执行机构类型',
          value: '弹簧膜片式',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717282,
          name: '标定日期',
          value: '09 Apr 2024',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717283,
          name: '行程高',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717284,
          name: '行程低',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717285,
          name: '行程高高',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717286,
          name: '行程低低',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717287,
          name: '行程偏差',
          value: '----',
          unit: null,
          type: '1',
          treeId: 87,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717288,
          name: '循环计数高',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717289,
          name: '行程累计高',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717290,
          name: '驱动信号',
          value: '----',
          unit: null,
          type: '1',
          treeId: 87,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717291,
          name: '供气压力低',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717292,
          name: '组态已更改',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717293,
          name: '回路电流验证报警',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717294,
          name: '内部传感器超出限制范围',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717295,
          name: '变量超出范围',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717296,
          name: '处于标定模式',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717297,
          name: '自动校验进行中',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717298,
          name: '诊断进行中',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717299,
          name: '小回路传感器故障',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717300,
          name: '行程传感器故障',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717301,
          name: '温度传感器故障',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717302,
          name: '压力传感器故障',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717303,
          name: '驱动电流故障',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717304,
          name: '关键 NVM 故障',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717305,
          name: '闪存完整性故障',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717306,
          name: '参考电压故障',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717307,
          name: '报警记录非空',
          value: '开',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717308,
          name: '报警记录已满',
          value: '开',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717309,
          name: '积分器饱和高',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717310,
          name: '积分器饱和低',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717311,
          name: '关机激活',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717312,
          name: '压力偏差',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717313,
          name: '非关键 NVM 故障',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717314,
          name: '仪表时间为大概值',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717315,
          name: '诊断数据可用',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717316,
          name: '要求手动复位',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717317,
          name: '行程高限位/截止',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717318,
          name: '行程低限位/截止',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717319,
          name: '压力切换激活',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717320,
          name: 'NVM 过度写入',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717321,
          name: '供气压力高',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717322,
          name: '端口 A 过压',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717323,
          name: 'SOV 测试最低要求压降',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717324,
          name: 'SOV 测试最高可允许压降',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717325,
          name: '供气压力性能诊断',
          value: "{'未检测到活动报警': ''}",
          unit: null,
          type: '2',
          treeId: 88,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717326,
          name: '行程偏差性能诊断',
          value: "{'未检测到活动报警': '', '供气压力正常': '', '通讯错误': 'ValveL",
          unit: 'in',
          type: '2',
          treeId: 89,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717327,
          name: 'I/P和放大器完整性性能诊断',
          value: "{'未检测到活动报警': '', '供气压力正常': ''}",
          unit: null,
          type: '2',
          treeId: 90,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717328,
          name: '放大器调整性能诊断',
          value: '',
          unit: null,
          type: '2',
          treeId: 91,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717329,
          name: '空气质量流量性能诊断',
          value: "{'未检测到活动报警': ''}",
          unit: null,
          type: '2',
          treeId: 92,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717330,
          name: '阀门摩擦力性能诊断',
          value:
            "{'未检测到活动报警': '', '供气压力正常': '', '分析正在进行': '行程往复次数达到足以计算出可信的值后，将报告摩擦力估计值。', '不确定摩擦力': '？?？？？?？？ = 0.00 Ibf?？??????？？??？？??？X?？10.00 - 100.00 Ibf?? 可能原因： 行程往复不足，无法计算出可信的摩擦力值。'}",
          unit: null,
          type: '2',
          treeId: 93,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717331,
          name: '平均扭矩',
          value: '',
          unit: null,
          type: '1',
          treeId: 93,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717332,
          name: '平均摩擦力',
          value: 'N/A',
          unit: null,
          type: '1',
          treeId: 93,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717333,
          name: '平均死区',
          value: 'N/A',
          unit: null,
          type: '1',
          treeId: 93,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717334,
          name: '扫描时间',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717335,
          name: '平均动态误差',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717336,
          name: '动态线性度（独立）',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717337,
          name: '平均扭矩',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717338,
          name: '弹簧预紧力',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717339,
          name: '测试状态阀座负载',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717340,
          name: '投用状态阀座负载',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717341,
          name: '所需阀座负载',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717342,
          name: '预期总摩擦力',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717343,
          name: '类型',
          value: '',
          unit: null,
          type: '1',
          treeId: 106,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717344,
          name: '尺寸',
          value: '',
          unit: null,
          type: '1',
          treeId: 106,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717345,
          name: '额定行程',
          value: '',
          unit: null,
          type: '1',
          treeId: 105,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717346,
          name: '实际行程',
          value: '',
          unit: null,
          type: '1',
          treeId: 105,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717347,
          name: '阀杆直径',
          value: '',
          unit: null,
          type: '1',
          treeId: 105,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717348,
          name: '填料类型',
          value: '',
          unit: null,
          type: '1',
          treeId: 105,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717349,
          name: '增速器',
          value: '',
          unit: null,
          type: '1',
          treeId: 105,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717350,
          name: '有效面积',
          value: '',
          unit: null,
          type: '1',
          treeId: 105,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717351,
          name: '下方弹簧预紧力',
          value: '',
          unit: null,
          type: '1',
          treeId: 105,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717352,
          name: '上方弹簧预紧力',
          value: '',
          unit: null,
          type: '1',
          treeId: 105,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717353,
          name: '反馈连接方式',
          value: '',
          unit: null,
          type: '1',
          treeId: 110,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717354,
          name: '零功率状态',
          value: '',
          unit: null,
          type: '1',
          treeId: 110,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717355,
          name: '行程整定参数',
          value: '',
          unit: null,
          type: '1',
          treeId: 110,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717356,
          name: '比例',
          value: '',
          unit: null,
          type: '1',
          treeId: 110,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717357,
          name: '速度',
          value: '',
          unit: null,
          type: '1',
          treeId: 110,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717358,
          name: 'MLF',
          value: '',
          unit: null,
          type: '1',
          treeId: 110,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717359,
          name: '截止和表征',
          value: '',
          unit: null,
          type: '1',
          treeId: 110,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717360,
          name: '死区时间最大值及步数',
          value: '',
          unit: null,
          type: '1',
          treeId: 117,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717361,
          name: '超量 最大值及步数',
          value: '',
          unit: null,
          type: '1',
          treeId: 117,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717362,
          name: '误差 最大值及步数',
          value: '',
          unit: null,
          type: '1',
          treeId: 117,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717363,
          name: '第10步行程时间',
          value: '',
          unit: null,
          type: '1',
          treeId: 117,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717364,
          name: '第11步行程时间',
          value: '',
          unit: null,
          type: '1',
          treeId: 117,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717365,
          name: '第10步误差',
          value: '',
          unit: null,
          type: '1',
          treeId: 117,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        },
        {
          id: 717366,
          name: '第11步误差',
          value: '',
          unit: null,
          type: '1',
          treeId: 117,
          valveHistoryDataListId: 2078,
          time: '2024-10-11T00:00:00.000Z'
        }
      ]
    },
    {
      id: 2077,
      tag: 'FV101_4',
      valveId: 1815,
      time: '2024-10-10 08:00:00',
      valveHistoryData: [
        {
          id: 716872,
          name: '行程',
          value: '-0.23',
          unit: '%',
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716873,
          name: '行程偏差',
          value: '0.23',
          unit: '%',
          type: '1',
          treeId: 85,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716874,
          name: '供气压力',
          value: '56.34',
          unit: 'psi',
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716875,
          name: '驱动信号',
          value: '0.00',
          unit: '%',
          type: '1',
          treeId: 85,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716876,
          name: '仪表模式',
          value: '投用状态',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716877,
          name: '循环计数',
          value: '4254',
          unit: 'counts',
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716878,
          name: '行程累计器',
          value: '101742',
          unit: '%',
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716879,
          name: '放大器调整',
          value: 'N/A',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716880,
          name: '最高温度记录',
          value: '31.56',
          unit: 'C',
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716881,
          name: '运行时间',
          value: '1332',
          unit: 'days',
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716882,
          name: '启动次数',
          value: '60',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716883,
          name: '仪表等级',
          value: 'PD',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716884,
          name: '阀门型式',
          value: '直行程阀',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716885,
          name: '执行机构类型',
          value: '弹簧膜片式',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716886,
          name: '标定日期',
          value: '09 Apr 2024',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716887,
          name: '行程高',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716888,
          name: '行程低',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716889,
          name: '行程高高',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716890,
          name: '行程低低',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716891,
          name: '行程偏差',
          value: '----',
          unit: null,
          type: '1',
          treeId: 87,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716892,
          name: '循环计数高',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716893,
          name: '行程累计高',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716894,
          name: '驱动信号',
          value: '----',
          unit: null,
          type: '1',
          treeId: 87,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716895,
          name: '供气压力低',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716896,
          name: '组态已更改',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716897,
          name: '回路电流验证报警',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716898,
          name: '内部传感器超出限制范围',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716899,
          name: '变量超出范围',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716900,
          name: '处于标定模式',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716901,
          name: '自动校验进行中',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716902,
          name: '诊断进行中',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716903,
          name: '小回路传感器故障',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716904,
          name: '行程传感器故障',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716905,
          name: '温度传感器故障',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716906,
          name: '压力传感器故障',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716907,
          name: '驱动电流故障',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716908,
          name: '关键 NVM 故障',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716909,
          name: '闪存完整性故障',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716910,
          name: '参考电压故障',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716911,
          name: '报警记录非空',
          value: '开',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716912,
          name: '报警记录已满',
          value: '开',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716913,
          name: '积分器饱和高',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716914,
          name: '积分器饱和低',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716915,
          name: '关机激活',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716916,
          name: '压力偏差',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716917,
          name: '非关键 NVM 故障',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716918,
          name: '仪表时间为大概值',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716919,
          name: '诊断数据可用',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716920,
          name: '要求手动复位',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716921,
          name: '行程高限位/截止',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716922,
          name: '行程低限位/截止',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716923,
          name: '压力切换激活',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716924,
          name: 'NVM 过度写入',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716925,
          name: '供气压力高',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716926,
          name: '端口 A 过压',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716927,
          name: 'SOV 测试最低要求压降',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716928,
          name: 'SOV 测试最高可允许压降',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716929,
          name: '供气压力性能诊断',
          value: "{'未检测到活动报警': ''}",
          unit: null,
          type: '2',
          treeId: 88,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716930,
          name: '行程偏差性能诊断',
          value: "{'未检测到活动报警': '', '廣供气压力正常設專專驗': ''}",
          unit: null,
          type: '2',
          treeId: 89,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716931,
          name: 'I/P和放大器完整性性能诊断',
          value:
            "{'未检测到活动报警': '', '供气压力正常': '', '行程接近截止点': '设备接近行程截止点。在设备离开截止点之前数据分析将一直挂起。'}",
          unit: null,
          type: '2',
          treeId: 90,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716932,
          name: '放大器调整性能诊断',
          value: '',
          unit: null,
          type: '2',
          treeId: 91,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716933,
          name: '空气质量流量性能诊断',
          value: "{'無未检测到活动报警': ''}",
          unit: null,
          type: '2',
          treeId: 92,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716934,
          name: '阀门摩擦力性能诊断',
          value:
            "{'未检测到活动报警': '', '供气压力正常': '', '分析正在进行': '行程往复次数达到足以计算出可信的值后，将报告摩擦力估计值。', '不确定摩擦力': '？?？？？?？？ = 0.00 Ibf?？??????？？??？？??？X?？10.00 - 100.00 Ibf?? 可能原因： 行程往复不足，无法计算出可信的摩擦力值。'}",
          unit: null,
          type: '2',
          treeId: 93,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716935,
          name: '平均扭矩',
          value: '',
          unit: null,
          type: '1',
          treeId: 93,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716936,
          name: '平均摩擦力',
          value: 'N/A',
          unit: null,
          type: '1',
          treeId: 93,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716937,
          name: '平均死区',
          value: 'N/A',
          unit: null,
          type: '1',
          treeId: 93,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716938,
          name: '扫描时间',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716939,
          name: '平均动态误差',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716940,
          name: '动态线性度（独立）',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716941,
          name: '平均扭矩',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716942,
          name: '弹簧预紧力',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716943,
          name: '测试状态阀座负载',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716944,
          name: '投用状态阀座负载',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716945,
          name: '所需阀座负载',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716946,
          name: '预期总摩擦力',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716947,
          name: '类型',
          value: '',
          unit: null,
          type: '1',
          treeId: 106,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716948,
          name: '尺寸',
          value: '',
          unit: null,
          type: '1',
          treeId: 106,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716949,
          name: '额定行程',
          value: '',
          unit: null,
          type: '1',
          treeId: 105,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716950,
          name: '实际行程',
          value: '',
          unit: null,
          type: '1',
          treeId: 105,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716951,
          name: '阀杆直径',
          value: '',
          unit: null,
          type: '1',
          treeId: 105,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716952,
          name: '填料类型',
          value: '',
          unit: null,
          type: '1',
          treeId: 105,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716953,
          name: '增速器',
          value: '',
          unit: null,
          type: '1',
          treeId: 105,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716954,
          name: '有效面积',
          value: '',
          unit: null,
          type: '1',
          treeId: 105,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716955,
          name: '下方弹簧预紧力',
          value: '',
          unit: null,
          type: '1',
          treeId: 105,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716956,
          name: '上方弹簧预紧力',
          value: '',
          unit: null,
          type: '1',
          treeId: 105,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716957,
          name: '反馈连接方式',
          value: '',
          unit: null,
          type: '1',
          treeId: 110,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716958,
          name: '零功率状态',
          value: '',
          unit: null,
          type: '1',
          treeId: 110,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716959,
          name: '行程整定参数',
          value: '',
          unit: null,
          type: '1',
          treeId: 110,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716960,
          name: '比例',
          value: '',
          unit: null,
          type: '1',
          treeId: 110,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716961,
          name: '速度',
          value: '',
          unit: null,
          type: '1',
          treeId: 110,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716962,
          name: 'MLF',
          value: '',
          unit: null,
          type: '1',
          treeId: 110,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716963,
          name: '截止和表征',
          value: '',
          unit: null,
          type: '1',
          treeId: 110,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716964,
          name: '死区时间最大值及步数',
          value: '',
          unit: null,
          type: '1',
          treeId: 117,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716965,
          name: '超量 最大值及步数',
          value: '',
          unit: null,
          type: '1',
          treeId: 117,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716966,
          name: '误差 最大值及步数',
          value: '',
          unit: null,
          type: '1',
          treeId: 117,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716967,
          name: '第10步行程时间',
          value: '',
          unit: null,
          type: '1',
          treeId: 117,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716968,
          name: '第11步行程时间',
          value: '',
          unit: null,
          type: '1',
          treeId: 117,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716969,
          name: '第10步误差',
          value: '',
          unit: null,
          type: '1',
          treeId: 117,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        },
        {
          id: 716970,
          name: '第11步误差',
          value: '',
          unit: null,
          type: '1',
          treeId: 117,
          valveHistoryDataListId: 2077,
          time: '2024-10-10T00:00:00.000Z'
        }
      ]
    },
    {
      id: 2076,
      tag: 'FV101_4',
      valveId: 1815,
      time: '2024-10-09 08:00:00',
      valveHistoryData: [
        {
          id: 716476,
          name: '行程',
          value: '100.00',
          unit: '%',
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716477,
          name: '行程偏差',
          value: '0.00',
          unit: '%',
          type: '1',
          treeId: 85,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716478,
          name: '供气压力',
          value: '56.03',
          unit: 'psi',
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716479,
          name: '驱动信号',
          value: '100.50',
          unit: '%',
          type: '1',
          treeId: 85,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716480,
          name: '仪表模式',
          value: '投用状态',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716481,
          name: '循环计数',
          value: '4197',
          unit: 'counts',
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716482,
          name: '行程累计器',
          value: '101245',
          unit: '%',
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716483,
          name: '放大器调整',
          value: 'N/A',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716484,
          name: '最高温度记录',
          value: '31.56',
          unit: 'C',
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716485,
          name: '运行时间',
          value: '1331',
          unit: 'days',
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716486,
          name: '启动次数',
          value: '60',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716487,
          name: '仪表等级',
          value: 'PD',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716488,
          name: '阀门型式',
          value: '直行程阀',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716489,
          name: '执行机构类型',
          value: '弹簧膜片式',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716490,
          name: '标定日期',
          value: '09 Apr 2024',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716491,
          name: '行程高',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716492,
          name: '行程低',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716493,
          name: '行程高高',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716494,
          name: '行程低低',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716495,
          name: '行程偏差',
          value: '----',
          unit: null,
          type: '1',
          treeId: 87,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716496,
          name: '循环计数高',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716497,
          name: '行程累计高',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716498,
          name: '驱动信号',
          value: '----',
          unit: null,
          type: '1',
          treeId: 87,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716499,
          name: '供气压力低',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716500,
          name: '组态已更改',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716501,
          name: '回路电流验证报警',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716502,
          name: '内部传感器超出限制范围',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716503,
          name: '变量超出范围',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716504,
          name: '处于标定模式',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716505,
          name: '自动校验进行中',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716506,
          name: '诊断进行中',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716507,
          name: '小回路传感器故障',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716508,
          name: '行程传感器故障',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716509,
          name: '温度传感器故障',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716510,
          name: '压力传感器故障',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716511,
          name: '驱动电流故障',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716512,
          name: '关键 NVM 故障',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716513,
          name: '闪存完整性故障',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716514,
          name: '参考电压故障',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716515,
          name: '报警记录非空',
          value: '开',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716516,
          name: '报警记录已满',
          value: '开',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716517,
          name: '积分器饱和高',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716518,
          name: '积分器饱和低',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716519,
          name: '关机激活',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716520,
          name: '压力偏差',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716521,
          name: '非关键 NVM 故障',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716522,
          name: '仪表时间为大概值',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716523,
          name: '诊断数据可用',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716524,
          name: '要求手动复位',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716525,
          name: '行程高限位/截止',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716526,
          name: '行程低限位/截止',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716527,
          name: '压力切换激活',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716528,
          name: 'NVM 过度写入',
          value: '',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716529,
          name: '供气压力高',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716530,
          name: '端口 A 过压',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716531,
          name: 'SOV 测试最低要求压降',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716532,
          name: 'SOV 测试最高可允许压降',
          value: '----',
          unit: null,
          type: '1',
          treeId: 84,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716533,
          name: '供气压力性能诊断',
          value: "{'未检测到活动报警': ''}",
          unit: null,
          type: '2',
          treeId: 88,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716534,
          name: '行程偏差性能诊断',
          value: "{'未检测到活动报警': '', '供气压力正常專專驗': ''}",
          unit: null,
          type: '2',
          treeId: 89,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716535,
          name: 'I/P和放大器完整性性能诊断',
          value:
            "{'未检测到活动报警': '', '供气压力正常': '', '行程接近截止点': '设备接近行程截止点。在设备离开截止点之前数据分析将一直挂起。'}",
          unit: null,
          type: '2',
          treeId: 90,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716536,
          name: '放大器调整性能诊断',
          value: '',
          unit: null,
          type: '2',
          treeId: 91,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716537,
          name: '空气质量流量性能诊断',
          value:
            "{'未检测到活动报警': '', '无法估计空气质量流量': '放大器插座上的压降太小，无法估计出可信的空气质量流量。'}",
          unit: null,
          type: '2',
          treeId: 92,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716538,
          name: '阀门摩擦力性能诊断',
          value:
            "{'未检测到活动报警': '', '供气压力正常': '', '分析正在进行': '行程往复次数达到足以计算出可信的值后，将报告摩擦力估计值。', '不确定摩擦力': '？?？？？?？？ = 0.00 Ibf?？??????？？??？？??？X?？10.00 - 100.00 Ibf?? 可能原因： 行程往复不足，无法计算出可信的摩擦力值。'}",
          unit: null,
          type: '2',
          treeId: 93,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716539,
          name: '平均扭矩',
          value: '',
          unit: null,
          type: '1',
          treeId: 93,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716540,
          name: '平均摩擦力',
          value: 'N/A',
          unit: null,
          type: '1',
          treeId: 93,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716541,
          name: '平均死区',
          value: 'N/A',
          unit: null,
          type: '1',
          treeId: 93,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716542,
          name: '扫描时间',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716543,
          name: '平均动态误差',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716544,
          name: '动态线性度（独立）',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716545,
          name: '平均扭矩',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716546,
          name: '弹簧预紧力',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716547,
          name: '测试状态阀座负载',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716548,
          name: '投用状态阀座负载',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716549,
          name: '所需阀座负载',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716550,
          name: '预期总摩擦力',
          value: '',
          unit: null,
          type: '1',
          treeId: 94,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716551,
          name: '类型',
          value: '',
          unit: null,
          type: '1',
          treeId: 106,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716552,
          name: '尺寸',
          value: '',
          unit: null,
          type: '1',
          treeId: 106,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716553,
          name: '额定行程',
          value: '',
          unit: null,
          type: '1',
          treeId: 105,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716554,
          name: '实际行程',
          value: '',
          unit: null,
          type: '1',
          treeId: 105,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716555,
          name: '阀杆直径',
          value: '',
          unit: null,
          type: '1',
          treeId: 105,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716556,
          name: '填料类型',
          value: '',
          unit: null,
          type: '1',
          treeId: 105,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716557,
          name: '增速器',
          value: '',
          unit: null,
          type: '1',
          treeId: 105,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716558,
          name: '有效面积',
          value: '',
          unit: null,
          type: '1',
          treeId: 105,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716559,
          name: '下方弹簧预紧力',
          value: '',
          unit: null,
          type: '1',
          treeId: 105,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716560,
          name: '上方弹簧预紧力',
          value: '',
          unit: null,
          type: '1',
          treeId: 105,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716561,
          name: '反馈连接方式',
          value: '',
          unit: null,
          type: '1',
          treeId: 110,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716562,
          name: '零功率状态',
          value: '',
          unit: null,
          type: '1',
          treeId: 110,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716563,
          name: '行程整定参数',
          value: '',
          unit: null,
          type: '1',
          treeId: 110,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716564,
          name: '比例',
          value: '',
          unit: null,
          type: '1',
          treeId: 110,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716565,
          name: '速度',
          value: '',
          unit: null,
          type: '1',
          treeId: 110,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716566,
          name: 'MLF',
          value: '',
          unit: null,
          type: '1',
          treeId: 110,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716567,
          name: '截止和表征',
          value: '',
          unit: null,
          type: '1',
          treeId: 110,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716568,
          name: '死区时间最大值及步数',
          value: '',
          unit: null,
          type: '1',
          treeId: 117,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716569,
          name: '超量 最大值及步数',
          value: '',
          unit: null,
          type: '1',
          treeId: 117,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716570,
          name: '误差 最大值及步数',
          value: '',
          unit: null,
          type: '1',
          treeId: 117,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716571,
          name: '第10步行程时间',
          value: '',
          unit: null,
          type: '1',
          treeId: 117,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716572,
          name: '第11步行程时间',
          value: '',
          unit: null,
          type: '1',
          treeId: 117,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716573,
          name: '第10步误差',
          value: '',
          unit: null,
          type: '1',
          treeId: 117,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        },
        {
          id: 716574,
          name: '第11步误差',
          value: '',
          unit: null,
          type: '1',
          treeId: 117,
          valveHistoryDataListId: 2076,
          time: '2024-10-09T00:00:00.000Z'
        }
      ]
    }
  ],
  page: 1,
  pageSize: 3,
  total: 23
}

export const runInfo = [
  {
    id: 6721,
    name: '行程',
    value: '98.88 %',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 84,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6722,
    name: '行程偏差',
    value: '1.12 %',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 85,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6723,
    name: '供气压力',
    value: '350.25 kPa',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 84,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6724,
    name: '驱动信号',
    value: '100.50 %',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 85,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6725,
    name: '仪表模式',
    value: 'In Service',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 84,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6726,
    name: '循环计数',
    value: '1232 counts',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 84,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6727,
    name: '行程累计器',
    value: '6932 %',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 84,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6728,
    name: '放大器调整',
    value: 'N/A',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 84,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6729,
    name: '最高温度记录',
    value: '47.00 C',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 84,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6730,
    name: '运行时间',
    value: '1640 days',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 84,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6731,
    name: '启动次数',
    value: '',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 84,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6732,
    name: '仪表等级',
    value: 'PD',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 84,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6733,
    name: '阀门型式',
    value: 'Sliding Stem',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 84,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6734,
    name: '执行机构类型',
    value: 'Spring and Diaphragm',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 84,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6735,
    name: '标定日期',
    value: '25 Dec 2020',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 84,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6736,
    name: '行程高',
    value: '----',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 84,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6737,
    name: '行程低',
    value: '----',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 84,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6738,
    name: '行程高高',
    value: '----',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 84,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6739,
    name: '行程低低',
    value: '----',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 84,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6740,
    name: '行程偏差',
    value: '----',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 87,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6741,
    name: '循环计数高',
    value: '----',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 84,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6742,
    name: '行程累计高',
    value: '----',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 84,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6743,
    name: '驱动信号',
    value: '----',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 87,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6744,
    name: '供气压力低',
    value: '----',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 84,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6745,
    name: '组态已更改',
    value: 'ON',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 84,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6746,
    name: '回路电流验证报警',
    value: '----',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 84,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6747,
    name: '内部传感器超出限制范围',
    value: '----',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 84,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6748,
    name: '变量超出范围',
    value: '----',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 84,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6749,
    name: '处于标定模式',
    value: '----',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 84,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6750,
    name: '自动校验进行中',
    value: '----',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 84,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6751,
    name: '诊断进行中',
    value: '----',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 84,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6752,
    name: '小回路传感器故障',
    value: '----',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 84,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6753,
    name: '行程传感器故障',
    value: '----',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 84,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6754,
    name: '温度传感器故障',
    value: '----',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 84,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6755,
    name: '压力传感器故障',
    value: '----',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 84,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6756,
    name: '驱动电流故障',
    value: '----',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 84,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6757,
    name: '关键 NVM 故障',
    value: '----',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 84,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6758,
    name: '闪存完整性故障',
    value: '----',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 84,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6759,
    name: '参考电压故障',
    value: '----',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 84,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6760,
    name: '报警记录非空',
    value: 'ON',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 84,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6761,
    name: '报警记录已满',
    value: '----',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 84,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6762,
    name: '积分器饱和高',
    value: '----',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 84,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6763,
    name: '积分器饱和低',
    value: '----',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 84,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6764,
    name: '关机激活',
    value: '----',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 84,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6765,
    name: '压力偏差',
    value: '----',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 84,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6766,
    name: '非关键 NVM 故障',
    value: '----',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 84,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6767,
    name: '仪表时间为大概值',
    value: '----',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 84,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6768,
    name: '诊断数据可用',
    value: 'ON',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 84,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6769,
    name: '要求手动复位',
    value: '----',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 84,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6770,
    name: '行程高限位/截止',
    value: '----',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 84,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6771,
    name: '行程低限位/截止',
    value: '----',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 84,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6772,
    name: '压力切换激活',
    value: '----',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 84,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6773,
    name: 'NVM 过度写入',
    value: '----',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 84,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6774,
    name: '供气压力高',
    value: '',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 84,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6775,
    name: '端口 A 过压',
    value: '',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 84,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6776,
    name: 'SOV 测试最低要求压降',
    value: '',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 84,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6777,
    name: 'SOV 测试最高可允许压降',
    value: '',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 84,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6778,
    name: '供气压力性能诊断',
    value: '',
    unit: null,
    type: '2',
    valveId: 15,
    treeId: 88,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6779,
    name: '行程偏差性能诊断',
    value: '',
    unit: null,
    type: '2',
    valveId: 15,
    treeId: 89,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6780,
    name: 'I/P和放大器完整性性能诊断',
    value: '',
    unit: null,
    type: '2',
    valveId: 15,
    treeId: 90,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6781,
    name: '放大器调整性能诊断',
    value: '',
    unit: null,
    type: '2',
    valveId: 15,
    treeId: 91,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6782,
    name: '空气质量流量性能诊断',
    value: '',
    unit: null,
    type: '2',
    valveId: 15,
    treeId: 92,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6783,
    name: '阀门摩擦力性能诊断',
    value: '',
    unit: null,
    type: '2',
    valveId: 15,
    treeId: 93,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6784,
    name: '平均扭矩',
    value: '',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 93,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6785,
    name: '平均死区',
    value: '',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 93,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6786,
    name: '扫描时间',
    value: '100.0 sec',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 94,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6787,
    name: '平均动态误差',
    value: '3.52%',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 94,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6788,
    name: '动态线性度（独立）',
    value: '0.80%',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 94,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6789,
    name: '平均扭矩',
    value: '189 Ibf',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 94,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6790,
    name: '弹簧预紧力',
    value: '15.8 - 35.24 psi',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 94,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6791,
    name: '测试状态阀座负载',
    value: '1913.7 lbf',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 94,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6792,
    name: '投用状态阀座负载',
    value: 'NA',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 94,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6793,
    name: '所需阀座负载',
    value: '346.32 Ibf',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 94,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6794,
    name: '预期总摩擦力',
    value: '120 lbf',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 94,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6795,
    name: '类型',
    value: 'GX',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 106,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6796,
    name: '尺寸',
    value: 'DN 80',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 106,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6797,
    name: '额定行程',
    value: '0.7874 in',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 105,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6798,
    name: '实际行程',
    value: '0.7874 in',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 105,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6799,
    name: '阀杆直径',
    value: '0.55118 in',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 105,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6800,
    name: '填料类型',
    value: 'TFE / Double',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 105,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6801,
    name: '增压器',
    value: 'None',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 105,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6802,
    name: '有效面积',
    value: '127.88 in2',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 105,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6803,
    name: '下方弹簧预紧力',
    value: '0.0 kPa',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 105,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6804,
    name: '上方弹簧预紧力',
    value: '0.0 kPa',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 105,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6805,
    name: '反馈连接方式',
    value: 'SStem #25 Array',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 110,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6806,
    name: '零功率状态',
    value: 'Valve Closed',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 110,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6807,
    name: '行程整定参数',
    value: 'E',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 110,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6808,
    name: '比例',
    value: '5.50',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 110,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6809,
    name: '速度',
    value: '3.00',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 110,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6810,
    name: 'MLF',
    value: '35.00',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 110,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6811,
    name: '截止和表征',
    value: 'Cutoffs and characterization were enabled during this test.',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 110,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6812,
    name: '死区时间最大值及步数',
    value: "步数: ['6']; 最大值: 1.77",
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 117,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6813,
    name: '超量 最大值及步数',
    value: "步数: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11']; 最大值: 1e-10",
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 117,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6814,
    name: '误差 最大值及步数',
    value: "步数: ['5']; 最大值: 1.43",
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 117,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6815,
    name: '第10步行程时间',
    value: '3.13',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 117,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6816,
    name: '第11步行程时间',
    value: '3.08',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 117,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6817,
    name: '第10步误差',
    value: '1.42',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 117,
    time: '2021-12-17 00:00:00'
  },
  {
    id: 6818,
    name: '第11步误差',
    value: '0.57',
    unit: null,
    type: '1',
    valveId: 15,
    treeId: 117,
    time: '2021-12-17 00:00:00'
  }
]

export const historyData = [
  {
    id: 3347,
    tag: 'FV101_3',
    valveId: 2110,
    time: '2024-10-23 08:00:00',
    valveHistoryData: [
      {
        id: 841143,
        name: '型号',
        value: 'ET',
        unit: null,
        type: '1',
        treeId: 80,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841144,
        name: '行程',
        value: '',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841145,
        name: '行程偏差',
        value: '',
        unit: null,
        type: '1',
        treeId: 85,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841146,
        name: '压力 A',
        value: '',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841147,
        name: '压力 B',
        value: '',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841148,
        name: '供气压力',
        value: '',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841149,
        name: '驱动信号',
        value: '',
        unit: null,
        type: '1',
        treeId: 85,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841150,
        name: '仪表模式',
        value: '',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841151,
        name: '循环计数',
        value: '',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841152,
        name: '行程累计器',
        value: '',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841153,
        name: '放大器调整',
        value: '',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841154,
        name: '最高温度记录',
        value: '',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841155,
        name: '运行时间',
        value: '',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841156,
        name: '启动次数',
        value: '',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841157,
        name: '仪表等级',
        value: '',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841158,
        name: '阀门型式',
        value: '',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841159,
        name: '执行机构类型',
        value: '',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841160,
        name: '标定日期',
        value: '',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841161,
        name: '行程高',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841162,
        name: '行程低',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841163,
        name: '行程高高',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841164,
        name: '行程低低',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841165,
        name: '行程偏差',
        value: '',
        unit: null,
        type: '3',
        treeId: 87,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841166,
        name: '循环计数高',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841167,
        name: '行程累计高',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841168,
        name: '驱动信号',
        value: '',
        unit: null,
        type: '3',
        treeId: 87,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841169,
        name: '供气压力低',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841170,
        name: '组态已更改',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841171,
        name: '回路电流验证报警',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841172,
        name: '内部传感器超出限制范围',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841173,
        name: '变量超出范围',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841174,
        name: '处于标定模式',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841175,
        name: '自动校验进行中',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841176,
        name: '诊断进行中',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841177,
        name: '小回路传感器故障',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841178,
        name: '行程传感器故障',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841179,
        name: '温度传感器故障',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841180,
        name: '压力传感器故障',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841181,
        name: '驱动电流故障',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841182,
        name: '关键 NVM 故障',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841183,
        name: '闪存完整性故障',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841184,
        name: '参考电压故障',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841185,
        name: '报警记录非空',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841186,
        name: '报警记录已满',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841187,
        name: '积分器饱和高',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841188,
        name: '积分器饱和低',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841189,
        name: '关机激活',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841190,
        name: '压力偏差',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841191,
        name: '非关键 NVM 故障',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841192,
        name: '仪表时间为大概值',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841193,
        name: '诊断数据可用',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841194,
        name: '要求手动复位',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841195,
        name: '行程高限位/截止',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841196,
        name: '行程低限位/截止',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841197,
        name: '压力切换激活',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841198,
        name: 'NVM 过度写入',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841199,
        name: '供气压力高',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841200,
        name: '端口 A 过压',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841201,
        name: 'SOV 测试最低要求压降',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841202,
        name: 'SOV 测试最高可允许压降',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841203,
        name: '供气压力性能诊断',
        value: '',
        unit: null,
        type: '2',
        treeId: 88,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841204,
        name: '行程偏差性能诊断',
        value: '',
        unit: null,
        type: '2',
        treeId: 89,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841205,
        name: 'I/P和放大器完整性性能诊断',
        value: '',
        unit: null,
        type: '2',
        treeId: 90,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841206,
        name: '放大器调整性能诊断',
        value: '',
        unit: null,
        type: '2',
        treeId: 91,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841207,
        name: '空气质量流量性能诊断',
        value: '',
        unit: null,
        type: '2',
        treeId: 92,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841208,
        name: '阀门摩擦力性能诊断',
        value: '',
        unit: null,
        type: '2',
        treeId: 93,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841209,
        name: '平均扭矩',
        value: '',
        unit: null,
        type: '1',
        treeId: 93,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841210,
        name: '平均摩擦力',
        value: '',
        unit: null,
        type: '1',
        treeId: 93,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841211,
        name: '平均死区',
        value: '',
        unit: null,
        type: '1',
        treeId: 93,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841212,
        name: '扫描时间',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841213,
        name: '平均动态误差',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841214,
        name: '动态线性度（独立）',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841215,
        name: '平均扭矩',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841216,
        name: '弹簧预紧力',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841217,
        name: '测试状态阀座负载',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841218,
        name: '投用状态阀座负载',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841219,
        name: '所需阀座负载',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841220,
        name: '预期总摩擦力',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841221,
        name: '制造商',
        value: '',
        unit: null,
        type: '1',
        treeId: 106,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841222,
        name: '类型',
        value: '',
        unit: null,
        type: '1',
        treeId: 106,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841223,
        name: '尺寸',
        value: '',
        unit: null,
        type: '1',
        treeId: 106,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841224,
        name: '等级',
        value: '',
        unit: null,
        type: '1',
        treeId: 106,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841225,
        name: '额定行程',
        value: '',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841226,
        name: '实际行程',
        value: '',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841227,
        name: '阀杆直径',
        value: '',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841228,
        name: '填料类型',
        value: '',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841229,
        name: '增压器',
        value: '',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841230,
        name: '有效面积',
        value: '',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841231,
        name: '下方弹簧预紧力',
        value: '',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841232,
        name: '上方弹簧预紧力',
        value: '',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841233,
        name: '反馈连接方式',
        value: '',
        unit: null,
        type: '1',
        treeId: 110,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841234,
        name: '零功率状态',
        value: '',
        unit: null,
        type: '1',
        treeId: 110,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841235,
        name: '行程整定参数',
        value: '',
        unit: null,
        type: '1',
        treeId: 110,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841236,
        name: '比例',
        value: '',
        unit: null,
        type: '1',
        treeId: 110,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841237,
        name: '速度',
        value: '',
        unit: null,
        type: '1',
        treeId: 110,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841238,
        name: 'MLF',
        value: '',
        unit: null,
        type: '1',
        treeId: 110,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841239,
        name: '截止和表征',
        value: '',
        unit: null,
        type: '1',
        treeId: 110,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841240,
        name: '死区时间最大值及步数',
        value: '',
        unit: null,
        type: '1',
        treeId: 117,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841241,
        name: '超量 最大值及步数',
        value: '',
        unit: null,
        type: '1',
        treeId: 117,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841242,
        name: '误差 最大值及步数',
        value: '',
        unit: null,
        type: '1',
        treeId: 117,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841243,
        name: '第10步行程时间',
        value: '',
        unit: null,
        type: '1',
        treeId: 117,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841244,
        name: '第11步行程时间',
        value: '',
        unit: null,
        type: '1',
        treeId: 117,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841245,
        name: '第10步误差',
        value: '',
        unit: null,
        type: '1',
        treeId: 117,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      },
      {
        id: 841246,
        name: '第11步误差',
        value: '',
        unit: null,
        type: '1',
        treeId: 117,
        valveHistoryDataListId: 3347,
        time: '2024-10-23T00:00:00.000Z'
      }
    ]
  },
  {
    id: 3337,
    tag: 'FV101_3',
    valveId: 2110,
    time: '2024-10-21 08:00:00',
    valveHistoryData: [
      {
        id: 840103,
        name: '型号',
        value: 'ET',
        unit: null,
        type: '1',
        treeId: 80,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840104,
        name: '行程',
        value: '',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840105,
        name: '行程偏差',
        value: '',
        unit: null,
        type: '1',
        treeId: 85,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840106,
        name: '压力 A',
        value: '',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840107,
        name: '压力 B',
        value: '',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840108,
        name: '供气压力',
        value: '',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840109,
        name: '驱动信号',
        value: '',
        unit: null,
        type: '1',
        treeId: 85,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840110,
        name: '仪表模式',
        value: '',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840111,
        name: '循环计数',
        value: '',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840112,
        name: '行程累计器',
        value: '',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840113,
        name: '放大器调整',
        value: '',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840114,
        name: '最高温度记录',
        value: '',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840115,
        name: '运行时间',
        value: '',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840116,
        name: '启动次数',
        value: '',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840117,
        name: '仪表等级',
        value: '',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840118,
        name: '阀门型式',
        value: '',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840119,
        name: '执行机构类型',
        value: '',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840120,
        name: '标定日期',
        value: '',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840121,
        name: '行程高',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840122,
        name: '行程低',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840123,
        name: '行程高高',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840124,
        name: '行程低低',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840125,
        name: '行程偏差',
        value: '',
        unit: null,
        type: '3',
        treeId: 87,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840126,
        name: '循环计数高',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840127,
        name: '行程累计高',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840128,
        name: '驱动信号',
        value: '',
        unit: null,
        type: '3',
        treeId: 87,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840129,
        name: '供气压力低',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840130,
        name: '组态已更改',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840131,
        name: '回路电流验证报警',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840132,
        name: '内部传感器超出限制范围',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840133,
        name: '变量超出范围',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840134,
        name: '处于标定模式',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840135,
        name: '自动校验进行中',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840136,
        name: '诊断进行中',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840137,
        name: '小回路传感器故障',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840138,
        name: '行程传感器故障',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840139,
        name: '温度传感器故障',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840140,
        name: '压力传感器故障',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840141,
        name: '驱动电流故障',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840142,
        name: '关键 NVM 故障',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840143,
        name: '闪存完整性故障',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840144,
        name: '参考电压故障',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840145,
        name: '报警记录非空',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840146,
        name: '报警记录已满',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840147,
        name: '积分器饱和高',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840148,
        name: '积分器饱和低',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840149,
        name: '关机激活',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840150,
        name: '压力偏差',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840151,
        name: '非关键 NVM 故障',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840152,
        name: '仪表时间为大概值',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840153,
        name: '诊断数据可用',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840154,
        name: '要求手动复位',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840155,
        name: '行程高限位/截止',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840156,
        name: '行程低限位/截止',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840157,
        name: '压力切换激活',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840158,
        name: 'NVM 过度写入',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840159,
        name: '供气压力高',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840160,
        name: '端口 A 过压',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840161,
        name: 'SOV 测试最低要求压降',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840162,
        name: 'SOV 测试最高可允许压降',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840163,
        name: '供气压力性能诊断',
        value: '',
        unit: null,
        type: '2',
        treeId: 88,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840164,
        name: '行程偏差性能诊断',
        value: '',
        unit: null,
        type: '2',
        treeId: 89,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840165,
        name: 'I/P和放大器完整性性能诊断',
        value: '',
        unit: null,
        type: '2',
        treeId: 90,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840166,
        name: '放大器调整性能诊断',
        value: '',
        unit: null,
        type: '2',
        treeId: 91,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840167,
        name: '空气质量流量性能诊断',
        value: '',
        unit: null,
        type: '2',
        treeId: 92,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840168,
        name: '阀门摩擦力性能诊断',
        value: '',
        unit: null,
        type: '2',
        treeId: 93,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840169,
        name: '平均扭矩',
        value: '',
        unit: null,
        type: '1',
        treeId: 93,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840170,
        name: '平均摩擦力',
        value: '',
        unit: null,
        type: '1',
        treeId: 93,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840171,
        name: '平均死区',
        value: '',
        unit: null,
        type: '1',
        treeId: 93,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840172,
        name: '扫描时间',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840173,
        name: '平均动态误差',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840174,
        name: '动态线性度（独立）',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840175,
        name: '平均扭矩',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840176,
        name: '弹簧预紧力',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840177,
        name: '测试状态阀座负载',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840178,
        name: '投用状态阀座负载',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840179,
        name: '所需阀座负载',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840180,
        name: '预期总摩擦力',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840181,
        name: '制造商',
        value: '',
        unit: null,
        type: '1',
        treeId: 106,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840182,
        name: '类型',
        value: '',
        unit: null,
        type: '1',
        treeId: 106,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840183,
        name: '尺寸',
        value: '',
        unit: null,
        type: '1',
        treeId: 106,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840184,
        name: '等级',
        value: '',
        unit: null,
        type: '1',
        treeId: 106,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840185,
        name: '额定行程',
        value: '',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840186,
        name: '实际行程',
        value: '',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840187,
        name: '阀杆直径',
        value: '',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840188,
        name: '填料类型',
        value: '',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840189,
        name: '增压器',
        value: '',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840190,
        name: '有效面积',
        value: '',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840191,
        name: '下方弹簧预紧力',
        value: '',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840192,
        name: '上方弹簧预紧力',
        value: '',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840193,
        name: '反馈连接方式',
        value: '',
        unit: null,
        type: '1',
        treeId: 110,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840194,
        name: '零功率状态',
        value: '',
        unit: null,
        type: '1',
        treeId: 110,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840195,
        name: '行程整定参数',
        value: '',
        unit: null,
        type: '1',
        treeId: 110,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840196,
        name: '比例',
        value: '',
        unit: null,
        type: '1',
        treeId: 110,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840197,
        name: '速度',
        value: '',
        unit: null,
        type: '1',
        treeId: 110,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840198,
        name: 'MLF',
        value: '',
        unit: null,
        type: '1',
        treeId: 110,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840199,
        name: '截止和表征',
        value: '',
        unit: null,
        type: '1',
        treeId: 110,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840200,
        name: '死区时间最大值及步数',
        value: '',
        unit: null,
        type: '1',
        treeId: 117,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840201,
        name: '超量 最大值及步数',
        value: '',
        unit: null,
        type: '1',
        treeId: 117,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840202,
        name: '误差 最大值及步数',
        value: '',
        unit: null,
        type: '1',
        treeId: 117,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840203,
        name: '第10步行程时间',
        value: '',
        unit: null,
        type: '1',
        treeId: 117,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840204,
        name: '第11步行程时间',
        value: '',
        unit: null,
        type: '1',
        treeId: 117,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840205,
        name: '第10步误差',
        value: '',
        unit: null,
        type: '1',
        treeId: 117,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      },
      {
        id: 840206,
        name: '第11步误差',
        value: '',
        unit: null,
        type: '1',
        treeId: 117,
        valveHistoryDataListId: 3337,
        time: '2024-10-21T00:00:00.000Z'
      }
    ]
  },
  {
    id: 3343,
    tag: 'FV101_3',
    valveId: 2110,
    time: '2024-10-14 08:00:00',
    valveHistoryData: [
      {
        id: 840727,
        name: '型号',
        value: '',
        unit: null,
        type: '1',
        treeId: 80,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840728,
        name: '行程',
        value: '63.16',
        unit: '%',
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840729,
        name: '行程偏差',
        value: '0.09',
        unit: '%',
        type: '1',
        treeId: 85,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840730,
        name: '压力 A',
        value: '12.95',
        unit: 'psi',
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840731,
        name: '压力 B',
        value: '-0.69',
        unit: 'psi',
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840732,
        name: '供气压力',
        value: '25.63',
        unit: 'psi',
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840733,
        name: '驱动信号',
        value: '72.31',
        unit: '%',
        type: '1',
        treeId: 85,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840734,
        name: '仪表模式',
        value: '投用状态',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840735,
        name: '循环计数',
        value: '21599',
        unit: 'counts',
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840736,
        name: '行程累计器',
        value: '215751',
        unit: '%',
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840737,
        name: '放大器调整',
        value: 'N/A',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840738,
        name: '最高温度记录',
        value: '32.88',
        unit: 'C',
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840739,
        name: '运行时间',
        value: '1328',
        unit: 'days',
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840740,
        name: '启动次数',
        value: '155',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840741,
        name: '仪表等级',
        value: 'PD',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840742,
        name: '阀门型式',
        value: '直行程阀',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840743,
        name: '执行机构类型',
        value: '弹簧膜片式',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840744,
        name: '标定日期',
        value: '30 Apr 2024',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840745,
        name: '行程高',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840746,
        name: '行程低',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840747,
        name: '行程高高',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840748,
        name: '行程低低',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840749,
        name: '行程偏差',
        value: '----',
        unit: null,
        type: '3',
        treeId: 87,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840750,
        name: '循环计数高',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840751,
        name: '行程累计高',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840752,
        name: '驱动信号',
        value: '----',
        unit: null,
        type: '3',
        treeId: 87,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840753,
        name: '供气压力低',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840754,
        name: '组态已更改',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840755,
        name: '回路电流验证报警',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840756,
        name: '内部传感器超出限制范围',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840757,
        name: '变量超出范围',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840758,
        name: '处于标定模式',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840759,
        name: '自动校验进行中',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840760,
        name: '诊断进行中',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840761,
        name: '小回路传感器故障',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840762,
        name: '行程传感器故障',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840763,
        name: '温度传感器故障',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840764,
        name: '压力传感器故障',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840765,
        name: '驱动电流故障',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840766,
        name: '关键 NVM 故障',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840767,
        name: '闪存完整性故障',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840768,
        name: '参考电压故障',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840769,
        name: '报警记录非空',
        value: '开',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840770,
        name: '报警记录已满',
        value: '开',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840771,
        name: '积分器饱和高',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840772,
        name: '积分器饱和低',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840773,
        name: '关机激活',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840774,
        name: '压力偏差',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840775,
        name: '非关键 NVM 故障',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840776,
        name: '仪表时间为大概值',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840777,
        name: '诊断数据可用',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840778,
        name: '要求手动复位',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840779,
        name: '行程高限位/截止',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840780,
        name: '行程低限位/截止',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840781,
        name: '压力切换激活',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840782,
        name: 'NVM 过度写入',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840783,
        name: '供气压力高',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840784,
        name: '端口 A 过压',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840785,
        name: 'SOV 测试最低要求压降',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840786,
        name: 'SOV 测试最高可允许压降',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840787,
        name: '供气压力性能诊断',
        value: "{'未检测到活动报警': ''}",
        unit: null,
        type: '2',
        treeId: 88,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840788,
        name: '行程偏差性能诊断',
        value: "{'未检测到活动报警': '', '廣供气压力正常專': ''}",
        unit: null,
        type: '2',
        treeId: 89,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840789,
        name: 'I/P和放大器完整性性能诊断',
        value: "{'未检测到活动报警': '', '供气压力正常': ''}",
        unit: null,
        type: '2',
        treeId: 90,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840790,
        name: '放大器调整性能诊断',
        value: '',
        unit: null,
        type: '2',
        treeId: 91,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840791,
        name: '空气质量流量性能诊断',
        value: "{'未检测到活动报警': ''}",
        unit: null,
        type: '2',
        treeId: 92,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840792,
        name: '阀门摩擦力性能诊断',
        value:
          "{'未检测到活动报警': '', '供气压力正常': '', '范围内摩擦力': '？?？？???？= 82.00 Ibf?？?？？???？？??？？？??X??10.00-100.00 Ibf??'}",
        unit: null,
        type: '2',
        treeId: 93,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840793,
        name: '平均扭矩',
        value: '',
        unit: null,
        type: '1',
        treeId: 93,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840794,
        name: '平均摩擦力',
        value: '82',
        unit: 'lbf',
        type: '1',
        treeId: 93,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840795,
        name: '平均死区',
        value: '0.10',
        unit: '%',
        type: '1',
        treeId: 93,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840796,
        name: '扫描时间',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840797,
        name: '平均动态误差',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840798,
        name: '动态线性度（独立）',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840799,
        name: '平均扭矩',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840800,
        name: '弹簧预紧力',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840801,
        name: '测试状态阀座负载',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840802,
        name: '投用状态阀座负载',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840803,
        name: '所需阀座负载',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840804,
        name: '预期总摩擦力',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840805,
        name: '制造商',
        value: '',
        unit: null,
        type: '1',
        treeId: 106,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840806,
        name: '类型',
        value: '',
        unit: null,
        type: '1',
        treeId: 106,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840807,
        name: '尺寸',
        value: '',
        unit: null,
        type: '1',
        treeId: 106,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840808,
        name: '等级',
        value: '',
        unit: null,
        type: '1',
        treeId: 106,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840809,
        name: '额定行程',
        value: '',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840810,
        name: '实际行程',
        value: '',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840811,
        name: '阀杆直径',
        value: '',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840812,
        name: '填料类型',
        value: '',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840813,
        name: '增压器',
        value: '',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840814,
        name: '有效面积',
        value: '',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840815,
        name: '下方弹簧预紧力',
        value: '',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840816,
        name: '上方弹簧预紧力',
        value: '',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840817,
        name: '反馈连接方式',
        value: '',
        unit: null,
        type: '1',
        treeId: 110,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840818,
        name: '零功率状态',
        value: '',
        unit: null,
        type: '1',
        treeId: 110,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840819,
        name: '行程整定参数',
        value: '',
        unit: null,
        type: '1',
        treeId: 110,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840820,
        name: '比例',
        value: '',
        unit: null,
        type: '1',
        treeId: 110,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840821,
        name: '速度',
        value: '',
        unit: null,
        type: '1',
        treeId: 110,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840822,
        name: 'MLF',
        value: '',
        unit: null,
        type: '1',
        treeId: 110,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840823,
        name: '截止和表征',
        value: '',
        unit: null,
        type: '1',
        treeId: 110,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840824,
        name: '死区时间最大值及步数',
        value: '',
        unit: null,
        type: '1',
        treeId: 117,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840825,
        name: '超量 最大值及步数',
        value: '',
        unit: null,
        type: '1',
        treeId: 117,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840826,
        name: '误差 最大值及步数',
        value: '',
        unit: null,
        type: '1',
        treeId: 117,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840827,
        name: '第10步行程时间',
        value: '',
        unit: null,
        type: '1',
        treeId: 117,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840828,
        name: '第11步行程时间',
        value: '',
        unit: null,
        type: '1',
        treeId: 117,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840829,
        name: '第10步误差',
        value: '',
        unit: null,
        type: '1',
        treeId: 117,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      },
      {
        id: 840830,
        name: '第11步误差',
        value: '',
        unit: null,
        type: '1',
        treeId: 117,
        valveHistoryDataListId: 3343,
        time: '2024-10-14T00:00:00.000Z'
      }
    ]
  },
  {
    id: 3336,
    tag: 'FV101_3',
    valveId: 2110,
    time: '2024-10-13 08:00:00',
    valveHistoryData: [
      {
        id: 839999,
        name: '型号',
        value: '',
        unit: null,
        type: '1',
        treeId: 80,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840000,
        name: '行程',
        value: '70.44',
        unit: '%',
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840001,
        name: '行程偏差',
        value: '0.13',
        unit: '%',
        type: '1',
        treeId: 85,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840002,
        name: '压力 A',
        value: '14.61',
        unit: 'psi',
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840003,
        name: '压力 B',
        value: '-0.63',
        unit: 'psi',
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840004,
        name: '供气压力',
        value: '25.48',
        unit: 'psi',
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840005,
        name: '驱动信号',
        value: '73.00',
        unit: '%',
        type: '1',
        treeId: 85,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840006,
        name: '仪表模式',
        value: '投用状态',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840007,
        name: '循环计数',
        value: '21143',
        unit: 'counts',
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840008,
        name: '行程累计器',
        value: '212451',
        unit: '%',
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840009,
        name: '放大器调整',
        value: 'N/A',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840010,
        name: '最高温度记录',
        value: '32.88',
        unit: 'C',
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840011,
        name: '运行时间',
        value: '1327',
        unit: 'days',
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840012,
        name: '启动次数',
        value: '155',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840013,
        name: '仪表等级',
        value: 'PD',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840014,
        name: '阀门型式',
        value: '直行程阀',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840015,
        name: '执行机构类型',
        value: '弹簧膜片式',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840016,
        name: '标定日期',
        value: '30 Apr 2024',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840017,
        name: '行程高',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840018,
        name: '行程低',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840019,
        name: '行程高高',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840020,
        name: '行程低低',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840021,
        name: '行程偏差',
        value: '----',
        unit: null,
        type: '3',
        treeId: 87,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840022,
        name: '循环计数高',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840023,
        name: '行程累计高',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840024,
        name: '驱动信号',
        value: '----',
        unit: null,
        type: '3',
        treeId: 87,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840025,
        name: '供气压力低',
        value: '开',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840026,
        name: '组态已更改',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840027,
        name: '回路电流验证报警',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840028,
        name: '内部传感器超出限制范围',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840029,
        name: '变量超出范围',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840030,
        name: '处于标定模式',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840031,
        name: '自动校验进行中',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840032,
        name: '诊断进行中',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840033,
        name: '小回路传感器故障',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840034,
        name: '行程传感器故障',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840035,
        name: '温度传感器故障',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840036,
        name: '压力传感器故障',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840037,
        name: '驱动电流故障',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840038,
        name: '关键 NVM 故障',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840039,
        name: '闪存完整性故障',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840040,
        name: '参考电压故障',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840041,
        name: '报警记录非空',
        value: '开',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840042,
        name: '报警记录已满',
        value: '开',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840043,
        name: '积分器饱和高',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840044,
        name: '积分器饱和低',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840045,
        name: '关机激活',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840046,
        name: '压力偏差',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840047,
        name: '非关键 NVM 故障',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840048,
        name: '仪表时间为大概值',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840049,
        name: '诊断数据可用',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840050,
        name: '要求手动复位',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840051,
        name: '行程高限位/截止',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840052,
        name: '行程低限位/截止',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840053,
        name: '压力切换激活',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840054,
        name: 'NVM 过度写入',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840055,
        name: '供气压力高',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840056,
        name: '端口 A 过压',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840057,
        name: 'SOV 测试最低要求压降',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840058,
        name: 'SOV 测试最高可允许压降',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840059,
        name: '供气压力性能诊断',
        value: "{'未检测到活动报警': ''}",
        unit: null,
        type: '2',
        treeId: 88,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840060,
        name: '行程偏差性能诊断',
        value: "{'未检测到活动报警': '', '供气压力正常': ''}",
        unit: null,
        type: '2',
        treeId: 89,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840061,
        name: 'I/P和放大器完整性性能诊断',
        value: "{'未检测到活动报警': '', '供气压力正常': ''}",
        unit: null,
        type: '2',
        treeId: 90,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840062,
        name: '放大器调整性能诊断',
        value: '',
        unit: null,
        type: '2',
        treeId: 91,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840063,
        name: '空气质量流量性能诊断',
        value: "{'未检测到活动报警': ''}",
        unit: null,
        type: '2',
        treeId: 92,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840064,
        name: '阀门摩擦力性能诊断',
        value:
          "{'未检测到活动报警': '', '供气压力正常': '', '分析正在进行': '行程往复次数达到足以计算出可信的值后，将报告摩擦力估计值。', '不确定摩擦力': '？?？？？?？？ = 0.00 Ibf?？??????？？??？？??？X?？10.00 - 100.00 Ibf?? 可能原因： 行程往复不足，无法计算出可信的摩擦力值。'}",
        unit: null,
        type: '2',
        treeId: 93,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840065,
        name: '平均扭矩',
        value: '',
        unit: null,
        type: '1',
        treeId: 93,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840066,
        name: '平均摩擦力',
        value: 'N/A',
        unit: null,
        type: '1',
        treeId: 93,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840067,
        name: '平均死区',
        value: 'N/A',
        unit: null,
        type: '1',
        treeId: 93,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840068,
        name: '扫描时间',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840069,
        name: '平均动态误差',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840070,
        name: '动态线性度（独立）',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840071,
        name: '平均扭矩',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840072,
        name: '弹簧预紧力',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840073,
        name: '测试状态阀座负载',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840074,
        name: '投用状态阀座负载',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840075,
        name: '所需阀座负载',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840076,
        name: '预期总摩擦力',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840077,
        name: '制造商',
        value: '',
        unit: null,
        type: '1',
        treeId: 106,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840078,
        name: '类型',
        value: '',
        unit: null,
        type: '1',
        treeId: 106,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840079,
        name: '尺寸',
        value: '',
        unit: null,
        type: '1',
        treeId: 106,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840080,
        name: '等级',
        value: '',
        unit: null,
        type: '1',
        treeId: 106,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840081,
        name: '额定行程',
        value: '',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840082,
        name: '实际行程',
        value: '',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840083,
        name: '阀杆直径',
        value: '',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840084,
        name: '填料类型',
        value: '',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840085,
        name: '增压器',
        value: '',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840086,
        name: '有效面积',
        value: '',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840087,
        name: '下方弹簧预紧力',
        value: '',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840088,
        name: '上方弹簧预紧力',
        value: '',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840089,
        name: '反馈连接方式',
        value: '',
        unit: null,
        type: '1',
        treeId: 110,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840090,
        name: '零功率状态',
        value: '',
        unit: null,
        type: '1',
        treeId: 110,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840091,
        name: '行程整定参数',
        value: '',
        unit: null,
        type: '1',
        treeId: 110,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840092,
        name: '比例',
        value: '',
        unit: null,
        type: '1',
        treeId: 110,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840093,
        name: '速度',
        value: '',
        unit: null,
        type: '1',
        treeId: 110,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840094,
        name: 'MLF',
        value: '',
        unit: null,
        type: '1',
        treeId: 110,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840095,
        name: '截止和表征',
        value: '',
        unit: null,
        type: '1',
        treeId: 110,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840096,
        name: '死区时间最大值及步数',
        value: '',
        unit: null,
        type: '1',
        treeId: 117,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840097,
        name: '超量 最大值及步数',
        value: '',
        unit: null,
        type: '1',
        treeId: 117,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840098,
        name: '误差 最大值及步数',
        value: '',
        unit: null,
        type: '1',
        treeId: 117,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840099,
        name: '第10步行程时间',
        value: '',
        unit: null,
        type: '1',
        treeId: 117,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840100,
        name: '第11步行程时间',
        value: '',
        unit: null,
        type: '1',
        treeId: 117,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840101,
        name: '第10步误差',
        value: '',
        unit: null,
        type: '1',
        treeId: 117,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      },
      {
        id: 840102,
        name: '第11步误差',
        value: '',
        unit: null,
        type: '1',
        treeId: 117,
        valveHistoryDataListId: 3336,
        time: '2024-10-13T00:00:00.000Z'
      }
    ]
  },
  {
    id: 3333,
    tag: 'FV101_3',
    valveId: 2110,
    time: '2024-10-12 08:00:00',
    valveHistoryData: [
      {
        id: 839687,
        name: '型号',
        value: '',
        unit: null,
        type: '1',
        treeId: 80,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839688,
        name: '行程',
        value: '47.63',
        unit: '%',
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839689,
        name: '行程偏差',
        value: '0.06',
        unit: '%',
        type: '1',
        treeId: 85,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839690,
        name: '压力 A',
        value: '12.30',
        unit: 'psi',
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839691,
        name: '压力 B',
        value: '-0.60',
        unit: 'psi',
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839692,
        name: '供气压力',
        value: '25.63',
        unit: 'psi',
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839693,
        name: '驱动信号',
        value: '72.63',
        unit: '%',
        type: '1',
        treeId: 85,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839694,
        name: '仪表模式',
        value: '投用状态',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839695,
        name: '循环计数',
        value: '20876',
        unit: 'counts',
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839696,
        name: '行程累计器',
        value: '210596',
        unit: '%',
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839697,
        name: '放大器调整',
        value: 'N/A',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839698,
        name: '最高温度记录',
        value: '32.88',
        unit: 'C',
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839699,
        name: '运行时间',
        value: '1326',
        unit: 'days',
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839700,
        name: '启动次数',
        value: '155',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839701,
        name: '仪表等级',
        value: 'PD',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839702,
        name: '阀门型式',
        value: '直行程阀',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839703,
        name: '执行机构类型',
        value: '弹簧膜片式',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839704,
        name: '标定日期',
        value: '30 Apr 2024',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839705,
        name: '行程高',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839706,
        name: '行程低',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839707,
        name: '行程高高',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839708,
        name: '行程低低',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839709,
        name: '行程偏差',
        value: '----',
        unit: null,
        type: '3',
        treeId: 87,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839710,
        name: '循环计数高',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839711,
        name: '行程累计高',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839712,
        name: '驱动信号',
        value: '----',
        unit: null,
        type: '3',
        treeId: 87,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839713,
        name: '供气压力低',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839714,
        name: '组态已更改',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839715,
        name: '回路电流验证报警',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839716,
        name: '内部传感器超出限制范围',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839717,
        name: '变量超出范围',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839718,
        name: '处于标定模式',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839719,
        name: '自动校验进行中',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839720,
        name: '诊断进行中',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839721,
        name: '小回路传感器故障',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839722,
        name: '行程传感器故障',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839723,
        name: '温度传感器故障',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839724,
        name: '压力传感器故障',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839725,
        name: '驱动电流故障',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839726,
        name: '关键 NVM 故障',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839727,
        name: '闪存完整性故障',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839728,
        name: '参考电压故障',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839729,
        name: '报警记录非空',
        value: '开',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839730,
        name: '报警记录已满',
        value: '开',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839731,
        name: '积分器饱和高',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839732,
        name: '积分器饱和低',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839733,
        name: '关机激活',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839734,
        name: '压力偏差',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839735,
        name: '非关键 NVM 故障',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839736,
        name: '仪表时间为大概值',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839737,
        name: '诊断数据可用',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839738,
        name: '要求手动复位',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839739,
        name: '行程高限位/截止',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839740,
        name: '行程低限位/截止',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839741,
        name: '压力切换激活',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839742,
        name: 'NVM 过度写入',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839743,
        name: '供气压力高',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839744,
        name: '端口 A 过压',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839745,
        name: 'SOV 测试最低要求压降',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839746,
        name: 'SOV 测试最高可允许压降',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839747,
        name: '供气压力性能诊断',
        value: "{'未检测到活动报警': ''}",
        unit: null,
        type: '2',
        treeId: 88,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839748,
        name: '行程偏差性能诊断',
        value: "{'未检测到活动报警': '', '廣供气压力正常\\u3000驗': ''}",
        unit: null,
        type: '2',
        treeId: 89,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839749,
        name: 'I/P和放大器完整性性能诊断',
        value: "{'未检测到活动报警': '', '供气压力正常': ''}",
        unit: null,
        type: '2',
        treeId: 90,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839750,
        name: '放大器调整性能诊断',
        value: '',
        unit: null,
        type: '2',
        treeId: 91,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839751,
        name: '空气质量流量性能诊断',
        value: "{'未检测到活动报警': ''}",
        unit: null,
        type: '2',
        treeId: 92,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839752,
        name: '阀门摩擦力性能诊断',
        value:
          "{'未检测到活动报警': '', '供气压力正常': '', '分析正在进行': '行程往复次数达到足以计算出可信的值后，将报告摩擦力估计值。', '不确定摩擦力': '？?？？???？ = 0.00 Ibf??？？？??？???？???？?X?？10.00 - 100.00 Ibf?? 可能原因： 行程往复不足，无法计算出可信的摩擦力值。'}",
        unit: null,
        type: '2',
        treeId: 93,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839753,
        name: '平均扭矩',
        value: '',
        unit: null,
        type: '1',
        treeId: 93,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839754,
        name: '平均摩擦力',
        value: 'N/A',
        unit: null,
        type: '1',
        treeId: 93,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839755,
        name: '平均死区',
        value: 'N/A',
        unit: null,
        type: '1',
        treeId: 93,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839756,
        name: '扫描时间',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839757,
        name: '平均动态误差',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839758,
        name: '动态线性度（独立）',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839759,
        name: '平均扭矩',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839760,
        name: '弹簧预紧力',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839761,
        name: '测试状态阀座负载',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839762,
        name: '投用状态阀座负载',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839763,
        name: '所需阀座负载',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839764,
        name: '预期总摩擦力',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839765,
        name: '制造商',
        value: '',
        unit: null,
        type: '1',
        treeId: 106,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839766,
        name: '类型',
        value: '',
        unit: null,
        type: '1',
        treeId: 106,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839767,
        name: '尺寸',
        value: '',
        unit: null,
        type: '1',
        treeId: 106,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839768,
        name: '等级',
        value: '',
        unit: null,
        type: '1',
        treeId: 106,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839769,
        name: '额定行程',
        value: '',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839770,
        name: '实际行程',
        value: '',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839771,
        name: '阀杆直径',
        value: '',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839772,
        name: '填料类型',
        value: '',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839773,
        name: '增压器',
        value: '',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839774,
        name: '有效面积',
        value: '',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839775,
        name: '下方弹簧预紧力',
        value: '',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839776,
        name: '上方弹簧预紧力',
        value: '',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839777,
        name: '反馈连接方式',
        value: '',
        unit: null,
        type: '1',
        treeId: 110,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839778,
        name: '零功率状态',
        value: '',
        unit: null,
        type: '1',
        treeId: 110,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839779,
        name: '行程整定参数',
        value: '',
        unit: null,
        type: '1',
        treeId: 110,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839780,
        name: '比例',
        value: '',
        unit: null,
        type: '1',
        treeId: 110,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839781,
        name: '速度',
        value: '',
        unit: null,
        type: '1',
        treeId: 110,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839782,
        name: 'MLF',
        value: '',
        unit: null,
        type: '1',
        treeId: 110,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839783,
        name: '截止和表征',
        value: '',
        unit: null,
        type: '1',
        treeId: 110,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839784,
        name: '死区时间最大值及步数',
        value: '',
        unit: null,
        type: '1',
        treeId: 117,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839785,
        name: '超量 最大值及步数',
        value: '',
        unit: null,
        type: '1',
        treeId: 117,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839786,
        name: '误差 最大值及步数',
        value: '',
        unit: null,
        type: '1',
        treeId: 117,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839787,
        name: '第10步行程时间',
        value: '',
        unit: null,
        type: '1',
        treeId: 117,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839788,
        name: '第11步行程时间',
        value: '',
        unit: null,
        type: '1',
        treeId: 117,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839789,
        name: '第10步误差',
        value: '',
        unit: null,
        type: '1',
        treeId: 117,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      },
      {
        id: 839790,
        name: '第11步误差',
        value: '',
        unit: null,
        type: '1',
        treeId: 117,
        valveHistoryDataListId: 3333,
        time: '2024-10-12T00:00:00.000Z'
      }
    ]
  },
  {
    id: 3326,
    tag: 'FV101_3',
    valveId: 2110,
    time: '2024-10-10 08:00:00',
    valveHistoryData: [
      {
        id: 838959,
        name: '型号',
        value: '',
        unit: null,
        type: '1',
        treeId: 80,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 838960,
        name: '行程',
        value: '59.47',
        unit: '%',
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 838961,
        name: '行程偏差',
        value: '0.06',
        unit: '%',
        type: '1',
        treeId: 85,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 838962,
        name: '压力 A',
        value: '12.80',
        unit: 'psi',
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 838963,
        name: '压力 B',
        value: '-0.67',
        unit: 'psi',
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 838964,
        name: '供气压力',
        value: '25.72',
        unit: 'psi',
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 838965,
        name: '驱动信号',
        value: '72.00',
        unit: '%',
        type: '1',
        treeId: 85,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 838966,
        name: '仪表模式',
        value: '投用状态',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 838967,
        name: '循环计数',
        value: '20226',
        unit: 'counts',
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 838968,
        name: '行程累计器',
        value: '205822',
        unit: '%',
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 838969,
        name: '放大器调整',
        value: 'N/A',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 838970,
        name: '最高温度记录',
        value: '32.88',
        unit: 'C',
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 838971,
        name: '运行时间',
        value: '1324',
        unit: 'days',
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 838972,
        name: '启动次数',
        value: '154',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 838973,
        name: '仪表等级',
        value: 'PD',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 838974,
        name: '阀门型式',
        value: '直行程阀',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 838975,
        name: '执行机构类型',
        value: '弹簧膜片式',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 838976,
        name: '标定日期',
        value: '30 Apr 2024',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 838977,
        name: '行程高',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 838978,
        name: '行程低',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 838979,
        name: '行程高高',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 838980,
        name: '行程低低',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 838981,
        name: '行程偏差',
        value: '----',
        unit: null,
        type: '3',
        treeId: 87,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 838982,
        name: '循环计数高',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 838983,
        name: '行程累计高',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 838984,
        name: '驱动信号',
        value: '----',
        unit: null,
        type: '3',
        treeId: 87,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 838985,
        name: '供气压力低',
        value: '开',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 838986,
        name: '组态已更改',
        value: '开',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 838987,
        name: '回路电流验证报警',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 838988,
        name: '内部传感器超出限制范围',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 838989,
        name: '变量超出范围',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 838990,
        name: '处于标定模式',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 838991,
        name: '自动校验进行中',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 838992,
        name: '诊断进行中',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 838993,
        name: '小回路传感器故障',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 838994,
        name: '行程传感器故障',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 838995,
        name: '温度传感器故障',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 838996,
        name: '压力传感器故障',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 838997,
        name: '驱动电流故障',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 838998,
        name: '关键 NVM 故障',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 838999,
        name: '闪存完整性故障',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 839000,
        name: '参考电压故障',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 839001,
        name: '报警记录非空',
        value: '开',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 839002,
        name: '报警记录已满',
        value: '开',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 839003,
        name: '积分器饱和高',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 839004,
        name: '积分器饱和低',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 839005,
        name: '关机激活',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 839006,
        name: '压力偏差',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 839007,
        name: '非关键 NVM 故障',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 839008,
        name: '仪表时间为大概值',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 839009,
        name: '诊断数据可用',
        value: '开',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 839010,
        name: '要求手动复位',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 839011,
        name: '行程高限位/截止',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 839012,
        name: '行程低限位/截止',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 839013,
        name: '压力切换激活',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 839014,
        name: 'NVM 过度写入',
        value: '开',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 839015,
        name: '供气压力高',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 839016,
        name: '端口 A 过压',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 839017,
        name: 'SOV 测试最低要求压降',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 839018,
        name: 'SOV 测试最高可允许压降',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 839019,
        name: '供气压力性能诊断',
        value: '',
        unit: null,
        type: '2',
        treeId: 88,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 839020,
        name: '行程偏差性能诊断',
        value: '',
        unit: null,
        type: '2',
        treeId: 89,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 839021,
        name: 'I/P和放大器完整性性能诊断',
        value: '',
        unit: null,
        type: '2',
        treeId: 90,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 839022,
        name: '放大器调整性能诊断',
        value: '',
        unit: null,
        type: '2',
        treeId: 91,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 839023,
        name: '空气质量流量性能诊断',
        value: '',
        unit: null,
        type: '2',
        treeId: 92,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 839024,
        name: '阀门摩擦力性能诊断',
        value: '',
        unit: null,
        type: '2',
        treeId: 93,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 839025,
        name: '平均扭矩',
        value: '',
        unit: null,
        type: '1',
        treeId: 93,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 839026,
        name: '平均摩擦力',
        value: '',
        unit: null,
        type: '1',
        treeId: 93,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 839027,
        name: '平均死区',
        value: '',
        unit: null,
        type: '1',
        treeId: 93,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 839028,
        name: '扫描时间',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 839029,
        name: '平均动态误差',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 839030,
        name: '动态线性度（独立）',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 839031,
        name: '平均扭矩',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 839032,
        name: '弹簧预紧力',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 839033,
        name: '测试状态阀座负载',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 839034,
        name: '投用状态阀座负载',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 839035,
        name: '所需阀座负载',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 839036,
        name: '预期总摩擦力',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 839037,
        name: '制造商',
        value: '',
        unit: null,
        type: '1',
        treeId: 106,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 839038,
        name: '类型',
        value: '',
        unit: null,
        type: '1',
        treeId: 106,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 839039,
        name: '尺寸',
        value: '',
        unit: null,
        type: '1',
        treeId: 106,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 839040,
        name: '等级',
        value: '',
        unit: null,
        type: '1',
        treeId: 106,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 839041,
        name: '额定行程',
        value: '',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 839042,
        name: '实际行程',
        value: '',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 839043,
        name: '阀杆直径',
        value: '',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 839044,
        name: '填料类型',
        value: '',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 839045,
        name: '增压器',
        value: '',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 839046,
        name: '有效面积',
        value: '',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 839047,
        name: '下方弹簧预紧力',
        value: '',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 839048,
        name: '上方弹簧预紧力',
        value: '',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 839049,
        name: '反馈连接方式',
        value: '',
        unit: null,
        type: '1',
        treeId: 110,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 839050,
        name: '零功率状态',
        value: '',
        unit: null,
        type: '1',
        treeId: 110,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 839051,
        name: '行程整定参数',
        value: '',
        unit: null,
        type: '1',
        treeId: 110,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 839052,
        name: '比例',
        value: '',
        unit: null,
        type: '1',
        treeId: 110,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 839053,
        name: '速度',
        value: '',
        unit: null,
        type: '1',
        treeId: 110,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 839054,
        name: 'MLF',
        value: '',
        unit: null,
        type: '1',
        treeId: 110,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 839055,
        name: '截止和表征',
        value: '',
        unit: null,
        type: '1',
        treeId: 110,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 839056,
        name: '死区时间最大值及步数',
        value: '',
        unit: null,
        type: '1',
        treeId: 117,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 839057,
        name: '超量 最大值及步数',
        value: '',
        unit: null,
        type: '1',
        treeId: 117,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 839058,
        name: '误差 最大值及步数',
        value: '',
        unit: null,
        type: '1',
        treeId: 117,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 839059,
        name: '第10步行程时间',
        value: '',
        unit: null,
        type: '1',
        treeId: 117,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 839060,
        name: '第11步行程时间',
        value: '',
        unit: null,
        type: '1',
        treeId: 117,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 839061,
        name: '第10步误差',
        value: '',
        unit: null,
        type: '1',
        treeId: 117,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      },
      {
        id: 839062,
        name: '第11步误差',
        value: '',
        unit: null,
        type: '1',
        treeId: 117,
        valveHistoryDataListId: 3326,
        time: '2024-10-10T00:00:00.000Z'
      }
    ]
  },
  {
    id: 3322,
    tag: 'FV101_3',
    valveId: 2110,
    time: '2024-10-09 08:00:00',
    valveHistoryData: [
      {
        id: 838543,
        name: '型号',
        value: '',
        unit: null,
        type: '1',
        treeId: 80,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838544,
        name: '行程',
        value: '59.47',
        unit: '%',
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838545,
        name: '行程偏差',
        value: '0.00',
        unit: '%',
        type: '1',
        treeId: 85,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838546,
        name: '压力 A',
        value: '12.58',
        unit: 'psi',
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838547,
        name: '压力 B',
        value: '-0.66',
        unit: 'psi',
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838548,
        name: '供气压力',
        value: '25.52',
        unit: 'psi',
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838549,
        name: '驱动信号',
        value: '72.13',
        unit: '%',
        type: '1',
        treeId: 85,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838550,
        name: '仪表模式',
        value: '投用状态',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838551,
        name: '循环计数',
        value: '20226',
        unit: 'counts',
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838552,
        name: '行程累计器',
        value: '205822',
        unit: '%',
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838553,
        name: '放大器调整',
        value: 'N/A',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838554,
        name: '最高温度记录',
        value: '32.88',
        unit: 'C',
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838555,
        name: '运行时间',
        value: '1323',
        unit: 'days',
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838556,
        name: '启动次数',
        value: '154',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838557,
        name: '仪表等级',
        value: 'PD',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838558,
        name: '阀门型式',
        value: '直行程阀',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838559,
        name: '执行机构类型',
        value: '弹簧膜片式',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838560,
        name: '标定日期',
        value: '30 Apr 2024',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838561,
        name: '行程高',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838562,
        name: '行程低',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838563,
        name: '行程高高',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838564,
        name: '行程低低',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838565,
        name: '行程偏差',
        value: '----',
        unit: null,
        type: '3',
        treeId: 87,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838566,
        name: '循环计数高',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838567,
        name: '行程累计高',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838568,
        name: '驱动信号',
        value: '----',
        unit: null,
        type: '3',
        treeId: 87,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838569,
        name: '供气压力低',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838570,
        name: '组态已更改',
        value: '开',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838571,
        name: '回路电流验证报警',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838572,
        name: '内部传感器超出限制范围',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838573,
        name: '变量超出范围',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838574,
        name: '处于标定模式',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838575,
        name: '自动校验进行中',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838576,
        name: '诊断进行中',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838577,
        name: '小回路传感器故障',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838578,
        name: '行程传感器故障',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838579,
        name: '温度传感器故障',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838580,
        name: '压力传感器故障',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838581,
        name: '驱动电流故障',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838582,
        name: '关键 NVM 故障',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838583,
        name: '闪存完整性故障',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838584,
        name: '参考电压故障',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838585,
        name: '报警记录非空',
        value: '开',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838586,
        name: '报警记录已满',
        value: '开',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838587,
        name: '积分器饱和高',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838588,
        name: '积分器饱和低',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838589,
        name: '关机激活',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838590,
        name: '压力偏差',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838591,
        name: '非关键 NVM 故障',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838592,
        name: '仪表时间为大概值',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838593,
        name: '诊断数据可用',
        value: '开',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838594,
        name: '要求手动复位',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838595,
        name: '行程高限位/截止',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838596,
        name: '行程低限位/截止',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838597,
        name: '压力切换激活',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838598,
        name: 'NVM 过度写入',
        value: '开',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838599,
        name: '供气压力高',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838600,
        name: '端口 A 过压',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838601,
        name: 'SOV 测试最低要求压降',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838602,
        name: 'SOV 测试最高可允许压降',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838603,
        name: '供气压力性能诊断',
        value: '',
        unit: null,
        type: '2',
        treeId: 88,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838604,
        name: '行程偏差性能诊断',
        value: '',
        unit: null,
        type: '2',
        treeId: 89,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838605,
        name: 'I/P和放大器完整性性能诊断',
        value: '',
        unit: null,
        type: '2',
        treeId: 90,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838606,
        name: '放大器调整性能诊断',
        value: '',
        unit: null,
        type: '2',
        treeId: 91,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838607,
        name: '空气质量流量性能诊断',
        value: '',
        unit: null,
        type: '2',
        treeId: 92,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838608,
        name: '阀门摩擦力性能诊断',
        value: '',
        unit: null,
        type: '2',
        treeId: 93,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838609,
        name: '平均扭矩',
        value: '',
        unit: null,
        type: '1',
        treeId: 93,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838610,
        name: '平均摩擦力',
        value: '',
        unit: null,
        type: '1',
        treeId: 93,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838611,
        name: '平均死区',
        value: '',
        unit: null,
        type: '1',
        treeId: 93,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838612,
        name: '扫描时间',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838613,
        name: '平均动态误差',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838614,
        name: '动态线性度（独立）',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838615,
        name: '平均扭矩',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838616,
        name: '弹簧预紧力',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838617,
        name: '测试状态阀座负载',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838618,
        name: '投用状态阀座负载',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838619,
        name: '所需阀座负载',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838620,
        name: '预期总摩擦力',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838621,
        name: '制造商',
        value: '',
        unit: null,
        type: '1',
        treeId: 106,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838622,
        name: '类型',
        value: '',
        unit: null,
        type: '1',
        treeId: 106,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838623,
        name: '尺寸',
        value: '',
        unit: null,
        type: '1',
        treeId: 106,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838624,
        name: '等级',
        value: '',
        unit: null,
        type: '1',
        treeId: 106,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838625,
        name: '额定行程',
        value: '',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838626,
        name: '实际行程',
        value: '',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838627,
        name: '阀杆直径',
        value: '',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838628,
        name: '填料类型',
        value: '',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838629,
        name: '增压器',
        value: '',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838630,
        name: '有效面积',
        value: '',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838631,
        name: '下方弹簧预紧力',
        value: '',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838632,
        name: '上方弹簧预紧力',
        value: '',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838633,
        name: '反馈连接方式',
        value: '',
        unit: null,
        type: '1',
        treeId: 110,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838634,
        name: '零功率状态',
        value: '',
        unit: null,
        type: '1',
        treeId: 110,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838635,
        name: '行程整定参数',
        value: '',
        unit: null,
        type: '1',
        treeId: 110,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838636,
        name: '比例',
        value: '',
        unit: null,
        type: '1',
        treeId: 110,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838637,
        name: '速度',
        value: '',
        unit: null,
        type: '1',
        treeId: 110,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838638,
        name: 'MLF',
        value: '',
        unit: null,
        type: '1',
        treeId: 110,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838639,
        name: '截止和表征',
        value: '',
        unit: null,
        type: '1',
        treeId: 110,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838640,
        name: '死区时间最大值及步数',
        value: '',
        unit: null,
        type: '1',
        treeId: 117,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838641,
        name: '超量 最大值及步数',
        value: '',
        unit: null,
        type: '1',
        treeId: 117,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838642,
        name: '误差 最大值及步数',
        value: '',
        unit: null,
        type: '1',
        treeId: 117,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838643,
        name: '第10步行程时间',
        value: '',
        unit: null,
        type: '1',
        treeId: 117,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838644,
        name: '第11步行程时间',
        value: '',
        unit: null,
        type: '1',
        treeId: 117,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838645,
        name: '第10步误差',
        value: '',
        unit: null,
        type: '1',
        treeId: 117,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      },
      {
        id: 838646,
        name: '第11步误差',
        value: '',
        unit: null,
        type: '1',
        treeId: 117,
        valveHistoryDataListId: 3322,
        time: '2024-10-09T00:00:00.000Z'
      }
    ]
  },
  {
    id: 3317,
    tag: 'FV101_3',
    valveId: 2110,
    time: '2024-10-08 08:00:00',
    valveHistoryData: [
      {
        id: 838023,
        name: '型号',
        value: '',
        unit: null,
        type: '1',
        treeId: 80,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838024,
        name: '行程',
        value: '59.50',
        unit: '%',
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838025,
        name: '行程偏差',
        value: '0.03',
        unit: '%',
        type: '1',
        treeId: 85,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838026,
        name: '压力 A',
        value: '12.27',
        unit: 'psi',
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838027,
        name: '压力 B',
        value: '-0.63',
        unit: 'psi',
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838028,
        name: '供气压力',
        value: '25.64',
        unit: 'psi',
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838029,
        name: '驱动信号',
        value: '72.25',
        unit: '%',
        type: '1',
        treeId: 85,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838030,
        name: '仪表模式',
        value: '投用状态',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838031,
        name: '循环计数',
        value: '20226',
        unit: 'counts',
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838032,
        name: '行程累计器',
        value: '205822',
        unit: '%',
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838033,
        name: '放大器调整',
        value: 'N/A',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838034,
        name: '最高温度记录',
        value: '32.88',
        unit: 'C',
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838035,
        name: '运行时间',
        value: '1322',
        unit: 'days',
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838036,
        name: '启动次数',
        value: '154',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838037,
        name: '仪表等级',
        value: 'PD',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838038,
        name: '阀门型式',
        value: '直行程阀',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838039,
        name: '执行机构类型',
        value: '弹簧膜片式',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838040,
        name: '标定日期',
        value: '30 Apr 2024',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838041,
        name: '行程高',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838042,
        name: '行程低',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838043,
        name: '行程高高',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838044,
        name: '行程低低',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838045,
        name: '行程偏差',
        value: '----',
        unit: null,
        type: '3',
        treeId: 87,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838046,
        name: '循环计数高',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838047,
        name: '行程累计高',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838048,
        name: '驱动信号',
        value: '----',
        unit: null,
        type: '3',
        treeId: 87,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838049,
        name: '供气压力低',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838050,
        name: '组态已更改',
        value: '开',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838051,
        name: '回路电流验证报警',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838052,
        name: '内部传感器超出限制范围',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838053,
        name: '变量超出范围',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838054,
        name: '处于标定模式',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838055,
        name: '自动校验进行中',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838056,
        name: '诊断进行中',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838057,
        name: '小回路传感器故障',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838058,
        name: '行程传感器故障',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838059,
        name: '温度传感器故障',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838060,
        name: '压力传感器故障',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838061,
        name: '驱动电流故障',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838062,
        name: '关键 NVM 故障',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838063,
        name: '闪存完整性故障',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838064,
        name: '参考电压故障',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838065,
        name: '报警记录非空',
        value: '开',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838066,
        name: '报警记录已满',
        value: '开',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838067,
        name: '积分器饱和高',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838068,
        name: '积分器饱和低',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838069,
        name: '关机激活',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838070,
        name: '压力偏差',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838071,
        name: '非关键 NVM 故障',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838072,
        name: '仪表时间为大概值',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838073,
        name: '诊断数据可用',
        value: '开',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838074,
        name: '要求手动复位',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838075,
        name: '行程高限位/截止',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838076,
        name: '行程低限位/截止',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838077,
        name: '压力切换激活',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838078,
        name: 'NVM 过度写入',
        value: '开',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838079,
        name: '供气压力高',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838080,
        name: '端口 A 过压',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838081,
        name: 'SOV 测试最低要求压降',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838082,
        name: 'SOV 测试最高可允许压降',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838083,
        name: '供气压力性能诊断',
        value: '',
        unit: null,
        type: '2',
        treeId: 88,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838084,
        name: '行程偏差性能诊断',
        value: '',
        unit: null,
        type: '2',
        treeId: 89,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838085,
        name: 'I/P和放大器完整性性能诊断',
        value: '',
        unit: null,
        type: '2',
        treeId: 90,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838086,
        name: '放大器调整性能诊断',
        value: '',
        unit: null,
        type: '2',
        treeId: 91,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838087,
        name: '空气质量流量性能诊断',
        value: '',
        unit: null,
        type: '2',
        treeId: 92,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838088,
        name: '阀门摩擦力性能诊断',
        value: '',
        unit: null,
        type: '2',
        treeId: 93,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838089,
        name: '平均扭矩',
        value: '',
        unit: null,
        type: '1',
        treeId: 93,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838090,
        name: '平均摩擦力',
        value: '',
        unit: null,
        type: '1',
        treeId: 93,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838091,
        name: '平均死区',
        value: '',
        unit: null,
        type: '1',
        treeId: 93,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838092,
        name: '扫描时间',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838093,
        name: '平均动态误差',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838094,
        name: '动态线性度（独立）',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838095,
        name: '平均扭矩',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838096,
        name: '弹簧预紧力',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838097,
        name: '测试状态阀座负载',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838098,
        name: '投用状态阀座负载',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838099,
        name: '所需阀座负载',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838100,
        name: '预期总摩擦力',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838101,
        name: '制造商',
        value: '',
        unit: null,
        type: '1',
        treeId: 106,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838102,
        name: '类型',
        value: '',
        unit: null,
        type: '1',
        treeId: 106,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838103,
        name: '尺寸',
        value: '',
        unit: null,
        type: '1',
        treeId: 106,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838104,
        name: '等级',
        value: '',
        unit: null,
        type: '1',
        treeId: 106,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838105,
        name: '额定行程',
        value: '',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838106,
        name: '实际行程',
        value: '',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838107,
        name: '阀杆直径',
        value: '',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838108,
        name: '填料类型',
        value: '',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838109,
        name: '增压器',
        value: '',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838110,
        name: '有效面积',
        value: '',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838111,
        name: '下方弹簧预紧力',
        value: '',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838112,
        name: '上方弹簧预紧力',
        value: '',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838113,
        name: '反馈连接方式',
        value: '',
        unit: null,
        type: '1',
        treeId: 110,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838114,
        name: '零功率状态',
        value: '',
        unit: null,
        type: '1',
        treeId: 110,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838115,
        name: '行程整定参数',
        value: '',
        unit: null,
        type: '1',
        treeId: 110,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838116,
        name: '比例',
        value: '',
        unit: null,
        type: '1',
        treeId: 110,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838117,
        name: '速度',
        value: '',
        unit: null,
        type: '1',
        treeId: 110,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838118,
        name: 'MLF',
        value: '',
        unit: null,
        type: '1',
        treeId: 110,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838119,
        name: '截止和表征',
        value: '',
        unit: null,
        type: '1',
        treeId: 110,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838120,
        name: '死区时间最大值及步数',
        value: '',
        unit: null,
        type: '1',
        treeId: 117,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838121,
        name: '超量 最大值及步数',
        value: '',
        unit: null,
        type: '1',
        treeId: 117,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838122,
        name: '误差 最大值及步数',
        value: '',
        unit: null,
        type: '1',
        treeId: 117,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838123,
        name: '第10步行程时间',
        value: '',
        unit: null,
        type: '1',
        treeId: 117,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838124,
        name: '第11步行程时间',
        value: '',
        unit: null,
        type: '1',
        treeId: 117,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838125,
        name: '第10步误差',
        value: '',
        unit: null,
        type: '1',
        treeId: 117,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      },
      {
        id: 838126,
        name: '第11步误差',
        value: '',
        unit: null,
        type: '1',
        treeId: 117,
        valveHistoryDataListId: 3317,
        time: '2024-10-08T00:00:00.000Z'
      }
    ]
  },
  {
    id: 3313,
    tag: 'FV101_3',
    valveId: 2110,
    time: '2024-10-07 08:00:00',
    valveHistoryData: [
      {
        id: 837607,
        name: '型号',
        value: '',
        unit: null,
        type: '1',
        treeId: 80,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837608,
        name: '行程',
        value: '59.47',
        unit: '%',
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837609,
        name: '行程偏差',
        value: '0.06',
        unit: '%',
        type: '1',
        treeId: 85,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837610,
        name: '压力 A',
        value: '12.55',
        unit: 'psi',
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837611,
        name: '压力 B',
        value: '-0.63',
        unit: 'psi',
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837612,
        name: '供气压力',
        value: '25.64',
        unit: 'psi',
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837613,
        name: '驱动信号',
        value: '72.13',
        unit: '%',
        type: '1',
        treeId: 85,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837614,
        name: '仪表模式',
        value: '投用状态',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837615,
        name: '循环计数',
        value: '20226',
        unit: 'counts',
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837616,
        name: '行程累计器',
        value: '205822',
        unit: '%',
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837617,
        name: '放大器调整',
        value: 'N/A',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837618,
        name: '最高温度记录',
        value: '32.88',
        unit: 'C',
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837619,
        name: '运行时间',
        value: '1321',
        unit: 'days',
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837620,
        name: '启动次数',
        value: '154',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837621,
        name: '仪表等级',
        value: 'PD',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837622,
        name: '阀门型式',
        value: '直行程阀',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837623,
        name: '执行机构类型',
        value: '弹簧膜片式',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837624,
        name: '标定日期',
        value: '30 Apr 2024',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837625,
        name: '行程高',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837626,
        name: '行程低',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837627,
        name: '行程高高',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837628,
        name: '行程低低',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837629,
        name: '行程偏差',
        value: '----',
        unit: null,
        type: '3',
        treeId: 87,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837630,
        name: '循环计数高',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837631,
        name: '行程累计高',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837632,
        name: '驱动信号',
        value: '----',
        unit: null,
        type: '3',
        treeId: 87,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837633,
        name: '供气压力低',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837634,
        name: '组态已更改',
        value: '开',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837635,
        name: '回路电流验证报警',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837636,
        name: '内部传感器超出限制范围',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837637,
        name: '变量超出范围',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837638,
        name: '处于标定模式',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837639,
        name: '自动校验进行中',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837640,
        name: '诊断进行中',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837641,
        name: '小回路传感器故障',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837642,
        name: '行程传感器故障',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837643,
        name: '温度传感器故障',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837644,
        name: '压力传感器故障',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837645,
        name: '驱动电流故障',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837646,
        name: '关键 NVM 故障',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837647,
        name: '闪存完整性故障',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837648,
        name: '参考电压故障',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837649,
        name: '报警记录非空',
        value: '开',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837650,
        name: '报警记录已满',
        value: '开',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837651,
        name: '积分器饱和高',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837652,
        name: '积分器饱和低',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837653,
        name: '关机激活',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837654,
        name: '压力偏差',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837655,
        name: '非关键 NVM 故障',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837656,
        name: '仪表时间为大概值',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837657,
        name: '诊断数据可用',
        value: '开',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837658,
        name: '要求手动复位',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837659,
        name: '行程高限位/截止',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837660,
        name: '行程低限位/截止',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837661,
        name: '压力切换激活',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837662,
        name: 'NVM 过度写入',
        value: '开',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837663,
        name: '供气压力高',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837664,
        name: '端口 A 过压',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837665,
        name: 'SOV 测试最低要求压降',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837666,
        name: 'SOV 测试最高可允许压降',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837667,
        name: '供气压力性能诊断',
        value: '',
        unit: null,
        type: '2',
        treeId: 88,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837668,
        name: '行程偏差性能诊断',
        value: '',
        unit: null,
        type: '2',
        treeId: 89,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837669,
        name: 'I/P和放大器完整性性能诊断',
        value: '',
        unit: null,
        type: '2',
        treeId: 90,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837670,
        name: '放大器调整性能诊断',
        value: '',
        unit: null,
        type: '2',
        treeId: 91,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837671,
        name: '空气质量流量性能诊断',
        value: '',
        unit: null,
        type: '2',
        treeId: 92,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837672,
        name: '阀门摩擦力性能诊断',
        value: '',
        unit: null,
        type: '2',
        treeId: 93,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837673,
        name: '平均扭矩',
        value: '',
        unit: null,
        type: '1',
        treeId: 93,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837674,
        name: '平均摩擦力',
        value: '',
        unit: null,
        type: '1',
        treeId: 93,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837675,
        name: '平均死区',
        value: '',
        unit: null,
        type: '1',
        treeId: 93,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837676,
        name: '扫描时间',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837677,
        name: '平均动态误差',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837678,
        name: '动态线性度（独立）',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837679,
        name: '平均扭矩',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837680,
        name: '弹簧预紧力',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837681,
        name: '测试状态阀座负载',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837682,
        name: '投用状态阀座负载',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837683,
        name: '所需阀座负载',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837684,
        name: '预期总摩擦力',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837685,
        name: '制造商',
        value: '',
        unit: null,
        type: '1',
        treeId: 106,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837686,
        name: '类型',
        value: '',
        unit: null,
        type: '1',
        treeId: 106,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837687,
        name: '尺寸',
        value: '',
        unit: null,
        type: '1',
        treeId: 106,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837688,
        name: '等级',
        value: '',
        unit: null,
        type: '1',
        treeId: 106,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837689,
        name: '额定行程',
        value: '',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837690,
        name: '实际行程',
        value: '',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837691,
        name: '阀杆直径',
        value: '',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837692,
        name: '填料类型',
        value: '',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837693,
        name: '增压器',
        value: '',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837694,
        name: '有效面积',
        value: '',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837695,
        name: '下方弹簧预紧力',
        value: '',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837696,
        name: '上方弹簧预紧力',
        value: '',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837697,
        name: '反馈连接方式',
        value: '',
        unit: null,
        type: '1',
        treeId: 110,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837698,
        name: '零功率状态',
        value: '',
        unit: null,
        type: '1',
        treeId: 110,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837699,
        name: '行程整定参数',
        value: '',
        unit: null,
        type: '1',
        treeId: 110,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837700,
        name: '比例',
        value: '',
        unit: null,
        type: '1',
        treeId: 110,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837701,
        name: '速度',
        value: '',
        unit: null,
        type: '1',
        treeId: 110,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837702,
        name: 'MLF',
        value: '',
        unit: null,
        type: '1',
        treeId: 110,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837703,
        name: '截止和表征',
        value: '',
        unit: null,
        type: '1',
        treeId: 110,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837704,
        name: '死区时间最大值及步数',
        value: '',
        unit: null,
        type: '1',
        treeId: 117,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837705,
        name: '超量 最大值及步数',
        value: '',
        unit: null,
        type: '1',
        treeId: 117,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837706,
        name: '误差 最大值及步数',
        value: '',
        unit: null,
        type: '1',
        treeId: 117,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837707,
        name: '第10步行程时间',
        value: '',
        unit: null,
        type: '1',
        treeId: 117,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837708,
        name: '第11步行程时间',
        value: '',
        unit: null,
        type: '1',
        treeId: 117,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837709,
        name: '第10步误差',
        value: '',
        unit: null,
        type: '1',
        treeId: 117,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      },
      {
        id: 837710,
        name: '第11步误差',
        value: '',
        unit: null,
        type: '1',
        treeId: 117,
        valveHistoryDataListId: 3313,
        time: '2024-10-07T00:00:00.000Z'
      }
    ]
  },
  {
    id: 3308,
    tag: 'FV101_3',
    valveId: 2110,
    time: '2024-10-06 08:00:00',
    valveHistoryData: [
      {
        id: 837087,
        name: '型号',
        value: '',
        unit: null,
        type: '1',
        treeId: 80,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837088,
        name: '行程',
        value: '59.50',
        unit: '%',
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837089,
        name: '行程偏差',
        value: '0.03',
        unit: '%',
        type: '1',
        treeId: 85,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837090,
        name: '压力 A',
        value: '12.73',
        unit: 'psi',
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837091,
        name: '压力 B',
        value: '-0.65',
        unit: 'psi',
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837092,
        name: '供气压力',
        value: '25.72',
        unit: 'psi',
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837093,
        name: '驱动信号',
        value: '72.13',
        unit: '%',
        type: '1',
        treeId: 85,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837094,
        name: '仪表模式',
        value: '投用状态',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837095,
        name: '循环计数',
        value: '20226',
        unit: 'counts',
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837096,
        name: '行程累计器',
        value: '205822',
        unit: '%',
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837097,
        name: '放大器调整',
        value: 'N/A',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837098,
        name: '最高温度记录',
        value: '32.88',
        unit: 'C',
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837099,
        name: '运行时间',
        value: '1320',
        unit: 'days',
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837100,
        name: '启动次数',
        value: '154',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837101,
        name: '仪表等级',
        value: 'PD',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837102,
        name: '阀门型式',
        value: '直行程阀',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837103,
        name: '执行机构类型',
        value: '弹簧膜片式',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837104,
        name: '标定日期',
        value: '30 Apr 2024',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837105,
        name: '行程高',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837106,
        name: '行程低',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837107,
        name: '行程高高',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837108,
        name: '行程低低',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837109,
        name: '行程偏差',
        value: '----',
        unit: null,
        type: '3',
        treeId: 87,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837110,
        name: '循环计数高',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837111,
        name: '行程累计高',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837112,
        name: '驱动信号',
        value: '----',
        unit: null,
        type: '3',
        treeId: 87,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837113,
        name: '供气压力低',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837114,
        name: '组态已更改',
        value: '开',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837115,
        name: '回路电流验证报警',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837116,
        name: '内部传感器超出限制范围',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837117,
        name: '变量超出范围',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837118,
        name: '处于标定模式',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837119,
        name: '自动校验进行中',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837120,
        name: '诊断进行中',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837121,
        name: '小回路传感器故障',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837122,
        name: '行程传感器故障',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837123,
        name: '温度传感器故障',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837124,
        name: '压力传感器故障',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837125,
        name: '驱动电流故障',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837126,
        name: '关键 NVM 故障',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837127,
        name: '闪存完整性故障',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837128,
        name: '参考电压故障',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837129,
        name: '报警记录非空',
        value: '开',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837130,
        name: '报警记录已满',
        value: '开',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837131,
        name: '积分器饱和高',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837132,
        name: '积分器饱和低',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837133,
        name: '关机激活',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837134,
        name: '压力偏差',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837135,
        name: '非关键 NVM 故障',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837136,
        name: '仪表时间为大概值',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837137,
        name: '诊断数据可用',
        value: '开',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837138,
        name: '要求手动复位',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837139,
        name: '行程高限位/截止',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837140,
        name: '行程低限位/截止',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837141,
        name: '压力切换激活',
        value: '----',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837142,
        name: 'NVM 过度写入',
        value: '开',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837143,
        name: '供气压力高',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837144,
        name: '端口 A 过压',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837145,
        name: 'SOV 测试最低要求压降',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837146,
        name: 'SOV 测试最高可允许压降',
        value: '',
        unit: null,
        type: '3',
        treeId: 84,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837147,
        name: '供气压力性能诊断',
        value: '',
        unit: null,
        type: '2',
        treeId: 88,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837148,
        name: '行程偏差性能诊断',
        value: '',
        unit: null,
        type: '2',
        treeId: 89,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837149,
        name: 'I/P和放大器完整性性能诊断',
        value: '',
        unit: null,
        type: '2',
        treeId: 90,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837150,
        name: '放大器调整性能诊断',
        value: '',
        unit: null,
        type: '2',
        treeId: 91,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837151,
        name: '空气质量流量性能诊断',
        value: '',
        unit: null,
        type: '2',
        treeId: 92,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837152,
        name: '阀门摩擦力性能诊断',
        value: '',
        unit: null,
        type: '2',
        treeId: 93,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837153,
        name: '平均扭矩',
        value: '',
        unit: null,
        type: '1',
        treeId: 93,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837154,
        name: '平均摩擦力',
        value: '',
        unit: null,
        type: '1',
        treeId: 93,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837155,
        name: '平均死区',
        value: '',
        unit: null,
        type: '1',
        treeId: 93,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837156,
        name: '扫描时间',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837157,
        name: '平均动态误差',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837158,
        name: '动态线性度（独立）',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837159,
        name: '平均扭矩',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837160,
        name: '弹簧预紧力',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837161,
        name: '测试状态阀座负载',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837162,
        name: '投用状态阀座负载',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837163,
        name: '所需阀座负载',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837164,
        name: '预期总摩擦力',
        value: '',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837165,
        name: '制造商',
        value: '',
        unit: null,
        type: '1',
        treeId: 106,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837166,
        name: '类型',
        value: '',
        unit: null,
        type: '1',
        treeId: 106,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837167,
        name: '尺寸',
        value: '',
        unit: null,
        type: '1',
        treeId: 106,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837168,
        name: '等级',
        value: '',
        unit: null,
        type: '1',
        treeId: 106,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837169,
        name: '额定行程',
        value: '',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837170,
        name: '实际行程',
        value: '',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837171,
        name: '阀杆直径',
        value: '',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837172,
        name: '填料类型',
        value: '',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837173,
        name: '增压器',
        value: '',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837174,
        name: '有效面积',
        value: '',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837175,
        name: '下方弹簧预紧力',
        value: '',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837176,
        name: '上方弹簧预紧力',
        value: '',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837177,
        name: '反馈连接方式',
        value: '',
        unit: null,
        type: '1',
        treeId: 110,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837178,
        name: '零功率状态',
        value: '',
        unit: null,
        type: '1',
        treeId: 110,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837179,
        name: '行程整定参数',
        value: '',
        unit: null,
        type: '1',
        treeId: 110,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837180,
        name: '比例',
        value: '',
        unit: null,
        type: '1',
        treeId: 110,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837181,
        name: '速度',
        value: '',
        unit: null,
        type: '1',
        treeId: 110,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837182,
        name: 'MLF',
        value: '',
        unit: null,
        type: '1',
        treeId: 110,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837183,
        name: '截止和表征',
        value: '',
        unit: null,
        type: '1',
        treeId: 110,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837184,
        name: '死区时间最大值及步数',
        value: '',
        unit: null,
        type: '1',
        treeId: 117,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837185,
        name: '超量 最大值及步数',
        value: '',
        unit: null,
        type: '1',
        treeId: 117,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837186,
        name: '误差 最大值及步数',
        value: '',
        unit: null,
        type: '1',
        treeId: 117,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837187,
        name: '第10步行程时间',
        value: '',
        unit: null,
        type: '1',
        treeId: 117,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837188,
        name: '第11步行程时间',
        value: '',
        unit: null,
        type: '1',
        treeId: 117,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837189,
        name: '第10步误差',
        value: '',
        unit: null,
        type: '1',
        treeId: 117,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      },
      {
        id: 837190,
        name: '第11步误差',
        value: '',
        unit: null,
        type: '1',
        treeId: 117,
        valveHistoryDataListId: 3308,
        time: '2024-10-06T00:00:00.000Z'
      }
    ]
  }
]
