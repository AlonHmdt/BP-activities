<template>
    <div class="searchbar">
      <div class="p-inputgroup">
          <InputText placeholder="Search Timeline" class="p-inputtext-sm"/>
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

    input {
      padding: 5px;
    }

    i{
      cursor: pointer;
    }

    button{
      background: red !important;
      
    }

    input::placeholder {
      fone-
    } 


  </style>
  