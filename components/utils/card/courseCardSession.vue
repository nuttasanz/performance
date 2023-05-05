<template>
  <div v-if="title" class="flex items-center gap-x-8 mb-10">
    <div
      class="text-[42px] leading-[52px] font-medium"
      :class="popularCourseColor ? 'text-white' : 'text-[#0E1F1D]'"
    >
      {{ title }}
    </div>
    <div class="flex flex-grow border border-[#5762C5]/[0.4] h-0"></div>
  </div>
  <div
    class="grid-cols-4 flex-row gap-y-12 gap-x-5"
    :class="grid ? 'grid' : 'flex'"
  >
    <template v-for="(card, i) in course" :key="i">
      <nuxt-link to="/course-detail/_slug">
        <div class="h-full flex flex-col">
          <div><img :src="card.image" /></div>
          <div
            class="w-fit py-[6px] px-3 rounded-full text-[14px] text-white leading-[12px] mt-4"
            :class="
              card.tag === 'หนังสือเสียง' ? 'bg-[#979789]' : 'bg-[#6F93DD]'
            "
          >
            {{ card.tag }}
          </div>
          <div
            class="text-[22px] leading-[30.8px] font-medium mt-1 mb-3"
            :class="popularCourseColor ? 'text-white' : 'text-[#24285F]'"
          >
            {{ card.title }}
          </div>

          <div class="flex flex-col h-full justify-end">
            <div class="flex justify-between">
              <div
                class="flex items-center"
                :class="
                  popularCourseColor ? 'text-[#7C89FF]' : 'text-[#A2A2A8]'
                "
              >
                <div class="w-6 h-6 flex items-center justify-center">
                  <font-awesome-icon :icon="['fal', 'clock']" />
                </div>
                <div class="text-[22px] leading-[30.8px] ml-[14.5px]">
                  {{ card.time }}
                </div>
              </div>
              <div
                class="text-[22px] leading-[30.8px] font-bold"
                :class="popularCourseColor ? 'text-white' : 'text-[#5762C5]'"
              >
                {{ card.cost }}
              </div>
            </div>
          </div>
        </div>
      </nuxt-link>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null,
    },
    grid: Boolean,
    popularCourseColor: Boolean,
    course: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
