<template>
    <div class="timeline">
        Timeline
        <div v-for="(item,index) in itemsList" :key="index">
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
        selectedCategories: Array
    },
    computed : {
      itemsList() {
        if (this.selectedCategories.indexOf('all') > -1 ) {
          return this.items;
        }
        return [];
      }
    }
  };

</script>
  
  <style scoped>
  
  </style>
  