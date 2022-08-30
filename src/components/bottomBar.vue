<template>
    <div class="bottomBar">
       <p class="inline">Made with ❤️ by Christof</p>
       <router-link class="rlink inline notFirst" to="/about#contact">Contact</router-link>
       
    </div>
</template>

<script>
export default {
  name: 'bottomBar',
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
.rlink{
  text-decoration: underline;
  color: var(--textColor);
}
.inline{
  display: inline-block;
}
.notFirst{
  margin-left: 5%;
}
p, .rlink{
  color: var(--secondaryTextColor);
}
.bottomBar{margin-top: 2vh;}

</style>