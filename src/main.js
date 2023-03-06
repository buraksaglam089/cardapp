import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './routers/router.js'

import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/saga-blue/theme.css';  
import 'primevue/resources/primevue.min.css';     //theme
import '/node_modules/primeflex/primeflex.css';
import 'primeicons/primeicons.css';               //icons
import Card from 'primevue/card';
import Dropdown from 'primevue/dropdown';
import Menubar from 'primevue/menubar';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import ToastService from 'primevue/toastservice';
import Toast from 'primevue/toast'




const app =createApp(App)
const pinia = createPinia()
app.component('Dropdown',Dropdown);
app.component('Menubar',Menubar);
app.component('Card',Card);
app.component('Button',Button);
app.component('InputText',InputText)
app.component('Toast',Toast)


app.use(PrimeVue);
app.use(ToastService);
app.use(pinia);
app.use(router);
app.mount('#app');