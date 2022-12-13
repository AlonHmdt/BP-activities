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
    data() {
      monthsLabel: {},
    }
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
        return this.items.filter(item => this.selectedCategories.indexOf(item.resource_type) > -1);
      }
    }
  };

</script>
  
  <style scoped>
  
  </style>
  