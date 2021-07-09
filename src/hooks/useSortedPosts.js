import { computed, ref } from "vue";
export default function useSortedPosts(posts) {
  const sort = ref("");
  const filteredPosts = computed(() => {
    return posts.value.sort((a, b) => {
      return a[sort.value]?.localeCompare(b[sort.value]);
    });
  });
  return {
    sort,
    filteredPosts,
  };
}
