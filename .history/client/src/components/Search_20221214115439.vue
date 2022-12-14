<template>
  <div class="search">
    <h1>{{appName}}</h1>
    <SearchBar @apply-search="$emit('apply-search', $event)"/>
    <SearchCategory :categoriesMap="categoriesMap" :selectedCategories="selectedCategories" @toggle-category="$emit('toggle-category', $event)"/>
  </div>
</template>

<script>
import SearchBar from './SearchBar.vue';
import SearchCategory from './SearchCategory';
import Vue from 'vue';

export default {
  name: 'Search',
  components: {SearchBar, SearchCategory},
  data() {
    return {
      appName: Vue.data.'appName')
    }
  },
  props: {
    categoriesMap: Object,
    selectedCategories: Array,
  },
  emits: ['toggle-category', 'apply-search'],
};
</script>

<style scoped>

</style>
