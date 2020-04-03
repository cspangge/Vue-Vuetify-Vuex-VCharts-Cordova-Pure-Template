import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Base',
    component: () => import(/* webpackChunkName: "base" */ '../layouts/Base.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '../views/Sample/Sample.vue'),
      },
    ],
  },
]

const router = new VueRouter({
  routes,
})

export default router
