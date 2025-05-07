<script setup lang="ts">
import { useTable } from '@/components/Table'
import { getValveWorkOrder, getValveDetail } from '@/api/project/valve'

const router = useRouter()
const valveId = computed(() => (router.currentRoute.value.params as { id: string }).id)
const valveDetail = ref()

const [registerTable] = useTable({
  api: getValveWorkOrder, // 请求接口
  columns: [
    { title: '所属最终用户', key: 'factory.name' },
    { title: '任务名称', key: 'typeName' },
    {
      title: '位号',
      key: 'valve',
      render: (data: any) => {
        return data.valve?.map((item: any) => item.tag).join(', ')
      }
    },
    {
      title: '序列号',
      key: 'valve',
      render: (data: any) => {
        return data.valve?.map((item: any) => item.serialNumber).join(', ')
      }
    },
    { title: '故障类别', key: 'faultCategory' },
    { title: '处理措施', key: 'remedialActions' },
    { title: '维修完成时间', key: 'createdAt' },
    {
      title: '维修报告',
      key: 'attachment',
      render: (data: any) => {
        return data.attachment
          ? h(
              'a',
              { href: data.attachment, target: '_blank', class: 'text-blue-500' },
              data.attachment?.split('/').pop()
            )
          : ''
      }
    }
  ], // 展示的列
  useSearchForm: true, // 启用搜索表单
  formConfig: {
    labelWidth: 100,
    schemas: [
      {
        path: 'typeName',
        component: 'NInput',
        label: '任务名称',
        span: 8,
        componentProps: { placeholder: '请输入任务名称' }
      },
      {
        path: 'type',
        component: 'NSelect',
        label: '任务类型',
        span: 8,
        componentProps: {
          placeholder: '请选择任务类型',
          options: [
            { label: '现场服务', value: 0 },
            { label: '返场维修', value: 1 }
          ]
        }
      }
    ]
  }, // 搜索表单配置
  searchInfo: { valveId: Number(valveId.value) }, // 额外参数
  bordered: true,
  rowKey: (rowData) => rowData.id,
  showIndexColumn: false
})

watch(
  () => valveId.value,
  async (valveId) => {
    if (!valveId) return
    valveDetail.value = await getValveDetail(Number(valveId))
  },
  { immediate: true }
)
</script>

<template>
  <PageWrapper>
    <div class="h-full flex">
      <n-card class="mr-2 w-1/4" hoverable>
        <ul>
          <li>所属最终用户：{{ valveDetail?.factory?.name || '' }}</li>
          <li>所属装置：{{ valveDetail?.device?.name || '' }}</li>
          <li>阀门位号：{{ valveDetail?.tag || '' }}</li>
        </ul>
      </n-card>
      <Table class="w-3/4" @register="registerTable"> </Table>
    </div>
  </PageWrapper>
</template>

<style lang="" scoped></style>
