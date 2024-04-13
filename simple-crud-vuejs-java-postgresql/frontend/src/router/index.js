import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import ViewPatients from '../views/ViewPatients.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Login', // You can set Login as the default route instead
      component: Login
    },
    {
      path: '/login',
      redirect: '/' // Redirect to login if user tries to access /login
    },
    {
      path: '/view-patients', // Define the path for the ViewPatients component
      name: 'ViewPatients',
      component: ViewPatients,
      meta: { requiresAuth: true } // Optionally, add meta data to indicate that authentication is required for this route
    }
  ]
})

export default router
