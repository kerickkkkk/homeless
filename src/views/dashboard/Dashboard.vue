<template>
  <div class="dashBoard">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <router-link
          to="/"
          class="navbar-brand"
        >
          食無定所
        </router-link>
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
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link
                to="/"
                class="nav-link"
              >
                返回前台
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/admin/products"
                class="nav-link active"
              >
                產品列表
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/admin/orders"
                class="nav-link"
              >
                訂單列表
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/admin/coupons"
                class="nav-link"
              >
                優惠劵列表
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/admin/articles"
                class="nav-link"
              >
                貼文
              </router-link>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                aria-current="page"
                href="#"
                @click.prevent="signOut"
              >登出</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view
      v-if="hasRight"
    />
  </div>
</template>

<script>
export default {
  name: 'DashBoard',
  data () {
    return {
      hasRight: false
    }
  },
  created () {
    this.checkLogin()
  },
  methods: {
    checkLogin () {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)shop\s*=\s*([^;]*).*$)|^.*$/, '$1')
      if (token !== '') {
        this.$http.defaults.headers.common.Authorization = token
        this.$emitter.emit('fullScreenLoading', true)
        this.$http.post(`${process.env.VUE_APP_API}/api/user/check`)
          .then((res) => {
            if (res.data.success) {
              this.hasRight = true
            } else {
              this.hasRight = false
              this.$swal(res.data.message, '', 'error').then(() => {
                this.$router.push('/login')
              })
            }
            this.$emitter.emit('fullScreenLoading', false)
          }).catch((error) => {
            this.hasRight = false
            this.$swal(error, '', 'error').then(() => {
              this.$router.push('/login')
            })
            this.$emitter.emit('fullScreenLoading', false)
          })
      } else {
        this.$swal('沒有登入狀態 將導回登入頁面', '', 'error').then(() => {
          this.$router.push('/login')
        })
      }
    },
    signOut () {
      const url = `${process.env.VUE_APP_API}/logout`
      this.$emitter.emit('fullScreenLoading', true)
      this.$http.post(url)
        .then((res) => {
          // 清空 cookies
          document.cookie = 'shop=;expires=;'
          const status = res.data.success ? 'success' : 'error'
          this.$swal(res.data.message, '', status).then(() => {
            this.$router.push('/login')
          })
          this.$emitter.emit('fullScreenLoading', false)
        }).catch((error) => {
          this.$swal(error, '', 'error').then(() => {
            this.$router.push('/login')
          })
          this.$emitter.emit('fullScreenLoading', false)
        })
    }
  }
}
</script>
