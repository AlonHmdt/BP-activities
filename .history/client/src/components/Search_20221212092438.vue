<template>
  <div class="search">
    <SearchBar/>
    <SearchCategory :categoriesMap="categoriesMap" @toggle-category=""/>
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
  }
};
</script>

<style scoped>

</style>
