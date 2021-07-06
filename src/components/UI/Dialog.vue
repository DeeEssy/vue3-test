<template>
  <div
    class="dialog"
    v-if="modelValue"
    @click="$emit('update:modelValue', false)"
  >
    <div class="dialog__content" @click.stop>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "Dialog",
  props: {
    modelValue: {
      type: Boolean,
    },
  },
};
</script>

<style lang="scss" scoped>
.dialog {
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  &__content {
    margin: auto;
    border-radius: 12px;
    min-height: 50px;
    min-width: 300px;
    background-color: #fff;
    padding: 20px;
  }
}
</style>
