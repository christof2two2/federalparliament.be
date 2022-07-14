import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//import { ref } from 'vue';
//import { reactive } from '@vue/reactivity';


let app = createApp(App)
//app.config.unwrapInjectedRef = true;
//const darkModeBool = ref(false);
app.config.globalProperties.darkMode =  false;
/*
var darkModeBool = ref(true);
app.config.globalProperties.$darkModeToggle = {
  value: darkModeBool.value,
  toggle() { 
darkModeBool.value = !darkModeBool.value;
console.log("new dark mode value right ?",darkModeBool.value);}
};

*/
//app.provide("darkMode",true)
app.use(router).mount('#app')
