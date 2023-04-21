<template>
  <div class="bg-white rounded-[16px] py-10 px-8">
    <div class="text-[20px] text-[#0E1F1D] leading-[26px] font-bold mb-6">
      {{ title }}
      <span
        v-if="multiChoices"
        class="text-[20px] leading-[26px] text-[#A2A2A8] font-normal"
        >(ตอบได้มากกว่า 1 ข้อ)</span
      >
    </div>

    <template v-for="(answer, i) in choices">
      <utils-input-check-box-fields
        v-if="multiChoices"
        :key="`choices-${i}`"
        :label="answer"
      ></utils-input-check-box-fields>

      <utils-input-radio-fields
        v-else
        :key="`choices-${i}`"
        :label="answer"
      ></utils-input-radio-fields>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    multiChoices: Boolean,
    title: {
      type: String,
      default: null,
    },
    choices: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
