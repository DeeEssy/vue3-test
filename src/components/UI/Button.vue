<template>
  <button @click="$emit('onClick')" class="btn">
    <slot />
  </button>
</template>

<script>
export default {
  name: "Button",
};
</script>

<style lang="scss" scoped>
.btn {
  align-self: flex-end;
  padding: 10px 15px;
  background: none;
  color: teal;
  border: 1px solid teal;
}
</style>
