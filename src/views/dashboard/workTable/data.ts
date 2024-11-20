export const BarOption = {
  tooltip: {
    trigger: 'axis',
    axisPointer: { type: 'shadow' }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisTick: { alignWithLabel: true }
    }
  ],
  yAxis: [{ type: 'value' }],
  series: [
    {
      name: '数量',
      type: 'bar',
      barWidth: '60%',
      color: '#1890ff',
      data: [10, 52, 200, 334, 390, 330, 220]
    }
  ]
}

export const LineOption = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: { type: 'value' },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      color: '#1890ff',
      type: 'line'
    }
  ]
}
