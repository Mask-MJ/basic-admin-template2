<script setup lang="ts">
import type { UploadFileInfo } from 'naive-ui'

const emits = defineEmits(['update:fileList'])
const attrs = useAttrs()
const props = defineProps({
  type: { type: Array, default: () => [] },
  height: { type: Number, default: 500 },
  value: {
    type: Array as PropType<UploadFileInfo[]>,
    default: () => []
  }
})
const showModal = ref(false)
const currentFile = ref<UploadFileInfo | null>(null)
const fileList = ref<UploadFileInfo[]>([])

const getBindValue = computed(() => {
  return {
    data: { fileName: currentFile.value?.name || '' },
    headers: { Authorization: `Bearer ${useUserStore().getToken}` },
    ...attrs
  }
})

watchEffect(() => {
  if (props.value.length) {
    fileList.value = props.value.map((item) => ({
      id: item.id,
      name: item.name,
      url: item.url,
      status: item.status || 'finished'
    }))
  }
})

const updateFileList = (options: {
  file: UploadFileInfo
  fileList: Array<UploadFileInfo>
  event?: any
}) => {
  currentFile.value = options.file
  if (options.event?.currentTarget && options.file.status === 'finished') {
    const result = JSON.parse(options.event?.currentTarget?.response)
    options.file.url = result.url
    emits('update:fileList', options.fileList)
  }
}
const getListLength = computed(() => props.value.length)
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
const handleError = () => {
  window.$message.error('上传失败，请重新上传')
}
</script>
<template>
  <div>
    <n-button @click="() => (showModal = true)">上传文件</n-button>
    <n-button class="ml-2" quaternary type="success">
      {{ `已上传${getListLength}个文件` }}
    </n-button>
    <n-modal
      v-model:show="showModal"
      title="上传列表"
      class="!w-200"
      preset="dialog"
      negativeText="关闭"
    >
      <n-scrollbar :style="{ maxHeight: `${height}px` }">
        <div class="mr-7">
          <n-upload
            v-model:file-list="fileList"
            v-bind="getBindValue"
            @before-upload="beforeUpload"
            @change="updateFileList"
            @error="handleError"
          >
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
        </div>
      </n-scrollbar>
    </n-modal>
  </div>
</template>
