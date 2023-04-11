<template>
  <div class="w-full">
    <div class="max-w-[1440px] mx-auto pt-8 px-20">
      <div class="flex items-center gap-x-8 mb-10">
        <div class="text-[40px] text-[#0E1F1D] leading-[52px] font-medium">
          หลักสูตรแนะนำ
        </div>
        <div class="flex flex-grow border border-[#5762C5]/[0.4] h-0"></div>
      </div>
      <div class="grid grid-cols-4">
        <!--  COURSE CARD  -->
        <template v-for="card in courseCard">
          <div class="flex flex-col max-w-[305px] mb-12">
            <div><img :src="card.image"></div>
            <div class="w-fit py-[6px] px-3 bg-[#6F93DD] rounded-full text-[12px] text-white leading-[12px] mt-4">
              {{ card.tag }}
            </div>
            <div class="text-[20px] text-[#24285F] leading-[28px] font-medium mt-1 mb-3">{{ card.title }}</div>
            <div class="flex justify-between">
              <div class="flex items-center">
                <div class="w-6 h-6 flex items-center justify-center">
                  <font-awesome-icon :icon="['fal', 'clock']" style="color: #A2A2A8;"/>
                </div>
                <div class="text-[20px] leading-[28px] text-[#A2A2A8] ml-[14.5px]">{{ card.time }}</div>
              </div>
              <div class="text-[20px] leading-[28px] text-[#5762C5] font-bold">{{ card.cost }}</div>
            </div>
          </div>
        </template>
        <!--  END COURSE CARD  -->
      </div>
      <div class="text-center text-[#5762C5] text-[20px] leading-[28px] font-medium border-2 rounded-full p-5">
        ดูหลักสูตรทั้งหมด
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
          image: '_nuxt/static/images/recommendCourse/course1.png',
          tag: 'คอร์สออนไลน์',
          title: 'Online Tarot Course คอร์สไพ่ยิปซี จาก 0 สู่นักพยากรณ์มืออาชีพ สร้างรายได้หลักล้าน',
          time: '4-5 ชั่วโมง',
          cost: '฿15,000',
        },
        {
          image: '_nuxt/static/images/recommendCourse/course2.png',
          tag: 'คอร์สออนไลน์',
          title: 'คอร์สเลขศาสตร์ การพยากรณ์เบอร์โทร เลขที่บ้าน และตัวเลขทุกชนิด',
          time: '4-5 ชั่วโมง',
          cost: '฿8,900',
        }, {
          image: '_nuxt/static/images/recommendCourse/course3.png',
          tag: 'คอร์สออนไลน์',
          title: 'คอร์สวิชาโหรทายหนู แม่นยำยิ่งกว่าตาเห็น',
          time: '4-5 ชั่วโมง',
          cost: '฿15,000',
        },
        {
          image: '_nuxt/static/images/recommendCourse/course4.png',
          tag: 'คอร์สออนไลน์',
          title: 'คอร์สชัยภูมิฮวงจุ้ย 1 ทำเลฮวงจุ้ยมั่งคั่ง',
          time: '4-5 ชั่วโมง',
          cost: '฿15,000',
        },
        {
          image: '_nuxt/static/images/recommendCourse/course5.png',
          tag: 'คอร์สออนไลน์',
          title: 'คอร์สฮวงจุ้ยดาวหิน (ดาว 9 ยุค ระบบซำง้วน)',
          time: '4-5 ชั่วโมง',
          cost: '฿15,000',
        },
        {
          image: '_nuxt/static/images/recommendCourse/course6.png',
          tag: 'คอร์สออนไลน์',
          title: 'คอร์สสร้างโลโก้ ถูกหลักฮวงจุ้ยเร่งความสำเร็จ',
          time: '4-5 ชั่วโมง',
          cost: '฿8,900',
        },
        {
          image: '_nuxt/static/images/recommendCourse/course7.png',
          tag: 'คอร์สออนไลน์',
          title: 'คอร์สเลข ๗ ตัว กาลโยคพม่า (เลข ๗ ตัวพิศดาร)',
          time: '4-5 ชั่วโมง',
          cost: '฿15,000',
        },
        {
          image: '_nuxt/static/images/recommendCourse/course8.png',
          tag: 'หนังสือเสียง',
          title: 'วิธีแก้เลขที่บ้านร้ายด้วยตัวเอง',
          time: '4-5 ชั่วโมง',
          cost: '฿15,000',
        },
      ],
    }
  },
  methods: {},
}
</script>