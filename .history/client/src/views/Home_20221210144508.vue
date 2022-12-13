<template>
  <div class="home">
    <Button label="Submit" icon="pi pi-check" iconPos="right" />
    <Chip label="Text with icon" icon="pi pi-check" />

    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Button from 'primevue/button';
import Chip from 'primevue/chip';
export default {
  name: 'home',
  components: {
    HelloWorld,
    Button.
    Chip
  }
}
</script>
