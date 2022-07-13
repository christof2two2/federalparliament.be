<template>
      <topbar></topbar>
      <router-view> </router-view>
</template>


<script>
import topbar from '@/components/topBar.vue'
export default {
  name: 'App',
  components: {
    //HelloWorld,
    topbar,
    //resumePDF
  }
}
</script>


<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  --primary: blue;
  --backgroundColor: white;
  --spinnerColor: #003153;
  text-align: center;
  color: #2c3e50;
  background-color: lightsteelblue;
  width: 100%;
  height: 100vh;
  padding: 0px;
  margin: 0px;
}
body{
  margin: 0;
  padding: 0;
}

</style>
