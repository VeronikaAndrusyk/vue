import { createRouter, createWebHistory } from 'vue-router'
import ApartmentView from '../views/ApartmentView.vue'
import Settlement from '@/components/Settlement.vue';
import Staff from '@/components/Staff.vue';

const routes = [
  {
    path: '/apartment',
    name: 'Apartment',
    component: ApartmentView
  },
  {
    path: '/settlement',
    name: 'Settlement',
    component: Settlement
  },
  {
    path: '/staff',
    name: 'Staff',
    component: Staff
  },
  
  
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
