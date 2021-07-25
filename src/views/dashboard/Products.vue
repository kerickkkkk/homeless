<template>
  <div class="p-5">
    <Loading
      :active="isLoading"
      color="#00BFFF"
      loader="dots"
    />
    <div class="text-end">
      <button
        type="button"
        class="btn btn-sm btn-primary me-3 my-3"
        @click="modalHandler('uploadImg')"
      >
        上傳圖片
      </button>
      <button
        type="button"
        class="btn btn-sm btn-primary my-3"
        @click="modalHandler('add', '' )"
      >
        建立新產品
      </button>
    </div>
    <table class="table mb-3">
      <thead>
        <tr>
          <th width="150">
            分類
          </th>
          <th>產品名稱</th>
          <th width="100">
            原價
          </th>
          <th width="100">
            售價
          </th>
          <th width="150">
            是否啟用
          </th>
          <th width="150">
            編輯
          </th>
        </tr>
      </thead>
      <tbody class="productList">
        <template v-if="products.length > 0">
          <tr
            v-for="product in products"
            :key="product.id"
          >
            <td>{{ product.category }}</td>
            <td>{{ product.title }}</td>
            <td class="text-right">
              {{ product.origin_price }}
            </td>
            <td class="text-right">
              {{ product.price }}
            </td>
            <td>
              <!-- bs4 -->
              <!-- <div class="custom-control custom-switch">
                <input
                  :id="`customSwitch${product.id}`"
                  :checked="product.is_enabled"
                  type="checkbox"
                  class="custom-control-input"
                  @change="enableProduct(product.id)"
                >
                <label
                  class="custom-control-label"
                  :class="{'text-success': product.is_enabled }"
                  :for="`customSwitch${ product.id }`"
                >{{ product.is_enabled ? "啟用" : "未啟用" }}</label>
              </div> -->

              <div class="form-check form-switch">
                <!-- 注意這邊需要用 checked = =... -->
                <input
                  :id="`customSwitch${product.id}`"
                  :checked="product.is_enabled"
                  class="form-check-input"
                  type="checkbox"
                  @change="enableProduct(product.id)"
                >
                <label
                  class="form-check-label"
                  :class="{'text-success': product.is_enabled }"
                  :for="`customSwitch${ product.id }`"
                >{{ product.is_enabled ? "啟用" : "未啟用" }}</label>
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
                  @click="modalHandler('edit', product.id ,{...product})"
                >
                  編輯
                </button>
                <button
                  type="button"
                  class="btn btn-outline-danger"
                  @click="modalHandler('delete', product.id ,{...product})"
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
            目前沒有產品唷!!!
          </td>
        </tr>
      </tbody>
    </table>
    <Pagination
      :pagination="pagination"
      @get-items="getProducts"
    />
    <!-- 統一一個 modal 管理 -->
    <!-- <addEditModal
      :api-url="apiUrl"
      :api-path="apiPath"
      :modal-type="modalType"
      :temp-product="tempProduct"
      @e-get-products="getProducts"
      @e-cancel-modal="cancelModal"
    /> -->
    <!-- modal 刪除 -->
    <!-- :api-url="apiUrl"
      :api-path="apiPath"
      :temp-product="tempProduct"
      @e-cancel-modal="cancelModal" -->
    <AdminProductsModal
      ref="AdminProductsModal"
      @get-items="getProducts"
    />

    <UploadImgModal
      ref="UploadImgModal"
    />

    <!-- modal upload img -->
    <!-- <UploadImgModal
      :api-url="
      apiUrl"
      :api-path="apiPath"
    /> -->
  </div>
</template>

<script>
import Pagination from '@/components/Pagination.vue'
import AdminProductsModal from '@/components/dashboard/ProductsModal.vue'
import UploadImgModal from '@/components/dashboard/UploadImgModal.vue'
export default {
  name: 'AdminProducts',
  components: {
    Pagination,
    AdminProductsModal,
    UploadImgModal
  },
  data () {
    return {
      isLoading: false,
      products: [],
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
    this.getProducts()
  },
  methods: {
    getProducts (page = 1) {
      this.$emitter.emit('fullScreenLoaidng', true)
      this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`)
        .then((res) => {
          this.$emitter.emit('fullScreenLoaidng', false)
          if (res.data.success) {
            const { products, pagination } = res.data
            this.products = products
            this.pagination = pagination
          } else {
            this.$swal(res.data.message, '', 'error')
          }
        }).catch((error) => {
          this.$emitter.emit('fullScreenLoaidng', false)
          this.$swal(error, '', 'error')
        })
    },
    enableProduct (selectId) {
      const index = this.products.findIndex((product) => product.id === selectId)
      this.products[index].is_enabled = !this.products[index].is_enabled

      this.$emitter.emit('fullScreenLoaidng', true)
      this.$http.put(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${selectId}`, { data: this.products[index] })
        .then((res) => {
          this.$emitter.emit('fullScreenLoaidng', false)
          if (res.data.success) {
            this.$swal(res.data.message, '', 'success').then(() => {
              this.$emit('get-products', this.pagination.current_page)
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
    modalHandler (type, id, tempProduct = {}) {
      // 控制往內部送
      if (type === 'uploadImg') {
        this.$refs.UploadImgModal.openModal()
      } else {
        this.$refs.AdminProductsModal.openModal(type, id, tempProduct, this.pagination.current_page)
      }
    }
  }
}
</script>
