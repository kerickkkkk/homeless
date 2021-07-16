<template>
  <div>
    <div
      style="background-image:linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)"
      class="bg-cover position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center"
    >
      <div class="col-md-5 p-lg-5 mx-auto my-5 text-white">
        <h2 class="display-4 fw-normal">
          今天想補充點咖啡因嗎?
        </h2>
        <p class="lead fw-normal">
          這裡提供各式的精品咖啡!!
        </p>
      </div>
      <div class="product-device shadow-sm d-none d-md-block" />
      <div class="product-device product-device-2 shadow-sm d-none d-md-block" />
    </div>
    <div class="container py-5">
      <div class="row">
        <div class="col-md-3">
          <div
            class="list-group sticky-top mb-3"
          >
            <a
              href="#"
              :class="{active: list.currentCategory === 'all'}"
              class="list-group-item list-group-item-action"
              aria-current="true"
              @click.prevent="categoryHandler('all')"
            >
              全部
            </a>
            <a
              v-for="item in list.ary"
              :key="item"
              href="#"
              :class="{active: list.currentCategory === item}"
              class="list-group-item list-group-item-action"
              aria-current="true"
              @click.prevent="categoryHandler(item)"
            >
              {{ item }}
            </a>
          </div>
        </div>
        <div class="col-md-9">
          <div class="row">
            <div
              v-for="item in filterProducts"
              :key="item.id"
              class="col-lg-4 col-md-6 mb-3"
            >
              <div
                class="card h-100"
                role="button"
                @click="getProductDetail(item.id)"
              >
                <div class="card__imgWrap">
                  <div
                    class="card__img bg-cover"
                    style="height:250px"
                    :style="`background-image: url(${item.imageUrl})`"
                  >
                  <!-- <img
                    :src="item.imageUrl"
                    class="img-cover"
                    style="height:150px; width:150px"
                    alt="圖片"
                  > -->
                  </div>
                </div>
                <div class="card-body">
                  <div class="d-flex justify-content-between">
                    <h5 class="card-title">
                      {{ item.title }}
                    </h5>
                    <div>
                      <div class="badge rounded-pill bg-secondary h5">
                        {{ item.category }}
                      </div>
                    </div>
                  </div>
                  <div class="d-flex justify-content-between">
                    <template v-if="item.origin_price === item.price">
                      <span class="h5 ms-auto">原價： {{ item.origin_price }} 元</span>
                    </template>
                    <template v-else>
                      <del>原價： {{ item.origin_price }} 元</del>
                      <span class="text-danger h5 ms-auto">特價： {{ item.price }} 元</span>
                    </template>
                  </div>
                  <div class="d-flex justify-content-center">
                    <!-- router-link :to="`/product/${item.id}`" -->
                    <button
                      class="btn btn-outline-primary me-3"
                      type="button"
                      @click="getProductDetail(item.id)"
                    >
                      <span
                        v-if="loadingStatus.itemLoading === item.id"
                        class="spinner-grow spinner-grow-sm"
                        role="status"
                        aria-hidden="true"
                      />
                      <!-- Loading... -->

                      看詳細
                    </button>
                    <button
                      class="btn btn-danger"
                      type="button"
                      @click.stop="addCart(item.id)"
                    >
                      <span
                        v-if="loadingStatus.itemLoading === item.id"
                        class="spinner-grow spinner-grow-sm"
                        role="status"
                        aria-hidden="true"
                      />
                      <i class="bi bi-cart-plus" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <Pagination
              :pagination="pagination"
              :is-all-products="true"
              @change-page="changePage"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination.vue'

export default {
  name: 'Products',
  components: {
    Pagination
  },
  data () {
    return {
      // isLoading: false,
      loadingStatus: {
        itemLoading: false
      },
      // list
      list: {
        currentCategory: 'all',
        ary: [],
        changeCategory: false
      },
      products: null,
      pagination: null
    }
  },
  computed: {
    filterProducts () {
      // 每頁 10 筆 有需要操作再拉出去
      const itemsPerPage = 10
      return this.products?.filter(product => this.list.currentCategory === 'all' || product.category === this.list.currentCategory)
        ?.slice((this.pagination.current_page - 1) * itemsPerPage, this.pagination.current_page * itemsPerPage)
    }
  },
  created () {
    this.getProducts()
  },
  methods: {
    // 取得所有產品 處理分類問題
    getProducts () {
      this.$emitter.emit('fullScreenLoaidng', true)

      this.$http
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`)
        .then((res) => {
          if (res.data.success) {
            const { products } = res.data
            this.products = products
            this.paginationHandler(products)
            this.getCategory()
          } else {
            this.$swal(res.data.message, '', 'error')
          }
          this.$emitter.emit('fullScreenLoaidng', false)
        })
        .catch((error) => {
          this.$swal(error, '', 'error')
          this.$emitter.emit('fullScreenLoaidng', false)
        })
    },
    // getProducts (page = 1) {
    //   this.$emitter.emit('fullScreenLoaidng', true)

    //   this.$http
    //     .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products?page=${page}`)
    //     .then((res) => {
    //       if (res.data.success) {
    //         const { products, pagination } = res.data
    //         this.products = products
    //         this.pagination = pagination
    //         this.getCategory()
    //       } else {
    //         this.$swal(res.data.message, '', 'error')
    //       }
    //       this.$emitter.emit('fullScreenLoaidng', false)
    //     })
    //     .catch((error) => {
    //       this.$swal(error, '', 'error')
    //       this.$emitter.emit('fullScreenLoaidng', false)
    //     })
    // },
    getProductDetail (id) {
      this.loadingStatus.itemLoading = id
      this.$http
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${id}`)
        .then((res) => {
          this.loadingStatus.itemLoading = null
          if (res.data.success) {
            this.$router.push(`/product/${id}`)
          } else {
            this.$swal(res.data.message, '', 'error')
          }
        })
        .catch((error) => {
          this.$swal(error, '', 'error')
          this.loadingStatus.itemLoading = null
        })
    },
    addCart (id, qty = 1) {
      const data = { data: { product_id: id, qty } }
      this.loadingStatus.itemLoading = id
      this.$emitter.emit('fullScreenLoaidng', true)
      this.$http
        .post(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`, data)
        .then((res) => {
          this.$emitter.emit('fullScreenLoaidng', false)
          if (res.data.success) {
            this.loadingStatus.itemLoading = null
            this.$emitter.emit('nav-getCarts')
            this.$emitter.emit('toast:push', { icon: 'success', title: `${res.data.data.product.title} ${res.data.message}` })
            // 這邊加入會讓 swal 受影響
            // this.getCart()
          } else {
            this.$swal(res.data.message, '', 'error')
          }
        })
        .catch((error) => {
          this.$emitter.emit('fullScreenLoaidng', false)
          this.loadingStatus.itemLoading = null
          this.$swal(error, '', 'error')
        })
    },
    getCategory () {
      const categorys = this.products?.map(product => product.category)
      this.list.ary = [...new Set(categorys)]
    },
    paginationHandler (products, currentPage = 1) {
      // {"total_pages":2,"current_page":1,"has_pre":false,"has_next":true,"category":null}
      const productsPerPage = 10
      this.pagination = {
        total_pages: Math.ceil(products.length / productsPerPage),
        current_page: currentPage,
        has_pre: currentPage > 1,
        has_next: currentPage < Math.ceil(products.length / productsPerPage),
        category: null
      }
    },
    changePage (page) {
      this.paginationHandler(this.products, page)
    },
    categoryHandler (type) {
      this.list.currentCategory = type
      const tempPorducts = this.products.filter(product => type === 'all' || product.category === type)
      this.paginationHandler(tempPorducts)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.list-group {
  top: 70px;
}
// @import '@/assets/stylesheet/all';
// .list-group-item{
//   cursor: pointer;
//   color: $primary;
//   &:hover , &.active{
//     background-color: $primary;
//     color:#fff;
//   }
// }
</style>
