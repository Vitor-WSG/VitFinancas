import { createWebHistory, createRouter } from "vue-router";
import PageLogin from "../pages/PageLogin.vue";
import ComponentHome from "../components/ComponentHome.vue";

const routes = [
  { path: '/home', component: ComponentHome },
  { path: '/', component: PageLogin }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router