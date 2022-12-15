<template>
  <div
    :class="[
      viewType === 'list' ? 'item-container-list' : 'item-container-dialog',
    ]"
  >
    <div class="main">
      <div class="icon-container">
        <img
          v-bind:src="item.topic_data.icon_path"
          :class="[
            item.product === 'bpjr' ? 'bpjr-icon' : '',
            item.product === 'bp' ? 'bp-icon' : '',
            'icon',
          ]"
        />
        <span v-if="item.product === 'bpjr'" class="badge">Jr.</span>
      </div>
      <div>
        <p class="title">
          {{ item.topic_data.name }} {{ $store.state[item.resource_type] }}
        </p>
        <p>
          {{ getDate(item.d_created) }} <span>&diams;</span>
          {{ getTime(item.d_created) }}
        </p>
      </div>
    </div>
    <div
      v-if="item.actions.score || item.actions.zoom"
      class="actions-container"
    >
      <div v-if="item.actions.score">
        <span class="score-title">Score</span> {{ item.score }}/{{
          item.possible_score
        }}
      </div>
      <div v-if="item.actions.zoom" @click="openDialog(item.id)" class="zoom">
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

.item-container-dialog {
}

.title {
  font-weight: bold;
}

.main {
  display: flex;
  align-items: center;
}

p {
  margin: 10px 0px;
}

.icon-container {
  margin-right: 15px;
  position: relative;
  display: inline-block;
}

.icon {
  border-radius: 50%;
  height: 40px;
  padding: 5px;
}

.bpjr-icon {
  background: #f8b80e;
}

.bp-icon {
  background: #01cbcb;
}

.badge {
  font-size: 10px;
  background: #fecd65;
  padding: 2px;
  border-radius: 50%;
  position: absolute;
  right: -5px;
  bottom: 0px;
  font-weight: bold;
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
  