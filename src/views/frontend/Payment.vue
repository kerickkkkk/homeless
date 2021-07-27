<template>
  <div class="payment">
    <div class="container">
      <CheckOutStep :step="order.is_paid ? 'paid' : 'payment'" />
      <p
        v-if="order.is_paid"
        class="text-danger text-center h1"
      >
        付款完成 !
      </p>
      <h2 class="text-center mb-3">
        購物清單
      </h2>
      <table class="table text-center table-striped">
        <thead>
          <tr>
            <th>商品名稱</th>
            <th width="70">
              單價
            </th>
            <th width="70">
              數量
            </th>
            <th width="70">
              小計
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(v,k) in order.products"
            :key="k"
          >
            <td>{{ v.product.title }}</td>
            <td>
              {{ v.product.price }}
            </td>
            <td>{{ v.qty }}</td>
            <td class="text-end">
              {{ v.qty * v.product.price }}
            </td>
          </tr>
        </tbody>
        <tfoot>
          <td
            class="text-end py-2"
            colspan="2"
          >
            總計
          </td>
          <td
            class="text-end"
            colspan="2"
          >
            <span>{{ order.total }}</span> 元
          </td>
        </tfoot>
      </table>

      <h2 class="text-center mb-3">
        訂購人資訊
      </h2>
      <table class="table text-center table-striped">
        <tbody>
          <tr>
            <th>姓名：</th>
            <td>{{ order.user.name }}</td>
          </tr>
          <tr>
            <th>電話：</th>
            <td>{{ order.user.tel }}</td>
          </tr>
          <tr>
            <th>住址：</th>
            <td>{{ order.user.address }}</td>
          </tr>
          <tr>
            <th>電子信箱：</th>
            <td>{{ order.user.email }}</td>
          </tr>
          <tr>
            <th>訂購日期：</th>
            <td>{{ $filters.date(order.create_at) }}</td>
          </tr>
          <tr>
            <th>付款狀態：</th>
            <td :class="[order.is_paid ? 'text-success' : 'text-danger']">
              {{ order.is_paid ? '已' :' 未' }}付款
            </td>
          </tr>
        </tbody>
      </table>

      <div class="text-end my-5">
        <button
          v-if="!order.is_paid"
          type="button"
          class="btn btn-primary"
          @click="pay(orderId)"
        >
          確認付款去
        </button>
        <button
          v-else
          type="button"
          class="btn btn-primary col-md-3"
          @click="goShop"
        >
          返回菜單
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import CheckOutStep from '@/components/CheckOutStep.vue'

export default {
  name: 'Payment',
  components: {
    CheckOutStep
  },
  data () {
    return {
      orderId: null,
      order: {
        user: {}

      }
    }
  },
  created () {
    this.orderId = this.$route.params.id
    this.getOrder(this.$route.params.id)
  },
  methods: {
    // 取得某筆訂單
    getOrder (id) {
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
