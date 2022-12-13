<template>
  <div class="home">
    <Button label="Submit" icon="pi pi-check" iconPos="right" />
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Button from 'primevue/button';

export default {
  name: 'home',
  components: {
    HelloWorld,
    Button
  }
}
</script>
