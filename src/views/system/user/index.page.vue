<script setup lang="ts">
const formData = ref({})
const schema = {
  type: 'object',
  properties: {
    account: { type: 'string', title: '账号' },
    nickname: { type: 'string', title: '昵称' },
    email: { type: 'string', title: '邮箱' },
    phoneNumber: { type: 'string', title: '手机号' },
    sex: {
      title: '性别',
      type: 'number',
      'ui:widget': 'SelectWidget',
      enum: [0, 1],
      enumNames: ['女', '男']
    }
  }
}
const uiSchema = {}
</script>

<template>
  <div>
    <DarkModeContainer class="px-4 pt-4 rounded-xl">
      <VueForm
        v-model="formData"
        :ui-schema="uiSchema"
        :schema="schema"
        :formProps="{ layoutColumn: 3, labelPlacement: 'left' }"
        :formFooter="{ okBtn: '提交', cancelBtn: '重置' }"
      />
    </DarkModeContainer>
  </div>
</template>

<style lang="" scoped></style>
