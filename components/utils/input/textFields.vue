<template>
  <label
    :for="name"
    class="text-[#24285F] text-[20px] leading-[28px] font-bold"
    >{{ label }}</label
  >
  <Field
    :id="name"
    class="w-full border-b border-[#AEAFC5] outline-0 text-[14px] leading-[19.6px] font-normal mt-2"
    :name="name"
    :type="type"
    :value="value"
    :placeholder="placeholder"
    :rules="rules"
  ></Field>
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
