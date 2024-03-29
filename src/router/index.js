import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import User from '@/views/User.vue'
import Pays from '@/views/Pays.vue'
import FichePays from '@/views/FichePays.vue'
import Recherche from '@/views/Recherche.vue'
import Fournisseurs from '@/views/Fournisseurs.vue'
import Pokedex from '@/views/Pokedex.vue'
import Magic from '@/views/Magic.vue'
import ZeldaView from '@/views/ZeldaView.vue'
import RegionsView from '@/views/RegionsView.vue'
import FicheRegion from '@/views/FicheRegion.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/user/:username', component: User, name: 'user' },
    { path: '/pays', component: Pays },
    { path: '/fiche-pays/:id/:nom', component: FichePays, name: 'fiche-pays' },
    { path: '/fiche-pays/:cca3', component: FichePays, name: 'FichePays'},
    { path: '/recherche', component: Recherche },
    { path: '/recherche/:pays', component: Recherche, name: 'recherche' },
    { path: '/fournisseurs', component: Fournisseurs, name: 'fournisseurs'},
    { path: '/pokedex', component: Pokedex, name: 'pokedex'},
    { path: '/magic', component: Magic, name: 'magic'},
    { path: '/zelda', component: ZeldaView, name: 'zelda'},
    { path: '/regions', component: RegionsView, children: [
        { path: ':region', component: FicheRegion }
    ]}
  ]
})

export default router
