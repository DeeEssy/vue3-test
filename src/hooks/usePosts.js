import { onMounted, ref } from "vue";
import axios from "axios";

export default function usePosts(postsLimit = 10) {
  let posts = ref([]);
  let currentPage = ref(1);
  let totalPages = ref(0);

  const fetching = async () => {
    axios({
      method: "GET",
      url: `https://jsonplaceholder.typicode.com/posts`,
      params: {
        _page: currentPage,
        _limit: postsLimit,
      },
    })
      .then((res) => {
        totalPages.value = Math.ceil(res.headers["x-total-count"] / postsLimit);
        posts.value = res.data;
      })
      .catch((err) => console.log(err));
  };

  onMounted(fetching);
  return {
    posts,
    totalPages,
  };
}
