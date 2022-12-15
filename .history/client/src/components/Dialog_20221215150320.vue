<template>
  <div class="dialog">
    <div class="modal-content">
      <router-link :to="'/'">
        <span class="close">&times;</span>
      </router-link>
      <div v-if="item.topic_data">
        <TimelineItem :viewType="'dialog'" :item="item" />
      </div>
    </div>
  </div>
</template>

<script>
import TimelineItem from "@/components/TimelineItem.vue";

export default {
  name: "Dialog",
  components: { TimelineItem },
  data() {
    return {
      item: {},
    };
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      const items = vm.$store.state.items;
      const itemToShow = items.find((item) => {
        return item.id === vm.$route.params.id && item.actions.zoom;
      });
      if (!itemToShow) {
        vm.$router.replace("/");
        return;
      }
      vm.item = itemToShow;
    });
  },
};
</script>

<style scoped>
.dialog {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 10px;
  width: 60%;
  border: 5px solid #888;
  border-radius: 20px;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.icon {
  border-radius: 50%;
  height: 80px;
  padding: 5px;
}
</style>
