<template>
    <div class="searchcategory">
        <p>Filter by:</p>
        <div class="categories">
            <span 
                   :class="[selectedCategories.indexOf('all') > -1 ? 'selected-chip' : '', 'chip']"  
                   @click="toggleCategory('all')">All Work</span>
            <span 
                :class="[selectedCategories.indexOf(index) > -1 ? 'selected-chip' : '', 'chip']" 
                @click="toggleCategory(index)"
                v-for="(category, index) in categoriesMap" :key="index"
            >
                <span :v-if="selectedCategories.indexOf(index) > -1" ><i class="pi pi-check"></i></span>
                {{category}}
            </span>
        </div>
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'SearchCategory',
    props: {
        categoriesMap: Object,
        selectedCategories: Array,
    },
    methods: {
        toggleCategory(categoryId) {
            this.$emit('toggle-category', categoryId);
        }
    }

  };
  </script>
  
  <style scoped>
    .chip {
        cursor: pointer;
        color: #008081;
        font-size: 12px;
        border: 2px solid #008081;
        margin: 2px 3px;
        padding: 5px 15px;
        border-radius: 5px;
        font-weight: bold;
    }

    .selected-chip{
        background-color: #00808130;
    }

    i {
        font-size: 10px;
        font-weight: bold;
        background:  #008081;
        border-radius: 50%;
        padding: 4px;
        color: white;
    }

    .categories {
        display: flex;
        flex-wrap: wrap;
    }
  </style>
  