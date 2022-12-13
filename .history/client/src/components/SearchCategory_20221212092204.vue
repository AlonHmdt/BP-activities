<template>
    <div class="searchcategory">
        <p>Filter by:</p>
        <div class="categories">
            <span class="chip">All Work</span>
            <span 
                :class="[selectedCategories.indexOf(key) > 0 ? 'selected-chip' : '', 'chip']" 
                @click=""
                v-for="(category, index) in categoriesMap" :key="index"
            >
                <!-- <i :v-if="selectedCategories.indexOf(key) > 0" class="pi pi-check"></i> -->
                {{category}}
            </span>
        </div>
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'SearchCategory',
    props: {
        categoriesMap: Object
    },
    data () {
        return{
            selectedCategories: []
        }
    },
    methods: {
        toggleCategory(categoryId) {
            console.log
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
  