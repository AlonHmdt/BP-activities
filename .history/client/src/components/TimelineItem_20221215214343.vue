<template>
  <div :class="[viewType === 'list' ? 'item-container-list' : '']">
    <div :class="[viewType === 'list' ? 'main-list' : 'main-dialog']">
      <div :class="[viewType === 'list' ? 'mr-3' : '', 'icon-container']">
        <img
          :src="getImg"
          :class="[
            item.product === 'bpjr' ? 'bpjr-icon' : 'bp-icon',
            viewType === 'list' ? 'icon-list' : 'icon-dialog',
          ]"
        />
        <span
          v-if="item.product === 'bpjr'"
          :class="[
            viewType === 'list' ? 'badge-list' : 'badge-dialog',
            'badge',
          ]"
          >Jr.</span
        >
      </div>
      <div>
        <p :class="[viewType === 'list' ? '' : 'text-3xl', 'font-bold']">
          {{ item.topic_data.name }} {{ $store.state[item.resource_type] }}
        </p>
        <p :class="[viewType === 'list' ? '' : 'text-lg']">
          {{ getDate(item.d_created) }} <span>&diams;</span>
          {{ getTime(item.d_created) }}
        </p>
        <div
          v-if="viewType === 'dialog'"
          :class="[
            viewType === 'list' ? '' : ['text-2xl', 'text-left', 'my-6'],
          ]"
        >
          {{ item.comment }}
        </div>
      </div>
    </div>
    <div
      v-if="item.actions.score || item.actions.zoom"
      class="actions-container"
    >
      <div
        v-if="item.actions.score"
        :class="[viewType === 'dialog' ? 'text-xl' : '']"
      >
        <span class="score-title">Score</span> {{ item.score }}/{{
          item.possible_score
        }}
      </div>
      <div
        v-if="item.actions.zoom && viewType === 'list'"
        @click="openDialog(item.id)"
        class="zoom"
      >
        <i class="pi pi-eye"></i>
        View work
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "TimelineItem",
  props: {
    viewType: String,
    item: Object,
  },
  methods: {
    getDate(unixTimeStamp) {
      return new Date(unixTimeStamp * 1000).toLocaleString([], {
        dateStyle: "medium",
      });
    },
    getTime(unixTimeStamp) {
      return new Date(unixTimeStamp * 1000).toLocaleTimeString([], {
        hourCycle: "h24",
        timeStyle: "short",
      });
    },
    openDialog(itemId) {
      this.$router.push(`activities/${itemId}`);
    },
  },
  computed: {
    getImg() {
      const path = "../assets/topics/adalovelace.png";
      const dynamicPath = ".." + this.item.topic_data.icon_path;
      const images = require.context("../assets/topics/", false, /\.png$/);
      console.log("dynamic", dynamicPath);
      // return images(".." + this.item.topic_data.icon_path);
      return require('srec');
    },
  },
};
</script>
  
  <style scoped>
.item-container-list {
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.main-list {
  display: flex;
  align-items: center;
}

.main-dialog {
  display: block;
  text-align: center;
}

p {
  margin: 10px 0px;
}

.icon-container {
  position: relative;
  display: inline-block;
}

.icon-list {
  border-radius: 50%;
  height: 40px;
  padding: 5px;
}

.icon-dialog {
  border-radius: 50%;
  height: 70px;
  padding: 5px;
}

.bpjr-icon {
  background: #f8b80e;
}

.bp-icon {
  background: #01cbcb;
}

.badge {
  background: #fecd65;
  padding: 2px;
  border-radius: 50%;
  position: absolute;
  right: -5px;
  bottom: 0px;
  font-weight: bold;
}
.badge-list {
  font-size: 10px;
}
.badge-dialog {
  font-size: 15px;
}
.actions-container {
  color: #008081;
  font-weight: bold;
  display: flex;
}

.zoom {
  display: flex;
  align-items: center;
  margin-left: 15px;
  cursor: pointer;
}

.score-title {
  font-weight: lighter;
}
</style>
  