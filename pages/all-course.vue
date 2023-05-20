<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {},
  data() {
    return {
      buttons: [
        { tag: "All" },
        { tag: "Content1" },
        { tag: "Content2" },
        { tag: "Content3" },
        { tag: "Content4" },
        { tag: "Content5" },
      ],
      courseCard: [
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
          image: "/images/recommendCourse/course2.jpg",
          tag: "Online Course",
          title: "Title8",
          time: "Duration",
          cost: "$Price",
        },
      ],
    };
  },
});
</script>
<template>
  <div class="w-full bg-[#F7F7FD]">
    <div class="bg-[#24285F] relative h-[300px]">
      <div
        class="absolute top-0 w-full h-full flex flex-col items-center justify-center"
      >
        <div
          class="text-[66px] text-white font-fraunces font-bold leading-[82.62px] tracking-[0.04em]"
        >
          Nuttasan Kotchawat
        </div>
        <div class="text-[22px] text-white tracking-[0.02em]">
          Front-End Developer
        </div>
      </div>
    </div>

    <div class="max-w-[1440px] mx-auto pt-[60px] px-20 pb-[72px]">
      <div class="w-full flex flex-wrap gap-4 mb-10">
        <template v-for="(button, i) in buttons" :key="i">
          <button
            class="w-fit bg-white text-[#5762C5] hover:bg-[#5762C5] hover:text-white py-[18px] px-9 rounded-full"
          >
            <div class="text-xl leading-[18px] font-bold">
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
