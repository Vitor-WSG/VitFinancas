import { createWebHistory, createRouter } from "vue-router";
import PageLogin from "../pages/PageLogin.vue";
import PageHome from "../pages/PageHome.vue";
import PageCadastro from "../pages/PageCadastro.vue";

const routes = [
  { path: '/', component: PageHome },
  { path: '/login', component: PageLogin },
  { path: '/cadastro', component: PageCadastro }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router