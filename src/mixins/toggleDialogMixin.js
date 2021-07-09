export default {
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    closeModal() {
      this.$emit("update:modelValue", false);
    },
  },
};
