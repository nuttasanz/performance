<template>
  <div class="bg-white rounded-[16px] py-10 px-8">
    <div class="text-[22px] text-[#0E1F1D] leading-[26px] font-bold mb-6">
      {{ title }}
      <span
        v-if="multiChoices"
        class="text-[22px] leading-[26px] text-[#A2A2A8] font-normal"
        >(Can choose more than 1 item.)</span
      >
    </div>

    <template v-for="(choice, i) in choices" :key="i">
      <UtilsInputCheckBoxFields
        v-if="multiChoices"
        :choice="choice"
        :answer="`objective-check-answer`"
      />

      <UtilsInputRadioFields
        v-else
        :choice="choice"
        :answer="`objective-radio-answer`"
      />
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
    answer: {
      type: String,
      default: null,
    },
  },
};
</script>
