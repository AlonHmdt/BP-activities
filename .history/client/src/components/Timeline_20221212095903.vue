<template>
    <div class="timeline">
        Timeline
        <div v-for="(item,index) in tasksMapped" :key="index">
            {{categoriesMap[item.resource_type]}}
        </div>
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'Timeline',
    data() {
      return {
        monthsLabel: {} 
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

    computed : {
      // itemsList() {
      //   if (this.selectedCategories.indexOf('all') > -1 ) {
      //     return this.items;
      //   }
      //   return this.items.filter(item => this.selectedCategories.indexOf(item.resource_type) > -1);
      // },
      
      tasksMapped() {
        const tasksByMonths = {};
        this.item.sort((a,b) => {return a.d_created - b.d_created;
    `` });

        return [];
      },
    
      
    },
    
  };

</script>
  
  <style scoped>
  
  </style>
  