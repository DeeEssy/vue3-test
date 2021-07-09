<template>
  <form @submit.prevent="createPost">
    <h4>Create a post</h4>
    <Input v-focus v-model.trim="newPost.title" placeholder="Title" />
    <Input v-model.trim="newPost.desc" placeholder="Desc" />
    <Button>Create</Button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      newPost: {
        title: "",
        desc: "",
      },
    };
  },
  methods: {
    createPost() {
      this.$emit("onCreatePost", this.newPost);
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
}
</style>
