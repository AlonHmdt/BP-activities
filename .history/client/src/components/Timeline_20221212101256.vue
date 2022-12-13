<template>
    <div class="timeline">
        Timeline
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
      
      this.items.map((item) => {

            const month = new Date(item.d_created * 1000).getMonth() + 1;
        		const monthLabel = new Date(item.d_created * 1000).toLocaleString('en-IL', { month: "long" });
      	 		const normalizeItem =  {
              ...item,
              d_created: this.normalizeDate(item),
              topic_data: {...item.topic_data, name: 				this.firstLetterToUpperCase(item.topic_data.name)}            
            } 
            
        if (this.tasksByMonths[month]) {
              this.tasksByMonths[month].push(normalizeItem);
            } else {
              this.tasksByMonths[month] = [];
              this.monthsLabel[month] = monthLabel;
            }
            return normalizeItem;
        });
    },
    computed : {
      // itemsList() {
      //   if (this.selectedCategories.indexOf('all') > -1 ) {
      //     return this.items;
      //   }
      //   return this.items.filter(item => this.selectedCategories.indexOf(item.resource_type) > -1);
      // },    
      
    },
    
  };

</script>
  
  <style scoped>
  
  </style>
  