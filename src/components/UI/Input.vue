<template>
  <input
    class="input"
    :value="modelValue"
    @input="updateValue"
    :type="type"
    :placeholder="placeholder"
  />
</template>

<script>
export default {
  name: "Input",
  props: {
    placeholder: {
      type: String,
      default: "",
    },
    modelValue: {
      type: String,
    },
    type: {
      type: String,
      default: "text",
    },
  },
  methods: {
    updateValue(e) {
      this.$emit("update:modelValue", e.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.input {
  width: 100%;
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 15px;
}
</style>
