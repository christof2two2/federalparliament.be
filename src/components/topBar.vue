<template>
    <div class="topBar">
       
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
            <img class ="darkmodeToggleButton" v-if="darkMode" v-on:click="toggleDarkMode()" src="@/assets/lightMode.png">
            <img class="" v-else v-on:click="toggleDarkMode()" src="@/assets/darkMode.svg"> 
          </li>
        </ul>
       
    </div>
</template>

<script>
export default {
  name: 'topBar',
      data(){
      return{
      }
    },
  methods:{

    toggleDarkMode(){
      this.darkMode = !this.darkMode
      if (this.darkMode){document.getElementById("app").classList.add("dark")}
      else{document.getElementById("app").classList.remove("dark")}
      this.$forceUpdate();
    }
    },

  
}
</script>

<style scoped>

img {
  height: 30px;
  width: 30px;
 
}
nav {
  padding: 0

}
.rlink{
  text-decoration: none;
  margin-left: 60px;
  color: var(--primary);
}
.topBar {
display:flex;
align-items: center;
display: flexbox;
float: top;
}
.darkmodeToggleButton{
  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(52deg) brightness(102%) contrast(105%);
}
.menu {
   padding:0;
   margin: 0%;
   list-style-type: none;
   position: absolute;
   right: 10px;
   display: flex;
   align-items: center;
}

.router-link-active{
  text-decoration-line: underline;
  text-decoration-thickness: 2px;
  text-underline-offset: 5px;
 }
 button{
margin-left: 20px;

 }

 .logo{
   float:left
 }

.darkModeButton{
  cursor: pointer;
  margin-left: 15px;
  height: 20px;
  width: 20px;

}

.darkModeButton img{
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}
</style>