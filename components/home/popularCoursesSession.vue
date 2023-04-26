<template>
  <div class="w-full bg-[#24285F]">
    <div class="max-w-[1440px] mx-auto pt-[30px] px-20">
      <utils-card-swiper-course-card-session
        title="หลักสูตรยอดนิยม"
        popular-course-color
        :course-card="courseCard"
      ></utils-card-swiper-course-card-session>
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
