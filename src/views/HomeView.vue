<script setup lang="ts">

import moment from 'moment';
import { useAsteroidStore } from '@/stores/asteroid'
import Date from '../components/DateComp.vue'
import { watch } from 'vue';
// import


const currentDate = moment();
const formattedDate = currentDate.format('YYYY/MM/DD');
const asteroidStore = useAsteroidStore()

watch(()=>asteroidStore.dateRange,()=>{

  if(asteroidStore.dateRange.length == 0){
    asteroidStore.startDate = ""
    asteroidStore.endDate = ""
  }
  else{
    asteroidStore.startDate = moment(asteroidStore.dateRange[0]).format('YYYY-MM-DD');;
    asteroidStore.endDate = moment(asteroidStore.dateRange[1]).format('YYYY-MM-DD');
  }
})


</script>

<template>
  <div class="flex flex-col justify-center">
    <h1>Get Asteroid Details</h1>

    <Date
      v-model="asteroidStore.dateRange"
      format="dd/MM/yyyy"
      placeholder="Select Date Range"
      :enable-time="false"
      :max-date="formattedDate"
      min-date=""
    ></Date>

    <div class="p-2">

      <button class="rounded-md bg-green-400 p-2" @click="asteroidStore.getAsteroidFeed()">Submit</button>
    </div>
  </div>
</template>
