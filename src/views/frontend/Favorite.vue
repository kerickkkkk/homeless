<template>
  <div class="favorite">
    <HeaderPic
      title="我的最愛"
      class="mb-4"
    />
    <div class="container">
      <div class="row mb-5">
        <template v-if="filterProducts?.length >0">
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
                class="card__Favorite pe fs-2 text-secondary position-absolute"
                @click.stop=" setFavorite(item.id, item.title)"
              >
                <i
                  class="bi"
                  :class="[favoriteList.includes(item.id)? 'bi-heart-fill' : 'bi-heart']"
                />
              </div>
              <div class="card__imgWrap ">
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
          <!-- <Pagination
            :pagination="pagination"
            :is-all-products="true"
            @change-page="changePage"
          /> -->
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
    <section class="mb-3">
      <div class="container">
        <h3 class="text-primary mb-3">
          忘了我了嗎? 快把我加上去
        </h3>
        <PorductsSwiper
          ref="productSwiper"
          @get-favorite="getFavorite"
        />
      </div>
    </section>
  </div>
</template>

<script>
import HeaderPic from '@/components/HeaderPic.vue'
import PorductsSwiper from '@/components/PorductsSwiper.vue'

export default {
  name: 'Favorite',
  components: {
    HeaderPic,
    PorductsSwiper
  },
  data () {
    return {
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
      favoriteList: []
    }
  },
  computed: {
    filterProducts () {
      return this.products?.filter((item) => this.favoriteList.includes(item.id))
    }
  },
  mounted () {
    this.getFavorite()
    this.getProducts()
  },
  methods: {
    getProducts () {
      this.$emitter.emit('fullScreenLoaidng', true)

      this.$http
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`)
        .then((res) => {
          if (res.data.success) {
            const { products } = res.data
            this.products = products
            // this.paginationHandler(products)
            // this.getCategory()
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
    getFavorite () {
      const favoriteList = localStorage.getItem('homeLessFavorite') || []
      this.favoriteList = JSON.parse(favoriteList)
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
      console.log(this.$refs.productSwiper)
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
    }
  }
}
</script>
