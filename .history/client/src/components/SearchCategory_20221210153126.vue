<template>
    <div class="searchcategory">
        <p>Filter by:</p>
        <p class="chip" v-for="(category, index) in categoris" :key="index">{{category}}</label>
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'SearchCategory',
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
            ]
        }
    }
  };
  </script>
  
  <style scoped>
    .chip {
        border-color: #008081;
    }
  </style>
  