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
        path: 'favorite',
        name: 'Favorite',
        component: () => import('@/views/frontend/Favorite.vue')
      },
      {
        path: 'cart',
        name: 'Cart',
        component: () => import('@/views/frontend/Cart.vue')
      },
      // {
      //   path: 'contact',
      //   name: 'Contact',
      //   component: () => import('@/views/frontend/Contact.vue')
      // },
      {
        path: 'checkout',
        name: 'Checkout',
        component: () => import('@/views/frontend/Checkout.vue')
      },
      {
        path: 'payment/:id',
        name: 'Payment',
        component: () => import('@/views/frontend/Payment.vue')
      }
    ]
  },
  // login
  {
    path: '/login',
    name: 'Login',
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
