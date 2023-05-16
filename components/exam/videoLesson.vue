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
  status: Boolean,
  active: Boolean,
});
</script>

<template>
  <div class="w-full border border-[#EBEAE9]" :class="status?'bg-[#D9FFEA]':''">
    <div class="border-b border-b-[#EBEAE9] py-3 px-6">
      <!-- eslint-disable vue/no-v-html -->
      <div class="flex justify-between items-center">
        <div class="flex flex-col">
          <div
            class="text-xl text-left font-bold font-noto"
            v-html="title"
          ></div>
          <div class="flex items-center gap-x-1 text-[#A2A2A8]">
            <div v-if="time">
              <font-awesome-icon :icon="['far', 'clock']" class="w-4 h-4" />
            </div>
            <div v-html="time"></div>
          </div>
        </div>

        <div :class="status?'block':'hidden'">
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

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>
