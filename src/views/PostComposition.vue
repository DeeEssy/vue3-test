<template>
  <div class="home">
    <Input v-focus v-model="searchQuery" placeholder="Search" />
    <div class="home__btns">
      <Button @onClick="isVisibleCreateModal = !isVisibleCreateModal">
        Create a post
      </Button>
      <Select v-model="sort" :data="sortOptions" />
    </div>
    <PostList :posts="sortedAndSearchedPosts" />
    <!-- <div v-intersection="loadMorePosts" class="observer"></div> -->
  </div>
</template>

<script>
import PostList from "@/components/PostList";
import { ref } from "vue";
import usePosts from "@/hooks/usePosts";
import useSortedPosts from "@/hooks/useSortedPosts";
import useSortedAndSearchedPosts from "@/hooks/useSortedAndSearchedPosts";

export default {
  name: "Home",
  components: {
    PostList,
  },
  data() {
    return {
      isVisibleCreateModal: false,
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
  setup(props) {
    const { posts, totalPages } = usePosts();
    const { sort, filteredPosts } = useSortedPosts(posts);
    const { searchQuery, sortedAndSearchedPosts } = useSortedAndSearchedPosts(
      filteredPosts
    );

    return {
      posts,
      totalPages,
      sort,
      filteredPosts,
      searchQuery,
      sortedAndSearchedPosts,
    };
  },
};
</script>
