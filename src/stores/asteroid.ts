import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Feeds } from '@/types/feeds.types'
import { getNeoFeed } from '@/composables/feed'

export const useAsteroidStore = defineStore('asteroid', () => {
  const isLoading = ref(false)
  const startDate = ref('')
  const endDate = ref('')
  const dateRange = ref('')

  const errorMessage = ref('')

  const fastestAsteroidId = ref('')
  const highestSpeed = ref(0)

  const shortestDistance = ref(Infinity)
  const closestAsteroidId = ref('')

  const totalDiameter = ref(0)
  const asteroidCount = ref(0)

  const averageSize = ref(0)
  const feeds = ref<Feeds | null>(null)

  const dates = ref<string[]>([])
  const numberOfAsteroidsInEachKeys = ref<number[]>([])
  const numberOfAsteroids = ref<{ date: string; count: number }[]>([])
  const getAsteroidFeed = async () => {
    // setting loader to true
    isLoading.value = true
    
    const data = await getNeoFeed(startDate.value, endDate.value)
    
    if (data?.response?.data?.code) {
      const error = data.response.data
      errorMessage.value = error.error_message

      isLoading.value = false
      return
    }
    feeds.value = data as Feeds
    const near_earth_objects = feeds.value.near_earth_objects

    for (const [key, objects] of Object.entries(near_earth_objects)) {
      numberOfAsteroids.value.push({ date: key, count: objects.length })
      objects.forEach((obj) => {
        obj.close_approach_data.forEach((data) => {
          //for highest spped of asteroid
          const speed = parseFloat(data.relative_velocity.kilometers_per_hour)
          if (speed > highestSpeed.value) {
            highestSpeed.value = speed
            fastestAsteroidId.value = obj.id
          }

          //for closest distance spped of asteroid
          const distance = parseFloat(data.miss_distance.kilometers)
          if (distance < shortestDistance.value) {
            shortestDistance.value = distance
            closestAsteroidId.value = obj.id
          }
        })

        const minDiameter = obj.estimated_diameter.kilometers.estimated_diameter_min
        const maxDiameter = obj.estimated_diameter.kilometers.estimated_diameter_max
        const averageDiameter = (minDiameter + maxDiameter) / 2
        totalDiameter.value = 0
        totalDiameter.value += averageDiameter

        asteroidCount.value++
      })
    }

    //sorting by dates
    numberOfAsteroids.value.sort((a, b) => {
      const dateA = new Date(a.date)
      const dateB = new Date(b.date)
      return dateA.getTime() - dateB.getTime()
    })

    dates.value = []
    numberOfAsteroidsInEachKeys.value = []
    for (const ast in numberOfAsteroids.value) {
      dates.value.push(numberOfAsteroids.value[ast].date)
      numberOfAsteroidsInEachKeys.value.push(numberOfAsteroids.value[ast].count)
    }

    averageSize.value = totalDiameter.value / asteroidCount.value
    isLoading.value = false
  }

  const reset = () => {
    feeds.value = null
    dates.value = []
    startDate.value = ""
    endDate.value = ""
    numberOfAsteroids.value = []
    totalDiameter.value = 0
    averageSize.value = 0;
  }

  return {
    startDate,
    endDate,
    getAsteroidFeed,
    dateRange,
    feeds,
    fastestAsteroidId,
    highestSpeed,
    shortestDistance,
    closestAsteroidId,
    averageSize,
    isLoading,
    dates,
    numberOfAsteroidsInEachKeys,
    reset,
    errorMessage
  }
})
