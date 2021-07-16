<template>
  <div class="contaienr">
    <div
      class="d-flex justify-content-center align-items-center vh-100 bg-cover"
      style="background-image: url(https://images.unsplash.com/reserve/m6rT4MYFQ7CT8j9m2AEC_JakeGivens%20-%20Sunset%20in%20the%20Park.JPG?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80)"
    >
      <!-- values, validate -->
      <Form
        id="formLogin"
        v-slot="{ errors}"
        @submit="login"
      >
        <div class="form-group">
          <h1 class="h3 text-center">
            請先登入
          </h1>
        </div>
        <div class="form-group mb-3">
          <label for="email">帳號</label>
          <Field
            id="email"
            v-model="user.username"
            name="email"
            type="email"
            class="form-control"
            :class="{ 'is-invalid': errors['email'] }"
            placeholder="請輸入 Email"
            rules="email|required"
          />
          <ErrorMessage
            name="email"
            class="invalid-feedback"
          />
          <label for="password">密碼</label>
          <Field
            id="password"
            v-model="user.password"
            name="password"
            type="password"
            class="form-control"
            :class="{ 'is-invalid': errors['password'] }"
            placeholder="請輸入 password"
            rules="required"
          />
          <ErrorMessage
            name="password"
            class="invalid-feedback"
          />
        </div>
        <button
          type="submit"
          class="btn btn-primary btn-block"
        >
          登入
        </button>
      </Form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
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
        this.$emitter.emit('fullScreenLoaidng', true)
        this.$http.post(`${process.env.VUE_APP_API}/api/user/check`)
          .then((res) => {
            this.$emitter.emit('fullScreenLoaidng', false)
            if (res.data.success) {
              this.$router.push('/admin/products')
            }
          }).catch((error) => {
            this.$emitter.emit('fullScreenLoaidng', false)
            this.$swal(error, '', 'error')
          })
      }
    },
    login () {
      this.$emitter.emit('fullScreenLoaidng', true)
      this.$http.post(`${process.env.VUE_APP_API}/admin/signin`, this.user).then((res) => {
        this.$emitter.emit('fullScreenLoaidng', false)
        if (res.data.success) {
          const { expired, token } = res.data
          // 寫入 cookie
          document.cookie = `shop=${token}; expires=${new Date(expired)}`
          this.$router.push('/admin/products')
        } else {
          this.$swal(res.data.message, '', 'error')
        }
      }).catch((error) => {
        this.$emitter.emit('fullScreenLoaidng', false)
        this.$swal(error, '', 'error')
      })
    }
  }
}
</script>
