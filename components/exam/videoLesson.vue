<script setup>
defineProps({
  title: {
    type: String,
    default: "",
  },
  time: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <button
    class="text-left border border-[#EBEAE9] focus:bg-[#5762C5] focus:text-white"
  >
    <div
      class="flex justify-between items-center border-b border-b-[#EBEAE9] py-3 px-6"
    >
      <!-- eslint-disable vue/no-v-html -->
      <div class="flex flex-col">
        <div class="text-xl font-bold font-noto" v-html="title"></div>
        <div class="flex items-center gap-x-1 text-[#A2A2A8]">
          <div v-if="time">
            <font-awesome-icon :icon="['far', 'clock']" class="w-4 h-4" />
          </div>
          <div v-html="time"></div>
        </div>
      </div>
      <!--eslint-enable-->
      <!--            <div>-->
      <!--              <font-awesome-icon-->
      <!--                  :icon="['fas', 'check']"-->
      <!--                  style="color: #6CB88E"-->
      <!--                  class="w-7 h-7"-->
      <!--              />-->
      <!--            </div>-->
      <!--      <div>-->
      <!--        <font-awesome-icon-->
      <!--          :icon="['fas', 'circle-play']"-->
      <!--          style="color: #ffffff"-->
      <!--          class="w-10 h-10"-->
      <!--        />-->
      <!--      </div>-->
    </div>
  </button>
</template>

<script>
export default {
  data() {
    return {
      testClick: false,
    };
  },
  methods: {},
};
</script>
