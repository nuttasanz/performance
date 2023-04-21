<template>
  <div class="bg-white rounded-[16px] py-10 px-8">
    <div class="text-[20px] text-[#0E1F1D] leading-[26px] font-bold mb-6">
      {{ title }}
    </div>
    <div v-if="url" class="flex flex-col items-center gap-y-6">
      <img :src="url" class="w-[251px] h-[212px]" />
      <textarea
        class="h-11 py-[10px] px-[14px] overflow-hidden"
        placeholder="ใส่คำตอบของคุณ"
      ></textarea>
    </div>
    <div v-else>
      <textarea placeholder="ใส่คำตอบของคุณ" maxlength="300"></textarea>
      <div class="text-sm text-[#979789]">จำกัด 300 ตัวอักษร</div>
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
    url: {
      type: String,
      default: null,
    },
  },
  data() {
    return {};
  },
};
</script>
