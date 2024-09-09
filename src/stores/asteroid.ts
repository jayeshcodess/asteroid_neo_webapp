import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import {getNeoFeed} from '../composables/feed'

export const useAsteroidStore = defineStore('asteroid', () => {
  const startDate = ref('');
  const endDate = ref('');
  const dateRange = ref('');

 const feeds = ref()

  const getAsteroidFeed = async () => {
   
    const res = await getNeoFeed(startDate.value, endDate.value);
    console.log(res);
    feeds.value = res;
  }

  return { startDate, endDate, dateRange, getAsteroidFeed }
})
