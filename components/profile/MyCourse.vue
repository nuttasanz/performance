<template>
  <div class="bg-white w-full h-full rounded-[24px] p-5 pb-[72px]">
    <!-- HEADER TITLE -->
    <div class="border-b border-[#AEAFC5] mb-7">
      <div class="text-[32px] font-bold leading-[44.8px] text-[#24285F]">
        คอร์สของฉัน
      </div>
    </div>
    <!-- END HEADER TITLE -->
    <div class="grid grid-cols-3 gap-y-12 gap-x-5">
      <template v-for="(card, i) in courseCard" :key="i">
        <nuxt-link to="/course-detail/_slug">
          <div class="max-w-[280px] h-full flex flex-col">
            <div><img :src="card.image" /></div>
            <div
              class="w-fit py-[6px] px-3 rounded-full text-[14px] text-white leading-[12px] mt-4 font-noto"
              :class="
                card.tag === 'หนังสือเสียง' ? 'bg-[#979789]' : 'bg-[#6F93DD]'
              "
            >
              {{ card.tag }}
            </div>
            <div
              class="text-[22px] text-[#24285F] leading-[30.8px] font-medium mt-1 mb-3"
            >
              {{ card.title }}
            </div>
            <div class="flex flex-col h-full justify-end">
              <div class="text-lg text-[#0E1F1D] mb-2">เรียนไปแล้ว 10%</div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div
                  class="bg-gradient-to-r from-[#E8A43E] to-[#FFDAA1] h-2 rounded-full"
                  style="width: 10%"
                ></div>
              </div>
            </div>
          </div>
        </nuxt-link>
      </template>
    </div>
  </div>
</template>

<script setup>
const courseCard = [
  {
    image: "/images/recommendCourse/course1.png",
    tag: "คอร์สออนไลน์",
    title:
      "Online Tarot Course คอร์สไพ่ยิปซี จาก 0 สู่นักพยากรณ์มืออาชีพ สร้างรายได้หลักล้าน",
    time: "4-5 ชั่วโมง",
    cost: "฿15,000",
  },
  {
    image: "/images/recommendCourse/course2.png",
    tag: "คอร์สออนไลน์",
    title: "คอร์สเลขศาสตร์ การพยากรณ์เบอร์โทร เลขที่บ้าน และตัวเลขทุกชนิด",
    time: "4-5 ชั่วโมง",
    cost: "฿8,900",
  },
  {
    image: "/images/recommendCourse/course3.png",
    tag: "คอร์สออนไลน์",
    title: "คอร์สวิชาโหรทายหนู แม่นยำยิ่งกว่าตาเห็น",
    time: "4-5 ชั่วโมง",
    cost: "฿15,000",
  },
  {
    image: "/images/recommendCourse/course4.png",
    tag: "คอร์สออนไลน์",
    title: "คอร์สชัยภูมิฮวงจุ้ย 1 ทำเลฮวงจุ้ยมั่งคั่ง",
    time: "4-5 ชั่วโมง",
    cost: "฿15,000",
  },
  {
    image: "/images/recommendCourse/course5.png",
    tag: "คอร์สออนไลน์",
    title:
      "Online Tarot Course คอร์สไพ่ยิปซี จาก 0 สู่นักพยากรณ์มืออาชีพ สร้างรายได้หลักล้าน",
    time: "4-5 ชั่วโมง",
    cost: "฿15,000",
  },
  {
    image: "/images/recommendCourse/course6.png",
    tag: "คอร์สออนไลน์",
    title: "คอร์สเลขศาสตร์ การพยากรณ์เบอร์โทร เลขที่บ้าน และตัวเลขทุกชนิด",
    time: "4-5 ชั่วโมง",
    cost: "฿8,900",
  },
  {
    image: "/images/recommendCourse/course7.png",
    tag: "คอร์สออนไลน์",
    title: "คอร์สวิชาโหรทายหนู แม่นยำยิ่งกว่าตาเห็น",
    time: "4-5 ชั่วโมง",
    cost: "฿15,000",
  },
  {
    image: "/images/recommendCourse/course8.png",
    tag: "คอร์สออนไลน์",
    title: "คอร์สชัยภูมิฮวงจุ้ย 1 ทำเลฮวงจุ้ยมั่งคั่ง",
    time: "4-5 ชั่วโมง",
    cost: "฿15,000",
  },
];
</script>
