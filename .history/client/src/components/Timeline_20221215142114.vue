<template>
  <div class="timeline">
    <div v-for="(month, monthIndex) in getItems" :key="monthIndex">
      <span class="month-label">
        {{ monthsLabel[month.month_id] }}
      </span>
      <div class="divider"></div>
      <div v-for="(item, itemIndex) in month.items" :key="itemIndex">
        <TimelineItem :viewType="'list'" :item="item" />
        <div class="divider" v-if="itemIndex !== month.itemslength - 1"></div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
  
  <script>
import TimelineItem from "@/components/TimelineItem.vue";

export default {
  name: "Timeline",
  components: { TimelineItem },
  data() {
    return {
      monthsLabel: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
    };
  },
  props: {
    items: Array,
    categoriesMap: Object,
    selectedCategories: Array,
  },
  methods: {},
  computed: {
    getItems() {
      const tasksByMonths = {};
      this.items.forEach((item) => {
        const month = new Date(item.d_created * 1000).getMonth();

        if (tasksByMonths[month]) {
          tasksByMonths[month].push(item);
        } else {
          tasksByMonths[month] = [];
          tasksByMonths[month].push(item);
        }
      });

      const tasksByDescendingMonths = Object.keys(tasksByMonths)
        .sort((a, b) => b - a)
        .map((month) => {
          return {
            month_id: month,
            items: tasksByMonths[month],
          };
        });
      return tasksByDescendingMonths;
    },
  },
};
</script>
  
  <style scoped>
.timeline {
  margin-top: 20px;
}
.month-label {
  background-color: #fcf8e5;
  padding: 5px 20px;
  border-radius: 50px;
}

.divider {
  width: 50px;
  height: 25px;
  border-right: 1px solid lightgray;
}
</style>
  