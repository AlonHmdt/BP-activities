<template>
  <div class="home">
    <Search/>
    <Timeline :items="{items}"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Search from '@/components/Search.vue';
import Timeline from '@/components/Timeline.vue';
export default {
  name: 'home',
  components: {
    Search,
    Timeline
  },
  data() {
    return {
      items: []
    }
  },
  beforeCreate() {

  },
  created() {
    console.log(this.items);
  }
}
</script>
