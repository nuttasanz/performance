<template>
    <the-header></the-header>
    <slot></slot>
    <the-footer></the-footer>
</template>
<script setup lang="ts">
import TheHeader from "~/components/layouts/TheHeader.vue";
import TheFooter from "~/components/layouts/TheFooter.vue";
</script>