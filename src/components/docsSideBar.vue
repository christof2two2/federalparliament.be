<template>
    <div class="sideBar">
       
      
        <ul class= "sideBarMenu">
         <h1>Navigation</h1>

         <li>
           <div  class="test" ref="docs-kg" :class="{'active': subIsActive('docs.kg')}">
           <router-link class="docLink" :to="{name:'docs.kg'}">What is a Knowledge Graph </router-link> 
            <ul class="submenu">
              <li>
                test
              </li>
              <li>
                test2
              </li>
            </ul>
           </div>
         
         </li>
         <li>
           <div id="docs-query" :class="{'active': subIsActive('docs.query')}" >
           <router-link class="docLink"  :to="{name:'docs.query'}">How to query </router-link>
              <ul class="submenu">
              <li>
                test3
              </li>
              <li>
                test4
              </li>
            </ul>



           </div>
           </li>
         <li><router-link class="docLink" :to="{name:'about'}">Package </router-link></li>

         
        </ul>
       
    </div>
</template>

<script>
export default {
  name: 'docsSideBar',
  props:{},
  methods:{
  subIsActive(input) {
    input = this.$router.resolve({ 
    name: input,
    }).fullPath;
    const paths = Array.isArray(input) ? input : [input]
    return paths.some(path => {
      return this.$route.path.indexOf(path) === 0 // current path starts with this path string
    })
    }
  }
  }

</script>

<style scoped>

.sideBar{
  flex-direction: column;
  top: 0;
  left: 0;
  position: relative;
  float: left;
  background-color: gold;
}
.sideBarMenu{
  list-style: none;
  text-align: left;
}
.sideBarMenu li {
  margin-top: 30px;
}
.submenu li {
  margin-top: 10px;
}
.docLink{
  text-decoration: none;
}
.router-link-active{
color: steelblue;
}
.submenu{
  display: none;
}
.active > .submenu{
  display: block;
  list-style: square;
}
</style>