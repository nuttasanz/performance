<template>
  <div class="w-full bg-[f7f7fd]">
    <div class="bg-gradient-to-r from-[#4148AD] to-[#6570DA]">
      <div class="max-w-[1440px] mx-auto py-24 px-20">
        <div class="flex flex-col justify-center items-center">
          <div class="text-base text-[#AAAACB] font-semibold">Contact Us</div>
          <div
            class="text-[48px] text-[#FFF] leading-[60px] font-semibold mt-3 mb-6"
          >
            ติดต่อเรา
          </div>
          <div class="text-[20px] text-[#AAAACB] leading-[30px]">
            Come visit our friendly team at one of our offices.
          </div>
        </div>
      </div>
    </div>

    <div class="w-full bg-white">
      <div class="max-w-[1440px] mx-auto py-14 px-20">
        <div class="flex justify-between">
          <div>
            <div class="text-[40px] text-[#0e1f1d] leading-[58px] font-medium">
              Horo Academy
            </div>
            <div class="text-[20px] text-[#24285F] leading-[32px] mt-3 mb-8">
              454/1 (ชั้น 1) ซ. สุคนธสวัสดิ์ แขวงลาดพร้าว เขตลาดพร้าว
              <br />กรุงเทพฯ 10230
            </div>
          </div>
          <!--          <div class="w-full max-w-[632px]">-->
          <!--            <iframe-->
          <!--              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.201712420316!2d100.62102411506041!3d13.82692299029889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d637d5bb11961%3A0xcb3de4a880a3ae0c!2zSG9ybyBBY2FkZW15IOC5guC4lOC4oiDguK3guLLguIjguLLguKPguKLguYzguYDguIvguLTguJk!5e0!3m2!1sth!2sth!4v1680851542177!5m2!1sth!2sth"-->
          <!--              width="100%"-->
          <!--              height="100%"-->
          <!--              style="border: 0"-->
          <!--              allowfullscreen=""-->
          <!--              loading="lazy"-->
          <!--              referrerpolicy="no-referrer-when-downgrade"-->
          <!--            ></iframe>-->
          <!--          </div>-->
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
                    class="text-[18px] leading-[32px] tracking-[0.04em] font-medium"
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
                    class="text-[18px] leading-[32px] tracking-[0.04em] font-medium"
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
          <div class="text-[#5762C5] text-xl">ดูแผนที่และการเดินทาง</div>
        </div>
      </div>
    </div>

    <explore-session line-button></explore-session>
  </div>
</template>

<script>
import ExploreSession from "~/components/home/exploreSession.vue";

export default {
  components: { ExploreSession },
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
