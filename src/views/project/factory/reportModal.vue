<script setup lang="ts">
import { getFactoryReportData, type FactoryInfo } from '@/api/project/factory'
import { useModalInner } from '@/components/Modal'
import type { UploadFileInfo, UploadInst } from 'naive-ui'
import { Workbook } from 'exceljs'
import { compact, flatMap } from 'lodash-es'

const [registerModal, { closeModal }] = useModalInner(async (data: FactoryInfo) => {
  factoryId.value = data.id
})
const factoryId = ref()
const uploadRef = ref<UploadInst | null>(null)
const file = ref<UploadFileInfo>()
const handleSubmit = async () => {
  const link = document.createElement('a')
  // 返回的是 streamableFile 对象
  try {
    let response: any
    if (file.value) {
      const workbook = new Workbook()
      const worksheet = await workbook.xlsx.read(file.value.file?.stream())
      const valveTags = compact(flatMap(worksheet.getWorksheet(1)?.getSheetValues()))
      response = await getFactoryReportData({
        factoryId: factoryId.value,
        valveTags,
        reportMode: 'valveList'
      })
    } else {
      response = await getFactoryReportData({
        factoryId: factoryId.value,
        reportMode: 'factory'
      })
    }
    // 转换成 blob 对象
    const disposition = response.headers['content-disposition']
    const fileName = decodeURI(disposition.split("filename*=UTF-8''")[1])
    const blob = new Blob([response.data], {
      type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document;charset=utf-8'
    })
    const url = URL.createObjectURL(blob)
    link.href = url
    link.download = fileName
    document.body.appendChild(link)

    link.click()
    link.addEventListener('click', () => {
      link.remove()
    })
    closeModal()
  } catch (e) {
    window.$message.error('生成报告失败')
  }
}
const handleChange = (data: { file: UploadFileInfo; fileList: UploadFileInfo[] }) => {
  file.value = data.file
}
</script>

<template>
  <Modal class="!w-120" title="生成报告" @register="registerModal" @positive-click="handleSubmit">
    <n-upload
      ref="uploadRef"
      :default-upload="false"
      accept=".excel,.xls,.xlsx"
      @change="handleChange"
    >
      <div class="p-2 text-sm">请上传阀门文件, 如果不上传则生成所有阀门报告</div>
      <n-button> 上传文件 </n-button>
    </n-upload>
  </Modal>
</template>

<style scoped></style>
