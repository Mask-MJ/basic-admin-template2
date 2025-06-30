<script setup lang="ts">
import { getAllFactoryList, type FactoryInfo } from '@/api/project/factory'

const mapRef = ref<any>(null)
const wrapRef = ref<HTMLDivElement | null>(null)
let BMapGL: any = (window as any).BMapGL || null
let Cluster: any = (window as any).Cluster || null
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
    Cluster = (window as any).Cluster
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
  let cluster = new Cluster.View(mapRef.value)
  const indexs = ['province', 'city', 'area']
  function getHTMLDOM(context: any) {
    let index = context.belongKey ?? 'other' // 聚合的条件
    let text = context.belongValue
    let count = context.pointCount || 1 // 聚合中点的总数
    let i = indexs.indexOf(index)

    count === 1 && (i = 3)
    i < 0 && (i = 3)

    let div = document.createElement('div')
    div.className = 'cluster-marker'
    let content = ''
    if (context.isCluster && !text) {
      content += `<span class="cluster-marker-body-content">` + count + '</span>'
    }
    if (!context.isCluster) {
      content += '<span class="cluster-marker-title">' + context.name + '</span>'
    }

    div.innerHTML = content
    return div
  }
  // 添加聚合数据

  cluster = new Cluster.View(map, {
    clusterMinPoints: 2,
    clusterMaxZoom: 18,
    updateRealTime: true,
    fitViewOnClick: true,
    clusterType: [
      [3, 10, Cluster.ClusterType.GEO_FENCE, [11001, 11002]],
      [11, 11, Cluster.ClusterType.ATTR_REF, 'city'],
      [12, 12, Cluster.ClusterType.ATTR_REF, ['city', 'area']],
      [13, null, Cluster.ClusterType.DIS_PIXEL, 64]
    ],
    // clusterDictionary: (type, key) => {
    //   if (type === Cluster.ClusterType.GEO_FENCE) {
    //     var properties = REGION[key]
    //     if (properties && properties.center) {
    //       return {
    //         point: properties.center,
    //         region: properties.fence
    //       }
    //     }
    //   } else if (type === Cluster.ClusterType.ATTR_REF) {
    //     var properties = DISTRICT[key]
    //     if (properties && properties.center) {
    //       return {
    //         point: properties.center
    //       }
    //     }
    //   }
    //   return null
    // },
    renderClusterStyle: {
      type: Cluster.ClusterRender.DOM,
      style: { anchors: [0, 1], offsetX: -20, offsetY: -9.5 },
      inject: getHTMLDOM
    },
    renderSingleStyle: {
      type: Cluster.ClusterRender.DOM,
      style: { anchors: [0, 1], offsetX: -20, offsetY: -9.5 },
      inject: getHTMLDOM
    }
  })

  let points = Cluster.pointTransformer(factoryList, function (data: FactoryInfo) {
    return {
      point: [data.longitude, data.latitude],
      properties: {
        name: data.name,
        address: data.address,
        province: data.province,
        city: data.city,
        area: data.county
      }
    }
  })
  cluster.setData(points)
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
