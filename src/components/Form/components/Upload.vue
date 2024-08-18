<script setup lang="ts">
import { isArray } from 'lodash-es'
import UploadModal from './UploadModal.vue'
import { useModal } from '@/components/Modal'

const emits = defineEmits(['update:fileList'])
const [registerModal, { openModal }] = useModal()
const attrs = useAttrs()
const props = defineProps({
  value: {
    type: [String, Array] as PropType<
      { url: string; name: string } | { url: string; name: string }[]
    >,
    default: () => []
  }
})
const updateFileList = (fileList: any) => {
  emits('update:fileList', fileList)
}
const getFileList = computed(() => {
  if (isArray(props.value)) {
    return props.value
  } else {
    return [props.value]
  }
})
</script>
<template>
  <div>
    <n-button @click="() => openModal(true)">上传文件</n-button>
    <n-button class="ml-2" quaternary type="success">
      {{ `已上传${getFileList.length}个文件` }}
    </n-button>
    <UploadModal
      @register="registerModal"
      v-bind="{ ...attrs, ...props }"
      @update:file-list="updateFileList"
    />
  </div>
</template>
