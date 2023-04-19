<template>
  <div class="w-full">
    <div class="max-w-[1440px] mx-auto pt-8 px-20">
      <utils-card-course-card-session
        title="หลักสูตรแนะนำ"
        :course="courseCard"
        grid
      ></utils-card-course-card-session>
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
