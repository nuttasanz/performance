<script setup>
defineProps({
  buttonColor: {
    type: String,
    default: "bg-[#FFF]",
  },
  text: {
    type: String,
    default: null,
  },
  iconType: {
    type: String,
    default: null,
  },
  iconName: {
    type: String,
    default: null,
  },
  textColor: {
    type: String,
    default: "text-white",
  },
  iconImage: {
    type: String,
    default: null,
  },
  disabled: Boolean,
});
</script>

<template>
  <button
    class="w-full flex justify-center items-center gap-x-2 rounded-full"
    :class="!disabled ? 'bg-[#A2A2A8]' : buttonColor"
    type="submit"
    :disabled="!disabled"
  >
    <div v-if="iconName" class="w-4 h-4 flex items-center">
      <font-awesome-icon :icon="[iconType, iconName]" />
      <img />
    </div>
    <div>{{ text }}</div>
  </button>
</template>
