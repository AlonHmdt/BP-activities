<template>
    <div class="timeline">
        Timeline
        <div v-for="item in items">

        </div>
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'Timeline',
    props: {
        items: Array,
    },
  };

</script>
  
  <style scoped>
  
  </style>
  