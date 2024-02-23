import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 全局icon组件
import {
    DocumentAdd,
    ScaleToOriginal,
    FolderChecked,
    DataAnalysis,
    Guide,
    Printer,
    Calendar,
    CreditCard,
    Box,
    ShoppingCart

} from '@element-plus/icons-vue'

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

// 全局注册icon组件
app.component('DocumentAdd', DocumentAdd);
app.component('ScaleToOriginal', ScaleToOriginal);
app.component('FolderChecked', FolderChecked);
app.component('DataAnalysis', DataAnalysis);
app.component('Guide', Guide);
app.component('Printer', Printer);
app.component('Calendar', Calendar);
app.component('CreditCard', CreditCard);
app.component('Box', Box);
app.component('ShoppingCart', ShoppingCart);

