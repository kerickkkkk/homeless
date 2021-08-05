<template>
  <div>
    <OrderSearch ref="orderSearch" />
    <div
      ref="outSideNavArea"
      class="close-navbar-toggler collapse"
      @click.prevent="closeNavbarHamber"
    />
    <nav
      class="navbar sticky-top navbar-expand-lg"
      :class="[navClassList.nav, navClassList.bg, navClassList.padding]"
    >
      <div class="container">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          @click="toogleNavbarHamber"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <h1>
          <router-link
            to="/"
            class="navbar-brand"
            href="#"
            @click.prevent="closeNavbarHamber"
          >
            HomeLess
          </router-link>
        </h1>
        <a
          class="nav-link text-danger d-block d-lg-none"
          href="#"
          @click.prevent="dropDownHandler('cart', true)"
        >
          <span
            :class="{'animate-scale-1': cartLen <= 0}"
            class="position-relative d-inline-block"
          >
            <i class="bi bi-cart" />
            <span
              v-if="cartLen > 0"
              class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            >
              {{ cartLen }}
            </span>
          </span>
        </a>
        <!-- 如不使用 collapse 的動畫，也可以直接操作 show 相對會簡單一點 -->
        <div
          ref="navbarCollapse"
          class="collapse navbar-collapse"
        >
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link
                :class="{active: $route.name === 'index'}"
                to="/"
                class="nav-link"
                @click.prevent="closeNavbarHamber"
              >
                首頁
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                :class="{active: $route.name === 'about'}"
                to="/about"
                class="nav-link"
                @click.prevent="closeNavbarHamber"
              >
                關於我們
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                :class="{active: $route.name === ('products' || 'product')}"
                to="/products"
                class="nav-link"
                @click.prevent="closeNavbarHamber"
              >
                餐點
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                :class="{active: $route.name === 'service'}"
                to="/service"
                class="nav-link"
              >
                常見問題
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
            <li

              class="nav-item"
              @click.prevent="dropDownHandler('favorite')"
            >
              <a
                class="nav-link dropdown"
                :class="[ $route.name === 'favorite' ? 'text-primary': 'text-secondary']"
                href="#"
                to="/favorite"
                @click.prevent="closeNavbarHamber"
              >
                <span
                  ref="favoriteDropDown"
                  data-bs-toggle="dropdown"
                  class="position-relative"
                >
                  <i class="bi bi-heart" />
                  <span
                    v-if="favoriteLen > 0"
                    :class="[ $route.name === 'favorite' ? 'bg-primary': 'bg-secondary']"
                    class="position-absolute top-0 start-100 translate-middle badge rounded-pill"
                  >
                    {{ favoriteLen }}
                  </span>
                </span>
                <div
                  class="dropdown-menu dropdown-menu-lg-end"
                >
                  <div class="text-center">
                    我的最愛是空的
                    <br>
                    <router-link
                      to="/products"
                      class="btn btn-sm btn-primary"
                      @click.prevent="closeNavbarHamber"
                    >
                      前往餐點
                    </router-link>
                  </div>
                </div>
              </a>
            </li>
            <li class="nav-item">
              <!-- dropdown 定位用一訂要加 -->
              <a
                class="nav-link text-danger dropdown"
                href="#"
                @click.prevent="dropDownHandler('cart')"
              >
                <span
                  ref="cartDropDown"
                  data-bs-toggle="dropdown"
                  :class="{'animate-scale-1': cartLen <= 0}"
                  class="position-relative d-inline-block"
                >
                  <i class="bi bi-cart" />
                  <span
                    v-if="cartLen > 0"
                    class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                  >
                    {{ cartLen }}
                  </span>
                </span>
                <!-- align 尾端 -->
                <div
                  class="dropdown-menu dropdown-menu-lg-end"
                >
                  <div class="text-center">
                    購物車是空的
                    <br>
                    <router-link
                      to="/products"
                      class="btn btn-sm btn-primary"
                      @click.prevent="closeNavbarHamber"
                    >
                      前往點餐餐點
                    </router-link>
                  </div>
                </div>
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
import Collapse from 'bootstrap/js/dist/collapse'
import Dropdown from 'bootstrap/js/dist/dropdown'
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
      favoriteList: [],
      navbarCollapse: null,
      favoriteDropDown: null,
      cartDropDown: null
    }
  },
  computed: {
    favoriteLen () {
      return this.favoriteList?.length
    }
  },
  watch: {
    '$route' () {
      this.closeNavbarHamber()
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
    // 導覽列選單會初始都會自動跑下來...
    this.navbarCollapse = new Collapse(this.$refs.navbarCollapse, {
      toggle: false
    })
    // 購物車 我的最愛下拉選單
    this.favoriteDropDown = new Dropdown(this.$refs.favoriteDropDown)
    this.cartDropDown = new Dropdown(this.$refs.cartDropDown)
    // 漢堡選單收合處理
    // 移動到 method共用
    // const showBsCollapse = () => { this.$refs.outSideNavArea.classList.add('show') }
    // const hiddenBsCollapse = () => { this.$refs.outSideNavArea.classList.remove('show') }
    this.$refs.navbarCollapse.addEventListener('shown.bs.collapse', this.showBsCollapse)
    this.$refs.navbarCollapse.addEventListener('hidden.bs.collapse', this.hiddenBsCollapse)
    window.addEventListener('resize', this.closeNavbarHamber)
  },
  beforeUnmount () {
    this.$emitter.off('nav-getCarts')
    this.$emitter.off('nav-getfavorite')
    window.removeEventListener('scroll', this.navStyle)
    this.$refs.navbarCollapse.removeEventListener('shown.bs.collapse', this.showBsCollapse)
    this.$refs.navbarCollapse.removeEventListener('hidden.bs.collapse', this.hiddenBsCollapse)
    window.removeEventListener('resize', this.closeNavbarHamber)
  },
  methods: {
    showBsCollapse () {
      this.$refs.outSideNavArea.classList.add('show')
    },
    hiddenBsCollapse () {
      this.$refs.outSideNavArea.classList.remove('show')
    },
    toogleNavbarHamber () {
      this.navbarCollapse.toggle()
    },
    closeNavbarHamber () {
      this.navbarCollapse.hide()
    },
    openNavbarHamber () {
      this.navbarCollapse.show()
    },
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
      // 關閉漢堡選單
      if (this.$refs.outSideNavArea.classList.contains('show')) {
        this.closeNavbarHamber()
      }
      const windowY = window.scrollY
      // 如果需要 dom 可以用 offSetTop
      if (windowY > 100) {
        this.navClassList = {
          nav: 'navbar-dark',
          bg: 'bg-dark'
        }
        this.goTop = true
        // 避免 縮小的時候會擠去 100 造成閃頻
      } else if (windowY < 80) {
        this.navClassList = {
          nav: 'navbar-light',
          bg: ''
        }
        // 加上高度會有一些問題先不用
        // padding: 'py-3'
        this.goTop = false
      }
    },
    dropDownHandler (type, isMobile) {
      if (this[`${type}Len`] > 0) {
        this.$router.push(`/${type}`)
      } else {
        if (isMobile) {
          this.$swal('購物車是空', '請選購產品', 'info').then(() => {
            this.$router.push('/products')
          })
        } else {
          this[`${type}DropDown`].toggle()
        }
      }
      // 點連結時關閉導覽下拉
      this.closeNavbarHamber()
    },
    gogoTop () {
      this.$tools.goTop()
    },
    orderSearchShow () {
      this.$refs.orderSearch.show()
      this.closeNavbarHamber()
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
.close-navbar-toggler.show{
  position: fixed;
  top: 0;
  left: 0;
  width:  100%;
  height: 100%;
  z-index: 1025;
  cursor: pointer;
}
</style>
