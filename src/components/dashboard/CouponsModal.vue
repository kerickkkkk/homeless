<template>
  <div>
    <!-- 新增修改 -->
    <div
      ref="addEditCouponsModal"
      class="modal"
      tabindex="-1"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              {{ modalType === 'add' ? '新增' : '編輯' }}優惠券
            </h5>
            <button
              type="button"
              class="btn-close"
              aria-label="Close"
              @click="closeModal('addEdit')"
            />
          </div>
          <div class="modal-body">
            <div class="container-fluid">
              <form id="productForm">
                <div class="form-group mb-2">
                  <label for="title">
                    <span class="text-danger">*</span>
                    名稱
                  </label>
                  <input
                    id="title"
                    v-model="tempCoupon.title"
                    type="text"
                    class="form-control"
                    placeholder="標題"
                  >
                </div>
                <div class="form-row mb-2">
                  <div class="form-group col-6">
                    <label for="percent">
                      <span class="text-danger">*</span>
                      折扣百分比
                    </label>
                    <input
                      id="percent"
                      v-model.number="tempCoupon.percent"
                      type="number"
                      min="1"
                      class="form-control"
                      placeholder="折扣百分比"
                    >
                  </div>
                  <div class="form-group col-6">
                    <label for="code">
                      <span class="text-danger">*</span>
                      折扣碼
                    </label>
                    <input
                      id="code"
                      v-model="tempCoupon.code"
                      type="text"
                      class="form-control"
                      placeholder="折扣碼"
                    >
                  </div>
                </div>
                <div class="form-group mb-2">
                  <label for="due_date">
                    <span class="text-danger">*</span>
                    到期日
                  </label>
                  <input
                    id="due_date"
                    v-model="tempCoupon.due_date"
                    type="date"
                    class="form-control"
                    placeholder="到期日"
                  >
                </div>
                <div class="form-group form-check">
                  <input
                    id="productFormChecked"
                    v-model="tempCoupon.is_enabled"
                    type="checkbox"
                    class="form-check-input"
                    :true-value="1"
                    :false-value="0"
                  >
                  <label
                    class="form-check-label"
                    for="productFormChecked"
                  >是否啟用</label>
                </div>
              </form>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-primary"
              @click="sendCoupon"
            >
              確定
            </button>
            <button
              type="button"
              class="btn btn-outline-secondary"
              @click="closeModal('addEdit')"
            >
              取消
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- 刪除 -->
    <div
      ref="deleteCouponModal"
      class="modal"
      tabindex="-1"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              刪除優惠券
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
              是否要<span class="text-danger">刪除 {{ tempCoupon.title }} 優惠券</span>??
            </p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-danger"
              @click="deleteCoupon(tempCoupon)"
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
// import { Modal } from 'bootstrap'
// 建議改下方
import Modal from 'bootstrap/js/dist/modal'
export default {
  data () {
    return {
      modal: {
        delete: null,
        addEdit: null
      },
      modalType: '',
      tempCoupon: {},
      currentPage: 1
    }
  },
  mounted () {
    this.modal.delete = new Modal(this.$refs.deleteCouponModal)
    this.modal.addEdit = new Modal(this.$refs.addEditCouponsModal)
  },
  methods: {
    clearStatus () {
      this.modalType = ''
      this.tempCoupon = {}
    },
    addZero (para) {
      return para < 10 ? `0${para}` : para
    },
    openModal (type = 'delete', tempCoupon = {}, currentPage = 1) {
      this.tempCoupon = tempCoupon
      if (type === 'add' || type === 'edit') {
        if (type === 'edit') {
          // 調整 unixtimestamp 進入 v-model 綁定需要 yyyy-mm-dd
          let [mm, dd, yyyy] = this.$filters.date(this.tempCoupon.due_date).split('/')
          mm = this.addZero(mm)
          dd = this.addZero(dd)
          this.tempCoupon.due_date = `${yyyy}-${mm}-${dd}`
        }
        this.modalType = type
        type = 'addEdit'
      }
      this.modal[type].show()
      // 紀錄父層當下頁面 避免更新後跳回第一頁
      this.current_page = currentPage
    },
    closeModal (type) {
      this.modal[type].hide()
      this.clearStatus()
    },
    deleteCoupon (tempCoupon) {
      this.$emitter.emit('fullScreenLoading', true)
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon/${tempCoupon.id}`
      this.$http.delete(url)
        .then((res) => {
          if (res.data.success) {
            this.$swal(`${tempCoupon.title} ${res.data.message}`, '', 'success').then(() => {
              this.$emit('get-items', this.current_page)
              this.closeModal('delete')
            })
          } else {
            this.$swal(res.data.message, '', 'error')
            this.closeModal('delete')
          }
          this.$emitter.emit('fullScreenLoading', false)
        }).catch((error) => {
          this.$swal(error, '', 'error')
          this.closeModal('delete')
          this.$emitter.emit('fullScreenLoading', false)
        })
    },
    sendCoupon () {
      // 檢查必填欄位
      // title(String)、is_enabled(Number)、percent(Number)、due_date(Number)、code(String) 為必填欄位
      this.tempCoupon.is_enabled = this.tempCoupon.is_enabled ? 1 : 0
      const inputMap = [
        { name: 'title', columnName: '名稱' },
        { name: 'is_enabled', columnName: '啟用' },
        { name: 'percent', columnName: '折扣百分比' },
        { name: 'due_date', columnName: '到期日' },
        { name: 'code', columnName: '折扣碼' }
      ]
      // 未輸入數值都是空字串
      // 空值返回
      // 因為可能 tempCoupon 內為空直接改成濾 falsy 的值
      const checkEmptyArr = inputMap.filter(el => this.tempCoupon[el.name] === 0 ? false : !this.tempCoupon[el.name])
      if (checkEmptyArr.length > 0) {
        const emptyMsg = checkEmptyArr.reduce((p, n) => {
          p += `${n.columnName} `
          return p
        }, '')
        this.$swal({
          title: '以下欄位必填!',
          text: emptyMsg,
          icon: 'error'
        })
        return false
      }

      // 處理 編輯時日期顯示有問題
      const data = { ...this.tempCoupon }
      data.due_date = new Date(this.tempCoupon.due_date).getTime() / 1000

      const url = {
        add: `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon/`,
        edit: `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`
      }
      const appMethod = {
        add: 'post',
        edit: 'put'
      }
      this.$emitter.emit('fullScreenLoading', true)
      // pass
      this.$http[appMethod[this.modalType]](url[this.modalType], { data })
        .then((res) => {
          if (res.data.success) {
            this.closeModal('addEdit')
            this.$swal(res.data.message, '', 'success').then(() => {
              this.$emit('get-items', this.current_page)
            })
            this.clearStatus()
          } else {
            const errorMsg = res.data.message.join('，')
            this.$swal(errorMsg, '', 'error')
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
