<script setup lang="ts">
import { useModal } from '@/components/Modal'
import { useTable, Action } from '@/components/Table'
import {
  deleteContract,
  getContractDetail,
  getContractList,
  type ContractInfo
} from '@/api/project/contract'
import { columns, searchSchemas } from './data'
import SetModal from './SetModal.vue'

const router = useRouter()
const factoryId = computed(() => (router.currentRoute.value.params as { id: string }).id)

const getSchemas = computed(() =>
  factoryId.value ? searchSchemas.filter((item) => item.path !== 'factoryId') : searchSchemas
)
const [registerSetModal, { openModal: openSetModel }] = useModal()
const [registerTable, { reload }] = useTable({
  api: getContractList, // 请求接口
  columns, // 展示的列
  useSearchForm: true, // 启用搜索表单
  formConfig: { labelWidth: 100, schemas: getSchemas.value }, // 搜索表单配置
  searchInfo: { factoryId: Number(factoryId.value) }, // 额外参数
  bordered: true,
  rowKey: (rowData) => rowData.id,
  showIndexColumn: false,
  pagination: false,
  actionColumn: {
    width: 100,
    key: 'ACTION',
    render: (row: ContractInfo) =>
      h(Action, {
        actions: [
          {
            type: 'edit',
            onClick: async () => {
              const result = await getContractDetail(row.id)
              return openSetModel(true, result)
            }
          },
          {
            type: 'del',
            onClick: async () => {
              await deleteContract(row.id)
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
