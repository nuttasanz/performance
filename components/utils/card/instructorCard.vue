<template>
  <div
    class="bg-white rounded-[24px]"
    style="box-shadow: 0px 0.742667px 22.28px rgba(0, 0, 0, 0.06)"
  >
    <div class="border-b-[0.74px] border-[#D5D5DC] py-4 px-[30px]">
      <div class="text-[24px] text-[#26242E] leading-[33.6px]">ผู้สอน</div>
    </div>
    <div class="flex items-center gap-x-6 pt-6 px-[30px] pb-8">
      <div class="w-[60px] h-[60px]">
        <img :src="profileImg" />
      </div>
      <div>
        <div class="text-[24px] text-[#24285F] leading-[33.6px] font-bold">
          {{ title }}
        </div>
        <div class="text-[#A2A2A8] leading-[17.82px]">
          {{ desc }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: "",
  },
  desc: {
    type: String,
    default: "",
  },
  profileImg: {
    type: String,
    default: "",
  },
});
</script>
