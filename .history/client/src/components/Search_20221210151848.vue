<template>
  <div class="search">
    <SearchBar/>
  </div>
</template>

<script>
import SearchBar from './SearchBar.vue';
import SearchCategory from './SearchCategory';

export default {
  name: 'Search',
  components: {SearchBar, SearchCategory}
};
</script>

<style scoped>

</style>
