<template>
  <div class="home">
    <Input v-focus v-model="searchValue" placeholder="Search" />
    <div class="home__btns">
      <Button @onClick="isVisibleCreateModal = !isVisibleCreateModal">
        Create a post
      </Button>
      <Select v-model="sort" :data="sortOptions" />
    </div>
    <PostList :posts="sortedAndSearchedPosts" @removePost="removePost" />
    <div v-intersection="loadMorePosts" class="observer"></div>

    <Dialog
      @onClose="isVisibleCreateModal = !isVisibleCreateModal"
      v-model="isVisibleCreateModal"
    >
      <PostForm @onCreatePost="createPost" />
    </Dialog>
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
    this.getPosts();
  },
  data() {
    return {
      sort: "",
      searchValue: "",
      currentPage: 1,
      totalPages: 0,
      postsLimit: 6,
      isVisibleCreateModal: false,
      posts: [],
      sortOptions: [
        {
          value: "title",
          name: "Title",
        },
        {
          value: "body",
          name: "Desc",
        },
      ],
    };
  },
  computed: {
    filteredPosts() {
      return this.posts.sort((a, b) => {
        return a[this.sort]?.localeCompare(b[this.sort]);
      });
    },
    sortedAndSearchedPosts() {
      return this.filteredPosts.filter((el) =>
        el.title.toLowerCase().includes(this.searchValue.toLowerCase())
      );
    },
  },
  methods: {
    async getPosts() {
      await this.axios({
        method: "GET",
        url: `https://jsonplaceholder.typicode.com/posts`,
        params: {
          _page: this.currentPage,
          _limit: this.postsLimit,
        },
      })
        .then((res) => {
          this.totalPages = Math.ceil(
            res.headers["x-total-count"] / this.postsLimit
          );
          this.posts = res.data;
        })
        .catch((err) => console.log(err));
    },
    async loadMorePosts() {
      await this.axios({
        method: "GET",
        url: `https://jsonplaceholder.typicode.com/posts`,
        params: {
          _page: this.currentPage,
          _limit: this.postsLimit,
        },
      })
        .then((res) => {
          this.totalPages = Math.ceil(
            res.headers["x-total-count"] / this.postsLimit
          );
          this.posts = [...this.posts, ...res.data];
        })
        .catch((err) => console.log(err));
    },
    createPost(newPost) {
      if (newPost.title && newPost.desc) {
        const newPostInfo = {
          id: Date.now(),
          title: newPost.title,
          body: newPost.desc,
        };
        this.posts = [newPostInfo, ...this.posts];
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
  // watch: {
  //   sort() {
  //     this.posts.sort((a, b) => {
  //       return a[this.sort]?.localeCompare(b[this.sort]);
  //     });
  //   },
  // },
};
</script>

<style lang="scss" scoped>
.home {
  &__btns {
    display: flex;
    align-items: center;
    margin: 15px 0;
  }
}
</style>
