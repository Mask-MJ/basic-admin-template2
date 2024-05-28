<script setup lang="ts">
const RenderTr = h('tr', null, () => {
  return [
    h('td', null, () => {
      return '放弃'
    }),
    h('td', null, () => {
      return '反常的'
    })
  ]
})
const tes = h('div', null, '111')
</script>

<template>
  <PageWrapper>
    <n-card title="CPU" size="small" hoverable>
      <n-table :bordered="false" :single-line="false">
        <thead>
          <tr>
            <th>属性</th>
            <th>值</th>
          </tr>
        </thead>
        <tbody>
          <component :is="tes" />
        </tbody>
      </n-table>
    </n-card>
  </PageWrapper>
</template>

<style lang="" scoped></style>
