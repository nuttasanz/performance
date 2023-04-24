<template>
  <label :for="choice" class="radio-button">
    <Field
      :id="choice"
      name="objective-radio-answer"
      :value="choice"
      type="radio"
      checked="checked"
    ></Field>
    <span class="radio-checkmark"></span>
    {{ choice }}
  </label>
</template>

<script>
import {
  Field,
  // ErrorMessage
} from "vee-validate";

export default {
  components: {
    Field,
    // ErrorMessage
  },
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
