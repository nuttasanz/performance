<template>
  <label :for="choice" class="radio-button">
    <Field
      :id="choice"
      :name="answer"
      :value="choice"
      type="radio"
      checked="checked"
      rules="required"
    ></Field>
    <span class="radio-checkmark"></span>
    {{ choice }}
  </label>
</template>

<script>
import { Field } from "vee-validate";

export default {
  components: { Field },
  props: {
    choice: {
      type: String,
      default: null,
    },
    answer: {
      type: String,
      default: null,
    },
  },
  methods: {},
};
</script>
