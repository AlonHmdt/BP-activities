<template>
    <div class="timeline">
        Timeline
        <div v-for="(month,index) in getItems" :key=index>
          <div>
       <h3>
         {{monthsLabel[index]}}
      </h3>
      	<div v-for="(item,index) in month" :key=index>
          <p>
            {{item.d_created}}
          </p>
          <p>
          {{item.topic_data.name}}  
          </p>
      </div>
  	</div>
        </div>
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'Timeline',
    data() {
      return {
        monthsLabel: {},
        tasksByMonths: {},
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
    created() {
      this.items.sort((a,b) => {
       return a.d_created - b.d_created;
     });
      
    },
    computed: {
      getItems() {
        return this.tasksByMonths;
      }
    }
  
  };

</script>
  
  <style scoped>
  
  </style>
  