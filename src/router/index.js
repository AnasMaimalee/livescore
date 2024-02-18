import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import AdminVue from '@/views/AdminView.vue'
import MatchDetailVue from '@/views/MatchDetail.vue'
import ElementPlusVue from '@/views/ElementPlusView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path:'/admin',
    name: 'Admin',
    component: AdminVue
  },

  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path:"/home/match/:id",
    name: "Match",
    component: MatchDetailVue,
    props: true
  },

  {
    path:'/element',
    name:"Element",
    component: ElementPlusVue
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
