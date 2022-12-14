<template>
    <div class="test">
        <h1>test</h1>
      {{categoriesMap}}  
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'Test',
    data() {
      return {}
    },
    props: {
      categoriesMap: Object,
    },
  };
  </script>
  
  