<template>
  <div>
    <UtilsLoadingSpinner v-if="loading" />
    <LayoutsTheHeader />
    <slot />
    <LayoutsTheFooter />
  </div>
</template>

<script setup lang="ts">
const nuxtApp = useNuxtApp();
const loading = ref(true);
nuxtApp.hook("page:start", () => {
  loading.value = true;
});
// tru to set timeout here
nuxtApp.hook("page:finish", () => {
  loading.value = false;
});
</script>
<!--setTimeout(async () => {-->
<!--try {-->

<!--console.log(loading.value);-->
<!--}-->
<!--catch (error) {-->
<!--console.log(error)-->
<!--}-->
<!--finally {-->
<!--console.log(loading.value)-->
<!--}-->
<!--},500)-->

<!--<script setup>-->
<!--const loading = ref(true);-->
<!--const router = useRouter();-->
<!--nextTick(() => {-->
<!--  setTimeout(async () => {-->
<!--    try {-->
<!--      console.log(loading.value); // correctly loggs out - true-->
<!--    } catch (error) {-->
<!--      console.error(error);-->
<!--    } finally {-->
<!--      loading.value = false;-->
<!--      console.log(loading.value); // correctly loggs out - false-->
<!--    }-->
<!--  }, 500);-->
<!--});-->
<!--</script>-->
