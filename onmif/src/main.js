import { createApp } from 'vue';
import App from './App.vue';

// Import Bootstrap and BootstrapVue CSS
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// Import BootstrapVue 3 plugin
import BootstrapVue3 from 'bootstrap-vue-3';

const app = createApp(App);

// Use BootstrapVue 3 plugin
app.use(BootstrapVue3);

app.mount('#app');


// OG Code?

// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')
