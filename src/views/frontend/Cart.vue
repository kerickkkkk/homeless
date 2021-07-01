<template>
  <div class="container">
    <div class="row">
      <div class="text-end">
        <button
          class="btn btn-sm btn-outline-danger"
          @click="deleteAllCart"
        >
          清空購物車
        </button>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th
              width="50"
              scope="col"
            />
            <th scope="col">
              商品選項
            </th>
            <th scope="col">
              單價
            </th>
            <th scope="col">
              數量
            </th>
            <th scope="col">
              小計
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="cart in carts.carts"
            :key="cart.id"
          >
            <td>
              <button
                class="btn btn-outline-danger border-0"
                @click="cartHandler('delete', cart.id)"
              >
                <i class="bi bi-trash" />
              </button>
            </td>
            <th>
              <div class="cart__title d-flex">
                <div class="me-3">
                  <img
                    :src="cart.product.imageUrl"
                    :alt="cart.product.title"
                    width="50"
                    class="img-fluid"
                  >
                </div>
                <div class="cart__title__content">
                  <div class="h6">
                    {{ cart.product.title }}
                  </div>
                </div>
              </div>
            </th>
            <td class="text-end">
              NT ${{ $filters.currency(cart.product.price) }}
            </td>
            <td>
              <div
                class="btn-group"
                role="group"
                aria-label="Basic checkbox toggle button group"
              >
                <button
                  :disabled="currentCartId === cart.id"
                  type="button"
                  class="btn btn-outline-primary border-0"
                  @click="cartHandler('put', cart.id , cart.product.id , --cart.qty)"
                >
                  －
                </button>
                <input
                  v-model="cart.qty"
                  :disabled="currentCartId === cart.id"
                  type="number"
                  min="1"
                  class="form-control rounded-0"
                  style="width: 80px"
                  @change="cartHandler('put', cart.id , cart.product.id , ++cart.qty)"
                >

                <button
                  :disabled="currentCartId === cart.id"
                  type="button"
                  class="btn btn-outline-primary border-0"
                  @click="cartHandler('put', cart.id , cart.product.id , ++cart.qty)"
                >
                  ＋
                </button>
              </div>
            </td>
            <td class="text-end">
              NT ${{ $filters.currency(cart.final_total) }}
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td
              class="text-end"
              colspan="100"
            >
              原價 NT $ {{ carts.total }}
            </td>
          </tr>
          <tr>
            <td
              class="text-end"
              colspan="100"
            >
              總價 NT $ {{ carts.final_total }}
            </td>
          </tr>
        </tfoot>
      </table>
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
          結帳
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  data () {
    return {
      carts: {},
      currentCartId: null
    }
  },
  created () {
    this.getCart()
  },
  methods: {
    getCart () {
      // this.$emitter.emit('toast:push', { icon: 'success', title: res.data.message })
      this.$emitter.emit('fullScreenLoaidng', true)
      this.$http
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`)
        .then((res) => {
          this.$emitter.emit('fullScreenLoaidng', false)
          if (res.data.success) {
            const { data } = res.data
            this.carts = data
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
      this.currentCartId = id
      if (type === 'put') {
        qty = qty < 1 ? 1 : qty > 999 ? 999 : qty
      }
      const data = type === 'put' ? { product_id: productId, qty } : null

      this.$emitter.emit('fullScreenLoaidng', true)

      this.$http[type](`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`, { data })
        .then((res) => {
          this.$emitter.emit('fullScreenLoaidng', false)

          this.currentCartId = null
          if (res.data.success) {
            this.$emitter.emit('toast:push', { icon: 'success', title: res.data.message })
            this.getCart()
          } else {
            this.currentCartId = null
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

</style>
