<template>
  <div>
    <HeaderPic
      title="各式各樣的餐點 新鮮提供"
      :url="url"
    />
    <div class="container py-5">
      <div class="row">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link
                to="/"
                class="nav-link active p-0"
              >
                首頁
              </router-link>
            </li>
            <li class="breadcrumb-item">
              <router-link
                to="/products"
                class="nav-link active py-0 pe-0"
              >
                餐點
              </router-link>
            </li>
            <li
              class="breadcrumb-item active"
              aria-current="page"
            >
              {{ list.currentCategory === 'all' ? '全部' : list.currentCategory }}
            </li>
          </ol>
        </nav>
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
                class="card h-100 position-relative"
                :class="{moveToCart: moveToCart === item.id}"
                role="button"
                @click="getProductDetail(item.id)"
              >
                <div
                  class="card__Favorite"
                  @click.stop="setFavorite(item.id, item.title)"
                >
                  <i
                    class="bi"
                    :class="[favoriteList.includes(item.id)? 'bi-heart-fill' : 'bi-heart']"
                  />
                </div>
                <div class="card__imgWrap">
                  <div
                    class="card__img bg-cover"
                    style="height:250px"
                    :style="`background-image: url(${item.imageUrl})`"
                  />
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
                      <span class="text-primary h5 ms-auto">特價： {{ item.price }} 元</span>
                    </template>
                  </div>
                  <div class="d-flex justify-content-center">
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
                      :ref="`cart-${item.id}`"
                      class="btn btn-primary"
                      type="button"
                      @click.stop="addCart(item.id)"
                      @mouseenter="cartBtnMoveHandler(item.id)"
                      @mouseleave="cartBtnMoveHandler(null)"
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
import HeaderPic from '@/components/HeaderPic.vue'

export default {
  name: 'Products',
  components: {
    HeaderPic,
    Pagination
  },
  data () {
    return {
      url: 'https://storage.googleapis.com/vue-course-api.appspot.com/pet/1627778940510.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=YSG873llFoGpjsQoOqyFPBQNtCbnFgi8Ep3DvUp0Hd740T4lFZ375jjDgrJPTCVgLt%2FAYbe2sApT94SpfR%2FiZJLPyJhb2BJOgLnl6T6%2FB7LSH37JAs4JJr%2Bu0em56ChzRS4Y6abM8ezau4L4Vnn86sEyFZCisFCVi3InnNjzKoeKuUMxvOkpFf5vzE01f4z8UbJXXZcltVIO%2BDGKxBIoe2fNhqWKzy%2B6oBQgmcb7Bd8IlimNFDpbEbfieFE4b%2F9Rp3RP976MDmUgRnoaSU3jXh54EjxnSPqcVO0hi%2BaUWu4y86ApYzZiC4QQTppc7RzQKHl21edmAUSsG61DuZ0u9w%3D%3D',
      loadingStatus: {
        itemLoading: false
      },
      moveToCart: null,
      list: {
        currentCategory: 'all',
        ary: [],
        changeCategory: false
      },
      products: null,
      pagination: null,
      favoriteList: []
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
  mounted () {
    this.getFavorite()
  },
  methods: {
    // 取得所有產品 處理分類問題
    getProducts () {
      this.$emitter.emit('fullScreenLoading', true)

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
          this.$emitter.emit('fullScreenLoading', false)
        })
        .catch((error) => {
          this.$swal(error, '', 'error')
          this.$emitter.emit('fullScreenLoading', false)
        })
    },
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
      this.$emitter.emit('fullScreenLoading', true)
      this.$http
        .post(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`, data)
        .then((res) => {
          if (res.data.success) {
            this.loadingStatus.itemLoading = null
            this.$emitter.emit('nav-getCarts')
            this.$emitter.emit('toast:push', { icon: 'success', title: `${res.data.data.product.title} ${res.data.message}` })
            // 這邊加入會讓 swal 受影響
            // this.getCart()
          } else {
            this.$swal(res.data.message, '', 'error')
          }
          this.$emitter.emit('fullScreenLoading', false)
        })
        .catch((error) => {
          this.loadingStatus.itemLoading = null
          this.$swal(error, '', 'error')
          this.$emitter.emit('fullScreenLoading', false)
        })
    },
    getCategory () {
      const categorys = this.products?.map(product => product.category)
      this.list.ary = [...new Set(categorys)]
    },
    paginationHandler (products, currentPage = 1) {
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
    },
    // 是否移動到加入購物車按鈕
    cartBtnMoveHandler (id) {
      this.moveToCart = id
    },
    getFavorite () {
      const favoriteList = localStorage.getItem('homeLessFavorite') || '[]'
      this.favoriteList = JSON.parse(favoriteList)
      this.$emitter.emit('nav-getfavorite')
    },
    setFavorite (id, title) {
      if (this.favoriteList.includes(id)) {
        const index = this.favoriteList.findIndex(item => item === id)
        this.favoriteList.splice(index, 1)
        this.$emitter.emit('toast:push', { icon: 'error', title: `${title}已 移除 我的最愛` })
      } else {
        this.favoriteList.push(id)
        this.$emitter.emit('toast:push', { icon: 'success', title: `${title}已 加入 我的最愛` })
      }

      const favoriteStr = JSON.stringify(this.favoriteList)
      localStorage.setItem('homeLessFavorite', '')
      localStorage.setItem('homeLessFavorite', favoriteStr)
      this.getFavorite()
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/stylesheet/all.scss";

.list-group {
  top: 70px;
}
</style>
