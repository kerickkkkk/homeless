import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  // 前台路由
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/frontend/Home.vue'),
    children: [
      {
        path: '',
        name: 'index',
        component: () => import('@/views/frontend/Index.vue')
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('@/views/frontend/About.vue')
      },
      {
        path: 'products',
        name: 'products',
        component: () => import('@/views/frontend/Products.vue')
      },
      {
        path: 'product/:id',
        name: 'product',
        component: () => import('@/views/frontend/Product.vue')
      },
      {
        path: 'favorite',
        name: 'favorite',
        component: () => import('@/views/frontend/Favorite.vue')
      },
      {
        path: 'cart',
        name: 'cart',
        component: () => import('@/views/frontend/Cart.vue')
      },
      {
        path: 'service',
        name: 'service',
        component: () => import('@/views/frontend/Service.vue')
      },
      {
        path: 'checkout',
        name: 'checkout',
        component: () => import('@/views/frontend/Checkout.vue')
      },
      {
        path: 'payment/:id',
        name: 'payment',
        component: () => import('@/views/frontend/Payment.vue')
      }
    ]
  },
  // login
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/dashboard/Login.vue')
  },
  // 後臺路由
  {
    path: '/admin',
    component: () => import('@/views/dashboard/Dashboard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('@/views/dashboard/Products.vue')
      },
      {
        path: 'orders',
        component: () => import('@/views/dashboard/Orders.vue')
      },
      {
        path: 'coupons',
        component: () => import('@/views/dashboard/Coupons.vue')
      },
      {
        path: 'articles',
        component: () => import('@/views/dashboard/Articles.vue')
      }
    ]
  },
  // 404
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/NotFound.vue/')
  }
  // 重新導向
  // {
  //   path: '/:pathMatch(.*)*',
  //   redirect: {
  //     name: 'Home'
  //   }
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  // 統一路由些換就切到最上方
  scrollBehavior () {
    return {
      top: 0,
      behavior: 'smooth'
    }
  }
})

export default router
