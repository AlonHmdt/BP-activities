<template>
    <div class="search">
      <SearchBar/>
      <SearchCategory/>
    </div>
  </template>
  
  <script>
  import SearchBar from './SearchBar.vue';
  import SearchCategory from './SearchCategory';
  
  export default {
    name: 'Search',
    components: {Timeline, SearchCategory}
  };
  </script>
  
  <style scoped>
  
  </style>
  