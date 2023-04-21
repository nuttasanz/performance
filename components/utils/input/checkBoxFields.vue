<template>
  <div class="flex items-center gap-4" @click="handleInput">
    <div class="relative flex items-center">
      <input
        :id="id"
        class="hover:cursor-pointer"
        :class="checkbox_class"
        type="checkbox"
        :name="name"
        :value="checked"
        :checked="checked"
      />
      <div
        v-if="check_status"
        class="absolute top-0 w-full h-full flex items-center justify-center hover:cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-[14px] w-[14px]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
          stroke-width="3"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
    </div>
    <div class="text-base">
      {{ label }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 0,
    },
    label: {
      type: String,
      default: null,
    },
    id: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      default: null,
    },
    link: {
      type: String,
      default: null,
    },
    checked: {
      type: Boolean,
      default: false,
    },
    disabled: Boolean,
  },
  data() {
    return {
      content: 0,
      checkbox_class:
        "peer w-[20px] h-[20px] border border-[#D0D5DD] rounded-md appearance-none",
      check_status: false,
    };
  },
  watch: {
    value(val) {
      if (val) {
        this.check_status = !(val === 1);
        this.handleInput();
      }
    },
  },
  mounted() {
    this.content = this.value;
    // this.$emit("input", this.content);
    this.setDefault();
    if (this.checked) {
      this.checkbox_class =
        "peer w-[20px] h-[20px] border border-[#D0D5DD] rounded-md appearance-none bg-[#5762C5]";
      this.check_status = true;
      this.content = 1;
      // this.$emit("input", this.content);
    }
  },
  methods: {
    openLink() {
      window.open(this.link, "_black");
    },
    setDefault() {
      if (this.content === 0) {
        this.checkbox_class =
          "peer w-[20px] h-[20px] border border-[#D0D5DD] rounded-md appearance-none";
        this.check_status = false;
      } else {
        this.checkbox_class =
          "peer w-[20px] h-[20px] border border-[#D0D5DD] rounded-md appearance-none bg-[#5762C5]";
        this.check_status = true;
      }
    },
    handleInput() {
      if (this.check_status) {
        this.checkbox_class =
          "peer w-[20px] h-[20px] border border-[#D0D5DD] rounded-md appearance-none";
        this.check_status = false;
        this.content = 0;
        // this.$emit("input", this.content);
      } else {
        this.checkbox_class =
          "peer w-[20px] h-[20px] border border-[#D0D5DD] rounded-md appearance-none bg-[#5762C5]";
        this.check_status = true;
        this.content = 1;
        // this.$emit("input", this.content);
      }
    },
  },
};
</script>
