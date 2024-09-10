<script setup lang="ts">
import moment from 'moment'
import { useAsteroidStore } from '@/stores/asteroid'
import Date from '../components/DateComp.vue'
import { watch, computed } from 'vue'
import BarChart from '@/components/BarChart.vue'
import LoaderComp from '@/components/LoaderComp.vue'
// import

const currentDate = moment()
const formattedDate = currentDate.format('YYYY/MM/DD')
const asteroidStore = useAsteroidStore()

const isButtonActive = computed(() => {
  if (asteroidStore.startDate.length && asteroidStore.endDate.length) {
    return true
  }
  return false
})

watch(
  () => asteroidStore.dateRange,
  () => {
    if (asteroidStore.dateRange == null) {
      asteroidStore.reset()
    }
    if (asteroidStore.dateRange) {
      asteroidStore.startDate = moment(asteroidStore.dateRange[0]).format('YYYY-MM-DD')
      asteroidStore.endDate = moment(asteroidStore.dateRange[1]).format('YYYY-MM-DD')
    }
  }
)
</script>

<template>
  <LoaderComp v-if="asteroidStore.isLoading"></LoaderComp>
  <div class="navbar bg-neutral text-neutral-content mb-3">
    <button class="btn btn-ghost text-xl">Near Earth Objects</button>
  </div>

  <div class="flex flex-col justify-center">
    <div class="w-[100%] flex justify-center text-slate-200 text-[30px] my-1">
      Please select the date range
    </div>
    <div class="flex justify-center items-center my-4">
      <Date
        v-model="asteroidStore.dateRange"
        format="dd/MM/yyyy"
        placeholder="Select Date Range"
        :enable-time="false"
        :max-date="formattedDate"
        min-date=""
      ></Date>

      <div class="px-2">
        <button
          :disabled="!isButtonActive"
          class="bg-yellow-400 p-1 text-slate-600 font-semibold disabled:bg-yellow-300 disabled:text-gray-500 disabled:cursor-not-allowed"
          @click="asteroidStore.getAsteroidFeed()"
        >
          Submit
        </button>
      </div>
    </div>

    <div v-if="asteroidStore.dates.length" class="p-3 flex gap-2 justify-evenly items-center">
      <div
        class="p-4 border border-slate-600 rounded-lg shadow-md bg-[#161618] flex flex-col gap-3 text-slate-200"
      >
        <div class="bg-slate-800 p-2">
          <span class="font-bold text-[14px] flex items-center"
            >Fastest Asteroid <img class="w-[30px] ml-1" src="../assets/png/fastest.png" />
          </span>

          <div class="flex flex-col">
            <span> Asteroid Id : {{ asteroidStore.fastestAsteroidId }} </span>
            <span>
              Speed - {{ asteroidStore.highestSpeed }}
              <span class="text-green-400"> km/h</span></span
            >
          </div>
        </div>
        <div class="bg-slate-800 p-2">
          <span class="font-bold text-[14px] flex items-center"
            >Closest Asteroid <img class="w-[25px] ml-1" src="../assets/png/nearest.png"
          /></span>

          <div class="flex flex-col">
            <span> Asteroid Id : {{ asteroidStore.closestAsteroidId }} </span>
            <span>
              Speed - {{ asteroidStore.shortestDistance }}
              <span class="text-green-400"> km(s)</span>
            </span>
          </div>
        </div>
        <div class="bg-slate-800 p-2">
          <span class="font-bold text-[14px] flex items-center"
            >Average Size of asteroid <img class="w-[20px] ml-1" src="../assets/png/size.png"
          /></span>

          <div class="flex flex-col">
            <span>
              Size - {{ asteroidStore.averageSize }}
              <span class="text-green-400"> km(s)</span></span
            >
          </div>
        </div>
      </div>
      <div class="p-4 border border-slate-600 rounded-lg shadow-md bg-[#161618]">
        <BarChart
          :dates="asteroidStore.dates"
          :count="asteroidStore.numberOfAsteroidsInEachKeys"
        ></BarChart>
      </div>
    </div>
  </div>
</template>
