<template>
  <div class="search">
    <SearchBar/>
    <SearchCategory :categoriesMap="categoriesMap" @toggle-category="$emit('toggle-category', categoryId)"/>
  </div>
</template>

<script>
import SearchBar from './SearchBar.vue';
import SearchCategory from './SearchCategory';

export default {
  name: 'Search',
  components: {SearchBar, SearchCategory},
  props: {
    categoriesMap: Object
  },
  emoits
};
</script>

<style scoped>

</style>
