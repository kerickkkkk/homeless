<template>
  <div class="favorite">
    <HeaderPic
      title="喜歡的 通通都在這"
      class="mb-4"
      :url="url"
    />
    <div class="container">
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
          <li
            class="breadcrumb-item active"
            aria-current="page"
          >
            我的最愛
          </li>
        </ol>
      </nav>
      <div class="row mb-5">
        <template v-if="filterProducts.length>0">
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
                @click.stop=" setFavorite(item.id, item.title)"
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
                    看詳細
                  </button>
                  <button
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
        </template>
        <div
          v-else
          class="text-center mb-5"
        >
          <h2>沒有我的最愛</h2>
          <p class="display-2 mb-3">
            快去產品頁挑選!!!
          </p>
          <router-link
            to="/products"
            class="btn btn-primary"
          >
            點此跳轉!
          </router-link>
        </div>
      </div>
    </div>
    <section class="bg-light py-4">
      <div class="container">
        <h3 class="text-primary mb-3">
          忘了我了嗎? 快把我加上去
        </h3>
        <ProductsSwiper
          ref="productSwiper"
          @get-favorite="getFavorite"
        />
      </div>
    </section>
  </div>
</template>

<script>
import HeaderPic from '@/components/HeaderPic.vue'
import ProductsSwiper from '@/components/ProductsSwiper.vue'

export default {
  name: 'Favorite',
  components: {
    HeaderPic,
    ProductsSwiper
  },
  data () {
    return {
      url: 'https://storage.googleapis.com/vue-course-api.appspot.com/pet/1627780826134.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=KMQXrwxi3OrY0z870p926cf80WkIhKPI7Z122qoYH5PUyCHSzvX4hpxloBJz2H5qEge9KzndKO1VczB7U1BnU5ou%2BqicJGbDM6lEz1DK5McQn9R4xOrHQp0CK%2BqGr%2B%2FL6dZUi2eVrc5OP3StJATrHHaDy56sBWbwsfc%2FPYbzcQeff36PUDtulHYFrYU%2Bw98kIuC6Xl37TMiVIeewh8byjnHg%2FlhVNXKWjmj%2FGW6MctBqoADf8EQI%2BzlpFSQWzR%2FR9MSVOWxTS5VfUN3OlRKuNAX7x2OYoDgdfWtaHW18sl2Czl%2FveTWUNWWHCUiBD9%2FQ2KS%2B6SWxKBOV2FWouOaimg%3D%3D',
      loadingStatus: {
        itemLoading: false
      },
      moveToCart: null,
      list: {
        currentCategory: 'all',
        ary: [],
        changeCategory: false
      },
      products: [],
      favoriteList: []
    }
  },
  computed: {
    filterProducts () {
      return this.products.filter((item) => this.favoriteList.includes(item.id))
    }
  },
  mounted () {
    this.getFavorite()
    this.getProducts()
  },
  methods: {
    getProducts () {
      this.$emitter.emit('fullScreenLoading', true)

      this.$http
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`)
        .then((res) => {
          if (res.data.success) {
            const { products } = res.data
            this.products = products
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
    getFavorite () {
      // 修正 getFavorite  不應是一個字串而是一個陣列。
      const favoriteList = JSON.parse(localStorage.getItem('homeLessFavorite')) || []
      this.favoriteList = favoriteList
      this.$emitter.emit('nav-getfavorite')
      this.getProducts()
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
      this.$refs.productSwiper.getFavorite()
    },
    cartBtnMoveHandler (id) {
      this.moveToCart = id
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
    }
  }
}
</script>
