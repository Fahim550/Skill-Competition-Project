import Aura from '@primevue/themes/aura';
import PrimeVue from 'primevue/config';
import { createApp } from 'vue';
import App from './App.vue';
import './assets/main.css';
import router from './router';
const app = createApp(App)

import 'primeicons/primeicons.css';


app.use(router)
app.use(PrimeVue, {
  theme: {
      preset: Aura,
      options: {
        darkModeSelector: false || 'none',
    }
  }
});
app.mount('#app')
