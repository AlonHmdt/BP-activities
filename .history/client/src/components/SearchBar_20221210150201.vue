<template>
    <div class="searchbar">
      <div class="p-inputgroup">
          <InputText placeholder="Search Timeline"/>
          <Button icon="pi pi-search" class="p-button-warning"/>
      </div>
    </div>
  </template>
  
  <script>
  import InputText from 'primevue/inputtext';
  import Button from 'primevue/button';
  
  export default {
    name: 'SearchBar',
    components: {InputText,Button}
  };
  </script>
  
  <style scoped>
    .searchbar {
      width: 30%;
    }
  </style>
  