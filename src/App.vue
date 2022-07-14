<template>
      <topbar></topbar>
      <router-view> </router-view>
</template>


<script>
import topbar from '@/components/topBar.vue'
//import { reactive } from '@vue/reactivity';
//import { provide } from 'vue';
export default {
  name: 'App',
  components: {
    //HelloWorld,
    topbar,
    //resumePDF
  },


  methods:{

  }
}
</script>


<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  --primary: black;
  --backgroundColor: white;
  --spinnerColor: black;
  --prussianBlue: #003153;
  --iconColor: black;
  text-align: center;
  color: black;
  background-color: white;
  width: 100%;
  height: 100vh;
  padding: 0px;
  margin: 0px;
}

#app.dark {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  --primary: white;
  --backgroundColor: #4b4d4c;
  --spinnerColor: white;
  --iconColor: white;
  text-align: center;
  color: white;
  background-color: #4b4d4c;
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
