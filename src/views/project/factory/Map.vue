<script setup lang="ts">
const emits = defineEmits(['submit'])

const wrapRef = ref<HTMLDivElement | null>(null)
let BMap: any = (window as any).BMap || null

const map = ref<any>(null)
const address = ref<string>('')
const { load } = useScriptTag(
  'https://api.map.baidu.com/getscript?v=3.0&ak=Z6eRnlM84tMu0CLxuTMXhG0HUb0vr29B&services=&t=20210201100830&s=1',
  async () => {
    BMap = (window as any).BMap
  },
  { manual: true }
)
async function initMap() {
  const wrapEl = unref(wrapRef)
  if (!wrapEl) return
  if (!BMap) {
    await load()
  }
  map.value = new BMap.Map(wrapEl)
  let geoc = new (window as any).BMap.Geocoder()
  const point = new BMap.Point(116.404, 39.915)
  map.value.centerAndZoom(point, 15)
  map.value.enableScrollWheelZoom(true)
  map.value.addEventListener('click', function (e: any) {
    map.value.clearOverlays()
    const marker = new BMap.Marker(new BMap.Point(e.point.lng, e.point.lat))
    map.value.addOverlay(marker)
    geoc.getLocation(e.point, function (rs: any) {
      let addComp = rs.addressComponents
      address.value =
        addComp.province + addComp.city + addComp.district + addComp.street + addComp.streetNumber
      emits('submit', {
        longitude: e.point.lng,
        latitude: e.point.lat,
        code: rs.content.address_detail.adcode,
        address: address.value
      })
    })
  })
}

onMounted(async () => {
  await initMap()
})
</script>

<template>
  <div>
    <div ref="wrapRef" class="h-120 w-285"></div>
    <div v-show="address">地址：{{ address }}</div>
  </div>
</template>

<style lang="" scoped></style>
