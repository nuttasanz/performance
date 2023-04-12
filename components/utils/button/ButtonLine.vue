<template>
  <button
    class="w-fit flex justify-center items-center gap-x-2 text-white leading-[18px] rounded-full py-3 px-6"
    :style="{ backgroundColor: buttonColor }"
  >
    <div v-if="icon" class="w-6 h-6 flex items-center">
      <img src="/images/brandLogo/lineIcon.png" />
    </div>
    <div>{{ text }}</div>
  </button>
</template>

<script>
export default {
  props: {
    icon: Boolean,
    text: {
      type: String,
      default: null,
    },
    buttonColor: {
      type: String,
      default: "#06C755",
    },
  },
};
</script>
