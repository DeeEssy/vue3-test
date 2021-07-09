<template>
  <div class="post">
    <h3 class="post__title">{{ post.title }}</h3>
    <p class="post__desc">{{ post.body }}</p>
    <div class="post__btns">
      <Button @onClick="$router.push(`/posts/${post.id}`)">Open</Button>
      <Button @onClick="$emit('removePost', post)">Delete</Button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
}
</style>
