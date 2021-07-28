<template>
  <div class="coupons container my-3">
    <div class="text-end">
      <button
        type="button"
        class="btn btn-sm btn-primary my-3"
        @click="modalHandler('add')"
      >
        建立新優惠券
      </button>
    </div>
    <table class="table mb-3 ">
      <thead>
        <tr>
          <th width="100">
            名稱
          </th>
          <th width="100">
            折扣百分比
          </th>
          <th>
            折扣碼
          </th>
          <th width="100">
            到期日
          </th>
          <th width="150">
            是否啟用
          </th>
          <th width="120">
            編輯
          </th>
        </tr>
      </thead>
      <tbody>
        <template v-if="coupons.length > 0">
          <tr
            v-for="coupon in coupons"
            :key="coupon.id"
          >
            <td>{{ coupon.title }}</td>
            <td>{{ coupon.percent }}</td>
            <td>{{ coupon.code }}</td>
            <td>{{ $filters.date(coupon.due_date) }}</td>
            <td>
              <div class="form-check form-switch">
                <input
                  :id="`customSwitch${coupon.id}`"
                  :checked="coupon.is_enabled"
                  class="form-check-input"
                  type="checkbox"
                  @change="enableCoupon(coupon.id)"
                >
                <label
                  class="form-check-label"
                  :class="{'text-success': coupon.is_enabled }"
                  :for="`customSwitch${ coupon.id }`"
                >{{ coupon.is_enabled ? "啟用" : "未啟用" }}</label>
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
                  @click="modalHandler('edit', {...coupon})"
                >
                  編輯
                </button>
                <button
                  type="button"
                  class="btn btn-outline-danger"
                  @click="modalHandler('delete', {...coupon})"
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
            快新增折價券!
          </td>
        </tr>
      </tbody>
    </table>
    <Pagination
      :pagination="pagination"
      @get-items="getCoupons"
    />
    <CouponsModal
      ref="CouponsModal"
      @get-items="getCoupons"
    />
  </div>
</template>

<script>
import Pagination from '@/components/Pagination.vue'
import CouponsModal from '@/components/dashboard/CouponsModal.vue'

export default {
  name: 'Coupons',
  components: {
    Pagination,
    CouponsModal
  },
  data () {
    return {
      coupons: [],
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
    this.getCoupons()
  },
  methods: {
    getCoupons (page = 1) {
      // /api/:api_path/admin/coupons?page=:page
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupons?page=${page}`
      this.$emitter.emit('fullScreenLoading', true)

      // this.$emitter.emit('toast:push', { icon: 'success', title: 'title' })

      this.$http.get(url)
        .then((res) => {
          if (res.data.success) {
            const { coupons, pagination } = res.data
            this.coupons = coupons
            this.pagination = pagination
          } else {
            this.$swal(res.data.message, '', 'error')
          }
          this.$emitter.emit('fullScreenLoading', false)
        }).catch((error) => {
          this.$swal(error, '', 'error')
          this.$emitter.emit('fullScreenLoading', false)
        })
    },
    // modal 控制
    modalHandler (type, tempCoupon) {
      this.$refs.CouponsModal.openModal(type, tempCoupon, this.pagination.current_page)
    },
    enableCoupon (id) {
      const index = this.coupons.findIndex((coupons) => coupons.id === id)
      //  修正型別
      this.coupons[index].is_enabled = !this.coupons[index].is_enabled ? 1 : 0

      this.$emitter.emit('fullScreenLoading', true)
      this.$http.put(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon/${id}`, { data: this.coupons[index] })
        .then((res) => {
          if (res.data.success) {
            this.$swal(res.data.message, '', 'success').then(() => {
              this.getCoupons()
            })
          } else {
            const eorrorMSg = (typeof res.data.message) === 'string' ? res.data.message : res.data.message.join('，')
            this.$swal(eorrorMSg, '', 'error')
          }
          this.$emitter.emit('fullScreenLoading', false)
        }).catch((error) => {
          this.$swal(error, '', 'error')
          this.$emitter.emit('fullScreenLoading', false)
        })
    }
  }
}
</script>
