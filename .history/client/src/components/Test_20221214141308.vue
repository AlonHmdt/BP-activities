<template>
    <div class="test">
      
      
      
    </div>
  </template>
  
  <script>
  
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
  
  