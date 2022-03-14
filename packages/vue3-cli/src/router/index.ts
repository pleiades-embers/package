import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import setup from '../views/setup.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'setup',
    component: setup,
  },
  {
    path: '/reactive',
    name: 'reactive',
    component: () => import('../views/reactive.vue'),
  },
  {
    path: '/father',
    name: 'father',
    component: () => import('../components/father.vue'),
  },
  {
    path: '/computed',
    name: 'computed',
    component: () => import('../views/computed.vue'),
  },
  {
    path: '/lifecycle',
    name: 'lifecycle',
    component: () => import('../views/lifecycle.vue'),
  },
  {
    path: '/hooks',
    name: 'hooks',
    component: () => import('../views/hooks.vue'),
  },
  {
    path: '/toRefs',
    name: 'toRefs',
    component: () => import('../views/toRefs.vue'),
  },
  {
    path: '/ref',
    name: 'ref',
    component: () => import('../views/ref.vue'),
  },
  {
    path: '/shallowReactive',
    name: 'shallowReactive',
    component: () => import('../views/shallowReactive.vue'),
  },
  {
    path: '/toRaw',
    name: 'toRaw',
    component: () => import('../views/toRaw.vue'),
  },
  {
    path: '/toRef',
    name: 'toRef',
    component: () => import('../views/toRef/index.vue'),
  },
  {
    path: '/customRef',
    name: 'customRef',
    component: () => import('../views/customRef.vue'),
  },
  {
    path: '/provide',
    name: 'provide',
    component: () => import('../views/provide/index.vue'),
  },
  {
    path: '/photowall',
    name: 'photowall',
    component: () => import('../views/photowall.vue'),
  },
  {
    path: '/xml',
    name: 'xml',
    component: () => import('../views/xml.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
