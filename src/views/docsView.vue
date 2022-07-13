<template>
  <div class="docs">
    <div class="sidebar"><docsSideBar class="test"> </docsSideBar></div>
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
  margin-right: 10px;
  vertical-align: top;
  width:20%
 
}
.content{
  top: 0;
  background-color: lightsalmon;
  width:50%;

  display: inline-block;
}

.docs{
  background-color: lavender;
}
</style>