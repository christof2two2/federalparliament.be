<template>
      <topbar></topbar>
      <router-view> </router-view>
      <bottomBar></bottomBar>
</template>


<script>
import topbar from '@/components/topBar.vue'
import bottomBar from '@/components/bottomBar.vue'
//import { reactive } from '@vue/reactivity';
//import { provide } from 'vue';
export default {
  name: 'App',
  components: {
    topbar,
    bottomBar,
  },
  created () {
      document.title = "Belgian Parliament As A Knowledge Graph"
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
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  --textColor: Black;
  --secondaryTextColor: #353535;
  --primary: black;
  --backgroundColor: white;
  --spinnerColor: black;
  --prussianBlue: #003153;
  --iconColor: black;
  --inactiveIcon: grey;
  --popOutSection: #F1F1F1;
  --popOutElement: #F1F1F1;
  --errorBackground:#F36870;
  --highlight: #41729F;
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
  --textColor: white;
  --secondaryTextColor: #C0C0C0;
  --primary: white;
  --backgroundColor: #121212;
  --spinnerColor: white;
  --iconColor: white;
  --inactiveIcon: grey;
  --popOutSection: #212121;
  --popOutElement: #353535;
  --errorBackground:#C73E1D;
  --highlight: #41729F;
  text-align: center;
  color: white;
  background-color: var(--backgroundColor);
}

body{
  margin: 0;
  padding: 0;
}


</style>
