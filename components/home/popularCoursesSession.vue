<template>
  <div class="w-full bg-[#24285F]">
    <div class="max-w-[1440px] mx-auto py-[30px] px-20 pb-[50px]">
      <div class="flex items-center gap-x-8 mb-10">
        <div class="text-[40px] text-[#FFFFFF] leading-[52px] font-medium">
          หลักสูตรยอดนิยม
        </div>
        <div class="flex flex-grow border border-[#A0A9F666]/[0.4] h-0"></div>
      </div>
      <utils-card-course-card-session
        :course="courseCard"
        popular-course-color
      ></utils-card-course-card-session>
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
      ],
    };
  },
};
</script>
