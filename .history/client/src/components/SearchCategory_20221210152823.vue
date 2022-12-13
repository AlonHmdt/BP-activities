<template>
    <div class="searchcategory">
        <p>Filter by:</p>
        <span v-for="(category, index) in categoris" :key="index">{{category}}</span>
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

  </style>
  