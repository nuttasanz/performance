<template>
  <div class="w-full bg-[#F7F7FD]">
    <horo-banner></horo-banner>
    <popular-courses-session></popular-courses-session>
    <recommended-course-session></recommended-course-session>
    <explore-session></explore-session>
    <activity-session></activity-session>
  </div>
</template>
<script setup lang="ts">
import HoroBanner from "~/components/home/HoroBanner.vue";
import RecommendedCourseSession from "~/components/home/RecommendedCourseSession.vue";
import ExploreSession from "~/components/home/exploreSession.vue";
import PopularCoursesSession from "~/components/home/popularCoursesSession.vue";
import ActivitySession from "~/components/home/activitySession.vue";
</script>
