<script setup lang="ts">
import { importValveData } from '@/api/project/factory'
import { useModalInner } from '@/components/Modal'
import type { UploadFileInfo } from 'naive-ui'

const factoryId = ref<number>()
const fileList = ref<UploadFileInfo[]>([])
const [registerModal, { closeModal }] = useModalInner((data) => {
  factoryId.value = data.id
  fileList.value = []
})

const beforeUpload = async (data: { file: UploadFileInfo; fileList: UploadFileInfo[] }) => {
  if (
    [
      'xlsx',
      'xls',
      'application/vnd.ms-excel',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    ].includes(data.file.file?.type as string)
  ) {
    return true
  } else {
    window.$message.error(`只能上传 xlsx | xls 格式的文件，请重新上传`)
    return false
  }
}

const submit = async () => {
  try {
    const result = await importValveData({
      file: fileList.value[0].file as File,
      fileName: fileList.value[0].name,
      factoryId: factoryId.value
    })
    if (result.status === 201) {
      window.$message.success('导入成功')
    } else {
      window.$message.error('导入失败')
    }
    closeModal()
  } catch (error) {
    window.$message.error('导入失败')
  }
}
</script>

<template>
  <Modal title="导入列表" class="!w-200" @register="registerModal" @positive-click="submit">
    <n-upload
      multiple
      directory-dnd
      name="file"
      :max="1"
      v-model:file-list="fileList"
      @before-upload="beforeUpload"
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
  </Modal>
</template>
