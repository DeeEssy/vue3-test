<template>
  <select v-model="modelValue" @change="changeOption">
    <option disabled value="">Choice sort</option>
    <option v-for="item in data" :key="item.value" :value="item.value">{{
      item.name
    }}</option>
  </select>
</template>

<script>
export default {
  name: "Select",
  props: {
    modelValue: {
      type: String,
    },
    data: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    changeOption(e) {
      this.$emit("update:modelValue", e.target.value);
    },
  },
};
</script>

<style lang="scss" scoped></style>
