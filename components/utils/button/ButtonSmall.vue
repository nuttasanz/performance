<template>
  <button
    class="flex items-center gap-x-2 rounded-full py-2 px-8"
    type="submit"
    :style="{ backgroundColor: buttonColor }"
  >
    <div v-if="iconName" class="w-4 h-4">
      <font-awesome-icon :icon="[iconType, iconName]" />
      <img />
    </div>
    <div>{{ text }}</div>
  </button>
</template>

<script>
export default {
  props: {
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
    buttonColor: {
      type: String,
      default: "#5862C5",
    },
    textColor: {
      type: String,
      default: "text-white",
    },
    iconImage: {
      type: String,
      default: null,
    },
  },
};
</script>
