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

export const history = [
  {
    id: 38,
    tag: 'PV3207B',
    valveId: 15,
    time: '2021-12-17 00:00:00',
    valveHistoryData: [
      {
        id: 12612,
        name: '行程',
        value: '98.88 %',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12613,
        name: '行程偏差',
        value: '1.12 %',
        unit: null,
        type: '1',
        treeId: 82,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12614,
        name: '供气压力',
        value: '350.25 kPa',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12615,
        name: '驱动信号',
        value: '100.50 %',
        unit: null,
        type: '1',
        treeId: 85,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12616,
        name: '仪表模式',
        value: 'In Service',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12617,
        name: '循环计数',
        value: '1232 counts',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12618,
        name: '行程累计器',
        value: '6932 %',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12619,
        name: '放大器调整',
        value: 'N/A',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12620,
        name: '最高温度记录',
        value: '47.00 C',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12621,
        name: '运行时间',
        value: '1640 days',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12622,
        name: '启动次数',
        value: '',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12623,
        name: '仪表等级',
        value: 'PD',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12624,
        name: '阀门型式',
        value: 'Sliding Stem',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12625,
        name: '执行机构类型',
        value: 'Spring and Diaphragm',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12626,
        name: '标定日期',
        value: '25 Dec 2020',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12627,
        name: '行程高',
        value: '----',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12628,
        name: '行程低',
        value: '----',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12629,
        name: '行程高高',
        value: '----',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12630,
        name: '行程低低',
        value: '----',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12631,
        name: '行程偏差',
        value: '222',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12632,
        name: '循环计数高',
        value: '----',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12633,
        name: '行程累计高',
        value: '----',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12634,
        name: '驱动信号',
        value: '----',
        unit: null,
        type: '1',
        treeId: 87,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12635,
        name: '供气压力低',
        value: '----',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12636,
        name: '组态已更改',
        value: 'ON',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12637,
        name: '回路电流验证报警',
        value: '----',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12638,
        name: '内部传感器超出限制范围',
        value: '----',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12639,
        name: '变量超出范围',
        value: '----',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12640,
        name: '处于标定模式',
        value: '----',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12641,
        name: '自动校验进行中',
        value: '----',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12642,
        name: '诊断进行中',
        value: '----',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12643,
        name: '小回路传感器故障',
        value: '----',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12644,
        name: '行程传感器故障',
        value: '----',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12645,
        name: '温度传感器故障',
        value: '----',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12646,
        name: '压力传感器故障',
        value: '----',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12647,
        name: '驱动电流故障',
        value: '----',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12648,
        name: '关键 NVM 故障',
        value: '----',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12649,
        name: '闪存完整性故障',
        value: '----',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12650,
        name: '参考电压故障',
        value: '----',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12651,
        name: '报警记录非空',
        value: 'ON',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12652,
        name: '报警记录已满',
        value: '----',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12653,
        name: '积分器饱和高',
        value: '----',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12654,
        name: '积分器饱和低',
        value: '----',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12655,
        name: '关机激活',
        value: '----',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12656,
        name: '压力偏差',
        value: '----',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12657,
        name: '非关键 NVM 故障',
        value: '----',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12658,
        name: '仪表时间为大概值',
        value: '----',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12659,
        name: '诊断数据可用',
        value: 'ON',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12660,
        name: '要求手动复位',
        value: '----',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12661,
        name: '行程高限位/截止',
        value: '----',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12662,
        name: '行程低限位/截止',
        value: '----',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12663,
        name: '压力切换激活',
        value: '----',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12664,
        name: 'NVM 过度写入',
        value: '----',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12665,
        name: '供气压力高',
        value: '',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12666,
        name: '端口 A 过压',
        value: '',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12667,
        name: 'SOV 测试最低要求压降',
        value: '',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12668,
        name: 'SOV 测试最高可允许压降',
        value: '',
        unit: null,
        type: '1',
        treeId: 84,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12669,
        name: '供气压力性能诊断',
        value: '',
        unit: null,
        type: '2',
        treeId: 88,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12670,
        name: '行程偏差性能诊断',
        value: '',
        unit: null,
        type: '2',
        treeId: 89,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12671,
        name: 'I/P和放大器完整性性能诊断',
        value: '',
        unit: null,
        type: '2',
        treeId: 90,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12672,
        name: '放大器调整性能诊断',
        value: '',
        unit: null,
        type: '2',
        treeId: 91,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12673,
        name: '空气质量流量性能诊断',
        value: '',
        unit: null,
        type: '2',
        treeId: 92,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12674,
        name: '阀门摩擦力性能诊断',
        value: '',
        unit: null,
        type: '2',
        treeId: 93,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12675,
        name: '平均扭矩',
        value: '',
        unit: null,
        type: '1',
        treeId: 93,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12676,
        name: '平均死区',
        value: '',
        unit: null,
        type: '1',
        treeId: 93,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12677,
        name: '扫描时间',
        value: '100.0 sec',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12678,
        name: '平均动态误差',
        value: '3.52%',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12679,
        name: '动态线性度（独立）',
        value: '0.80%',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12680,
        name: '平均扭矩',
        value: '189 Ibf',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12681,
        name: '弹簧预紧力',
        value: '15.8 - 35.24 psi',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12682,
        name: '测试状态阀座负载',
        value: '1913.7 lbf',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12683,
        name: '投用状态阀座负载',
        value: 'NA',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12684,
        name: '所需阀座负载',
        value: '346.32 Ibf',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12685,
        name: '预期总摩擦力',
        value: '120 lbf',
        unit: null,
        type: '1',
        treeId: 94,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12686,
        name: '类型',
        value: 'GX',
        unit: null,
        type: '1',
        treeId: 106,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12687,
        name: '尺寸',
        value: 'DN 80',
        unit: null,
        type: '1',
        treeId: 106,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12688,
        name: '额定行程',
        value: '0.7874 in',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12689,
        name: '实际行程',
        value: '0.7874 in',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12690,
        name: '阀杆直径',
        value: '0.55118 in',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12691,
        name: '填料类型',
        value: 'TFE / Double',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12692,
        name: '增压器',
        value: 'None',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12693,
        name: '有效面积',
        value: '127.88 in2',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12694,
        name: '下方弹簧预紧力',
        value: '0.0 kPa',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12695,
        name: '上方弹簧预紧力',
        value: '0.0 kPa',
        unit: null,
        type: '1',
        treeId: 105,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12696,
        name: '反馈连接方式',
        value: 'SStem #25 Array',
        unit: null,
        type: '1',
        treeId: 110,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12697,
        name: '零功率状态',
        value: 'Valve Closed',
        unit: null,
        type: '1',
        treeId: 110,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12698,
        name: '行程整定参数',
        value: 'E',
        unit: null,
        type: '1',
        treeId: 110,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12699,
        name: '比例',
        value: '5.50',
        unit: null,
        type: '1',
        treeId: 110,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12700,
        name: '速度',
        value: '3.00',
        unit: null,
        type: '1',
        treeId: 110,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12701,
        name: 'MLF',
        value: '35.00',
        unit: null,
        type: '1',
        treeId: 110,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12702,
        name: '截止和表征',
        value: 'Cutoffs and characterization were enabled during this test.',
        unit: null,
        type: '1',
        treeId: 110,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12703,
        name: '死区时间最大值及步数',
        value: "步数: ['6']; 最大值: 1.77",
        unit: null,
        type: '1',
        treeId: 117,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12704,
        name: '超量 最大值及步数',
        value: "步数: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11']; 最大值: 1e-10",
        unit: null,
        type: '1',
        treeId: 117,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12705,
        name: '误差 最大值及步数',
        value: "步数: ['5']; 最大值: 1.43",
        unit: null,
        type: '1',
        treeId: 117,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12706,
        name: '第10步行程时间',
        value: '3.13',
        unit: null,
        type: '1',
        treeId: 117,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12707,
        name: '第11步行程时间',
        value: '3.08',
        unit: null,
        type: '1',
        treeId: 117,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12708,
        name: '第10步误差',
        value: '1.42',
        unit: null,
        type: '1',
        treeId: 117,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      },
      {
        id: 12709,
        name: '第11步误差',
        value: '0.57',
        unit: null,
        type: '1',
        treeId: 117,
        valveHistoryDataListId: 38,
        time: '2021-12-17T00:00:00.000Z'
      }
    ]
  }
]

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
