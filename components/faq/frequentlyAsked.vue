<template>
  <div class="w-full">
    <div class="max-w-[1440px] mx-auto p-20">
      <div class="text-center mb-11">
        <div class="text-[#101828] text-[36px] leading-[44px] font-semibold">
          FAQs
        </div>
        <div class="text-[#475467] text-xl leading-[30px] mt-5">
          Everything you need to know about the product and billing.
        </div>
      </div>
      <div class="w-full max-w-[768px] mx-auto flex flex-col gap-y-4">
        <template v-for="(item, index) in faq" :key="index">
          <UtilsDropboxDropBoxSession :title="item.title" :desc="item.desc" />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  faq: {
    type: Array,
    default: () => [],
  },
});
</script>
