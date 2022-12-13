<template>
  <div class="hello">
            <InputText placeholder="Keyword"/>
            <Button icon="pi pi-search" class="p-button-warning"/>
  </div>
</template>

<script>
import InputText from 'primevue/inputtext';

export default {
  name: 'Search',
  components: InputText,
};
</script>

<style scoped>

</style>
