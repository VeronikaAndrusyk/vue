/* eslint-disable no-unused-vars */
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/BackgraoundAndInformationView.vue'
import SaleHomeView from '../views/SaleHomeView.vue'
import BuyHomeView from '../views/BuyHomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/saleApartment',
    name: 'sale',
    component: () => import(/* webpackChunkName: "about" */ '../views/SaleHomeView.vue')
  },
  {
    path: '/buyApartment',
    name: 'buy',
    component: () => import(/* webpackChunkName: "about" */ '../views/BuyHomeView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
