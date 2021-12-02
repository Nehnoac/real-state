import { createApp, h } from 'vue';

import router from './router.js';
import { store } from './store.js';
import App from './App.vue';

import '@/assets/scss/app.scss';

const app = createApp({ render: () => h(App) });

app.use(router);
app.use(store);

app.mount('#app');
