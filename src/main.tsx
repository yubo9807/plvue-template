import { createApp } from "pl-vue";
import { createRouter } from 'pl-vue/lib/router';
import env from '~/config/env';

const app = createApp();
const router = createRouter({
  base: env.BASE_URL,
  mode: 'history',
})
app.use(router);

export default app;
