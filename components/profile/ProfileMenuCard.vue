<script setup>
defineProps({
  menu: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <div class="bg-white w-full h-fit max-w-[330px] rounded-[24px] p-5">
    <div class="flex flex-col gap-y-5">
      <template v-for="(menus, i) in menu" :key="i">
        <button
          class="border border-[#5762C533] text-[#24285F] rounded-[16px] py-[14px] px-5 focus:bg-[#24285F] focus:text-white"
        >
          <div class="flex items-center gap-x-3">
            <div><img :src="menus.icon" class="w-5 h-5" /></div>
            <div class="text-xl font-medium">{{ menus.title }}</div>
          </div>
        </button>
      </template>
    </div>
  </div>
</template>
