<template>
  <div>
    <!-- 檢視 -->
    <div
      ref="adminEditOrdersModal"
      class="modal"
      tabindex="-1"
    >
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              訂單細節
            </h5>
            <button
              type="button"
              class="btn-close"
              aria-label="Close"
              @click="closeModal('edit')"
            />
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-4">
                <h3>使用者資訊</h3>
                <table class="table">
                  <tbody v-if="tempOrder.user">
                    <tr>
                      <th width="80">
                        姓名
                      </th>
                      <td>{{ tempOrder.user.name }}</td>
                    </tr>
                    <tr>
                      <th>Email</th>
                      <td>{{ tempOrder.user.email }}</td>
                    </tr>
                    <tr>
                      <th>電話</th>
                      <td>{{ tempOrder.user.tel }}</td>
                    </tr>
                    <tr>
                      <th>地址</th>
                      <td>{{ tempOrder.user.address }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="col-md-8">
                <h3>訂單資訊</h3>
                <table class="table">
                  <tbody v-if="tempOrder.user">
                    <tr>
                      <th>編號</th>
                      <td>{{ tempOrder.id }}</td>
                    </tr>
                    <tr>
                      <th width="100">
                        下單時間
                      </th>
                      <td>{{ $filters.date(tempOrder.create_at) }}</td>
                    </tr>
                    <!-- <tr>
                      <th>是否啟用</th>
                      <td>
                        {{ tempOrder.is_enabled ? '啟用' : '未啟用' }}
                      </td>
                    </tr> -->
                    <tr>
                      <th width="100">
                        付款時間
                      </th>
                      <td>
                        <span v-if="tempOrder.paid_date">
                          {{ $filters.date(tempOrder.paid_date) }}
                        </span>
                        <span v-else>
                          時間格式錯誤
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <th>是否付款</th>
                      <td :class="[tempOrder.is_paid ? 'text-success': 'text-danger']">
                        {{ tempOrder.is_paid ? '已付款' : '未付款' }}
                      </td>
                    </tr>
                    <!-- <tr>
                      <th>地址</th>
                      <td>{{ tempOrder.user.address }}</td>
                    </tr> -->
                    <tr>
                      <th>
                        總價
                      </th>
                      <td>
                        {{ `NT ${$filters.currency(tempOrder.total)}` }}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <h3>訂購的商品</h3>
                <table class="table">
                  <tbody v-if="tempOrder.products">
                    <tr
                      v-for="product in tempOrder.products"
                      :key="product.id"
                    >
                      <th>
                        {{ product.product.title }}
                      </th>
                      <td width="100">
                        {{ `${product.qty} / ${product.product.unit}` }}
                      </td>
                      <td
                        width="100"
                        class="text-end"
                      >
                        {{ `NT ${$filters.currency(product.final_total)}` }}
                      </td>
                    </tr>
                  </tbody>
                  <!-- <tfoot>
                    <tr>
                      <th
                        colspan="2"
                        class="text-end"
                      >
                        總價
                      </th>
                      <td class="text-end">
                        {{ `NT ${$filters.currency(tempOrder.total)}` }}
                      </td>
                    </tr>
                  </tfoot> -->
                </table>
                <div class="d-flex justify-content-end">
                  <div class="form-check">
                    <input
                      id="payChecked"
                      v-model="tempOrder.is_paid"
                      class="form-check-input"
                      type="checkbox"
                    >
                    <label
                      class="form-check-label"
                      for="payChecked"
                    >
                      {{ tempOrder.is_paid ? '已付款' : '未付款' }}
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-primary"
              @click="changePayment(id)"
            >
              修改付款狀態並關閉
            </button>
            <button
              type="button"
              class="btn btn-outline-secondary"
              @click="closeModal('edit')"
            >
              取消
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- 刪除 -->
    <div
      ref="adminDeleteOrderModal"
      class="modal"
      tabindex="-1"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              刪除訂單
            </h5>
            <button
              type="button"
              class="btn-close"
              aria-label="Close"
              @click="closeModal('delete')"
            />
          </div>
          <div class="modal-body">
            <p class="h3">
              是否要<span class="text-danger">刪除</span>??
            </p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-danger"
              @click="deleteOrder(id)"
            >
              確定刪除
            </button>
            <button
              type="button"
              class="btn btn-outline-secondary"
              @click="closeModal('delete')"
            >
              取消
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from 'bootstrap'
export default {
  data () {
    return {
      modal: {
        delete: null,
        edit: null
      },
      tempOrder: {},
      id: null,
      currentPage: 1
    }
  },
  mounted () {
    this.modal.delete = new Modal(this.$refs.adminDeleteOrderModal)
    this.modal.edit = new Modal(this.$refs.adminEditOrdersModal)
  },
  methods: {
    clearStatus () {
      this.tempOrder = {}
      this.id = null
    },
    openModal (type = 'delete', id, tempOrder, currentPage) {
      if (type === 'edit') {
        this.tempOrder = tempOrder
      }
      this.modal[type].show()
      this.id = id
      // 紀錄父層當下頁面 避免更新後跳回第一頁
      this.current_page = currentPage
    },
    closeModal (type) {
      this.modal[type].hide()
      this.clearStatus()
    },
    deleteOrder (id) {
      // /api/:api_path/admin/order/:order_id
      this.$emitter.emit('fullScreenLoaidng', true)
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/order/${id}`
      this.$http.delete(url)
        .then((res) => {
          this.$emitter.emit('fullScreenLoaidng', false)
          if (res.data.success) {
            this.closeModal('delete')
            this.$swal(res.data.message, '', 'success').then(() => {
              this.$emit('get-orders', this.current_page)
            })
            this.clearStatus()
          } else {
            this.$swal(res.data.message, '', 'error')
          }
        }).catch((error) => {
          this.$emitter.emit('fullScreenLoaidng', false)
          this.$swal(error, '', 'error')
        })
    },
    changePayment (id) {
      this.$emitter.emit('fullScreenLoaidng', true)
      this.$http.put(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/order/${id}`, { data: this.tempOrder })
        .then((res) => {
          this.$emitter.emit('fullScreenLoaidng', false)
          if (res.data.success) {
            // 回來就要關掉 modal 資料狀態也可以清掉 不然 bs 會找不到
            this.closeModal('edit')
            this.$swal('付款狀態已修改', '', 'success').then(() => {
              this.$emit('get-orders', this.current_page)
            })
          } else {
            this.$swal(res.data.message, '', 'error')
          }
        }).catch((error) => {
          this.$emitter.emit('fullScreenLoaidng', false)
          this.$swal(error, '', 'error')
        })
    }
  }
}
</script>
