<template>
  <div class="search">
    <SearchBar @apply-search="$emit('apply-search', $event)"/>
    <SearchCategory :categoriesMap="categoriesMap" :selectedCategories="selectedCategories" @toggle-category="$emit('toggle-category', $event)"/>
  </div>
</template>

<script>


export default {
  name: 'Dialog',

};
</script>

<style scoped>

</style>
