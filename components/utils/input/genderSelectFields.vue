<template>
  <label :for="name" class="text-[#24285F] text-[22px] leading-[28px] font-bold"
    >{{ label }}<span class="text-[#EA560D]">*</span></label
  >
  <Field
    :id="name"
    as="select"
    class="w-full border-b border-[#AEAFC5] outline-0 text-base leading-[19.6px] font-normal mt-2"
    :name="name"
    :type="type"
    :value="value"
    :placeholder="placeholder"
    :rules="rules"
    required
  >
    <option value="" disabled selected hidden>เลือกเพศ</option>
    <option value="ชาย">ชาย</option>
    <option value="หญิง">หญิง</option>
  </Field>
  <ErrorMessage :name="name"></ErrorMessage>
</template>

<script>
import { Field, ErrorMessage } from "vee-validate";

export default {
  components: {
    Field,
    ErrorMessage,
  },
  props: {
    type: {
      type: String,
      default: "text",
    },
    value: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: "",
    },
    rules: {
      type: String,
      default: "",
    },
  },
};
</script>
