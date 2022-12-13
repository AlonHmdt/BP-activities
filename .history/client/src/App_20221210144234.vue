<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
  <link href="https://unpkg.com/primevue^2/resources/themes/saga-blue/theme.css " rel="stylesheet">
<link href="https://unpkg.com/primevue^2/resources/primevue.min.css " rel="stylesheet">
<link href="https://unpkg.com/primeicons/primeicons.css " rel="stylesheet">
<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/primevue^2/calendar/calendar.umd.min.js"></script>
</template>


<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
