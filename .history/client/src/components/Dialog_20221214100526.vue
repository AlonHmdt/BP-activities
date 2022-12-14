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
  name: 'Dialog',
  components: {SearchBar, SearchCategory},
};
</script>

<style scoped>

</style>
