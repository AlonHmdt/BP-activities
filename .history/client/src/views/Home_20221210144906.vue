<template>
  <div class="home">
    <Button label="Submit" icon="pi pi-check" iconPos="right" />

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
    Button,
  }
}
</script>
