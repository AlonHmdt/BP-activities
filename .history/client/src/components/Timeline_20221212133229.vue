<template>
    <div class="timeline">
        Timeline
        <div v-for="(month,index) in getItems" :key=index>
          <div>
              <p>
                {{monthsLabel[index]}}
              </p>
              <div v-for="(item,index) in month" :key=index>
                <TimelineItem :item="item" :categoriesMap="categoriesMap"/>
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
          	return new Date(item.d_created * 1000).toLocaleDateString('en-IL');
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
           d_created: this.normalizeDate(item),
           topic_data: {...item.topic_data, name:this.firstLetterToUpperCase(item.topic_data.name)}            
         } 

        if (tasksByMonths[month]) {
            tasksByMonths[month].push(normalizeItem);
         } else {
           tasksByMonths[month] = [];
           tasksByMonths[month].push(normalizeItem);
         }
        });

        return tasksByMonths;
      }
    }
  };

</script>
  
  <style scoped>
  
  </style>
  