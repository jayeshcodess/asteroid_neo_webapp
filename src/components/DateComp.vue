<script setup lang="ts">
import VueDatePicker from '@vuepic/vue-datepicker'
import { ref, watch } from 'vue'

const date = ref('')
const props = defineProps<{
  modelValue?: any
  format?: string
  placeholder: string
  enableTime: boolean
  minDate: string
  maxDate: string
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const handleDate = (modelData: string) => {
  date.value = modelData
  emits('update:modelValue', modelData)
}

watch(
  () => props.modelValue,
  () => {
    date.value = props.modelValue as string
  }
)
</script>

<template>
  <div>
    <VueDatePicker
      range
      @update:modelValue="handleDate"
      v-model="date"
      :placeholder="props.placeholder"
      :format="props.format"
      :enableTimePicker="props.enableTime"
      :minDate="props.minDate"
      :maxDate="props.maxDate"
    ></VueDatePicker>
  </div>
</template>

<style></style>
