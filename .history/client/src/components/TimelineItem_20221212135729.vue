<template>
    <div class="item-container">
        <div>
            <div><img :src="require(`..${item.topic_data.icon_path}`)"></div>
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
    computed: {
            imglink() {
                // this.imagelink
                return  require(q..') //changed this
            }
        }
  };

</script>
  
  <style scoped>
    .item-container{
        border:1px solid lightgray;
        border-radius: 5px;
        padding: 10px 20px;
    }

    .title{
        font-weight: bold;
    }
  </style>
  