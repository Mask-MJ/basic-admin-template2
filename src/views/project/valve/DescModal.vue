<script setup lang="ts">
import type { ValveRunInfo } from '@/api/project/valve'
import * as echarts from 'echarts'
import { useModalInner } from '@/components/Modal'
const valveRunDataConfig = ref<ValveRunInfo[]>()
const valveRunData = ref<ValveRunInfo[]>()
const ChartRef = ref<HTMLElement>()
const [registerModal] = useModalInner(async (data: ValveRunInfo[]) => {
  valveRunDataConfig.value = [
    {
      id: 242,
      name: '反馈连接方式',
      value: '旋转式阵列',
      unit: null,
      valveId: 5,
      time: '2022-01-28 00:00:00'
    },
    {
      id: 243,
      name: '零功率状态',
      value: '阀门开启',
      unit: null,
      valveId: 5,
      time: '2022-01-28 00:00:00'
    },
    {
      id: 244,
      name: '行程整定参数',
      value: '专家级',
      unit: null,
      valveId: 5,
      time: '2022-01-28 00:00:00'
    },

    {
      id: 168,
      name: '仪表模式',
      value: '投用状态',
      unit: null,
      valveId: 5,
      time: '2022-01-28 00:00:00'
    },
    {
      id: 174,
      name: '启动次数',
      value: '17',
      unit: null,
      valveId: 5,
      time: '2022-01-28 00:00:00'
    },
    {
      id: 175,
      name: '仪表等级',
      value: 'PD',
      unit: null,
      valveId: 5,
      time: '2022-01-28 00:00:00'
    },
    {
      id: 176,
      name: '阀门型式',
      value: '旋转轴',
      unit: null,
      valveId: 5,
      time: '2022-01-28 00:00:00'
    },
    {
      id: 177,
      name: '执行机构类型',
      value: '不带弹簧双动作气缸式',
      unit: null,
      valveId: 5,
      time: '2022-01-28 00:00:00'
    },

    {
      id: 203,
      name: '报警记录非空',
      value: '开',
      unit: null,
      valveId: 5,
      time: '2022-01-28 00:00:00'
    },
    {
      id: 228,
      name: '扫描时间',
      value: '50.0秒',
      unit: null,
      valveId: 5,
      time: '2022-01-28 00:00:00'
    },

    {
      id: 232,
      name: '弹簧预紧力',
      value: 'NA',
      unit: null,
      valveId: 5,
      time: '2022-01-28 00:00:00'
    },
    {
      id: 239,
      name: '增压器',
      value: '无',
      unit: null,
      valveId: 5,
      time: '2022-01-28 00:00:00'
    },
    {
      id: 178,
      name: '标定日期',
      value: '28 Jan 2022',
      unit: null,
      valveId: 5,
      time: '2022-01-28 00:00:00'
    }
  ] as any

  valveRunData.value = [
    {
      id: 245,
      name: '比例',
      value: '5.00',
      unit: null,
      valveId: 5,
      time: '2022-01-28 00:00:00'
    },
    {
      id: 246,
      name: '速度',
      value: '4.00',
      unit: null,
      valveId: 5,
      time: '2022-01-28 00:00:00'
    },
    {
      id: 247,
      name: 'MLF',
      value: '52.00',
      unit: null,
      valveId: 5,
      time: '2022-01-28 00:00:00'
    },
    {
      id: 164,
      name: '行程',
      value: '34.13 %',
      unit: null,
      valveId: 5,
      time: '2022-01-28 00:00:00'
    },
    {
      id: 165,
      name: '行程偏差',
      value: '0.22 %',
      unit: null,
      valveId: 5,
      time: '2022-01-28 00:00:00'
    },
    {
      id: 166,
      name: '供气压力',
      value: '42.13 psi',
      unit: null,
      valveId: 5,
      time: '2022-01-28 00:00:00'
    },
    {
      id: 167,
      name: '驱动信号',
      value: '67.56 %',
      unit: null,
      valveId: 5,
      time: '2022-01-28 00:00:00'
    },
    {
      id: 169,
      name: '循环计数',
      value: '278 counts',
      unit: null,
      valveId: 5,
      time: '2022-01-28 00:00:00'
    },
    {
      id: 170,
      name: '行程累计器',
      value: '11463 %',
      unit: null,
      valveId: 5,
      time: '2022-01-28 00:00:00'
    },
    {
      id: 171,
      name: '放大器调整',
      value: '51.22 %',
      unit: null,
      valveId: 5,
      time: '2022-01-28 00:00:00'
    },
    {
      id: 172,
      name: '最高温度记录',
      value: '23.81C',
      unit: null,
      valveId: 5,
      time: '2022-01-28 00:00:00'
    },
    {
      id: 173,
      name: '运行时间',
      value: '',
      unit: null,
      valveId: 5,
      time: '2022-01-28 00:00:00'
    },
    {
      id: 226,
      name: '平均扭矩',
      value: '68lbf.in',
      unit: null,
      valveId: 5,
      time: '2022-01-28 00:00:00'
    },
    {
      id: 227,
      name: '平均死区',
      value: '0.50 %',
      unit: null,
      valveId: 5,
      time: '2022-01-28 00:00:00'
    },
    {
      id: 240,
      name: '下方弹簧预紧力',
      value: '0.0 psi',
      unit: null,
      valveId: 5,
      time: '2022-01-28 00:00:00'
    },
    {
      id: 241,
      name: '上方弹簧预紧力',
      value: '0.0 psi',
      unit: null,
      valveId: 5,
      time: '2022-01-28 00:00:00'
    },
    {
      id: 237,
      name: '额定行程',
      value: '90.0 deg',
      unit: null,
      valveId: 5,
      time: '2022-01-28 00:00:00'
    },
    {
      id: 238,
      name: '实际行程：',
      value: '96.10088 deg',
      unit: null,
      valveId: 5,
      time: '2022-01-28 00:00:00'
    },
    {
      id: 229,
      name: '平均动态误差',
      value: '2.11%',
      unit: null,
      valveId: 5,
      time: '2022-01-28 00:00:00'
    },
    {
      id: 230,
      name: '动态线性度（独立）',
      value: '0.35%',
      unit: null,
      valveId: 5,
      time: '2022-01-28 00:00:00'
    },
    {
      id: 231,
      name: '平均扭矩',
      value: '129 Ibf.in',
      unit: null,
      valveId: 5,
      time: '2022-01-28 00:00:00'
    }
  ] as any

  const Chart = echarts.init(ChartRef.value)
  Chart.setOption({
    xAxis: {
      type: 'category',
      data: [
        '2022-01-05',
        '2022-02-05',
        '2022-03-05',
        '2022-04-05',
        '2022-05-05',
        '2022-06-05',
        '2022-07-05'
      ]
    },
    yAxis: { type: 'value' },
    series: [
      {
        data: [90, 100, 70, 110, 93, 96, 97],
        type: 'line'
      },
      {
        data: [100, 85, 70, 130, 93, 99, 84],
        type: 'line'
      },
      {
        data: [95, 75, 60, 100, 83, 94, 87],
        type: 'line'
      }
    ]
  })
})
</script>

<template>
  <Modal title="阀门运行数据详情" class="!w-300" @register="registerModal">
    <n-descriptions title="阀门设置参数" label-placement="left" :column="4">
      <n-descriptions-item v-for="item in valveRunDataConfig" :key="item.name" :label="item.name">
        {{ item.value }} {{ item.unit ? `${item.unit}` : '' }}
      </n-descriptions-item>
    </n-descriptions>
    <n-descriptions title="阀门运行数据" label-placement="left" :column="4">
      <n-descriptions-item v-for="item in valveRunData" :key="item.name" :label="item.name">
        {{ item.value }} {{ item.unit ? `${item.unit}` : '' }}
      </n-descriptions-item>
    </n-descriptions>
    <div ref="ChartRef" class="h-100 w-full"></div>
  </Modal>
</template>

<style lang="" scoped></style>
