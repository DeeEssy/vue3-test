<template>
  <div class="home">
    <PostForm @onCreatePost="createPost" />
    <PostList :posts="posts" @removePost="removePost" />
  </div>
</template>

<script>
import PostList from "@/components/PostList";
import PostForm from "@/components/PostForm";

export default {
  name: "Home",
  components: {
    PostList,
    PostForm,
  },
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "title",
          desc: "desc",
        },
        {
          id: 2,
          title: "title2",
          desc: "desc2",
        },
        {
          id: 3,
          title: "title3",
          desc: "desc3",
        },
      ],
    };
  },
  methods: {
    createPost(newPost) {
      if (newPost.title && newPost.desc) {
        const newPostInfo = {
          id: Date.now(),
          title: newPost.title,
          desc: newPost.desc,
        };
        this.posts.push(newPostInfo);
        for (const key in newPost) {
          if (newPost.hasOwnProperty(key)) {
            newPost[key] = "";
          }
        }
      }
    },
    removePost(post) {
      this.posts = this.posts.filter((el) => el.id !== post.id);
    },
  },
};
</script>
