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
