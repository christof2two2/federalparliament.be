<template>
    <div class="topBar">
       
         <div class="logo">
          <router-link  class = "HomeRouter" to="/"><p class=home><b class="black">federal</b><b class="yellow">parliament</b><b class="red">.be</b></p></router-link>
          </div>
        <ul class= "menu">
          <li class="links">
        <nav>
         <router-link class="rlink" to="/query"><b>Query</b></router-link>
         <router-link class="rlink"  to="/docs"><b>Documentation</b> </router-link>
         <router-link class="rlink"  to="/downloads"><b>Downloads</b></router-link>
         <router-link class="rlink" to="/about"><b>About</b></router-link>
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
.home {
  font-size: x-large;
  margin: 0;

}
.logo a{
  text-decoration: none;
}
.black {
  color: var(--textColor);
}
.yellow{
  color:#B58B00 ;
}
.red{
  color:#EF3340 ;
}
.homeRouter{
  padding: 0;
  margin: 0;
}
.HomeRouter.router-link-active{
  text-decoration-line: none;

 }
 HomeRouter.rlink{
text-decoration-line: none;}
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
font-size: large;
display: flexbox;
float: top;
margin-top: 5px;
margin-bottom: 10px;
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
   float:left;
   margin-left: 10px;
   padding: 0;
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