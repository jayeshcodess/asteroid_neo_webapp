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
  <div class="text-black">
    <VueDatePicker
      :dark="true"
      :range="{ minRange: 1, maxRange: 7 }"
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

<style scoped>
.dp__theme_dark {
  --dp-background-color: #212121;
  --dp-text-color: #fff;
  --dp-hover-color: #484848;
  --dp-hover-text-color: #fff;
  --dp-hover-icon-color: #959595;
  --dp-primary-color: #005cb2;
  --dp-primary-disabled-color: #61a8ea;
  --dp-primary-text-color: #fff;
  --dp-secondary-color: #a9a9a9;
  --dp-border-color: #2d2d2d;
  --dp-menu-border-color: #2d2d2d;
  --dp-border-color-hover: #aaaeb7;
  --dp-border-color-focus: #aaaeb7;
  --dp-disabled-color: #737373;
  --dp-disabled-color-text: #d0d0d0;
  --dp-scroll-bar-background: #212121;
  --dp-scroll-bar-color: #484848;
  --dp-success-color: #00701a;
  --dp-success-color-disabled: #428f59;
  --dp-icon-color: #959595;
  --dp-danger-color: #e53935;
  --dp-marker-color: #e53935;
  --dp-tooltip-color: #3e3e3e;
  --dp-highlight-color: rgb(0 92 178 / 20%);
  --dp-range-between-dates-background-color: var(--dp-hover-color, #484848);
  --dp-range-between-dates-text-color: var(--dp-hover-text-color, #fff);
  --dp-range-between-border-color: var(--dp-hover-color, #fff);
}
</style>
