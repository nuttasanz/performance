<!-- <script setup lang="ts">
const nuxtApp = useNuxtApp();
const loading = ref(true);
nuxtApp.hook("page:start", () => {
  loading.value = true;
});
// tru to set timeout here
nuxtApp.hook("page:finish", () => {
  loading.value = false;
});
</script> -->

<template>
  <div>
    <UtilsLoadingSpinner v-if="loading" />
    <LayoutsTheHeader />
    <slot />
    <LayoutsTheFooter />
  </div>
</template>
