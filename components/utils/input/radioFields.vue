<template>
  <div class="w-full flex">
    <div class="relative">
      <label class="input-radio-fields">
        <input
          type="radio"
          :name="name"
          :value="checked"
          :checked="checked"
          @click="setValue"
        />
        <div class="ml-8">{{ label }}</div>
        <span class="checkmark"></span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      default: "radio",
    },
    checked: Boolean,
  },
  data() {
    return {
      content: null,
      active: false,
    };
  },
  methods: {
    setValue() {
      this.content = this.label;
      // this.$emit("input", this.content);
      // this.$emit("emitOnClick");
    },
  },
};
</script>
