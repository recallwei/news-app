<script setup lang="ts">
import type { BarChartProps, ECharts, ECOption } from '..'
import { echarts } from '..'

const props = withDefaults(defineProps<BarChartProps>(), {
  id: '',
  title: '',
  data: () => [],
  color: '#0078D7'
})

const chart = ref<ECharts | null>(null)

/**
 * 监听窗口大小变化
 */
const handleResize = () => chart.value!.resize()

// 监听窗口大小变化，重新计算图表的大小
useEventListener(window, 'resize', handleResize)

const getChartData = () => {
  const option: ECOption = {
    title: {
      text: props.title,
      top: 0,
      left: 'center'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: props.data.map((item) => item.label),
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis: [{ type: 'value' }],
    series: [
      {
        type: 'bar',
        name: props.title,
        color: props.color,
        barWidth: '60%',
        data: props.data.map((item) => item.value)
      }
    ]
  }
  chart.value!.setOption(option)
}

// 初始化图表
const initChart = () => {
  chart.value = echarts.init(document.getElementById(props.id)!)
  getChartData()
}

// 在组件挂载的时候初始化图表
onMounted(() => initChart())

// 在组件卸载的时候销毁图表
onUnmounted(() => chart.value!.dispose())

watch(
  () => props.data,
  () => getChartData(),
  { deep: true }
)
</script>

<template>
  <div :id="props.id" />
</template>