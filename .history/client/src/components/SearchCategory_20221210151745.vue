<template>
    <div class="searchbar">
      <div class="p-inputgroup">
          <InputText placeholder="Search Timeline" class="p-inputtext-sm"/>
          <Button icon="pi pi-search" class="p-button-warning"/>
      </div>
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'SearchCategory',
    components: {InputText,Button}
  };
  </script>
  
  <style scoped>



  </style>
  