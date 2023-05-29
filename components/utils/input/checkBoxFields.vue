<template>
  <label class="check-button">
    <Field
      :id="choice"
      :name="answer"
      :value="choice"
      type="checkbox"
      checked="checked"
      rules="required"
    ></Field>
    <span class="check-checkmark"></span>
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
