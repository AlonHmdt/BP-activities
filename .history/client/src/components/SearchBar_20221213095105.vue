<template>
    <div class="searchbar">
      <div class="p-inputgroup">
          <InputText v-model="keyword" placeholder="Search Timeline" class="p-inputtext-sm" @keypress="applySearch()"/>
          <Button icon="pi pi-search" class="p-button-warning" @click="applySearch()"/>
      </div>
    </div>
  </template>
  
  <script>
  import InputText from 'primevue/inputtext';
  import Button from 'primevue/button';
  
  export default {
    name: 'SearchBar',
    components: {InputText,Button},
    data() {
      return {
        keyword: '',
      }
    },
    methods: {
      applySearch($event){
        
        console.log(this.keyword);
      }
    } 
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
      background: #008081 !important;
      border-color: #008081 !important;
    }

    input::placeholder {
      font-weight: bold;      
    } 


  </style>
  