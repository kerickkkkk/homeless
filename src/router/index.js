import { createRouter, createWebHashHistory } from 'vue-router'
// import Home from '@/views/Home.vue'

const routes = [
  // 前台路由
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    children: [
      {
        path: '',
        name: 'Index',
        component: () => import('@/views/Index.vue')
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('@/views/About.vue')
      },
      {
        path: 'products',
        name: 'Products',
        component: () => import('@/views/Products.vue')
      },
      {
        path: 'product/:id',
        name: 'Product',
        component: () => import('@/views/Product.vue')
      },
      {
        path: 'cart',
        name: 'Cart',
        component: () => import('@/views/Cart.vue')
      },
      {
        path: 'contact',
        name: 'Contact',
        component: () => import('@/views/Contact.vue')
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
