<template>
    <div class="item-container">
        <div class="main">
            <div><img :src="{{`../../..${item.topic_data.icon_path}`}}"></div>
            <p>{{`../../..${item.topic_data.icon_path}`}}</p>
            <div>
                <p class="title">
                    {{item.topic_data.name}} {{categoriesMap[item.resource_type]}}
                </p>
                <p>
                    {{item.d_created}}
                </p>
            </div>
        </div>  
        <div>
            View work
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
        border:1px solid lightgray;
        border-radius: 5px;
        padding: 10px 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .title{
        font-weight: bold;
    }
    
    .main{
        display: flex;
        align-items: center;
    }

    p{
     margin: 10px 0px;   
    }
  </style>
  