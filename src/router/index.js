import { createRouter, createWebHashHistory } from 'vue-router'
// import Home from '@/views/Home.vue'

const routes = [
  // 前台路由
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/frontend/Home.vue'),
    children: [
      {
        path: '',
        name: 'Index',
        component: () => import('@/views/frontend/Index.vue')
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('@/views/frontend/About.vue')
      },
      {
        path: 'products',
        name: 'Products',
        component: () => import('@/views/frontend/Products.vue')
      },
      {
        path: 'product/:id',
        name: 'Product',
        component: () => import('@/views/frontend/Product.vue')
      },
      {
        path: 'cart',
        name: 'Cart',
        component: () => import('@/views/frontend/Cart.vue')
      },
      {
        path: 'contact',
        name: 'Contact',
        component: () => import('@/views/frontend/Contact.vue')
      }
    ]
  }

  // login

  // 後臺路由

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
