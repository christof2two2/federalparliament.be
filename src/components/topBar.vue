<template>
    <div class="topBar dark">
       
         <div class="logo">
          <router-link  class = "Home" to="/"><img src="../assets/icon.png"></router-link>
          </div>
        <ul class= "menu">
          <li class="links">
        <nav>
         <router-link class="rlink" to="/query">Query </router-link>
         <router-link class="rlink"  to="/docs">Documentation </router-link>
         <router-link class="rlink" to="/about">About </router-link>
         </nav> 
         </li>
         <li class="darkModeButton">
         <button v-on:click="toggleDarkMode()">
           <span v-if="this.darkMode"> 
            <img src="@/assets/icon.png">
           </span>
           <span v-else>
             <img src="@/assets/icon.png">
             </span>
           
         </button>
          </li>
        </ul>
       
    </div>
</template>

<script>
export default {
  name: 'topBar',
  props:{},
  methods:{
    toggleDarkMode(){
      console.log("test");
      this.darkMode = !this.darkMode;
      console.log(this.darkMode);
    }
  }
}
</script>

<style scoped>

img {
  height: 30px;
  width: 30px;
 
}
nav {
  background-color: aqua;
  padding: 0

}
.rlink{
  text-decoration: none;
  margin-left: 60px;
}
.topBar {
background: lightblue;  
display:flex;
align-items: center;
display: flexbox;
float: top;
}

.menu {
   background-color: indianred;
   padding:0;
   margin: 0%;
   list-style-type: none;
   position: absolute;
   right: 10px;
   display: flex;
   align-items: center;
}

.router-link-active{
color: lightcoral;
 }
 button{
margin-left: 20px;
background-color: chocolate;

 }

 .logo{
   float:left
 }

.darkModeButton{
  cursor: pointer;
}

 .dark.topBar {
   background-color: grey;
   background: grey
 }
</style>