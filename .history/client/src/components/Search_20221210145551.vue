<template>
  <div class="hello">

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
