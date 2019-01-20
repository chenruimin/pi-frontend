import Vue from "vue";
import ElementUI from 'element-ui';
import App from "./App";
import router from "./router/index";
import store from './store';

import PaperDashboard from "./plugins/paperDashboard";
import "vue-notifyjs/themes/default.css";
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(PaperDashboard);

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
