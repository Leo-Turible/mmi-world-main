import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import User from '@/views/User.vue'
import Pays from '@/views/Pays.vue'
import FichePays from '@/views/FichePays.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/user/:username', component: User, name: 'user' },
    { path: '/pays', component: Pays },
    { path: '/fiche-pays/:id/:nom', component: FichePays, name: 'fiche-pays' },
  ]
})

export default router
