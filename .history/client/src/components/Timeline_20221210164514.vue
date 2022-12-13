<template>
    <div class="timeline">
        Timeline
        <div v-for="(item,index) in items" :key="index">
            {{categoriesMap[item.resource_type]}}
        </div>
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'Timeline',
    props: {
        items: Array,
        categoriesMap: Object,
    },
  };

</script>
  
  <style scoped>
  
  </style>
  