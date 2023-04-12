import { createApp } from 'vue'
import App from './App.vue'

//Importing PrimeVue
import PrimeVue from 'primevue/config';
import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

//Importing PrimeVue Components
const app = createApp(App);

app.use(PrimeVue);

createApp(App).mount('#app')
