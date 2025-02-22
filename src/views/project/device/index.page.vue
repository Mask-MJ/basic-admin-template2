<script setup lang="ts">
import { deleteDevice, getDeviceList, type DeviceInfo } from '@/api/project/device'
import EditTableColum from './EditTableColum.vue'
import EditTableColum2 from './EditTableColum2.vue'
import { useModal } from '@/components/Modal'
import SetModal from './SetModal.vue'
import { NButton, NPopconfirm } from 'naive-ui'
import { type FactoryInfo, getFactoryList } from '@/api/project/factory'

const router = useRouter()
const factoryId = computed(() => (router.currentRoute.value.params as { id: string }).id)
const name = ref(null)
const page = ref(1)
const total = ref(11)
const factoryList = ref<FactoryInfo[]>([])

const [registerSetModal, { openModal: openSetModel }] = useModal()

const getDataIndex = (id: number) => {
  return data.value.findIndex((item) => item.id === id)
}
const columns: any[] = [
  {
    title: '装置名称',
    key: 'name',
    render(row: DeviceInfo) {
      const index = getDataIndex(row.id)
      return h(EditTableColum, {
        id: row.id,
        value: row.name,
        onUpdateValue(v: any) {
          data.value[index].name = v
        }
      })
    }
  },
  {
    title: '所属最终用户',
    key: 'factoryName',
    width: 300,
    render(row: any) {
      const index = getDataIndex(row.id)
      return h(EditTableColum2, {
        id: row.id,
        value: row.factoryName,
        data: factoryList.value,
        onUpdateValue(v: any) {
          data.value[index].factoryName = v
        }
      })
    }
  },
  { title: '创建者', key: 'createBy' },
  { title: '创建时间', key: 'createdAt' },
  {
    title: '操作',
    key: 'actions',
    render(row: any) {
      return h(
        NPopconfirm,
        {
          tooltipProps: { content: '删除' },
          buttonProps: { type: 'error' },
          onPositiveClick: async () => {
            await deleteDevice(row.id)
            reload()
          }
        },
        {
          trigger: () =>
            h(
              NButton,
              { type: 'error', size: 'small' },
              { default: () => h('i', { class: 'i-ant-design:delete-outlined' }) }
            ),
          default: () => '是否确认删除, 如果有关联数据会一并删除'
        }
      )
    }
  }
]
const paginationRef = computed(() => ({
  pageSize: 10,
  page: page.value,
  itemCount: total.value
}))
const data = ref<any[]>([])
const handlePageChange = (curPage: number) => {
  page.value = curPage
  getData()
}

const getData = async () => {
  const res: any = await getDeviceList({
    factoryId: Number(factoryId.value) || undefined,
    page: page.value
  })
  data.value = res.rows.map((item: any) => ({
    ...item,
    factoryName: item.factory.name
  }))
  page.value = res.page
  total.value = res.total
}

const getFactory = async () => {
  const res = await getFactoryList()
  factoryList.value = res
}

const reload = () => {
  page.value = 1
  getData()
}

onMounted(() => {
  getData()
  getFactory()
})
</script>

<template>
  <PageWrapper>
    <NCard class="mb-2">
      <div class="flex items-center">
        <span class="w-20">装置名称：</span>
        <NInput class="!w-50" v-model="name" placeholder="请输入装置名称" />
      </div>
      <NSpace justify="end">
        <NButton type="primary" @click="reload">重置</NButton>
        <NButton @click="openSetModel(true)">提交</NButton>
      </NSpace>
    </NCard>
    <NCard>
      <NButton class="mb-4 mr-2" type="primary" @click="openSetModel(true)"> 新增 </NButton>
      <n-data-table
        :columns="columns"
        :data="data"
        bordered
        :pagination="paginationRef"
        :on-update:page="handlePageChange"
      />
    </NCard>
    <SetModal @register="registerSetModal" @success="reload()" />
  </PageWrapper>
</template>

<style lang="" scoped></style>
