<template>
  <div class="search">
    {{categoriesMap}}
    <!-- <SearchBar @apply-search="$emit('apply-search', $event)"/> -->
    <!-- <SearchCategory :categoriesMap="categoriesMap" :selectedCategories="selectedCategories" @toggle-category="$emit('toggle-category', $event)"/> -->
  </div>
</template>

<script>
import SearchBar from './SearchBar.vue';
import SearchCategory from './SearchCategory';

export default {
  name: 'Search',
  components: {SearchBar, SearchCategory},
  data() {
    return {}
  },
  props: {
    categoriesMap: Object,
    selectedCategories: Array,
  },
  emits: ['toggle-category', 'apply-search'],
};
</script>

