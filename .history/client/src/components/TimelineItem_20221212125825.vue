<template>
    <div>
        <div>
            <div>img</div>
            <div>
                <p>
                    {{item.res}}
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
    },
  };

</script>
  
  <style scoped>
  
  </style>
  