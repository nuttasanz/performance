<template>
  <label :for="choice" class="check-button">
    <Field
      :id="choice"
      :name="answer"
      :value="choice"
      type="checkbox"
      checked="checked"
    ></Field>
    <span class="check-checkmark"></span>
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
