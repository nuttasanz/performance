<template>
  <div class="w-full" :class="bgColor ? 'bg-[#F7F7FD]' : ''">
    <div class="max-w-[1440px] mx-auto pt-[114px] px-20 pb-20">
      <div class="relative bg-[#24285F] rounded-[32px]">
        <img
          src="/images/recommendCourse/gettoknowBanner.png"
          class="relative w-full mix-blend-overlay rounded-[32px]"
        />
        <div class="absolute top-0 w-full h-full flex items-center">
          <div class="relative w-full max-w-[424px]">
            <div class="relative bottom-[32px]">
              <img
                src="/images/recommendCourse/master-zern2.png"
                class="w-full"
              />
            </div>
          </div>
          <div class="flex flex-col px-[42px]">
            <div
              class="text-left text-[24px] text-white leading-[45px] tracking-[0.01em] font-medium"
            >
              หากคุณกำลังมองหาอาจารย์
              <span class="font-bold"
                >ที่สอนเข้าใจง่ายที่สุด สอนที่แก่นแท้</span
              >
              มีวิธีช่วยให้คุณจำได้ง่ายที่สุด
              ช่วยให้คุณทายได้เป็นเร็วและที่ถูกต้องที่สุด อธิบายด้วยหลักเหตุผล
              <span class="font-bold">ไม่เน้นงมงาย</span> อาจารย์ เซิน
              คือคนที่ท่านมองหาอยู่
            </div>
            <div class="flex h-[54px] gap-x-8 mt-8">
              <utils-button-style
                class="w-full max-w-[320px] font-bold text-[#5762C5] text-[18px] tracking-[0.04em]"
                text="ทำความรู้จัก อาจารย์เซิน มากขึ้น"
                button-color="#FFFFFF"
              ></utils-button-style>
              <utils-button-line
                v-if="lineButton"
                class="w-full max-w-[320px] font-bold text-white text-[16px] leading-[18px]"
                text="LINE: @aj_zern"
                icon
              ></utils-button-line>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  lineButton: Boolean,
  bgColor: {
    type: String,
    default: "bg-white",
  },
});
</script>
