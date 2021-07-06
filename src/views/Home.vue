<template>
  <div class="home">
    <Button @onClick="isVisibleCreateModal = !isVisibleCreateModal">
      Create a post
    </Button>
    <Dialog
      @onClose="isVisibleCreateModal = !isVisibleCreateModal"
      v-model="isVisibleCreateModal"
    >
      <PostForm @onCreatePost="createPost" />
    </Dialog>
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
  mounted() {
    this.getPosts(5);
  },
  data() {
    return {
      isVisibleCreateModal: false,
      posts: [],
    };
  },
  methods: {
    getPosts(limit = 10) {
      this.axios({
        method: "GET",
        url: `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`,
      })
        .then((res) => {
          this.posts = res.data;
        })
        .catch((err) => console.log(err));
    },
    createPost(newPost) {
      if (newPost.title && newPost.desc) {
        const newPostInfo = {
          id: Date.now(),
          title: newPost.title,
          desc: newPost.desc,
        };
        this.posts.push(newPostInfo);
        this.isVisibleCreateModal = false;
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
