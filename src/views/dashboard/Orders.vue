<template>
  <div class="orders container my-3">
    <table class="table mb-3 ">
      <thead>
        <tr>
          <th width="100">
            購買時間
          </th>
          <th width="100">
            Email
          </th>
          <th>
            購買款項
          </th>
          <th width="100">
            應付金額
          </th>
          <th width="150">
            是否付款
          </th>
          <th width="120">
            編輯
          </th>
        </tr>
      </thead>
      <tbody>
        <template v-if="orders.length > 0">
          <tr
            v-for="order in orders"
            :key="order.id"
          >
            <td>{{ $filters.date(order.create_at) }}</td>
            <td>
              {{ order?.user.email }}
            </td>
            <td>
              <ul>
                <li
                  v-for="product in order.products"
                  :key="product.id"
                >
                  {{ `${product.product.title}: ${product.product.price} * ${product.qty} = ${product.final_total}` }}
                </li>
              </ul>
            </td>
            <td class="text-end">
              NT {{ $filters.currency(order.total) }}
            </td>
            <td>
              <div class="form-check form-switch">
                <input
                  :id="`customSwitch${order.id}`"
                  :checked="order.is_paid"
                  class="form-check-input"
                  type="checkbox"
                  @change="changePayment(order.id ,order)"
                >
                <label
                  class="form-check-label"
                  :class="{'text-success': order.is_paid }"
                  :for="`customSwitch${ order.id }`"
                >{{ order.is_paid ? "已付款" : "未付款" }}</label>
              </div>
            </td>
            <td>
              <div
                class="btn-group btn-group-sm"
                role="group"
                aria-label="Basic example"
              >
                <button
                  type="button"
                  class="btn btn-outline-primary"
                  @click="modalHandler('edit', order.id ,{...order})"
                >
                  檢視
                </button>
                <button
                  type="button"
                  class="btn btn-outline-danger"
                  @click="modalHandler('delete', order.id)"
                >
                  刪除
                </button>
              </div>
            </td>
          </tr>
        </template>
        <tr v-else>
          <td
            class="text-center"
            colspan="100"
          >
            目前沒有訂單唷!!!
          </td>
        </tr>
      </tbody>
    </table>
    <Pagination
      :pagination="pagination"
      @get-items="getOrders"
    />
    <adminOrdersModal
      ref="adminOrdersModal"
      @change-payment="changePayment"
      @get-orders="getOrders"
    />
  </div>
</template>

<script>
import Pagination from '@/components/Pagination.vue'
import adminOrdersModal from '@/components/dashboard/OrdersModal'

export default {
  name: 'AdminOrders',
  components: {
    Pagination,
    adminOrdersModal
  },
  data () {
    return {
      orders: [],
      pagination: {
        category: null,
        current_page: null,
        has_next: false,
        has_pre: false,
        total_pages: null
      }
    }
  },
  created () {
    this.getOrders()
  },
  methods: {
    getOrders (page = 1) {
      // /api/:api_path/admin/orders?page=:page
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/orders?page=${page}`
      this.$emitter.emit('fullScreenLoaidng', true)

      // this.$emitter.emit('toast:push', { icon: 'success', title: 'title' })

      this.$http.get(url)
        .then((res) => {
          this.$emitter.emit('fullScreenLoaidng', false)
          if (res.data.success) {
            const { orders, pagination } = res.data
            this.orders = orders
            this.pagination = pagination
          } else {
            this.$swal(res.data.message, '', 'error')
          }
        }).catch((error) => {
          this.$emitter.emit('fullScreenLoaidng', false)
          this.$swal(error, '', 'error')
        })
    },
    changePayment (id) {
      // /api/:api_path/admin/order/:id
      const index = this.orders.findIndex((product) => product.id === id)
      this.orders[index].is_paid = !this.orders[index].is_paid

      this.$emitter.emit('fullScreenLoaidng', true)
      this.$http.put(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/order/${id}`, { data: this.orders[index] })
        .then((res) => {
          this.$emitter.emit('fullScreenLoaidng', false)
          if (res.data.success) {
            this.$swal('付款狀態已修改', '', 'success').then(() => {
              this.getOrders()
            })
          } else {
            this.$swal(res.data.message, '', 'error')
          }
        }).catch((error) => {
          this.$emitter.emit('fullScreenLoaidng', false)
          this.$swal(error, '', 'error')
        })
    },
    // modal 控制
    modalHandler (type, id, tempOrder = {}) {
      // 控制往內部送
      this.$refs.adminOrdersModal.openModal(type, id, tempOrder, this.pagination.current_page)
    }
  }
}
</script>
