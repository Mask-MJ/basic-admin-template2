<script setup lang="ts">
import { getValveDetail, getValveHistoryScore } from '@/api/project/valve'
import { useTable, Action } from '@/components/Table'
import ScoreModal from './ScoreModal.vue'
import { useModal } from '@/components/Modal'

const router = useRouter()
const valveDetail = ref<any>({})
const valveId = computed(() => (router.currentRoute.value.params as { id: string }).id)
const [registerScoreModal, { openModal: openScoreModal }] = useModal()

const [registerTable, { reload }] = useTable({
  api: getValveHistoryScore, // 请求接口
  columns: [
    { title: '检查时间', key: 'checkTime', width: 300 },
    { title: '评分时间', key: 'scoreTime', width: 150 },
    { title: '分数', key: 'infor.totalScore', width: 150 }
  ], // 展示的列
  searchInfo: { valveId: valveId.value }, // 额外参数
  useSearchForm: false, // 启用搜索表单
  bordered: true,
  rowKey: (rowData) => rowData.id,
  fetchSetting: {
    listField: 'scores'
  },
  showIndexColumn: false,
  actionColumn: {
    width: 100,
    key: 'ACTION',
    render: (row: any) =>
      h(Action, {
        actions: [
          {
            icon: 'i-ant-design:audit-outlined',
            tooltipProps: { content: '详情' },
            buttonProps: {
              type: 'success',
              onClick: () => {
                openScoreModal(true, row)
              }
            }
          }
        ]
      })
  }
})

watch(
  () => (router.currentRoute.value.params as { id: string }).id,
  async (val) => {
    if (!val) return
    valveDetail.value = await getValveDetail(Number(val))
    reload()
  },
  { immediate: true }
)
</script>

<template>
  <div class="h-full flex">
    <n-card class="mr-2 w-1/5" title="阀门信息">
      <div>最终用户：{{ valveDetail.factory?.name }}</div>
      <div>装置：{{ valveDetail.unit }}</div>
      <div>位号：{{ valveDetail.tag }}</div>
    </n-card>
    <Table class="w-4/5" @register="registerTable">
      <!-- <template #toolbar>
        <n-button class="mr-2" type="success" @click="exportData"> 导出全部数据 </n-button>
      </template> -->
    </Table>
    <ScoreModal @register="registerScoreModal" />
  </div>
</template>

<style scoped></style>
