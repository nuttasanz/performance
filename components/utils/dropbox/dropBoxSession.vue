<template>
  <div
    class="border border-[#5762C5]/[0.2] rounded-[16px] py-8 px-[32px]"
    :class="dropBox ? 'bg-[#24285F] text-white' : 'bg-white text-[#101828]'"
    @click="showDropBox"
  >
    <div class="flex gap-x-[26px]">
      <div v-if="dropBox" class="flex items-start">
        <font-awesome-icon
          :icon="['far', 'circle-minus']"
          class="w-5 h-5 mt-1"
        />
      </div>
      <div v-else class="flex items-start">
        <font-awesome-icon
          :icon="['far', 'circle-plus']"
          class="w-5 h-5 mt-1 text-[#5762C5]"
        />
      </div>
      <!-- eslint-disable vue/no-v-html -->
      <div class="flex flex-col">
        <div class="text-xl leading-[28px] font-medium" v-html="title"></div>
        <div
          class="flex-col text-lg leading-[28px] text-[#AAAACB]"
          :class="dropBox ? 'flex' : 'hidden'"
          v-html="desc"
        ></div>
      </div>
      <!--eslint-enable-->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null,
    },
    desc: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      dropBox: false,
    };
  },
  methods: {
    showDropBox() {
      this.dropBox = !this.dropBox;
    },
  },
};
</script>
