<template>
  <div class="search">
    <SearchBar @apply-search="$emit('apply-search', $event)"/>
    <SearchCategory :categoriesMap="categoriesMap" :selectedCategories="selectedCategories" @toggle-category="$emit('toggle-category', $event)"/>
  </div>
</template>

<script>
import SearchBar from './SearchBar.vue';
import SearchCategory from './SearchCategory';

export default {
  name: 'Search',
  components: {SearchBar, SearchCategory},
  props: {
    categoriesMap: Object,
    selectedCategories: Array,
  },
  emits: ['toggle-category'],
};
</script>

<style scoped>

</style>
