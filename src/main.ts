import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

//routes
import router from "./routes/index";

//pinia
import { createPinia } from 'pinia'
const pinia = createPinia()

//element-plus
import ElementPlus from 'element-plus'

const app = createApp(App)

app.use(router)

app.use(pinia)

app.use(ElementPlus)

app.mount('#app')
