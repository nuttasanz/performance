<template>
  <button
    class="w-fit flex items-center gap-x-2 text-white leading-[18px] rounded-full py-3 px-6"
    :style="{ backgroundColor: buttonColor }"
  >
    <div v-if="iconName" class="w-4 h-4 flex items-center">
      <font-awesome-icon :icon="[iconType, iconName]" />
    </div>
    <div :style="{ color: textColor }">{{ text }}</div>
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
  },
};
</script>
