<template>
  <div class="w-full">
    <div class="max-w-[1440px] mx-auto pt-8 px-20">
      <!--  COURSE CARD  -->
      <!--        <template v-for="(card, i) in courseCard" :key="i">-->
      <!--          <div class="flex flex-col max-w-[305px] w-full">-->
      <!--            <div><img :src="card.image" /></div>-->
      <!--            <div-->
      <!--              class="w-fit py-[6px] px-3 bg-[#6F93DD] rounded-full text-[12px] text-white leading-[12px]"-->
      <!--            >-->
      <!--              {{ card.tag }}-->
      <!--            </div>-->
      <!--            <div-->
      <!--              class="text-[20px] text-[#24285F] leading-[28px] font-medium mt-1 mb-3"-->
      <!--            >-->
      <!--              {{ card.title }}-->
      <!--            </div>-->

      <!--            <div class="flex flex-col h-full justify-end">-->
      <!--              <div class="flex justify-between">-->
      <!--                <div class="flex items-center">-->
      <!--                  <div class="w-6 h-6 flex items-center justify-center">-->
      <!--                    <font-awesome-icon-->
      <!--                      :icon="['fal', 'clock']"-->
      <!--                      style="color: #a2a2a8"-->
      <!--                    />-->
      <!--                  </div>-->
      <!--                  <div-->
      <!--                    class="text-[20px] leading-[28px] text-[#A2A2A8] ml-[14.5px]"-->
      <!--                  >-->
      <!--                    {{ card.time }}-->
      <!--                  </div>-->
      <!--                </div>-->
      <!--                <div-->
      <!--                  class="text-[20px] leading-[28px] text-[#5762C5] font-bold"-->
      <!--                >-->
      <!--                  {{ card.cost }}-->
      <!--                </div>-->
      <!--              </div>-->
      <!--            </div>-->
      <!--          </div>-->
      <!--        </template>-->
      <utils-card-course-card-session
        title="หลักสูตรแนะนำ"
        :course="courseCard"
        grid
      ></utils-card-course-card-session>
      <!--  END COURSE CARD  -->
      <div
        class="text-center text-[#5762C5] text-[20px] leading-[28px] font-medium border-2 rounded-full p-5"
      >
        <NuxtLink to="/all-course"> ดูหลักสูตรทั้งหมด</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      courseCard: [
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
          title:
            "คอร์สเลขศาสตร์ การพยากรณ์เบอร์โทร เลขที่บ้าน และตัวเลขทุกชนิด",
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
          title: "คอร์สฮวงจุ้ยดาวหิน (ดาว 9 ยุค ระบบซำง้วน)",
          time: "4-5 ชั่วโมง",
          cost: "฿15,000",
        },
        {
          image: "/images/recommendCourse/course6.png",
          tag: "คอร์สออนไลน์",
          title: "คอร์สสร้างโลโก้ ถูกหลักฮวงจุ้ยเร่งความสำเร็จ",
          time: "4-5 ชั่วโมง",
          cost: "฿8,900",
        },
        {
          image: "/images/recommendCourse/course7.png",
          tag: "คอร์สออนไลน์",
          title: "คอร์สเลข ๗ ตัว กาลโยคพม่า (เลข ๗ ตัวพิศดาร)",
          time: "4-5 ชั่วโมง",
          cost: "฿15,000",
        },
        {
          image: "/images/recommendCourse/course8.png",
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
