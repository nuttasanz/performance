<script setup lang="ts">
import { useSwiper } from "swiper/vue";

const swiper = useSwiper();
</script>

<template>
  <button
    class="h-full flex items-center absolute top-0 right-0 z-50"
    @click="swiper.slideNext()"
  >
    <div class="max-w-[60px] max-h-[60px]">
      <img src="/images/icons/arrow-right.png" class="w-full h-full" />
    </div>
  </button>
  <button
    class="h-full flex items-center absolute top-0 left-0 z-50"
    @click="swiper.slidePrev()"
  >
    <div class="max-w-[60px] max-h-[60px]">
      <img src="/images/icons/arrow-left.png" class="w-full h-full" />
    </div>
  </button>
</template>
