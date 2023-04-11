<template>
  <div class="w-full bg-[#24285F]">
    <div class="max-w-[1440px] mx-auto py-[30px] px-20 pb-[50px]">
      <div class="flex items-center gap-x-8 mb-10">
        <div class="text-[40px] text-[#FFFFFF] leading-[52px] font-medium">
          หลักสูตรยอดนิยม
        </div>
        <div class="flex flex-grow border border-[#A0A9F666]/[0.4] h-0"></div>
      </div>
      <div class="relative flex gap-x-5">
        <template v-for="(card, i) in courseCard" :key="i">
          <div v-if="i >= 4" class="flex flex-col max-w-[305px]">
            <div><img src="@/static/images/recommendCourse/course1.png" /></div>
            <div
              class="w-fit py-[6px] px-3 bg-[#6F93DD] rounded-full text-[12px] text-white leading-[12px] mt-4"
            >
              {{ card.tag }}
            </div>
            <div
              class="text-[20px] leading-[28px] text-[#FFFFFF] font-medium mt-1 mb-3"
            >
              Online Tarot Course คอร์สไพ่ยิปซี จาก 0 สู่นักพยากรณ์มืออาชีพ
              สร้าง รายได้หลักล้าน
            </div>
            <div class="flex justify-between">
              <div class="flex items-center">
                <div class="w-6 h-6 flex items-center justify-center">
                  <font-awesome-icon
                    :icon="['fal', 'clock']"
                    style="color: #7c89ff"
                  />
                </div>
                <div
                  class="text-[20px] leading-[28px] text-[#7C89FF] ml-[14.5px]"
                >
                  4-5 ชั่วโมง
                </div>
              </div>
              <div class="text-[20px] leading-[28px] text-[#FFFFFF] font-bold">
                ฿15,000
              </div>
            </div>
          </div>
        </template>
        <div class="absolute top-[200px] w-full flex justify-between">
          <div class="w-[60px] h-[60px] relative right-[50px]">
            <img src="@/static/images/popularCourse/arrow-right.png" />
          </div>
          <div class="w-[60px] h-[60px] relative left-[50px]">
            <img src="@/static/images/popularCourse/arrow-left.png" />
          </div>
        </div>
      </div>
      <!--  <div class="w-full pt-[54px] px-20 pb-20">-->
      <!--    <div class="flex gap-x-5">-->
      <!--      <div class="relative">-->
      <!--        <img src="@/static/images/popularCourse/yip-z.png" class="relative">-->
      <!--        <div class="absolute w-full text-center top-0 text-[#FFFFFF] mt-[33.6px]">-->
      <!--          <div class="max-w-[380px] mx-auto">-->
      <!--            <div class="text-[18px] font-medium leading-[25.2px] tracking-[0.1em] mb-2">หลักสูตรยอดนิยม</div>-->
      <!--            <div class="text-[40px] font-semibold leading-[56px] tracking-[0.04em]">หลักสูตรไพ่ยิปซี</div>-->
      <!--          </div>-->
      <!--        </div>-->
      <!--      </div>-->
      <!--      <div class="relative">-->
      <!--        <img src="@/static/images/popularCourse/numerology.png" class="relative rounded-[35px]">-->
      <!--        <div class="absolute w-full text-center top-0 text-[#FFFFFF] mt-[33.6px]">-->
      <!--          <div class="max-w-[380px] mx-auto">-->
      <!--            <div class="text-[18px] font-medium leading-[25.2px] tracking-[0.1em] mb-2">หลักสูตรยอดนิยม</div>-->
      <!--            <div class="text-[40px] font-semibold leading-[56px] tracking-[0.04em]">หลักสูตรเลขศาสตร์-->
      <!--              และยาม-->
      <!--            </div>-->
      <!--          </div>-->
      <!--        </div>-->
      <!--      </div>-->
      <!--    </div>-->
      <!--      <VueSlickCarousel>-->
      <!--        <div>1</div>-->
      <!--        <div>1</div>-->
      <!--        <div>1</div>-->
      <!--      </VueSlickCarousel>-->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      courseCard: [
        {
          image: "_nuxt/static/images/recommendCourse/course1.png",
          tag: "คอร์สออนไลน์",
          title:
            "Online Tarot Course คอร์สไพ่ยิปซี จาก 0 สู่นักพยากรณ์มืออาชีพ สร้างรายได้หลักล้าน",
          time: "4-5 ชั่วโมง",
          cost: "฿15,000",
        },
        {
          image: "_nuxt/static/images/recommendCourse/course2.png",
          tag: "คอร์สออนไลน์",
          title:
            "คอร์สเลขศาสตร์ การพยากรณ์เบอร์โทร เลขที่บ้าน และตัวเลขทุกชนิด",
          time: "4-5 ชั่วโมง",
          cost: "฿8,900",
        },
        {
          image: "_nuxt/static/images/recommendCourse/course3.png",
          tag: "คอร์สออนไลน์",
          title: "คอร์สวิชาโหรทายหนู แม่นยำยิ่งกว่าตาเห็น",
          time: "4-5 ชั่วโมง",
          cost: "฿15,000",
        },
        {
          image: "_nuxt/static/images/recommendCourse/course4.png",
          tag: "คอร์สออนไลน์",
          title: "คอร์สชัยภูมิฮวงจุ้ย 1 ทำเลฮวงจุ้ยมั่งคั่ง",
          time: "4-5 ชั่วโมง",
          cost: "฿15,000",
        },
        {
          image: "_nuxt/static/images/recommendCourse/course5.png",
          tag: "คอร์สออนไลน์",
          title: "คอร์สฮวงจุ้ยดาวหิน (ดาว 9 ยุค ระบบซำง้วน)",
          time: "4-5 ชั่วโมง",
          cost: "฿15,000",
        },
        {
          image: "_nuxt/static/images/recommendCourse/course6.png",
          tag: "คอร์สออนไลน์",
          title: "คอร์สสร้างโลโก้ ถูกหลักฮวงจุ้ยเร่งความสำเร็จ",
          time: "4-5 ชั่วโมง",
          cost: "฿8,900",
        },
        {
          image: "_nuxt/static/images/recommendCourse/course7.png",
          tag: "คอร์สออนไลน์",
          title: "คอร์สเลข ๗ ตัว กาลโยคพม่า (เลข ๗ ตัวพิศดาร)",
          time: "4-5 ชั่วโมง",
          cost: "฿15,000",
        },
        {
          image: "_nuxt/static/images/recommendCourse/course8.png",
          tag: "หนังสือเสียง",
          title: "วิธีแก้เลขที่บ้านร้ายด้วยตัวเอง",
          time: "4-5 ชั่วโมง",
          cost: "฿15,000",
        },
      ],
    };
  },
};
</script>
