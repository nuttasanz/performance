<template>
  <div class="w-full flex items-center">
    <div class="relative h-full flex items-center justify-center">
      <label class="input-radio-fields">
        <input
          type="radio"
          :name="name"
          :value="checked"
          :checked="checked"
          @click="setValue"
        />
        {{ label }}
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
      this.content = this.text;
      // this.$emit("input", this.content);
      // this.$emit("emitOnClick");
    },
  },
};
</script>
