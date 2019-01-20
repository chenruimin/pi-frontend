import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import store from "../store";
Vue.use(VueRouter);

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkActiveClass: "active"
});

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    if (store.state.isLoggedIn) {
      next({ path: '/dashboard' });
    } else {
      next();
    }
  } else {
    if (store.state.isLoggedIn) {
      next();
    } else {
      next({ path: '/login' });
    }
  }
});

export default router;
