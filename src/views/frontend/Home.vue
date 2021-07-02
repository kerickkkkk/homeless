<template>
  <div class="home">
    <nav
      class="navbar sticky-top navbar-expand-lg "
      :class="[navClassList.nav, navClassList.bg, navClassList.padding]"
    >
      <div class="container">
        <a
          class="navbar-brand"
          href="#"
        >居無定所</a>
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
                class="nav-link active"
              >
                關於我們
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/products"
                class="nav-link active"
              >
                餐點
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/contact"
                class="nav-link active"
              >
                聯絡我們
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/cart"
                class="nav-link active"
              >
                <span class="text-danger">
                  <i class="bi bi-cart" />({{ cartLen }})
                </span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <router-view />

    <footer>
      footer
    </footer>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      isLoading: true,
      navClassList: {
        nav: 'navbar-light',
        bg: 'bg-light',
        padding: 'py-5'
      },
      cartLen: 0
    }
  },
  mounted () {
    this.$emitter.on('nav-getCarts', (status) => {
      this.getCarts(status)
    })
    this.getCarts('updateOnly')
    window.addEventListener('scroll', this.navStyle)
  },
  unmounted () {
    this.$emitter.off('nav-getCarts')
    window.removeEventListener('scroll', this.navStyle)
  },
  methods: {
    getCarts (status) {
      // this.$emitter.emit('toast:push', { icon: 'success', title: res.data.message })
      this.$emitter.emit('fullScreenLoaidng', true)
      this.$http
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`)
        .then((res) => {
          this.$emitter.emit('fullScreenLoaidng', false)
          if (res.data.success) {
            const { data } = res.data
            this.cartLen = data?.carts.length
            if (status !== 'updateOnly') { this.$emitter.emit('toast:push', { icon: 'success', title: '已加入購物車' }) }
          } else {
            this.$swal(res.data.message, '', 'error')
          }
        })
        .catch((error) => {
          this.$emitter.emit('fullScreenLoaidng', false)
          this.$swal(error, '', 'error')
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
      } else {
        this.navClassList = {
          nav: 'navbar-light',
          bg: 'bg-light',
          padding: 'py-3'

        }
      }
    }
  }

}
</script>

<style scoped>
.navbar{
  transition: background-color .8s, padding .5s;
}
</style>
