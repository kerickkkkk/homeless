<template>
  <div class="login">
    <Loading
      :active="isLoading"
      color="#00BFFF"
      loader="dots"
    />
    <div class="contaienr">
      <div class="d-flex justify-content-center align-items-center vh-100">
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
          <div class="form-group">
            <label for="username">帳號</label>
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
            <label for="username">密碼</label>
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

            <button
              type="submit"
              class="btn btn-primary btn-block"
            >
              登入
            </button>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      isLoading: false,
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      this.isLoading = true
      this.$http.post(`${process.env.VUE_APP_API}/admin/signin`, this.user).then((res) => {
        this.isLoading = false
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
        this.isLoading = false
        console.log(error)
      })
    }
  }
}
</script>
