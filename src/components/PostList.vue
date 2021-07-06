<template>
  <template v-if="posts && posts.length">
    <div class="posts">
      <Post
        v-for="post in posts"
        :key="post.id"
        :post="post"
        @removePost="$emit('removePost', post)"
      />
    </div>
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
  emits: ["removePost"],
};
</script>
