import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Main from '@/components/Main'
import Campaign from '@/components/Campaign'

Vue.use(Router)

const routes = [
  { path: '', component: Main },
  { path: '/dashboard', component: Dashboard },
  { path: '/campaings/:id', component: Campaign }
]

export default new Router({
  mode: 'history',
  routes: routes
})
