import { h, createApp } from "pl-vue";
import { createRouter } from 'pl-vue/lib/router';
import env from '~/config/env';
import { App } from "./app";

const app = createApp();
const router = createRouter({
  base: env.BASE_URL,
  mode: 'hash',
})
app.use(router);
const root = document.getElementById('root');
root.appendChild(app.render(<App />));
