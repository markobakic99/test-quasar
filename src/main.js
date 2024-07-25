import { createApp } from 'vue';
import App from './App.vue';
import { Quasar } from 'quasar';
import 'quasar/dist/quasar.css'; // Uvezite Quasar stilove
import { QBtn } from 'quasar';
import { QTable } from 'quasar';
import { QDialog } from 'quasar';

const app = createApp(App);

app.use(Quasar);
app.component('q-btn',QBtn)
app.component('q-table',QTable)
app.component('q-dialog',QDialog)

app.mount('#app');