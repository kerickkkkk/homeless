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
            <th scope="col">
              刪除
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="cart in carts.carts"
            :key="cart.id"
          >
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
                  <p>規格</p>
                </div>
              </div>
            </th>
            <td class="text-end">
              NT ${{ cart.product.price }}
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
                  class="btn btn-primary"
                  @click="cartHandler('put', cart.id , cart.product.id , --cart.qty)"
                >
                  -
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
                  class="btn btn-primary"
                  @click="cartHandler('put', cart.id , cart.product.id , ++cart.qty)"
                >
                  +
                </button>
              </div>
            </td>
            <td class="text-end">
              NT ${{ cart.final_total }}
            </td>
            <td>
              <button
                class="btn btn-sm btn-outline-danger"
                @click="cartHandler('delete', cart.id)"
              >
                刪除
              </button>
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  data () {
    return {
      carts: {}
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

</style>
