<script setup lang="ts">
import { Bar } from 'vue-chartjs'

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

import { ref } from 'vue'

const props = defineProps<{
  dates: string[],
  count: number[]
}>()

const chartData = ref({
  labels: props.dates,
  datasets: [
    {
      label: 'Number of Asteroids',
      backgroundColor: 'rgb(83, 151, 214)',
      borderColor: 'rgb(0,0,0)',
      data: props.count
    }
  ]
})

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false
})
</script>

<template>
  <div class="h-[300px] w-[600px] text-white">
    <Bar :data="chartData" :options="chartOptions" />
  </div>
</template>

<style></style>
