<template>
    <div class="timeline">
        Timeline
        <div v-for="(item,index) in items" :key="index">
            {{item.name}}
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
  