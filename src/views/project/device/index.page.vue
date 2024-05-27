<script setup lang="ts">
import { useModal } from '@/components/Modal'
import { useTable, Action } from '@/components/Table'
import { deleteDevice, getDeviceDetail, getDeviceList, type DeviceInfo } from '@/api/project/device'
import { columns, searchSchemas } from './data'
import SetModal from './SetModal.vue'

const router = useRouter()
const [registerSetModal, { openModal: openSetModel }] = useModal()
const [registerTable, { reload }] = useTable({
  api: getDeviceList, // 请求接口
  columns, // 展示的列
  useSearchForm: true, // 启用搜索表单
  formConfig: { labelWidth: 100, schemas: searchSchemas }, // 搜索表单配置
  bordered: true,
  rowKey: (rowData) => rowData.id,
  showIndexColumn: false,
  pagination: false,
  actionColumn: {
    width: 200,
    key: 'ACTION',
    render: (row: DeviceInfo) =>
      h(Action, {
        actions: [
          {
            type: 'edit',
            onClick: async () => {
              const result = await getDeviceDetail(row.id)
              return openSetModel(true, result)
            }
          },
          {
            icon: 'i-ant-design:dashboard-outlined',
            tooltipProps: { content: '查看绑定的阀门' },
            buttonProps: {
              type: 'success',
              onClick: () => router.push(`/projects/valve/${row.id}`)
            }
          },
          {
            type: 'del',
            onClick: async () => {
              await deleteDevice(row.id)
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
