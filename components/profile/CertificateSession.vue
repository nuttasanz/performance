<template>
  <div class="bg-white w-full h-full min-h-[720px] rounded-[24px] p-5">
    <!-- HEADER TITLE -->
    <div class="border-b border-[#AEAFC5]">
      <div class="text-[32px] font-bold leading-[44.8px] text-[#24285F]">
        ใบประกาศนียบัตร
      </div>
    </div>
    <!-- END HEADER TITLE -->
    <div v-if="certify.length > 0" class="flex flex-wrap">
      <template v-for="(cert, i) in certify" :key="i">
        <div class="relative">
          <img :src="cert.certImg" class="max-w-[430px]" />
          <div
            class="absolute z-50 top-0 bg-white/[0.8] w-full h-full flex flex-col gap-y-5 items-center justify-center"
          >
            <div
              class="border border-[#5762C5] bg-white rounded-full py-4 px-10"
            >
              <div class="text-[#5762C5] text-lg font-bold">ดูผลคะแนน</div>
            </div>
            <div
              class="border bg-gradient-to-r from-[#4148AD] to-[#6570DA] rounded-full py-4 px-10"
            >
              <div class="text-white text-lg font-bold">ดาวน์โหลด</div>
            </div>
          </div>
        </div>
      </template>
    </div>
    <div v-else class="flex w-full justify-center mt-[60px]">
      <div class="text-xl font-normal">
        ยังไม่มีใบประกาศ
        <span class="text-[#5762C5] font-bold cursor-pointer hover:underline"
          >ลองดูคอร์สที่น่าสนใจ</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      certify: [
        {
          certImg: "/images/certificate/cert.png",
        },
        {
          certImg: "/images/certificate/cert.png",
        },
        {
          certImg: "/images/certificate/cert.png",
        },
        {
          certImg: "/images/certificate/cert.png",
        },
        {
          certImg: "/images/certificate/cert.png",
        },
        {
          certImg: "/images/certificate/cert.png",
        },
        {
          certImg: "/images/certificate/cert.png",
        },
      ],
    };
  },
  methods: {},
};
</script>
