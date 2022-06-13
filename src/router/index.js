import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Airlines from '../views/Airlines.vue'
import Airports from '../views/Airports.vue'
import FlightRoutes from '../views/FlightRoutes.vue'
import About from '@/views/About.vue'
import PageNotFound from '@/views/PageNotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/airlines',
    name: 'airlines',
    component: Airlines
  },
  {
    path: '/airports',
    name: 'airports',
    component: Airports
  },
  {
    path: '/routes',
    name: 'routes',
    component: FlightRoutes
  },
  {
    path: '/about',
    name: "About",
    component: About,
  },
  {
    path: '/:catchAll(.*)*',
    name: "PageNotFound",
    component: PageNotFound,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
