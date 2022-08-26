import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import docsView from '../views/docsView.vue'
import queryView from '@/views/queryView.vue'

import docsKG from '../components/docs/kg.vue'
import docsHome from '../components/docs/home.vue'
import docsQuery from '@/components/docs/query.vue'
import ontologyView from '@/components/docs/ontology.vue'
import downloadsView from '@/views/downloadsView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/query',
    name: 'query',
    component: queryView
  },
  {
    path: '/downloads',
    name: 'downloads',
    component: downloadsView
  },
  {
    path: '/docs',
    name: 'docs',
    component: docsView,
    children:[
      {
        path: '',
        name: 'docs.home',
        component: docsHome
      },

      {
        path: 'kg',
        name: 'docs.kg',
        component: docsKG
      },

      {
        path: 'query',
        name: 'docs.query',
        component: docsQuery
      },

      {
        path: 'ontology',
        name: 'docs.ontology',
        component: ontologyView
      },
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
