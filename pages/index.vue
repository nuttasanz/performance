<script setup>
useHead({
  title: "Horo Academy e-Learning",
  meta: [{ name: "Horo Academy Home Page", content: "คอร์สเรียนดูดวงออนไลน์" }],
});
</script>

<template>
  <div class="w-full bg-[#F7F7FD]">
    <HomeHoroBanner />
    <HomePopularCoursesSession />
    <HomeRecommendedCourseSession />
    <HomeExploreSession />
    <HomeActivitySession />
  </div>
</template>
