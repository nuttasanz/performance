<template>
  <div class="w-full bg-[#F7F7FD]">
    <div class="bg-[#24285F] relative">
      <img
        src="/images/HeroBanner/allCourseBanner.png"
        class="mix-blend-overlay"
      />
      <div
        class="absolute top-0 w-full h-full flex flex-col items-center justify-center"
      >
        <div
          class="text-[64px] text-white font-fraunces font-bold leading-[82.62px] tracking-[0.04em]"
        >
          Horo Academy
        </div>
        <div class="text-xl text-white tracking-[0.02em]">
          สังคมพยากรณ์สมัยใหม่ ไม่งมงาย
        </div>
      </div>
    </div>

    <div class="max-w-[1440px] mx-auto pt-[60px] px-20 pb-[72px]">
      <div class="w-full flex flex-wrap gap-4 mb-10">
        <template v-for="(button, i) in buttons" :key="i">
          <button
            class="w-fit bg-white text-[#5762C5] hover:bg-[#5762C5] hover:text-white py-[18px] px-9 rounded-full"
          >
            <div class="text-[18px] leading-[18px] font-bold">
              {{ button.tag }}
            </div>
          </button>
        </template>
      </div>
      <utils-card-course-card-session
        :course="courseCard"
        grid
      ></utils-card-course-card-session>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttons: [
        { tag: "ทั้งหมด" },
        { tag: "หลักสูตรไพ่ยิบซี" },
        { tag: "หลักสูตรเลขศาสตร์และยาม" },
        { tag: "หลักสูตรฮวงจุ้ย" },
        { tag: "หลักสูตรโหราศาสตร์และเลข ๗ ตัว" },
        { tag: "หนังสือเสียง (Audio book)" },
      ],
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
