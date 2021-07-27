<template>
  <div>
    <!-- 新增修改 -->
    <div
      ref="adminAddEdittModal"
      class="modal"
      tabindex="-1"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              {{ modalType === 'add' ? '新增' : '編輯' }}產品
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
                <div class="row">
                  <div class="col-md-4">
                    <div class="form-group my-2">
                      <label for="mainImg">主要圖片</label>
                      <input
                        id="mainImg"
                        v-model.lazy="tempProduct.imageUrl"
                        type="text"
                        class="form-control mb-3"
                        placeholder="輸入主圖網址"
                      >
                      <img
                        class="img-fluid"
                        :src="tempProduct.imageUrl"
                        alt="圖片"
                      >
                    </div>

                    <template v-if="tempProduct.imagesUrl?.length > 0">
                      <div class="form-group my-2">
                        <h6 class="h6">
                          次要圖片
                        </h6>
                      </div>
                      <div class="form-row">
                        <div
                          v-for="(temp,i) in tempProduct.imagesUrl"
                          :key="i"
                          class="col-md-6 mb-5"
                        >
                          <label :for="'#image' + (i+1)">輸入圖片網址 {{ i+1 }}</label>
                          <!-- 指向問題用 temp 會改不到原本的 -->
                          <input
                            :id="'image'+(i+1)"
                            v-model="tempProduct.imagesUrl[i]"
                            type="text"
                            class="form-control mb-3"
                            :placeholder="'輸入圖片網址'+(i+1)"
                          >
                          <div>
                            <img
                              class="img-fluid"
                              :src="temp"
                              alt="圖片"
                            >
                          </div>
                        </div>
                      </div>
                    </template>
                    <hr>
                    <div class="form-group my-2">
                      <h6 class="h6">
                        多圖新增
                      </h6>
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-primary btn-block mb-2"
                        @click="addTempImage"
                      >
                        新增圖片
                      </button>
                      <div class="mb-5">
                        <input
                          v-model.lazy.trim="newTempImageUrl"
                          type="text"
                          class="form-control form-control-sm mb-3"
                          placeholder="新增圖片網址"
                        >
                        <div>
                          <img
                            class="img-fluid"
                            :src="newTempImageUrl"
                            alt="新增圖片"
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-8">
                    <div class="form-group mb-2">
                      <!-- title(String)、category(String)、unit(String)、origin_price(Number)、price(Number) 為必填欄位 -->
                      <label for="title">
                        <span class="text-danger">*</span>
                        標題
                      </label>
                      <input
                        id="title"
                        v-model="tempProduct.title"
                        type="text"
                        class="form-control"
                        placeholder="標題"
                      >
                    </div>
                    <div class="form-row mb-2">
                      <div class="form-group col-md-6">
                        <label for="category">
                          <span class="text-danger">*</span>
                          分類
                        </label>
                        <input
                          id="category"
                          v-model="tempProduct.category"
                          type="text"
                          class="form-control"
                          placeholder="分類"
                        >
                      </div>
                      <div class="form-group col-md-6">
                        <label for="unit">
                          <span class="text-danger">*</span>
                          單位
                        </label>
                        <input
                          id="unit"
                          v-model="tempProduct.unit"
                          type="text"
                          class="form-control"
                          placeholder="單位"
                        >
                      </div>
                    </div>
                    <div class="form-row mb-2">
                      <div class="form-group col-md-6">
                        <label for="origin_price">
                          <span class="text-danger">*</span>
                          原價
                        </label>
                        <input
                          id="origin_price"
                          v-model.number="tempProduct.origin_price"
                          type="number"
                          class="form-control"
                          min="1"
                          placeholder="原價"
                        >
                      </div>
                      <div class="form-group col-md-6">
                        <span class="text-danger">*</span>
                        <label for="price">售價</label>
                        <input
                          id="price"
                          v-model.number="tempProduct.price"
                          type="number"
                          class="form-control"
                          min="1"
                          placeholder="售價"
                        >
                      </div>
                    </div>
                    <div class="form-group mb-2">
                      <label for="description">
                        產品描述
                      </label>
                      <textarea
                        id="description"
                        v-model="tempProduct.description"
                        class="form-control"
                        placeholder="描述"
                      />
                    </div>
                    <div class="form-group mb-2">
                      <label for="content">
                        說明內容
                      </label>
                      <textarea
                        id="content"
                        v-model="tempProduct.content"
                        class="form-control"
                        placeholder="說明"
                      />
                    </div>
                    <div class="form-group form-check">
                      <input
                        id="productFormChecked"
                        v-model="tempProduct.is_enabled"
                        type="checkbox"
                        class="form-check-input"
                      >
                      <label
                        class="form-check-label"
                        for="productFormChecked"
                      >是否啟用</label>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-primary"
              @click="sendProduct"
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
      ref="adminDeleteProductModal"
      class="modal"
      tabindex="-1"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              刪除產品
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
              是否要<span class="text-danger">將 {{ tempProduct.title }} 刪除</span>??
            </p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-danger"
              @click="deleteProduct(id)"
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
import Modal from 'bootstrap/js/dist/modal'
export default {
  props: {
    tempProductId: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      modal: {
        delete: null,
        addEdit: null
      },
      newTempImageUrl: '',
      modalType: '',
      tempProduct: {},
      id: null,
      currentPage: 1
    }
  },
  mounted () {
    this.modal.delete = new Modal(this.$refs.adminDeleteProductModal)
    this.modal.addEdit = new Modal(this.$refs.adminAddEdittModal)
    this.$refs.adminDeleteProductModal.addEventListener('hidePrevented.bs.modal', this.clearStatus)
    this.$refs.adminAddEdittModal.addEventListener('hidePrevented.bs.modal', this.clearStatus)
  },
  unmouted () {
    this.$refs.adminDeleteProductModal.removeEventListener('hidePrevented.bs.modal', this.clearStatus)
    this.$refs.adminAddEdittModal.removeEventListener('hidePrevented.bs.modal', this.clearStatus)
  },
  methods: {
    clearStatus () {
      this.modalType = ''
      this.newTempImageUrl = ''
      this.tempProduct = {}
      this.id = null
    },
    openModal (type = 'delete', id, tempProduct, currentPage) {
      if (type === 'edit' || type === 'add') {
        this.modalType = type
        type = 'addEdit'
      }
      this.tempProduct = tempProduct
      this.modal[type].show()
      this.id = id
      // 紀錄父層當下頁面 避免更新後跳回第一頁
      this.current_page = currentPage
    },
    closeModal (type) {
      this.modal[type].hide()
      this.clearStatus()
    },
    deleteProduct (id) {
      // /api/:api_path/admin/product/:product_id
      this.$emitter.emit('fullScreenLoaidng', true)
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${id}`
      this.$http.delete(url)
        .then((res) => {
          this.$emitter.emit('fullScreenLoaidng', false)
          if (res.data.success) {
            this.closeModal('delete')
            this.$swal(res.data.message, '', 'success').then(() => {
              this.$emit('get-items', this.current_page)
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
    sendProduct (type) {
      // 檢查必填欄位
      // if(!this.checkMustFill()) return false
      const inputMap = [
        { name: 'title', columnName: '標題' },
        { name: 'category', columnName: '分類' },
        { name: 'unit', columnName: '單位' },
        { name: 'origin_price', columnName: '原價' },
        { name: 'price', columnName: '售價' }
      ]

      // 未輸入數值都是空字串
      // 空值返回
      // 因為可能 tempProduct 內為空直接改成濾 falsy 的值
      const checkEmptyArr = inputMap.filter(el => !this.tempProduct[el.name])
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
      const url = {
        add: `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/`,
        edit: `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${this.id}`
      }
      const appMethod = {
        add: 'post',
        edit: 'put'
      }
      this.$emitter.emit('fullScreenLoaidng', true)
      // pass
      this.$http[appMethod[this.modalType]](url[this.modalType], { data: this.tempProduct })
        .then((res) => {
          this.$emitter.emit('fullScreenLoaidng', false)
          if (res.data.success) {
            this.closeModal('addEdit')
            this.$swal(res.data.message, '', 'success').then(() => {
              this.$emit('get-items', this.current_page)
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
    addTempImage () {
      if (this.newTempImageUrl !== '') {
        // 為空要先初始化
        if (!this.tempProduct.imagesUrl) {
          this.tempProduct.imagesUrl = []
        }
        this.tempProduct.imagesUrl.push(this.newTempImageUrl)
        this.newTempImageUrl = ''
      } else {
        this.$swal('請輸入新增圖片網址', '', 'error')
      }
    }
  }
}
</script>
