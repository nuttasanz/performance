<template>
  <div class="bg-white w-full h-full rounded-[24px] p-5 pb-[72px]">
    <!-- HEADER TITLE -->
    <div class="border-b border-[#AEAFC5] mb-7">
      <div class="text-[32px] font-bold leading-[44.8px] text-[#24285F]">
        My Course
      </div>
    </div>
    <!-- END HEADER TITLE -->
    <div class="grid grid-cols-3 gap-y-12 gap-x-5">
      <template v-for="(card, i) in courseCard" :key="i">
        <nuxt-link to="/course-detail/_slug">
          <div class="max-w-[280px] h-full flex flex-col">
            <div><img :src="card.image" class="w-[300px] h-[300px]" /></div>
            <div
              class="w-fit py-[6px] px-3 rounded-full text-[14px] text-white leading-[12px] mt-4"
              :class="
                card.tag === 'Audio Course' ? 'bg-[#979789]' : 'bg-[#6F93DD]'
              "
            >
              {{ card.tag }}
            </div>
            <div
              class="text-[22px] text-[#24285F] leading-[30.8px] font-medium mt-1 mb-3"
            >
              {{ card.title }}
            </div>
            <div class="flex flex-col h-full justify-end">
              <div class="text-lg text-[#0E1F1D] mb-2">
                Learning Progress 10%
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div
                  class="bg-gradient-to-r from-[#E8A43E] to-[#FFDAA1] h-2 rounded-full"
                  style="width: 10%"
                ></div>
              </div>
            </div>
          </div>
        </nuxt-link>
      </template>
    </div>
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
    image: "/images/recommendCourse/course2.jpg",
    tag: "Online Course",
    title: "Title8",
    time: "Duration",
    cost: "$Price",
  },
];
</script>
