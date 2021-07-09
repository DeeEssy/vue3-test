<template>
  {{ postId }}
</template>

<script>
export default {
  data() {
    return {
      postId: this.$route.params.id,
    };
  },
};
</script>

<style></style>
