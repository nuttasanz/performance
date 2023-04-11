<template>
  <div class="w-full">
    <div class="max-w-[1440px] mx-auto p-20">
      <div class="relative bg-[#24285F] rounded-[32px]">
        <img src="@/static/images/recommendCourse/gettoknowBanner.png"
             class="relative w-full mix-blend-overlay rounded-[32px]">
        <div class="absolute top-0 w-full h-full flex items-center">
          <div class="w-full relative bottom-[47px]"><img src="@/static/images/recommendCourse/master-zern2.png"></div>
          <div class="flex flex-col px-[42px]">
            <div class="text-[24px] text-white leading-[45px] tracking-[0.01em] font-medium ">
              หากคุณกำลังมองหาอาจารย์ <strong>ที่สอนเข้าใจง่ายที่สุด สอนที่แก่นแท้</strong>
              มีวิธีช่วยให้คุณจำได้ง่ายที่สุด
              ช่วยให้คุณทายได้เป็นเร็วและที่ถูกต้องที่สุด อธิบายด้วยหลักเหตุผล <strong>ไม่เน้นงมงาย</strong> อาจารย์
              เซิน
              คือคนที่ท่านมองหาอยู่
            </div>
            <button-style
                class="font-bold mt-8 px-8 py-[18px]"
                text-color="#5762C5"
                text="ทำความรู้จัก อาจารย์เซิน มากขึ้น"
                button-color="#FFFFFF"
            >
            </button-style>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>


<!--<div class="w-full flex justify-between items-center absolute top-[-80px]">-->
<!--<div class="max-w-[424px]">-->
<!--  <img src="@/static/images/recommendCourse/master-zern2.png">-->
<!--</div>-->
<!--<div class="flex flex-col px-[42px] mt-10">-->
<!--  <div class="text-[24px] text-white leading-[45px] tracking-[0.01em] font-medium ">หากคุณกำลังมองหาอาจารย์ <strong>ที่สอนเข้าใจง่ายที่สุด สอนที่แก่นแท้</strong> มีวิธีช่วยให้คุณจำได้ง่ายที่สุด-->
<!--    ช่วยให้คุณทายได้เป็นเร็วและที่ถูกต้องที่สุด อธิบายด้วยหลักเหตุผล <strong>ไม่เน้นงมงาย</strong> อาจารย์ เซิน-->
<!--    คือคนที่ท่านมองหาอยู่-->
<!--  </div>-->
<!--  <elements-button-->
<!--      class="font-bold mt-8 px-8 py-[18px]"-->
<!--      text-color="#5762C5"-->
<!--      text="ทำความรู้จัก อาจารย์เซิน มากขึ้น"-->
<!--      button-color="#FFFFFF"-->
<!--  ></elements-button>-->
<!--</div>-->
<!--</div>-->
<script setup lang="ts">
import ButtonStyle from "~/components/utils/button/ButtonStyle.vue";
</script>