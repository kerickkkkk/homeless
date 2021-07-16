<template>
  <div>
    <HeaderPic title="確認購物車內容" />
    <div class="container my-5">
      <div class="row">
        <template v-if="cartLen > 0">
          <div class="text-end">
            <button
              class="btn btn-sm btn-outline-danger"
              @click="deleteAllCart"
            >
              清空購物車
            </button>
          </div>
          <div class="table-responsive">
            <table class="table ">
              <thead class="text-center">
                <tr>
                  <th
                    width="50"
                    scope="col"
                  />
                  <th
                    class="d-sm-table-cell d-none"
                    scope="col"
                  >
                    商品名稱
                  </th>
                  <th
                    class="d-sm-table-cell d-none"
                    scope="col"
                  >
                    單價
                  </th>
                  <th scope="col">
                    <span class="d-sm-none d-inline-block">商品/</span>
                    數量
                  </th>
                  <th scope="col">
                    小計
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="item in carts.carts"
                  :key="item.id"
                >
                  <td>
                    <button
                      class="btn btn-outline-danger border-0"
                      @click="cartHandler('delete', item.id)"
                    >
                      <i class="bi bi-trash" />
                    </button>
                  </td>
                  <th class="d-sm-table-cell d-none">
                    <div class="cart__title d-flex justify-content-center">
                      <div class="me-3 d-md-block d-none">
                        <img
                          :src="item.product.imageUrl"
                          :alt="item.product.title"
                          width="50"
                          class="img-fluid"
                        >
                      </div>
                      <div class="cart__title__content">
                        <div class="h6">
                          {{ item.product.title }}
                        </div>
                      </div>
                    </div>
                  </th>
                  <td class="text-end d-none d-sm-table-cell">
                    ${{ $filters.currency(item.product.price) }}
                  </td>
                  <td class="text-center">
                    <span class="d-sm-none d-block">{{ item.product.title }}</span>
                    <div
                      class="btn-group"
                      role="group"
                      aria-label="Basic checkbox toggle button group"
                    >
                      <button
                        :disabled="currentCartId === item.id || item.qty <2"
                        type="button"
                        class="btn btn-outline-primary border-0"
                        @click="cartHandler('put', item.id , item.product.id , --item.qty)"
                      >
                        －
                      </button>
                      <input
                        v-model.number="item.qty"
                        :disabled="currentCartId === item.id"
                        type="number"
                        min="1"
                        class="form-control rounded-0"
                        style="width: 50px"
                        @change="cartHandler('put', item.id , item.product.id , item.qty)"
                      >

                      <button
                        :disabled="currentCartId === item.id"
                        type="button"
                        class="btn btn-outline-primary border-0"
                        @click="cartHandler('put', item.id , item.product.id , ++item.qty)"
                      >
                        ＋
                      </button>
                    </div>
                  </td>
                  <td class="text-end">
                    ${{ $filters.currency(item.final_total) }}
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td
                    class="text-end"
                    colspan="100"
                  >
                    原價  $ {{ $filters.currency(carts.total) }}
                  </td>
                </tr>
                <tr>
                  <td
                    colspan="100"
                  >
                    <div class="input-group ms-auto w-75 w-sm-50">
                      <input
                        v-model="coupon"
                        type="text"
                        class="form-control"
                        placeholder="輸入優惠券: code_20"
                      >
                      <button
                        class="btn btn-outline-primary"
                        type="button"
                        @click="useCoupon"
                      >
                        套用
                      </button>
                    </div>
                    <div
                      v-if="couponCode"
                      class="text-end"
                    >
                      <span class="text-danger">{{ couponCode }}</span> <br>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td
                    class="text-end"
                    colspan="100"
                  >
                    總價  $ {{ $filters.currency( carts.final_total) }}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div class="text-end">
            <router-link
              to="/products"
              class="btn btn-outline-primary me-3"
            >
              繼續選購
            </router-link>
            <router-link
              to="/checkout"
              class="btn btn-danger"
            >
              填寫訂單
            </router-link>
          </div>
        </template>
        <template v-else>
          <h2 class="text-center">
            購物車目前內容是空的
          </h2>
          <p class="h3 text-center">
            快來去選產品吧
          </p>
          <router-link
            class="btn btn-primary my-4"
            to="/products"
          >
            前往產品列表
          </router-link>
        </template>
      </div>
    </div>
    <SubScribe />
  </div>
</template>

<script>
import HeaderPic from '@/components/HeaderPic.vue'
import SubScribe from '@/components/SubScribe.vue'

export default {
  name: 'Cart',
  components: {
    HeaderPic,
    SubScribe
  },
  data () {
    return {
      carts: {},
      cartLen: 0,
      currentCartId: null,
      coupon: '',
      couponCode: ''
    }
  },
  created () {
    this.getCarts()
  },
  methods: {
    getCarts () {
      // this.$emitter.emit('toast:push', { icon: 'success', title: res.data.message })
      this.$emitter.emit('fullScreenLoaidng', true)
      this.$http
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`)
        .then((res) => {
          this.$emitter.emit('fullScreenLoaidng', false)
          if (res.data.success) {
            const { data } = res.data
            this.carts = data
            this.cartLen = data.carts.length
          } else {
            this.$swal(res.data.message, '', 'error')
          }
        })
        .catch((error) => {
          this.$emitter.emit('fullScreenLoaidng', false)
          this.$swal(error, '', 'error')
        })
    },
    cartHandler (type, id, productId, qty) {
      qty = parseInt(qty)
      this.currentCartId = id
      if (type === 'put') {
        qty = qty < 1 ? 1 : qty > 999 ? 999 : qty
      }
      const data = type === 'put' ? { product_id: productId, qty } : null

      this.$emitter.emit('fullScreenLoaidng', true)

      this.$http[type](`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`, { data })
        .then((res) => {
          this.$emitter.emit('fullScreenLoaidng', false)
          this.$emitter.emit('nav-getCarts')
          this.currentCartId = null
          if (res.data.success) {
            this.$emitter.emit('toast:push', { icon: 'success', title: res.data.message })
            this.getCarts()
          } else {
            this.currentCartId = null
            this.$swal(res.data.message, '', 'error')
          }
        })
        .catch((error) => {
          this.$emitter.emit('fullScreenLoaidng', false)
          this.$swal(error, '', 'error')
        })
    },
    useCoupon () {
      // /api/:api_path/coupon
      this.$emitter.emit('fullScreenLoaidng', true)
      const data = {
        data: {
          code: this.coupon
        }
      }
      this.$http.post(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/coupon`, data)
        .then((res) => {
          this.$emitter.emit('fullScreenLoaidng', false)

          if (res.data.success) {
            this.$emitter.emit('toast:push', { icon: 'success', title: res.data.message })
            // console.log(res.data.data.final_total)
            this.coupon = ''
            this.couponCode = res.data.message
            this.getCarts()
          } else {
            this.$swal(res.data.message, '', 'error')
          }
        })
        .catch((error) => {
          this.$emitter.emit('fullScreenLoaidng', false)
          this.$swal(error, '', 'error')
        })
    },
    deleteAllCart () {
      // this.$emitter.emit('toast:push', { icon: 'success', title: res.data.message })
      this.$emitter.emit('fullScreenLoaidng', true)
      this.$http
        .delete(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/carts`)
        .then((res) => {
          this.$emitter.emit('fullScreenLoaidng', false)
          if (res.data.success) {
            this.$emitter.emit('nav-getCarts')
            this.$swal(res.data.message, '', 'success')
            this.getCarts()
          } else {
            this.$swal(res.data.message, '', 'error')
          }
        })
        .catch((error) => {
          this.$emitter.emit('fullScreenLoaidng', false)
          this.$swal(error, '', 'error')
        })
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '@/assets/stylesheet/all';
  @include media-breakpoint-up(sm) {
    .d-sm-table-cell{
      display: table-cell !important;
    }
    .w-sm-50{
      width: 50% !important;
    }
  }
  @include media-breakpoint-up(md) {
    .d-md-table-cell{
      display: table-cell !important;
    }
  }
</style>
