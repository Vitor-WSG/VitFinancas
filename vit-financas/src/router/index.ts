import { createWebHistory, createRouter } from "vue-router";
import PageLogin from "../pages/PageLogin.vue";
import ComponentHome from "../components/ComponentNavBar.vue";
import PageHome from "../pages/PageHome.vue";

const routes = [
  { path: '/', component: PageHome },
  { path: '/login', component: PageLogin }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router