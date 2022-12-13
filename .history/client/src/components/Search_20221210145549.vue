<template>
  <div class="hello">
            <InputText placeholder="Keyword"/>
            <Button icon="pi pi-search" class="p-button-warning"/>
            <div class="p-inputgroup">
            <Button label="Search"/>
            <InputText placeholder="Keyword"/>
        </div>
  </div>
</template>

<script>
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

export default {
  name: 'Search',
  components: {InputText,Button}
};
</script>

<style scoped>

</style>
