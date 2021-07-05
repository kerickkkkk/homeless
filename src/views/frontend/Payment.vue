<template>
  <div class="payment">
    <CheckOutStep :step="order.is_paid ? 'paid' : 'payment'" />

    <div class="container">
      <div class="row">
        付款狀態 : {{ order.is_paid ? '已付款' : '未付款' }}
        <button
          v-if="!order.is_paid"
          type="button"
          class="btn btn-primary"
          @click="pay(orderId)"
        >
          付款
        </button>
        <button
          v-else
          type="button"
          class="btn btn-primary"
          @click="goShop"
        >
          購買去
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import CheckOutStep from '@/components/CheckOutStep'

export default {
  name: 'Payment',
  components: {
    CheckOutStep
  },
  data () {
    return {
      orderId: null,
      order: {}
    }
  },
  created () {
    this.orderId = this.$route.params.id
    this.getOrder(this.$route.params.id)
  },
  methods: {
    // 取得某筆訂單
    getOrder (id) {
      // /api/:api_path/order/:order_id
      this.$emitter.emit('fullScreenLoaidng', true)
      this.$http
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order/${id}`)
        .then((res) => {
          this.$emitter.emit('fullScreenLoaidng', false)
          if (res.data.success) {
            const { order } = res.data
            this.order = order
          } else {
            this.$swal(res.data.message, '', 'error')
          }
        })
        .catch((error) => {
          this.$emitter.emit('fullScreenLoaidng', false)
          this.$swal(error, '', 'error')
        })
    },
    pay (id) {
      this.$emitter.emit('fullScreenLoaidng', true)
      this.$http
        .post(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/pay/${id}`)
        .then((res) => {
          if (res.data.success) {
            this.$emitter.emit('fullScreenLoaidng', false)
            const { message } = res.data
            this.$swal(`${message}!! \n`, '', 'success')
            this.getOrder(id)
            // this.$swal(`${message}!! \n 繼續選購`, '', 'success').then(() => {
            //   this.$router.push('/products')
            // })
          } else {
            this.$swal(res.data.message, '', 'error')
          }
        })
        .catch((error) => {
          this.$emitter.emit('fullScreenLoaidng', false)
          this.$swal(error, '', 'error')
        })
    },
    // 更新附款狀態
    goShop () {
      this.$router.push('/products')
    }
  }
}
</script>
