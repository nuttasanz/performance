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
  <div
    class="w-full border border-[#EBEAE9]"
    :class="x ? 'bg-[#5762C5] text-white' : ''"
    @click="active"
  >
    <div class="border-b border-b-[#EBEAE9] py-3 px-6">
      <!-- eslint-disable vue/no-v-html -->
      <div class="flex justify-between items-center">
        <div class="flex flex-col">
          <div
            class="text-xl text-left font-bold font-noto"
            v-html="title"
          ></div>
          <div
            class="flex items-center gap-x-1"
            :class="x ? 'text-[#D8D8D8]' : 'text-[#A2A2A8]'"
          >
            <div v-if="time">
              <font-awesome-icon :icon="['far', 'clock']" class="w-4 h-4" />
            </div>
            <div v-html="time"></div>
          </div>
        </div>

        <div :class="x ? 'block' : 'hidden'">
          <font-awesome-icon
            :icon="['fas', 'check']"
            style="color: #6cb88e"
            class="w-7 h-7"
          />
        </div>
      </div>
      <!--eslint-enable-->

      <!--      <div>-->
      <!--        <font-awesome-icon-->
      <!--          :icon="['fas', 'circle-play']"-->
      <!--          style="color: #ffffff"-->
      <!--          class="w-10 h-10"-->
      <!--        />-->
      <!--      </div>-->
    </div>
  </div>
</template>
