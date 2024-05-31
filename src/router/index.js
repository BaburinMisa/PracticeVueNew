import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Actors from '../views/Actors.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/main',
      name: 'main',
      component: HomeView
    },
    {
      path: '/actors',
      name: 'actors',
      component: Actors
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    }
  ]
})

export default router
