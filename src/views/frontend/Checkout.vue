<template>
  <div class="about">
    <div class="container">
      <CheckOutStep step="checkout" />
      <div class="row justify-content-center">
        <div class="col-md-7">
          <Form
            v-slot="{ errors }"
            @submit="submitOrder"
          >
            <div class="mb-3">
              <label
                for="name"
                class="form-label"
              >姓名
                <span class="text-danger">*</span>
              </label>
              <Field
                id="name"
                v-model="user.name"
                name="姓名"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors['姓名'] }"
                placeholder="請輸入 姓名"
                rules="required"
              />
              <ErrorMessage
                name="姓名"
                class="invalid-feedback"
              />
            </div>
            <div class="mb-3">
              <label
                for="email"
                class="form-label"
              >Email
                <span class="text-danger">*</span></label>
              <Field
                id="email"
                v-model="user.email"
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
            </div>

            <div class="mb-3">
              <label
                for="tel"
                class="form-label"
              >電話
                <span class="text-danger">*</span></label>
              <Field
                id="tel"
                v-model="user.tel"
                name="電話"
                type="tel"
                class="form-control"
                :class="{ 'is-invalid': errors['電話'] }"
                placeholder="請輸入 電話"
                rules="required|min:8|max:10"
              />
              <ErrorMessage
                name="電話"
                class="invalid-feedback"
              />
            </div>
            <div class="mb-3">
              <label
                for="addr"
                class="form-label"
              >地址
                <span class="text-danger">*</span></label>
              <Field
                id="addr"
                v-model="user.addr"
                name="地址"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors['地址'] }"
                placeholder="請輸入 地址"
                rules="required"
              />
              <ErrorMessage
                name="地址"
                class="invalid-feedback"
              />
            </div>
            <div class="mb-3">
              <label
                for="payMethod"
                class="form-label"
              >付款方式
                <span class="text-danger">*</span></label>
              <Field
                id="payMethod"
                v-model="user.payMethod"
                as="select"
                name="付款方式"
                class="form-control"
                :class="{ 'is-invalid': errors['付款方式'] }"
                rules="required"
              >
                <option
                  value=""
                  disabled
                >
                  請選擇付款方式
                </option>
                <option value="ATM">
                  ATM
                </option>
                <option value="信用卡">
                  信用卡
                </option>
              </Field>
              <ErrorMessage
                name="付款方式"
                class="invalid-feedback"
              />
            </div>
            <div class="mb-3">
              <label
                for="message"
                class="form-label"
              >留言</label>
              <textarea
                id="message"
                v-model="msg"
                class="form-control"
                placeholder="請輸入留言"
                aria-describedby="message"
              />
            </div>
            <div
              class="text-center mb-5"
              :class="{'cursor-notAllow':!checkSubmit(errors)}"
            >
              <button
                :disabled="!checkSubmit(errors)"
                class="btn btn-primary"
                :type="checkSubmit(errors) ? 'submit' : 'button'"
              >
                送出訂單
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckOutStep from '@/components/CheckOutStep'
export default {
  name: 'Checkout',
  components: {
    CheckOutStep
  },
  data () {
    return {
      user: {
        name: 'this.user.name',
        email: '1@1.cccc',
        tel: '0123456789',
        addr: '111',
        payMethod: 'ATM'
      },
      msg: ''
      // user: {
      //   name: '',
      //   email: '',
      //   tel: '',
      //   addr: '',
      //   payMethod: '',
      //   msg: ''
      // }
    }
  },
  methods: {
    checkSubmit (hasError) {
      const noError = Object.values(hasError).length <= 0
      const hasNoEmpty = Object.values(this.user).every(info => info !== '')
      return (noError && hasNoEmpty)
    },
    submitOrder () {
      const data = {
        data: {
          user: {
            name: this.user.name,
            email: this.user.email,
            tel: this.user.tel,
            address: this.user.addr,
            payMethod: this.user.payMethod
          },
          message: this.user.msg
        }
      }
      this.$emitter.emit('fullScreenLoaidng', true)
      this.$http
        .post(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order`, data)
        .then((res) => {
          if (res.data.success) {
            const { message, total, orderId } = res.data
            this.$emitter.emit('nav-getCarts', 'updateOnly')
            this.$swal(`${message}, \n共$${total}元, \n訂單編號: \n ${orderId} \n 付款去!`, '', 'success').then(() => {
              this.$router.push(`/payment/${orderId}`)
            })
          } else {
            this.$swal(res.data.message, '', 'error')
          }
          this.$emitter.emit('fullScreenLoaidng', false)
        })
        .catch((error) => {
          this.$emitter.emit('fullScreenLoaidng', false)
          this.$swal(error, '', 'error')
        })
    }
  }
}
</script>
