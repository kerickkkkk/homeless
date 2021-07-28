<template>
  <div>
    <OrderSearch ref="orderSearch" />
    <nav
      class="navbar sticky-top navbar-expand-lg"
      :class="[navClassList.nav, navClassList.bg, navClassList.padding]"
    >
      <div class="container">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <h1>
          <a
            class="navbar-brand"
            href="#"
          >HomeLess</a>
        </h1>
        <a
          class="nav-link text-danger d-block d-lg-none"
          href="#"
          @click.prevent="cartHandler"
        >
          <span class="position-relative">
            <i class="bi bi-cart" />
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {{ cartLen }}
            </span>
          </span>
        </a>
        <div
          id="navbarSupportedContent"
          class="collapse navbar-collapse"
        >
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link
                to="/"
                class="nav-link active"
              >
                首頁
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/about"
                class="nav-link"
              >
                關於我們
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/products"
                class="nav-link"
              >
                餐點
              </router-link>
            </li>
            <li class="nav-item">
              <a
                ref="searchOrder"
                class="nav-link"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="搜尋訂單"
                role="button"
                @click.prevent="orderSearchShow"
              >
                <i class="bi bi-journal-text" />
              </a>
            </li>
            <!-- <li class="nav-item">
              <router-link
                to="/contact"
                class="nav-link"
              >
                聯絡我們
              </router-link>
            </li> -->
            <li class="nav-item ">
              <router-link
                class="nav-link text-secondary"
                href="#"
                to="/favorite"
              >
                <span class="position-relative">
                  <i class="bi bi-heart" />
                  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">
                    {{ favoriteLen }}
                  </span>
                </span>
              </router-link>
            </li>
            <li class="nav-item">
              <a
                class="nav-link text-danger"
                href="#"
                @click.prevent="cartHandler"
              >
                <span class="position-relative">
                  <i class="bi bi-cart" />
                  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {{ cartLen }}
                  </span>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <a
      class="goTop__fixed btn btn-link p-0 fs-2"
      :class="[goTop ? 'd-block' : 'd-none']"
      href="#"
      @click.prevent="gogoTop"
    >
      <i class="bi bi-arrow-up-square-fill" />
    </a>

    <router-view />

    <footer class="bg-dark  py-4 text-center text-white">
      ⓒ 2021 HomeLess All Right Reserved . 練習用，無商業用途
    </footer>
  </div>
</template>

<script>
import Tooltip from 'bootstrap/js/dist/tooltip'
import OrderSearch from '@/components/OrderSearch.vue'
export default {
  name: 'Home',
  components: {
    OrderSearch
  },
  data () {
    return {
      isLoading: true,
      navClassList: {
        nav: 'navbar-light',
        bg: '',
        padding: 'py-3'
      },
      goTop: false,
      cartLen: 0,
      favoriteList: []
    }
  },
  computed: {
    favoriteLen () {
      return this.favoriteList?.length
    }
  },
  mounted () {
    this.$emitter.on('nav-getCarts', (status) => {
      this.getCarts(status)
    })
    this.$emitter.on('nav-getfavorite', () => {
      this.getFavorite()
    })

    this.getFavorite()
    this.getCarts('updateOnly')
    window.addEventListener('scroll', this.navStyle)
    // 增加提示 搜尋訂單
    const tooltip = new Tooltip(this.$refs.searchOrder)
    tooltip.enable()
  },
  unmounted () {
    this.$emitter.off('nav-getCarts')
    this.$emitter.off('nav-getfavorite')
    window.removeEventListener('scroll', this.navStyle)
  },
  methods: {
    getFavorite () {
      const favoriteList = localStorage.getItem('homeLessFavorite') || '[]'
      this.favoriteList = JSON.parse(favoriteList)
    },
    getCarts (status) {
      this.$emitter.emit('fullScreenLoading', true)
      this.$http
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`)
        .then((res) => {
          if (res.data.success) {
            const { data } = res.data
            this.cartLen = data?.carts.length
          } else {
            this.$swal(res.data.message, '', 'error')
          }
          this.$emitter.emit('fullScreenLoading', false)
        })
        .catch((error) => {
          this.$swal(error, '', 'error')
          this.$emitter.emit('fullScreenLoading', false)
        })
    },
    navStyle () {
      const windowY = window.scrollY
      // 如果需要 dom 可以用 offSetTop
      if (windowY > 100) {
        this.navClassList = {
          nav: 'navbar-dark',
          bg: 'bg-dark',
          padding: 'py-2'

        }
        this.goTop = true
        // 避免 縮小的時候會擠去 100 造成閃頻
      } else if (windowY < 80) {
        this.navClassList = {
          nav: 'navbar-light',
          bg: '',
          padding: 'py-3'

        }
        this.goTop = false
      }
    },
    cartHandler () {
      if (this.cartLen > 0) {
        this.$router.push('/cart')
      } else {
        this.$swal('購物車是空', '請選購產品', 'info').then(() => {
          this.$router.push('/products')
        })
      }
    },
    gogoTop () {
      this.$tools.goTop()
    },
    orderSearchShow () {
      this.$refs.orderSearch.show()
    }
  }

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap');

.navbar{
  transition: background-color .8s, padding .8s;
  /* sweet alert 1060 */
  z-index: 1030;
}
.goTop__fixed{
  position: fixed;
  right: 5%;
  bottom: 5%;
  z-index: 1000;
}
.navbar-brand{
  font-family: 'Gloria Hallelujah', cursive;
}
</style>
