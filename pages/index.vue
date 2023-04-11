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
import HoroBanner from "~/components/index/HoroBanner.vue";
import RecommendedCourseSession from "~/components/index/RecommendedCourseSession.vue";
import ExploreSession from "~/components/index/exploreSession.vue";
import PopularCoursesSession from "~/components/index/popularCoursesSession.vue";
import ActivitySession from "~/components/index/activitySession.vue";
</script>