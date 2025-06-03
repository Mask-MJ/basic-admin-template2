<script setup lang="ts">
import { getAllFactoryList } from '@/api/project/factory'

const mapRef = ref<any>(null)
const wrapRef = ref<HTMLDivElement | null>(null)
let BMapGL: any = (window as any).BMapGL || null
// let Cluster: any = (window as any).Cluster || null
const { load } = useScriptTag(
  'https://api.map.baidu.com/getscript?type=webgl&v=1.0&ak=Z6eRnlM84tMu0CLxuTMXhG0HUb0vr29B&services=&t=20250603122259',
  async () => {
    BMapGL = (window as any).BMapGL
  },
  { manual: true }
)
const { load: loadPlugin } = useScriptTag(
  'https://unpkg.com/@bmapgl-plugin/cluster@0.0.9/index.js',
  async () => {
    // Cluster = (window as any).Cluster
  },
  { manual: true }
)

const getAddress = (item: any) => {
  const { province, city, county, address } = item
  if (province === city) {
    return province + county + address
  } else {
    return province + city + county + address
  }
}

async function initMap() {
  const wrapEl = unref(wrapRef)
  if (!wrapEl) return
  if (!BMapGL) {
    await load()
    await loadPlugin()
  }
  const factoryList = await getAllFactoryList()
  mapRef.value = new BMapGL.Map(wrapEl)
  const point = new BMapGL.Point(116.404, 39.915)
  mapRef.value.centerAndZoom(point, 15)
  mapRef.value.enableScrollWheelZoom(true)
  // let cluster = new Cluster.View(mapRef.value)

  // let points = Cluster.pointTransformer(factoryList, function (data: FactoryInfo) {
  //   return {
  //     label: new BMapGL.Label(
  //       `名称: ${data.name}</br>
  //       所属区域: ${getAddress(data)}</br>
  //       所属行业: ${data.industry}</br>
  //       阀门数量: ${data._count?.valve}</br>`,
  //       {
  //         offset: new BMapGL.Size(20, -10)
  //       }
  //     ),
  //     point: [data.longitude, data.latitude],
  //     properties: {
  //       name: data.name,
  //       address: data.address,
  //       province: data.province,
  //       city: data.city,
  //       area: data.county
  //     }
  //   }
  // })
  // cluster.setData(points)
  factoryList.forEach((item: any) => {
    if (!item.longitude || !item.latitude) return
    const factoryPoint = new BMapGL.Point(item.longitude, item.latitude)
    const marker = new BMapGL.Marker(factoryPoint)
    marker.setLabel(
      new BMapGL.Label(
        `名称: ${item.name}</br>
        所属区域: ${getAddress(item)}</br>
        所属行业: ${item.industry}</br>
        阀门数量: ${item._count?.valve}</br>`,
        {
          offset: new BMapGL.Size(20, -10)
        }
      )
    )
    mapRef.value.addOverlay(marker)
  })
}

onMounted(async () => {
  await initMap()
})
</script>

<template>
  <div class="h-180 w-full" ref="wrapRef"></div>
</template>

<style scoped>
.chart,
.list {
  height: 300px;
}
.map {
  height: 500px;
}
</style>
