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

export default {
  name: 'Search',
  components: InputText,
};
</script>

<style scoped>

</style>
