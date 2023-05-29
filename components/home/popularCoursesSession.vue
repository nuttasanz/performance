<template>
  <div class="w-full bg-[#24285F]">
    <!-- DESKTOP RESPONSIVE -->
    <div class="hidden xl:block max-w-[1440px] mx-auto pt-[30px] px-20">
      <utils-card-swiper-course-card-session
        title="Poppular Content"
        popular-course-color
        :course-card="courseCard"
      ></utils-card-swiper-course-card-session>
    </div>
    <!-- END DESKTOP RESPONSIVE -->
    <!-- MOBILE RESPONSIVE -->
    <div class="block xl:hidden max-w-[1440px] mx-auto p-10">
      <utils-card-swiper-course-card-session
        title="Poppular Content"
        popular-course-color
        :course-card="courseCard"
      ></utils-card-swiper-course-card-session>
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
    time: "Duration1",
    cost: "$Price",
  },
  {
    image: "/images/recommendCourse/course2.jpg",
    tag: "Audio Course",
    title: "Title2",
    time: "Duration2",
    cost: "$Price",
  },
  {
    image: "/images/recommendCourse/course3.jpg",
    tag: "Online Course",
    title: "Title3",
    time: "Duration3",
    cost: "$Price",
  },
  {
    image: "/images/recommendCourse/course4.jpg",
    tag: "Audio Course",
    title: "Title4",
    time: "Duration4",
    cost: "$Price",
  },
  {
    image: "/images/recommendCourse/course5.jpg",
    tag: "Online Course",
    title: "Title5",
    time: "Duration5",
    cost: "$Price",
  },
  {
    image: "/images/recommendCourse/course6.jpg",
    tag: "Audio Course",
    title: "Title6",
    time: "Duration6",
    cost: "$Price",
  },
  {
    image: "/images/recommendCourse/course7.jpg",
    tag: "Online Course",
    title: "Title7",
    time: "Duration7",
    cost: "$Price",
  },
  {
    image: "/images/recommendCourse/course1.jpg",
    tag: "Audio Course",
    title: "Title8",
    time: "Duration8",
    cost: "$Price",
  },
];
</script>
