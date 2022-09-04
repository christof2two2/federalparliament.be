<template>
  <div class="docs">
    <div class="sidebar"><docsSideBar> </docsSideBar></div>
    <div class="content"><router-view> </router-view></div>
   
  </div>
</template>

<script>
// @ is an alias to /src
import docsSideBar from "@/components/docsSideBar.vue"

export default {
  name: 'docsView',
  components: {
    docsSideBar
  }
}
</script>
<style scoped>
.sidebar{
  display: inline-block;
  top: 0;
  margin-right: 1%;
  vertical-align: top;
  width:15%;
  background-color: var(--popOutSection);
  border-radius: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
 
}
.content{
  top: 0;
  width:70%;
  padding: 0.8%;
  padding-top: 10px;
  display: inline-block;
  background-color: var(--popOutSection);
  border-radius: 20px;
}


</style>