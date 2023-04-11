<template>
  <div class="grid-cols-4 flex-row gap-x-5" :class="grid ? 'grid' : 'flex'">
    <template v-for="(card, i) in course" :key="i">
      <div class="flex flex-col w-full mb-12">
        <div><img :src="card.image" /></div>
        <div
          class="w-fit py-[6px] px-3 bg-[#6F93DD] rounded-full text-[12px] text-white leading-[12px] mt-4"
        >
          {{ card.tag }}
        </div>
        <div
          class="text-[20px] leading-[28px] font-medium mt-1 mb-3"
          :class="popularCourseColor ? 'text-white' : 'text-[#24285F]'"
        >
          {{ card.title }}
        </div>

        <div class="flex flex-col h-full justify-end">
          <div class="flex justify-between">
            <div
              class="flex items-center"
              :class="popularCourseColor ? 'text-[#7C89FF]' : 'text-[#A2A2A8]'"
            >
              <div class="w-6 h-6 flex items-center justify-center">
                <font-awesome-icon :icon="['fal', 'clock']" />
              </div>
              <div class="text-[20px] leading-[28px] ml-[14.5px]">
                {{ card.time }}
              </div>
            </div>
            <div
              class="text-[20px] leading-[28px] font-bold"
              :class="popularCourseColor ? 'text-white' : 'text-[#5762C5]'"
            >
              {{ card.cost }}
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    grid: Boolean,
    popularCourseColor: Boolean,
    course: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
