<template>
    <div class="item-container">
        <div class="main">
            <div class="icon-container">
                <img class="icon" v-bind:src="item.topic_data.icon_path">
                <span class="badge">Jr.</span>
            </div>
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

    .icon-container{
        margin-right: 10px;
        position: relative;
        display: inline-block;
    }
    
    .icon{
        border-radius: 50%;
        background: grey;
        height: 40px;
        padding: 5px;
    }
    .badge{
        font-size:10px;
        background: orange;
        padding: 3px;
        border-radius: 50%;
        position: absolute;
        right: -10px;
        bottom:0px;

    }
  </style>
  