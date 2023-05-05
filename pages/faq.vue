<script setup>
const { data } = await useFetch("https://horo-bo-dev.topcloud.dev/api/faq");
const faq = data._rawValue.data;
</script>

<template>
  <div class="w-full bg-[#F7F7FD]">
    <FaqBanner />
    <FaqFrequentlyAsked :faq="faq" />
  </div>
</template>
