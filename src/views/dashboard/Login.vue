<template>
  <div class="login">
    <div class="contaienr">
      <div class="d-flex justify-content-center align-items-center vh-100">
        <form id="formLogin">
          <div class="form-group">
            <h1 class="h3 text-center">
              請先登入
            </h1>
          </div>
          <div class="form-group">
            <label for="username">Email address</label>
            <input
              id="username"
              v-model="user.username"
              type="email"
              class="form-control"
              name="username"
              placeholder="email"
            >
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              id="password"
              v-model="user.password"
              type="password"
              class="form-control"
              placeholder="password"
            >
          </div>
          <button
            type="button"
            class="btn btn-primary btn-block"
            @click="login"
          >
            登入
          </button>
        </form>
      </div>
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
  methods: {
    login () {
      this.$http.post(`${process.env.VUE_APP_API}/admin/signin`, this.user).then((res) => {
        if (res.data.success) {
          const { expired, token } = res.data
          // 寫入 cookie
          document.cookie = `shop=${token}; expires=${new Date(expired)}`
          console.log(res.data)
          this.$router.push('/admin')
        } else {
          alert(res.data.message)
        }
      }).catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>
