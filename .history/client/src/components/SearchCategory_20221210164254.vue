<template>
    <div class="searchcategory">
        <p>Filter by:</p>
        <div class="categories">
            <span class="chip" v-for="(category in categoriesMap">
                <!-- <i class="pi pi-check"></i> -->
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
    data() {
        return {
            categoris: [
                'All Work',
                'Movie',
                'Quiz',
                'Easy Quiz',
                'Make-a-Map',
                'Make-a-Movie',
                'Word-Play',
                'Related Reading',
                'Challenge',
                'Darw About it',
            ],
            selectedCategories: [
                'All Work'
            ]
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
  