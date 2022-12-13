<template>
    <div>
        Item
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'TimelineItem',
    data() {
      return {
        monthsLabel: ["January","February","March","April","May","June","July",
            "August","September","October","November","December"]
      }
    },
    props: {
        item: Object,

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
        
      getItemNormalize() {
        return {
           ...item,
           d_created: this.normalizeDate(item),
           topic_data: {...item.topic_data, name: 				this.firstLetterToUpperCase(item.topic_data.name)}            
         } 
      }
    }
  };

</script>
  
  <style scoped>
  
  </style>
  