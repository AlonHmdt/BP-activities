<template>
<div class="dialog">
<div class="modal-content">
  <router-link :to="'/'">
    <span class="close">&times;</span>
  </router-link>
  <h1>{{id}}</h1>
  <p>Some text in the Modal..</p>
</div>

</div>
</template>

<script>


export default {
  name: 'Dialog',
  data() {
    id: String
  },
  beforeRouteEnter(to, from, next) {
    getItem(to.params.id, (err, post) => {
      // `setData` is a method defined below
      next(vm => vm.setData(err, post))
    })
  },
  methods: {
    setData(error, post) {
      if (error) {
        this.error = error
      } else {
        this.id = id
      }
    },
    getItem() {
      return 575;
    }
  },

};

</script>

<style scoped>
.dialog {
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
}

/* The Close Button */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
