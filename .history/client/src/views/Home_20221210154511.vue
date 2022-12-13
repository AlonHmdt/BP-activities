<template>
  <div class="home">
    <Search/>
    <Timeline />
  </div>
</template>

<script>
// @ is an alias to /src
import Search from '@/components/Search.vue'

export default {
  name: 'home',
  components: {
    Search,
    Timeline
  }
}
</script>
