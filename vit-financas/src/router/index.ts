import { createWebHistory, createRouter } from "vue-router";
import PageLogin from "../pages/PageLogin.vue";
import PageHome from "../pages/PageHome.vue";
import PageCadastro from "../pages/PageCadastro.vue";
import PageDashBoard from "../pages/PageDashBoard.vue";
import { useAuthStore } from '../stores/useAuthStore'

const routes = [
  { path: '/', component: PageHome },
  { path: '/login', component: PageLogin },
  { path: '/cadastro', component: PageCadastro },
  { path: '/dashboard', component: PageDashBoard, meta: { requiresAuth: true } }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();

  if (to.meta.requiresAuth && !authStore.token) {
    next('/login')
  } else {
    next()
  }
})

export default router