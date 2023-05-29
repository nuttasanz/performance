<template>
  <div class="w-full">
    <!-- DESKTOP RESPONSIVE -->
    <div class="hidden xl:block max-w-[1440px] mx-auto pt-8 px-20">
      <utils-card-course-card-session
        title="Recommended Content"
        :course="courseCard"
        grid
      ></utils-card-course-card-session>
      <div
        class="text-center text-[#5762C5] text-[22px] leading-[28px] font-medium border-2 rounded-full p-5 mt-12"
      >
        <NuxtLink to="/all-course"> VIEW ALL CONTENT</NuxtLink>
      </div>
    </div>
    <!-- END DESKTOP RESPONSIVE -->
    <!-- MOBILE RESPONSIVE -->
    <div class="block xl:hidden max-w-[1440px] mx-auto p-10">
      <UtilsCardSwiperCourseCardSession
        title="Recommended Content"
        :course-card="courseCard"
      />
      <div
        class="text-center text-[#5762C5] text-[22px] leading-[28px] font-medium border-2 rounded-full p-5 mt-12"
      >
        <NuxtLink to="/all-course"> VIEW ALL CONTENT</NuxtLink>
      </div>
    </div>
    <!-- END MOBILE RESPONSIVE -->
  </div>
</template>

<script setup>
const courseCard = [
  {
    image: "/images/recommendCourse/course1.jpg",
    tag: "Online Course",
    title: "Title1",
    time: "Duration",
    cost: "$Price",
  },
  {
    image: "/images/recommendCourse/course2.jpg",
    tag: "Online Course",
    title: "Title2",
    time: "Duration",
    cost: "$Price",
  },
  {
    image: "/images/recommendCourse/course3.jpg",
    tag: "Online Course",
    title: "Title3",
    time: "Duration",
    cost: "$Price",
  },
  {
    image: "/images/recommendCourse/course4.jpg",
    tag: "Online Course",
    title: "Title4",
    time: "Duration",
    cost: "$Price",
  },
  {
    image: "/images/recommendCourse/course5.jpg",
    tag: "Online Course",
    title: "Title5",
    time: "Duration",
    cost: "$Price",
  },
  {
    image: "/images/recommendCourse/course6.jpg",
    tag: "Online Course",
    title: "Title6",
    time: "Duration",
    cost: "$Price",
  },
  {
    image: "/images/recommendCourse/course7.jpg",
    tag: "Online Course",
    title: "Title7",
    time: "Duration",
    cost: "$Price",
  },
  {
    image: "/images/recommendCourse/course1.jpg",
    tag: "Audio Course",
    title: "Title8",
    time: "Duration",
    cost: "$Price",
  },
];
</script>
