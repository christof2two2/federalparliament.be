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
    topbar,
  },
  methods:{
  },
    metaInfo: {
    title: 'About Us'
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
  --inactiveIcon: grey;
  text-align: center;
  color: black;
  background-color: white;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0;
  margin: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
}

#app.dark {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  --primary: white;
  --backgroundColor: #4b4d4c;
  --spinnerColor: white;
  --iconColor: white;
  --inactiveIcon: grey;
  text-align: center;
  color: white;
  background-color: #4b4d4c;
}

body{
  margin: 0;
  padding: 0;
}


</style>
