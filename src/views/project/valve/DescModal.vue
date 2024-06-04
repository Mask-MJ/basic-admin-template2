<script setup lang="ts">
import { useModalInner } from '@/components/Modal'
import { hard_Online } from './mock.data'
const [registerModal] = useModalInner(async () => {})
</script>

<template>
  <Modal title="阀门数据详情" class="!w-250" @register="registerModal">
    <n-card content-style="padding: 0;">
      <n-tabs type="line" size="large" :tabs-padding="20" pane-style="padding: 20px;">
        <n-tab-pane v-for="item_1 in hard_Online" :name="item_1.name" :key="item_1.key">
          <div v-for="item_2 in item_1.data" :key="item_2.name">
            <n-divider> {{ item_2.name }} </n-divider>
            <n-card
              v-for="item_3 in item_2.data"
              :key="item_3.name"
              :title="item_3.name"
              size="small"
              content-style="padding: 0;"
              class="mb-4"
            >
              <n-descriptions label-placement="left" bordered :column="4">
                <n-descriptions-item
                  v-for="item_4 in item_3.data"
                  :key="item_4.name"
                  :label="item_4.name"
                >
                  {{ item_4.value }}
                </n-descriptions-item>
              </n-descriptions>
            </n-card>
          </div>
        </n-tab-pane>
      </n-tabs>
    </n-card>
  </Modal>
</template>

<style lang="" scoped></style>
