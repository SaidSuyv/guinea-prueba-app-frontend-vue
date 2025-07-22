import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import { useAuthStore } from '@/ui/stores/authStore';

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/ui/pages/public/LoginPage.vue'),
    meta: { requiresAuth: false }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/ui/pages/public/register/RegisterPage.vue'),
    meta: { requiresAuth: false }
  },
  {
    path: '/',
    redirect: { name: 'dashboard-home' },
    name: 'dashboard',
    component: () => import('@/ui/pages/private/DashboardPage.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        name: 'dashboard-home',
        component: () => import('@/ui/pages/private/sections/HomeSection.vue')
      },
      {
        path: 'settings',
        name: 'dashboard-settings',
        component: () => import('@/ui/pages/private/sections/SettingsSection.vue')
      },
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to,_,next) => {
  const authStore = useAuthStore();
  const isAuthenticated = authStore.isAuthenticated;

  console.log(`Navigating to: ${to}, requiresAuth: ${to.meta.requiresAuth}, isAuthenticated: ${isAuthenticated}`);

  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: 'login' }); // Redirect to login if not authenticated
  } else {
    next(); // Proceed to the route
  }
});
export default router;