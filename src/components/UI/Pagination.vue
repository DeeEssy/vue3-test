<template>
  <div class="pagination">
    <div
      v-for="item in totalPages"
      :key="item"
      @click="$emit('changeCurrentPage', item)"
      :class="[
        'pagination__item',
        currentPage == item && 'pagination__item_active',
      ]"
    >
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    totalPages: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  &__item {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 40px;
    min-height: 40px;
    max-height: 40px;
    max-width: 40px;
    border: 1px solid #000;
    margin: 0 10px;
    &_active {
      background-color: #000;
      color: #fff;
    }
  }
}
</style>
