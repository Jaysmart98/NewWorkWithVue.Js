import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import PageNotFound from '../views/PageNotFound.vue'
import AdminDetails from '../views/AdminDetails.vue'



const routes = [
  {path:'/',component:Home, name: 'Home'},
  {path:'/about', component:About, name: 'About'},
  {path:'/about-us',redirect:'About'},
  {path:'/admin',redirect:'Home'},
  {path:'/admin/:id', component:AdminDetails},
  {path:'/:catchAll(.*)',component:PageNotFound}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
