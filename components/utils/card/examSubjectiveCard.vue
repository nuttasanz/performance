<template>
  <div class="bg-white rounded-[16px] py-10 px-8">
    <div
      :for="answer"
      class="text-[20px] text-[#0E1F1D] leading-[26px] font-bold mb-6"
    >
      {{ title }}
    </div>
    <div v-if="url">
      <div class="flex flex-col items-center gap-y-6">
        <img :src="url" class="w-[251px] h-[212px]" />
        <Field
          :id="answer"
          as="textarea"
          rules="required"
          :name="answer"
          type="text"
          class="h-11 py-[10px] px-[14px] overflow-hidden"
          placeholder="ใส่คำตอบของคุณ"
          maxlength="300"
        ></Field>
      </div>
      <!--      <ErrorMessage :name="answer"></ErrorMessage>-->
    </div>
    <div v-else>
      <Field
        :id="answer"
        rules="required"
        as="textarea"
        :name="answer"
        type="text"
        placeholder="ใส่คำตอบของคุณ"
        maxlength="300"
      ></Field>
      <!--      <ErrorMessage :name="answer"></ErrorMessage>-->
      <div class="text-sm text-[#979789]">จำกัด 300 ตัวอักษร</div>
    </div>
  </div>
</template>

<script>
import { Field } from "vee-validate";

export default {
  components: {
    Field,
    // ErrorMessage
  },
  props: {
    answer: {
      type: String,
      default: null,
    },
    title: {
      type: String,
      default: null,
    },
    url: {
      type: String,
      default: null,
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
