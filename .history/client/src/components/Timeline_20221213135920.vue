<template>
    <div class="timeline">
        <div v-for="(month,monthIndex) in getItems" :key=monthIndex>
          <span class="month-label">
                {{monthsLabel[month.month_id]}}
              </span>
              <div class="divider"></div>
            <div v-for="(item,itemIndex) in month.items" :key=itemIndex>
              <TimelineItem :item="item" :categoriesMap="categoriesMap"/>
              <div class="divider" v-if="!month.items.length > itemIndex">
                {{month.items.length}}
              </div>
            </div>
  	    </div>
    </div>
  </template>
  
  <script>
  
  import TimelineItem from '@/components/TimelineItem.vue';

  export default {
    name: 'Timeline',
    components: {TimelineItem},
    data() {
      return {
        monthsLabel: ["January","February","March","April","May","June","July",
            "August","September","October","November","December"]
      }
    },
    props: {
        items: Array,
        categoriesMap: Object,
        selectedCategories: Array
    },
    methods: {
		   normalizeDate: (item) => {
          	return new Date(item.d_created * 1000);
      },
      firstLetterToUpperCase: (str) => {
          	const arr = str.split(" ");
        		for (var i = 0; i < arr.length; i++) {
      				arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
		  			}
        		return arr.join(" ");
      },
    },
    computed: {
      getItems() {
        const tasksByMonths = {};
        this.items.map((item) => {
         const month = new Date(item.d_created * 1000).getMonth();
      	 const normalizeItem =  {
           ...item,
           topic_data: {...item.topic_data, name:this.firstLetterToUpperCase(item.topic_data.name), icon_path: require(`../../../assets/topics/adalovelace.png`)}            
         } 

        if (tasksByMonths[month]) {
            tasksByMonths[month].push(normalizeItem);
         } else {
           tasksByMonths[month] = [];
           tasksByMonths[month].push(normalizeItem);
         }
        });

        const tasksByDescendingMonths =  Object.keys(tasksByMonths).sort((a,b) => b-a).map(month => {
          return {
            month_id: month,
            items: tasksByMonths[month]
          }
        })
        return tasksByDescendingMonths;
      }
    }
  };

</script>
  
  <style scoped>
  .timeline{
    margin-top:20px;
  }
    .month-label{
        background-color: #FCF8E5;
        padding: 5px 20px;
        border-radius: 50px;
   }

   .divider{
    width: 50px;
    height: 25px;
    border-right: 1px solid lightgray;
   }
  </style>
  