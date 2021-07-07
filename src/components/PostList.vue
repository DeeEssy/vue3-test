<template>
  <template v-if="posts && posts.length">
    <div class="posts">
      <transition-group name="post-list">
        <Post
          v-for="post in posts"
          :key="post.id"
          :post="post"
          @removePost="$emit('removePost', post)"
        />
      </transition-group>
    </div>
    <Button @onClick="$emit('loadMorePosts')">Load More</Button>
  </template>
  <span v-else>You don't have any posts</span>
</template>

<script>
import Post from "@/components/Post";

export default {
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
  components: {
    Post,
  },
  emits: ["removePost", "loadMorePosts"],
};
</script>

<style lang="scss" scoped>
.post-list-item {
  display: inline-block;
  margin-right: 10px;
}
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.4s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
.post-list-move {
  transition: transform 0.8s ease;
}
</style>
