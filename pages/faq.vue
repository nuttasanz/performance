<!-- <script setup>
const { data } = await useFetch("https://horo-bo-dev.topcloud.dev/api/faq");
const faq = data._rawValue.data;
</script> -->

<template>
  <div class="w-full bg-[#F7F7FD]">
    <FaqBanner />
    <FaqFrequentlyAsked :faq="whatLearn" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      whatLearn: [
        {
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          desc: "Detail1",
        },
        {
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          desc: "Detail2",
        },
        {
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          desc: "Detail3",
        },
        {
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          desc: "Detail4",
        },
        {
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          desc: "Detail5",
        },
        {
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          desc: "Detail6",
        },
      ],
    };
  },
};
</script>
