<template>
  <label :for="name" class="text-[#24285F] text-[22px] leading-[28px] font-bold"
    >{{ label }}<span class="text-[#EA560D]">*</span></label
  >
  <div class="flex gap-x-6">
    <Field
      :id="name"
      as="select"
      class="w-full border-b border-[#AEAFC5] outline-0 text-base leading-[19.6px] font-normal mt-2"
      :name="name"
      :type="type"
      :value="value"
      :rules="rules"
      required
    >
      <option value="" disabled selected hidden>Day</option>
      <template v-for="(days, i) in 31" :key="i">
        <option :value="`day-${i}`">{{ days }}</option>
      </template>
    </Field>

    <Field
      :id="name"
      as="select"
      class="w-full border-b border-[#AEAFC5] outline-0 text-base leading-[19.6px] font-normal mt-2"
      :name="name"
      :type="type"
      :value="value"
      :rules="rules"
      required
    >
      <option value="" disabled selected hidden>Month</option>
      <template v-for="(month, i) in 12" :key="i">
        <option :value="`month-${i}`">{{ month }}</option>
      </template>
    </Field>
    <Field
      :id="name"
      as="select"
      class="w-full border-b border-[#AEAFC5] outline-0 text-base leading-[19.6px] font-normal mt-2"
      :name="name"
      :type="type"
      :value="value"
      :rules="rules"
      required
    >
      <option value="" disabled selected hidden>Year</option>
      <template v-for="(year, i) in 2" :key="i">
        <option :value="`year-${i}`">{{ year }}</option>
      </template>
    </Field>
  </div>
</template>

<script>
import { Field } from "vee-validate";

export default {
  components: {
    Field,
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
    rules: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      date: null,
    };
  },
  methods: {},
};
</script>
