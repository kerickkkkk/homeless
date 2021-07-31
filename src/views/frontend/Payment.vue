<template>
  <div class="payment">
    <div class="container">
      <CheckOutStep :step="order.is_paid ? 'paid' : 'payment'" />
      <template v-if="order.is_paid">
        <div class="row align-items-center mb-5 p-4 bg-light">
          <div class="col-md-6 mb-4">
            <div class="text-center">
              <h1
                class="text-success text-center h1 mb-3"
              >
                <i class="bi bi-check-circle-fill" /> 付款成功
              </h1>
              <p class="w-75 mx-auto">
                感謝您的訂購，為您附上購買明細。如對此次交易有任何問題，請隨時聯絡我們。
              </p>
              <button
                type="button"
                class="btn btn-primary col-md-3"
                @click="goShop"
              >
                返回菜單
              </button>
            </div>
          </div>
          <div class="col-md-6">
            <div class="bg-white p-5 rounded">
              <h2 class="text-center border-bottom pb-3">
                購買明細
              </h2>
              <table
                v-if="orderIsBack"
                class="table table-border"
              >
                <tbody>
                  <tr>
                    <th>下單時間</th>
                    <td>{{ $filters.date(order.create_at) }}</td>
                  </tr>
                  <tr>
                    <th>訂購編號</th>
                    <td>{{ order.id }}</td>
                  </tr>
                  <tr>
                    <th>訂購人</th>
                    <td>{{ order.user.name }}</td>
                  </tr>
                  <tr>
                    <th>信箱</th>
                    <td>{{ order.user.email }}</td>
                  </tr>
                  <tr>
                    <th>電話</th>
                    <td>{{ order.user.tel }}</td>
                  </tr>
                  <tr>
                    <th>地址</th>
                    <td>{{ order.user.address }}</td>
                  </tr>
                  <tr>
                    <th>商品清單</th>
                    <td>
                      <p
                        v-for="product in Object.values(order.products)"
                        :key="product.id"
                        class="mb-0 border-bottom"
                      >
                        {{ product.product.title }}
                        <span class="d-flex">
                          ${{ product.product.price }} x {{ product.qty }} {{ product.product.unit }} = <span class="ms-auto">${{ product.total }}</span>
                        </span>
                      </p>
                      <p class="mb-0 text-end">
                        總價： NT${{ order.total }}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <th>折價券</th>
                    <td>{{ Object.values(order.products)[0].coupon ? `${Object.values(order.products)[0].coupon.percent} 折`: '無' }}</td>
                  </tr>
                  <tr>
                    <th>備註</th>
                    <td>1</td>
                  </tr>
                  <tr>
                    <th>付款狀態</th>
                    <td>{{ order.is_paid ? "已付款" : "未付款" }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </template>
      <template v-else>
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
              v-for="item in order.products"
              :key="item.id"
            >
              <td>{{ item.product.title }}</td>
              <td>
                {{ item.product.price }}
              </td>
              <td>{{ item.qty }}</td>
              <td class="text-end">
                {{ item.qty * item.product.origin_price }}
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td
                class="text-end"
                colspan="100"
              >
                折扣  $ {{ $filters.currency( totalOriginPrice) }}
              </td>
            </tr>
            <tr>
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
            </tr>
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
        </div>
      </template>
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
  computed: {
    orderIsBack () {
      return Object.keys(this.order).includes('id')
    },
    totalOriginPrice () {
      // order 需有 id屬性 表示已經 ajax 回來
      if (this.orderIsBack) {
        const res = Object.values(this.order.products).reduce((prev, next) => {
          prev += next.product.origin_price * next.qty
          return prev
        }, 0)
        return (res || 0)
      }
      return 0
    }
  },
  created () {
    this.orderId = this.$route.params.id
    this.getOrder(this.$route.params.id)
  },
  methods: {
    // 取得某筆訂單
    getOrder (id) {
      this.$emitter.emit('fullScreenLoading', true)
      this.$http
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order/${id}`)
        .then((res) => {
          if (res.data.success) {
            const { order } = res.data
            this.order = order
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
    pay (id) {
      this.$emitter.emit('fullScreenLoading', true)
      this.$http
        .post(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/pay/${id}`)
        .then((res) => {
          if (res.data.success) {
            const { message } = res.data
            this.$swal(`${message}!! \n`, '', 'success')
            this.getOrder(id)
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
    // 更新附款狀態
    goShop () {
      this.$router.push('/products')
    }
  }
}
</script>
