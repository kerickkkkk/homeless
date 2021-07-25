<template>
  <div
    class="parallax bg-cover"
    style="background-image:linear-gradient(to right,rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6) ,rgba(255, 255, 255, 0)), url('https://images.unsplash.com/photo-1612966874574-e0a92ad2bc43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80')"
  >
    <div class="container">
      <div class="row p-3">
        <div class="col-lg-4 col-md-6">
          <div class="subscribe py-5 my-5">
            <h3 class="mb-3 text-white">
              訂閱 優惠訊息
            </h3>
            <Form
              v-slot="{ errors}"
              @submit="getCoupon"
            >
              <div class="input-group mb-3">
                <Field
                  id="email"
                  v-model="email"
                  name="email"
                  type="email"
                  class="form-control"
                  :class="{ 'is-invalid': errors['email'] }"
                  placeholder="馬上輸入信箱取得優惠"
                  rules="email|required"
                />
                <div
                  class="input-group-append"
                  :class="{'cursor-notAllow':!checkSubmit(errors)}"
                >
                  <button
                    :disabled="!checkSubmit(errors)"
                    class="btn btn-primary"
                    :type="checkSubmit(errors) ? 'submit' : 'button'"
                  >
                    送出
                  </button>
                  <!-- <button
                    class="btn btn-primary"
                    type="submit"
                  >
                    送出
                  </button> -->
                </div>
                <ErrorMessage
                  name="email"
                  class="invalid-feedback"
                />
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SubScribe',
  data () {
    return {
      email: ''
    }
  },
  methods: {
    checkSubmit (hasError) {
      const noError = Object.values(hasError).length <= 0
      const hasNoEmpty = this.email
      return noError && hasNoEmpty
    },
    getCoupon () {
      const config = {
        icon: 'success',
        title: '恭喜獲得優惠碼',
        text: 'happy_10',
        confirmButtonText: '趕快去購買',
        cancelButtonText: '取消',
        showCancelButton: true
      }
      this.$swal(config).then((res) => {
        this.email = ''
        if (res.isConfirmed) {
          this.$router.push('/products')
        }
      })
    }
  }
}
</script>
