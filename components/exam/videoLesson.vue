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
});
</script>

<template>
  <button
    class="w-full border border-[#EBEAE9]"
    :class="status ? 'bg-[#D9FFEA]' : focus ? 'bg-[#5762C5] text-white' : ''"
    @focusin="onFocus"
    @focusout="outFocus"
  >
    <div class="border-b border-b-[#EBEAE9] py-3 px-6">
      <!-- eslint-disable vue/no-v-html -->
      <div class="flex justify-between items-center">
        <div class="flex flex-col">
          <div
            class="text-xl text-left font-bold font-noto"
            :class="status ? 'text-[#24285F]' : ''"
            v-html="title"
          ></div>
          <div
            class="flex items-center gap-x-1"
            :class="
              status
                ? 'text-[#A2A2A8]'
                : focus
                ? 'text-[#D8D8D8]'
                : 'text-[#A2A2A8]'
            "
          >
            <div v-if="time" class="flex items-center justify-center">
              <font-awesome-icon :icon="['fas', 'clock']" class="w-4 h-4" />
            </div>
            <div v-html="time"></div>
          </div>
        </div>

        <div v-if="status">
          <font-awesome-icon
            :icon="['fas', 'check']"
            style="color: #6cb88e"
            class="w-7 h-7"
          />
        </div>
        <div v-else :class="focus ? 'block' : 'hidden'">
          <font-awesome-icon
            :icon="['fas', 'circle-play']"
            style="color: #fff"
            size="2xl"
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
  </button>
</template>

<script>
export default {
  data() {
    return {
      focus: false,
    };
  },
  methods: {
    onFocus() {
      this.focus = true;
    },
    outFocus() {
      this.focus = false;
    },
  },
};
</script>