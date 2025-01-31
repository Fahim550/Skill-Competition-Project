import Aura from '@primevue/themes/aura';
import PrimeVue from 'primevue/config';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { createApp } from 'vue';
import App from './App.vue';
import './assets/main.css';
import router from './router';
const app = createApp(App)
library.add(fas,fab);

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
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
