<template>
  <div></div>
  <div v-if="title" class="flex items-center gap-x-8 mb-10">
    <div
      class="text-[42px] leading-[52px] font-medium"
      :class="popularCourseColor ? 'text-white' : 'text-[#0E1F1D]'"
    >
      {{ title }}
    </div>
    <div
      class="flex flex-grow border h-0"
      :class="
        popularCourseColor ? 'border-[#A0A9F6]/[0.4]' : 'border-[#5762C5]/[0.4]'
      "
    ></div>
  </div>
  <swiper
    :modules="modules"
    :slides-per-view="4"
    :slides-per-group="4"
    :space-between="20"
    :loop="true"
    @mouseover="showArrow"
    @mouseleave="hideArrow"
  >
    <template v-for="(card, i) in courseCard" :key="i">
      <swiper-slide class="max-w-[305px]">
        <div class="flex flex-col mb-12">
          <div><img :src="card.image" /></div>
          <div
            class="w-fit py-[6px] px-3 rounded-full text-[14px] text-white leading-[12px] mt-4"
            :class="
              card.tag === 'หนังสือเสียง' ? 'bg-[#979789]' : 'bg-[#6F93DD]'
            "
          >
            {{ card.tag }}
          </div>
          <div
            class="min-h-[84px] mt-1 mb-3 text-[22px] leading-[28px] font-medium"
            :class="popularCourseColor ? 'text-white' : 'text-[#24285F]'"
          >
            {{ card.title }}
          </div>
          <div class="flex justify-between">
            <div
              class="flex items-center"
              :class="popularCourseColor ? 'text-[#7C89FF]' : 'text-[#A2A2A8]'"
            >
              <div class="w-6 h-6 flex items-center justify-center">
                <font-awesome-icon :icon="['fal', 'clock']" />
              </div>
              <div class="text-[22px] leading-[28px] ml-[14.5px]">
                {{ card.time }}
              </div>
            </div>
            <div
              class="text-[22px] leading-[28px] font-bold"
              :class="popularCourseColor ? 'text-white' : 'text-[#5762C5]'"
            >
              {{ card.cost }}
            </div>
          </div>
        </div>
      </swiper-slide>
    </template>
    <utils-button-swiper-controls v-if="arrows"></utils-button-swiper-controls>
  </swiper>
</template>

<script>
// import Swiper core and required modules
import { Navigation, Pagination } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    title: {
      type: String,
      default: null,
    },
    courseCard: {
      type: Array,
      default: () => [],
    },
    popularCourseColor: Boolean,
  },
  setup() {
    return {
      modules: [Navigation, Pagination],
    };
  },
  data() {
    return {
      arrows: false,
    };
  },
  methods: {
    showArrow() {
      this.arrows = true;
    },
    hideArrow() {
      this.arrows = false;
    },
  },
};
</script>
