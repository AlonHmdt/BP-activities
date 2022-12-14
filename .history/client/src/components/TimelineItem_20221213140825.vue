<template>
    <div class="item-container">
        <div class="main">
            <div class="icon-container">
                <img class="icon" v-bind:src="item.topic_data.icon_path"
                    :class=""  
                >
                <span v-if="item.product === 'bpjr'" class="badge">Jr.</span>
            </div>
            <div>
                <p class="title">
                    {{item.topic_data.name}} {{categoriesMap[item.resource_type]}}
                </p>
                <p>
                    {{getDate(item.d_created)}} <span>&diams;</span> {{getTime(item.d_created)}}
                </p>
            </div>
        </div>  
        <div class="actions-container">
            <div>
                Score
            </div>
            <div class="see-work">
                <i class="pi pi-eye"></i>
                View work
            </div>
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
    methods: {
        getDate(unixTimeStamp){
            return new Date(unixTimeStamp * 1000).toLocaleString([],{ dateStyle: "medium" });
        },
        getTime(unixTimeStamp){
            return new Date(unixTimeStamp * 1000).toLocaleTimeString([], {hourCycle: 'h24', timeStyle:'short'});
        }
    }
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
        margin-right: 15px;
        position: relative;
        display: inline-block;
    }
    
    .icon{
        border-radius: 50%;
        background: #F8B80E;
        height: 40px;
        padding: 5px;
    }
    .badge{
        font-size:10px;
        background: #FECD65;
        padding: 2px;
        border-radius: 50%;
        position: absolute;
        right: -5px;
        bottom:0px;
        font-weight: bold;
    }

    .actions-container{
        color: #008081;
        font-weight: bold;
        display: flex;
    }

    .see-work{
        display:flex;
        align-items: center;
        margin-left: 15px;
    }
  </style>
  