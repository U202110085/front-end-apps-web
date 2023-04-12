import { createApp } from 'vue'
import App from './App.vue'

//Importing PrimeVue
import PrimeVue from 'primevue/config';
import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

import Panel from 'primevue/panel';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import InputMask from 'primevue/inputmask';
import Dropdown from 'primevue/dropdown';
import Calendar from 'primevue/calendar';
import InputNumber from 'primevue/inputnumber';
import Textarea from 'primevue/textarea';
import Checkbox from 'primevue/checkbox';
import RadioButton from 'primevue/radiobutton';

//Importing PrimeVue Components
const app = createApp(App);

app.component('pv-button', Button);
app.component('pv-input-text', InputText);
app.component('pv-panel', Panel);
app.component('pv-input-mask', InputMask);
app.component('pv-dropdown', Dropdown);
app.component('pv-calendar', Calendar);
app.component('pv-input-number', InputNumber);
app.component('pv-textarea', Textarea);
app.component('pv-checkbox', Checkbox);
app.component('pv-radio-button', RadioButton);
app.use(PrimeVue);

app.mount('#app')