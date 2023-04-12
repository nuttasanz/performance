<template>
  <div class="w-full">
    <div class="max-w-[1440px] mx-auto pt-6 px-20 pb-9">
      <div
        class="w-full relative mx-auto rounded-3xl"
        style="
          background: linear-gradient(83.05deg, #4148ad 39.52%, #6570da 98.57%);
        "
      >
        <!--   BG IMAGE   -->
        <div class="relative flex justify-between">
          <!--    BG IMAGE CONTENT    -->
          <div class="relative">
            <img src="@/public/images/HeroBanner/horo-tree.png" />
          </div>
          <div class="relative top-[0px]">
            <img src="@/public/images/HeroBanner/master-zern.png" />
          </div>
          <!--   END BG IMAGE CONTENT   -->
          <!--    CONTENT    -->
          <div
            class="absolute w-full h-full flex justify-between items-center pl-20 pr-[70px]"
          >
            <div class="flex flex-col justify-center">
              <div
                class="text-[84px] leading-[108.44px] tracking-[0.04em] font-fraunces font-bold text-white"
              >
                Horo Academy
              </div>
              <div
                class="text-[32px] leading-[44.8px] tracking-[0.02em] text-white"
              >
                สังคมพยากรณ์สมัยใหม่ ไม่งมงาย
              </div>
              <utils-button-style
                class="text-[#5762C5] font-bold text-[18px] tracking-[0.04em] py-[18px] px-9 mt-[54px]"
                button-color="#FFFFFF"
                text="ดูหลักสูตรทั้งหมด"
              ></utils-button-style>
            </div>
            <div
              class="text-[20px] text-white font-light leading-[28px] tracking-[0.02em] italic"
            >
              อาจารย์ เซิน
            </div>
          </div>
          <!--   END CONTENT   -->
        </div>
        <!--   END BG IMAGE   -->
      </div>
      <!--   SOCIAL CONTACT   -->
      <div class="flex justify-center gap-x-14 mt-8">
        <template v-for="(social, i) in socialContact" :key="i">
          <div class="flex items-center gap-x-4">
            <div class="w-6 h-6"><img :src="social.icon" /></div>
            <div
              class="text-[18px] leading-[32px] tracking-[0.04em] font-medium"
            >
              {{ social.title }}
            </div>
          </div>
        </template>
      </div>
      <!--   END SOCIAL CONTACT   -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      socialContact: [
        {
          icon: "/images/HeroBanner/facebook.png",
          title: "zernhoroacademy",
        },
        {
          icon: "/images/HeroBanner/line.png",
          title: "@aj_zern",
        },
        {
          icon: "/images/HeroBanner/youtube.png",
          title: "อจ เซิน ซินแสที่ปรึกษาธุรกิจ",
        },
        {
          icon: "/images/HeroBanner/tiktok.png",
          title: "@horoacademy",
        },
      ],
    };
  },
};
</script>
