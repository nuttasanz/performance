<script setup>
import { useIsFormDirty, useIsFormValid } from "vee-validate";

const isDisabled = computed(() => {
  return !useIsFormDirty().value || !useIsFormValid().value;
});

defineProps({
  text: {
    type: String,
    default: null,
  },
});
</script>

<template>
  <button
    class="w-full rounded-full text-white font-bold"
    type="submit"
    :class="isDisabled ? 'bg-[#A2A2A8]' : 'bg-[#5762C5]'"
    :disabled="isDisabled"
  >
    {{ text }}
  </button>
</template>
