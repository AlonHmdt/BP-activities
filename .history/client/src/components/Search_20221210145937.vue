<template>
  <div class="hello">
    <div class="p-inputgroup">
        <InputText placeholder="Keyword"/>
        <Button icon="pi pi-search" class="p-button-warning"/>
    </div>
  </div>
</template>

<script>
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

export default {
  name: 'Search',
  components: {SearchBar}
};
</script>

<style scoped>

</style>
