<script setup lang="ts">
import type { UploadFileInfo } from 'naive-ui'
import type { UploadFileParams } from '@/utils/request/types'
import { useModalInner } from '@/components/Modal'

const emits = defineEmits(['success', 'register', 'update:fileList'])
const attrs = useAttrs()
const props = defineProps({
  name: { type: String, default: 'file' },
  max: { type: Number },
  type: { type: Array, default: () => [] },
  api: {
    type: Function as PropType<(params: UploadFileParams) => Promise<any>>,
    default: () => {}
  },
  value: {
    type: Array as PropType<{ url: string; name: string; status?: string }[]>,
    default: () => []
  }
})

const fileList = ref<UploadFileInfo[]>([])

const getHeaders = computed(() => ({
  Authorization: `Bearer ${useUserStore().getToken}`
}))

const beforeUpload = async (data: { file: UploadFileInfo; fileList: UploadFileInfo[] }) => {
  if (props.type.length) {
    if (props.type.includes(data.file.file?.type)) {
      return true
    } else {
      window.$message.error(`只能上传${props.type}格式的文件，请重新上传`)
      return false
    }
  }
  return true
}
const getBindValue = computed(() => ({
  multiple: true,
  directoryDnd: true,
  ...attrs,
  name: props.name,
  headers: getHeaders.value,
  max: props.max
}))

const customRequest = async ({ file }: { file: UploadFileInfo }) => {
  try {
    if (file.status === 'removed') {
      const updatedFileList = Array.isArray(props.value)
        ? props.value.filter((item) => item.url !== file.url)
        : []
      emits('update:fileList', updatedFileList)
    } else {
      const result = await props.api({
        file: file.file as File,
        fileName: file.name
      })
      const updatedFileList = Array.isArray(props.value)
        ? [...props.value, result.data]
        : [props.value, result.data]
      emits('update:fileList', updatedFileList)
      // window.$message.success('上传成功')
    }
  } catch (error) {
    console.warn(error, file)
    const errorFile = {
      id: file.id,
      url: file.fullPath,
      name: file.name,
      status: 'error'
    }
    const updatedFileList = Array.isArray(props.value)
      ? [...props.value, errorFile]
      : [props.value, errorFile]
    emits('update:fileList', updatedFileList)
    window.$message.error('上传失败, 请检查网络并重新上传')
  }
}

const [registerModal] = useModalInner()

watchEffect(() => {
  if (props.value.length) {
    fileList.value = props.value.map((item) => ({
      id: item.url,
      name: item.name,
      status: item.status || 'finished',
      url: item.url
    })) as UploadFileInfo[]
  }
})
</script>

<template>
  <Modal
    title="上传列表"
    class="!w-200"
    @register="registerModal"
    negativeText="关闭"
    positive-text=""
  >
    <n-upload v-model:file-list="fileList" v-bind="getBindValue" @before-upload="beforeUpload">
      <n-upload-dragger>
        <div style="margin-bottom: 12px">
          <n-icon size="48" :depth="3">
            <i class="i-ant-design:cloud-upload-outlined"></i>
          </n-icon>
        </div>
        <n-text style="font-size: 16px"> 点击或者拖动文件到该区域来上传 </n-text>
        <n-p depth="3" style="margin: 8px 0 0 0">
          请不要上传敏感数据，比如你的银行卡号和密码，信用卡号有效期和安全码
        </n-p>
      </n-upload-dragger>
    </n-upload>
  </Modal>
</template>
