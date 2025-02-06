import { createMemoryHistory, createRouter } from "vue-router";
import PageLogin from "../pages/PageLogin.vue";
import ComponentHome from "../components/ComponentHome.vue";

const routes = [
  { path: '/', component: ComponentHome },
  { path: '/login', component: PageLogin }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router