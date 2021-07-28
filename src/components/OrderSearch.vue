<template>
  <div>
    <div
      ref="orderOffcanvas"
      class="offcanvas offcanvas-end"
      tabindex="-1"
    >
      <div class="offcanvas-header">
        <h5 id="offcanvasRightLabel">
          查詢訂單
        </h5>
        <button
          type="button"
          class="btn-close text-reset"
          aria-label="Close"
          @click="closeOffCanvas"
        />
      </div>
      <div class="offcanvas-body">
        <div class="d-flex">
          <div class="input-group mb-3">
            <input
              v-model="orderSearilNumber"
              type="text"
              class="form-control"
              placeholder="輸入訂單號碼"
            >
            <button
              :disabled="hasWord"
              class="btn btn-outline-primary"
              type="button"
              @click="findOrder"
            >
              查詢
            </button>
          </div>
        </div>
        <hr>
        <table
          v-if="Object.keys(order).length >0"
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
        <div class="text-end">
          <button
            :disabled="Object.keys(order).length <=0"
            class="btn btn-outline-primary me-2"
            @click="resetOrder"
          >
            清除訂單
          </button>
          <button
            class="btn btn-outline-primary"
            @click="closeOffCanvas"
          >
            取消
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import {Offcanvas} from 'bootstrap'
// 建議使用下面的方式 import
import Offcanvas from 'bootstrap/js/dist/offcanvas'

export default {
  data () {
    return {
      orderOffcanvas: '',
      order: {},
      orderSearilNumber: ''
    }
  },
  computed: {
    hasWord () {
      return String(this.orderSearilNumber).length <= 0
    }
  },
  mounted () {
    this.orderOffcanvas = new Offcanvas(this.$refs.orderOffcanvas)
  },
  methods: {
    show () {
      this.orderOffcanvas.show()
    },
    closeOffCanvas () {
      this.orderOffcanvas.hide()
      this.orderSearilNumber = ''
      this.resetOrder()
    },
    resetOrder () {
      this.order = {}
    },
    findOrder () {
      this.resetOrder()
      this.$emitter.emit('fullScreenLoading', true)
      this.$http
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order/${this.orderSearilNumber}`)
        .then((res) => {
          if (res.data.success) {
            const { order } = res.data
            if (order !== null) {
              this.$emitter.emit('toast:push', { icon: 'error', title: '謝謝您的訂購' })
              this.order = order
            } else {
              this.$emitter.emit('toast:push', { icon: 'error', title: '查無訂單' })
            }
            this.orderSearilNumber = ''
          } else {
            this.$swal(res.data.message, '', 'error')
          }
          this.$emitter.emit('fullScreenLoading', false)
        })
        .catch((error) => {
          this.$swal(error, '', 'error')
          this.$emitter.emit('fullScreenLoading', false)
        })
    }
  }
}
</script>
