<template>
  <div class="w-full bg-[f7f7fd]">
    <div class="bg-gradient-to-r from-[#4148AD] to-[#6570DA]">
      <div class="max-w-[1440px] mx-auto py-24 px-20">
        <div class="flex flex-col justify-center items-center">
          <div class="text-lg text-[#AAAACB] font-semibold">Contact Us</div>
          <div
            class="text-[50px] text-[#FFF] leading-[60px] font-semibold mt-3 mb-6"
          >
            ติดต่อเรา
          </div>
          <div class="text-[22px] text-[#AAAACB] leading-[30px]">
            Come visit our friendly team at one of our offices.
          </div>
        </div>
      </div>
    </div>

    <div class="w-full bg-white">
      <div class="max-w-[1440px] mx-auto pt-14 px-20 pb-9">
        <div class="flex justify-between">
          <div>
            <div class="text-[42px] text-[#0e1f1d] leading-[58px] font-medium">
              Horo Academy
            </div>
            <div class="text-[22px] text-[#24285F] leading-[32px] mt-3 mb-8">
              454/1 (ชั้น 1) ซ. สุคนธสวัสดิ์ แขวงลาดพร้าว เขตลาดพร้าว กรุงเทพฯ
              10230
            </div>
          </div>
          <div class="flex gap-x-[73px]">
            <div class="flex flex-col gap-y-4">
              <template
                v-for="(contact, i) in socialContact"
                :key="`contact-${i}`"
              >
                <div
                  v-if="i < 3"
                  class="flex items-center gap-x-4"
                  @click="go(contact.link)"
                >
                  <div><img :src="contact.icon" class="max-w-6 max-h-6" /></div>
                  <div
                    class="text-xl leading-[32px] tracking-[0.04em] font-medium"
                  >
                    {{ contact.title }}
                  </div>
                </div>
              </template>
            </div>
            <div class="flex flex-col gap-y-4">
              <template
                v-for="(contact, i) in socialContact"
                :key="`contact-${i}`"
              >
                <div
                  v-if="i > 2"
                  class="flex items-center gap-x-4"
                  @click="go(contact.link)"
                >
                  <div><img :src="contact.icon" class="max-w-6 max-h-6" /></div>
                  <div
                    class="text-xl leading-[32px] tracking-[0.04em] font-medium"
                  >
                    {{ contact.title }}
                  </div>
                </div>
              </template>
            </div>
          </div>
        </div>
        <div
          class="w-fit mx-auto flex gap-x-[10px] items-center py-6 px-8 border border-[#5762C533] rounded-full mt-20"
        >
          <div><img src="/images/icons/map.png" class="w-6 h-6" /></div>
          <div class="text-[#5762C5] text-[22px]">ดูแผนที่และการเดินทาง</div>
        </div>
      </div>
    </div>

    <home-explore-session
      bg-color="bg-[#F7F7FD]"
      line-button
    ></home-explore-session>
  </div>
</template>

<script>
export default {
  data() {
    return {
      socialContact: [
        {
          icon: "/images/icons/call.png",
          title: "088-244-1915 (ผู้จัดการ)",
          link: "tel:0882441915",
        },
        {
          icon: "/images/icons/mail.png",
          title: "aj.kricha@gmail.com",
          link: "mailto:aj.kricha@gmail.com",
        },
        {
          icon: "/images/icons/facebook.png",
          title: "zernhoroacademy",
          link: "https://www.facebook.com/zernhoroacademy",
        },
        {
          icon: "/images/icons/line.png",
          title: "@aj_zern",
          link: "https://liff.line.me/1645278921-kWRPP32q/?accountId=aj_zern",
        },
        {
          icon: "/images/icons/youtube.png",
          title: "อจ เซิน ซินแสที่ปรึกษาธุรกิจ",
          link: "https://youtube.com/@aj_zern",
        },
        {
          icon: "/images/icons/tiktok.png",
          title: "@horoacademy",
          link: "https://www.tiktok.com/@horoacademy?_t=8bfrFDmItCj&_r=1",
        },
      ],
    };
  },
  methods: {
    go(url) {
      window.open(url);
    },
  },
};
</script>
