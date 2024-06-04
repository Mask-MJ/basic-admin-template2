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
              { name: 'HART 标签', key: 'HART Tag', value: 'DVW-R1' },
              { name: '信息串', value: '' },
              { name: '描述符', value: 'F003203177' },
              { name: '阀门序列号', value: 'F003203177' },
              { name: '仪表序列号', value: 'F003203177' },
              { name: '轮询地址', value: '0' }
            ]
          },
          {
            name: '单位',
            data: [
              { name: '压力单位', value: 'psi' },
              { name: '温度单位', value: 'C' },
              { name: '行程单位', value: 'deg' },
              { name: '长度单位', value: 'in' },
              { name: '面积单位', value: 'in2' },
              { name: '扭矩单位', value: 'lbf.in' },
              { name: '弹簧刚度单位', value: 'lbf/in' },
              { name: '模拟输入单位', value: 'mA' }
            ]
          }
        ]
      },
      {
        name: '初始设置',
        data: [
          {
            name: '控制信号',
            data: [
              { name: '控制模式', value: '模拟 (RSP)' },
              { name: '重启控制模式', value: '模拟 (RSP)' }
            ]
          },
          {
            name: '设置',
            data: [
              { name: '零功率状态', value: '阀门开启' },
              { name: '阀门型式', value: '旋转轴' },
              { name: '执行机构类型', value: '不带弹簧双动作气缸式' },
              { name: '放大器类型', value: 'A 或 C 型放大器' },
              { name: '反馈连接方式', value: '旋转式阵列' },
              { name: '行程传感器旋转方向', value: '逆时针 / 转向仪表顶部' },
              { name: '本地自动标定按钮', value: '已禁用' }
            ]
          }
        ]
      },
      {
        name: '输出',
        data: [
          {
            name: 'HART 变量分配',
            data: [
              { name: '主变量 (PV)', value: '输入电流' },
              { name: '二级变量 (SV)', value: '设定点 (SP)' },
              { name: '三级变量 (TV)', value: '压力 A' },
              { name: '四级变量 (QV)', value: '行程' }
            ]
          }
        ]
      },
      {
        name: '整定',
        data: [
          {
            name: '行程控制',
            data: [
              { name: '整定参数', value: '专家级' },
              { name: '比例增益', value: '3.9' },
              { name: '速度增益', value: '4' },
              { name: 'MLFB 增益', value: '52' },
              { name: '启用积分控制', value: 'Yes' },
              { name: '积分增益 (重复次数/分钟)', value: '9.4' }
            ]
          },
          {
            name: '积分设置',
            data: [
              { name: '积分死区 (%)', value: '0.26' },
              { name: '积分限制 (%)', value: '30' }
            ]
          },
          {
            name: '压力控制',
            data: [
              { name: '整定参数', value: 'D' },
              { name: '比例增益', value: '2.4' },
              { name: 'MLFB 增益', value: '35' },
              { name: '启用积分控制', value: 'Yes' },
              { name: '积分增益 (次/秒)', value: '0.1' }
            ]
          }
        ]
      }
    ]
  },
  {
    name: '报警',
    key: 'Alerts',
    data: [
      {
        name: '行程历史报警',
        data: [
          { name: '循环计数/行程累计死区 (%)', value: '1' },
          {
            name: '循环计数',
            data: [
              { name: '循环计数高报警', value: '已禁用' },
              { name: '循环计数报警点', value: '2147483647' },
              { name: '循环计数', value: '264' }
            ]
          },
          {
            name: '行程累计器',
            data: [
              { name: '行程累加器高报警', value: '已禁用' },
              { name: '行程累加器报警点 (%)', value: '2147483647' },
              { name: '行程累计器 (%)', value: '10955' }
            ]
          }
        ]
      },
      {
        name: '行程报警',
        data: [
          { name: '所有行程死区报警 (%)', value: '1' },
          {
            name: '行程偏差',
            data: [
              { name: '行程偏差报警', value: '已启用' },
              { name: '行程偏差报警点 (%)', value: '3' },
              { name: '行程偏差报警时间 (秒)', value: '5' }
            ]
          },
          {
            name: '行程高高',
            data: [
              { name: '行程高高报警', value: '已禁用' },
              { name: '行程高高报警点 (%)', value: '125' }
            ]
          },
          {
            name: '行程低低',
            data: [
              { name: '行程低低报警', value: '已禁用' },
              { name: '行程低低报警点 (%)', value: '-25' }
            ]
          },
          {
            name: '行程高',
            data: [
              { name: '行程高报警', value: '已禁用' },
              { name: '行程高报警点 (%)', value: '125' }
            ]
          },
          {
            name: '行程低',
            data: [
              { name: '行程低报警', value: '已禁用' },
              { name: '行程低报警点 (%)', value: '-25' }
            ]
          },
          {
            name: '行程低限位/截止',
            data: [{ name: '行程限位/截止低报警', value: '已禁用' }]
          },
          {
            name: '行程高限位/截止',
            data: [{ name: '行程限位/截止高报警', value: '已禁用' }]
          }
        ]
      }
    ]
  }
]
