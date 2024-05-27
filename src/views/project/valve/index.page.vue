<script setup lang="ts">
import { useModal } from '@/components/Modal'
import { useTable, Action } from '@/components/Table'
import { deleteValve, getValveDetail, getValveList, type ValveInfo } from '@/api/project/valve'
import { columns, searchSchemas } from './data'
import SetModal from './SetModal.vue'

const router = useRouter()
const formType = computed(
  () => (router.currentRoute.value.params as { id: string }).id?.split('-')[0]
)
const typeId = computed(() => {
  return (router.currentRoute.value.params as { id: string }).id?.split('-')[1]
})

const getSchemas = computed(() => {
  if (formType.value === 'factory' || formType.value === 'device') {
    return searchSchemas.filter((item) => item.path !== 'factoryId')
  } else {
    return searchSchemas
  }
})

const [registerSetModal, { openModal: openSetModel }] = useModal()
const [registerTable, { reload }] = useTable({
  api: getValveList, // 请求接口
  columns, // 展示的列
  useSearchForm: true, // 启用搜索表单
  formConfig: { labelWidth: 100, schemas: getSchemas.value }, // 搜索表单配置
  searchInfo: { [formType.value]: typeId.value }, // 额外参数
  bordered: true,
  rowKey: (rowData) => rowData.id,
  showIndexColumn: false,
  actionColumn: {
    width: 200,
    key: 'ACTION',
    render: (row: ValveInfo) =>
      h(Action, {
        actions: [
          {
            type: 'edit',
            onClick: async () => {
              const result = await getValveDetail(row.id)
              return openSetModel(true, result)
            }
          },
          {
            type: 'del',
            onClick: async () => {
              await deleteValve(row.id)
              await reload()
            }
          }
        ]
      })
  }
})
</script>

<template>
  <PageWrapper>
    <Table @register="registerTable">
      <template #toolbar>
        <n-button class="mr-2" type="primary" @click="openSetModel(true)"> 新增 </n-button>
      </template>
    </Table>
    <SetModal @register="registerSetModal" @success="reload()" />
  </PageWrapper>
</template>

<style lang="" scoped></style>
