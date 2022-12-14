<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/homev2">Home v2</router-link>
    </div>
    <h3>Timeline</h3>
    <router-view/>
  </div>
</template>


<script>
import SearchBar from './SearchBar.vue';
import SearchCategory from './SearchCategory';
import Vue from 'vue';

export default {
  name: 'Search',
  components: {SearchBar, SearchCategory},
  props: {
    categoriesMap: Object,
    selectedCategories: Array,
  },
  emits: ['toggle-category', 'apply-search'],
};  
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 20px 40px;

}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
