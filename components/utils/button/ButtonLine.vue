<template>
  <button
    class="flex justify-center items-center gap-x-2 rounded-full text-white"
    :style="{ backgroundColor: buttonColor }"
    @click="go"
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
  methods: {
    go() {
      window.open("https://line.me/ti/p/jvja95Z-fD");
    },
  },
};
</script>
