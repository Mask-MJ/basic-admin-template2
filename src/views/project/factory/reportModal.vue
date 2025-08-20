<script setup lang="ts">
import {
  getFactoryReportData,
  getFactoryReportData2,
  type FactoryInfo
} from '@/api/project/factory'
import { useModalInner } from '@/components/Modal'
import type { UploadFileInfo, UploadInst } from 'naive-ui'
import { Workbook } from 'exceljs'
import { compact, flatMap } from 'lodash-es'
import dayjs from 'dayjs'

const [registerModal, { closeModal }] = useModalInner(async (data: FactoryInfo) => {
  factoryId.value = data.id
  factoryName.value = data.name
})
const factoryId = ref()
const factoryName = ref('')
const uploadRef = ref<UploadInst | null>(null)
const file = ref<UploadFileInfo>()
const endDate = ref<string>()
const cycle = ref<number>(30)
const handleSubmit = async () => {
  const link = document.createElement('a')
  // 返回的是 streamableFile 对象
  try {
    let params: any = {
      factoryId: factoryId.value,
      endDate: endDate.value,
      cycle: cycle.value
    }
    if (file.value) {
      const workbook = new Workbook()
      const worksheet = await workbook.xlsx.read(file.value.file?.stream())
      const valveTags = compact(flatMap(worksheet.getWorksheet(1)?.getSheetValues()))
      params.valveTags = valveTags
      params.reportMode = 'valveList'
    } else {
      params.reportMode = 'factory'
    }
    let response = await getFactoryReportData(params)

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

    const excelData = await getFactoryReportData2(params)
    const workbook = new Workbook()
    const worksheet = workbook.addWorksheet('阀门问题数据')
    worksheet.columns = [
      { header: '位号', key: 'tag', width: 30 },
      { header: '问题(判断依据文件中粗体字)', key: 'description', width: 30 },
      { header: '潜在风险', key: 'risk', width: 50 },
      { header: '建议措施', key: 'measures', width: 30 },
      { header: '报告时间', key: 'time', width: 30 }
    ]
    excelData.forEach((item: any) => {
      item.time = dayjs().format('YYYY-MM-DD HH:mm:ss')
    })

    worksheet.addRows(excelData)
    const arraybuffer: any = new ArrayBuffer(10 * 1024 * 1024)
    const res = await workbook.xlsx.writeBuffer(arraybuffer)
    const excelLink = document.createElement('a')

    const excelBlob = new Blob([res])
    const excelUrl = URL.createObjectURL(excelBlob)

    excelLink.href = excelUrl
    excelLink.download = `${dayjs().format('YYYY-MM-DD')} ${factoryName.value}阀门问题数据.xlsx`

    document.body.appendChild(excelLink)

    excelLink.click()
    excelLink.addEventListener('click', () => {
      excelLink.remove()
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
    <div>
      <span>日期</span>
      <n-date-picker v-model:formatted-value="endDate" type="date" value-format="yyyy-MM-dd" />
    </div>
    <div>
      <span>时间区间</span>
      <n-input-number v-model:value="cycle" clearable />
    </div>
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
