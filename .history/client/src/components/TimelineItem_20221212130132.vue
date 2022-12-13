<template>
    <div>
        <div class="item-container">
            <div>img</div>
            <div>
                <p>
                    {{item.topic_data.name}} {{categoriesMap[item.resource_type]}}
                </p>
                <p>

                </p>
            </div>
        </div>  
        <div>
            View Work
        </div>
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
        categoriesMap: Object,
    },
  };

</script>
  
  <style scoped>
    .item-container{
        border:1px solid grey;
    }
  </style>
  