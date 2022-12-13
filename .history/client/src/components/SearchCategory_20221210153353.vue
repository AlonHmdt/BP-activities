<template>
    <div class="searchcategory">
        <p>Filter by:</p>
        <span class="chip" v-for="(category, index) in categoris" :key="index">{{category}}</span>
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
        color:  #008081;
        font-size: 12px;
        border: 2px solid #008081;
        margin: 0px 3px;
        padding: 5px 15px;
    }
  </style>
  