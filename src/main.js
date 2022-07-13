import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

let app = createApp(App)

app.config.globalProperties.darkMode =  false


app.use(router).mount('#app')
