
<template>
  <!-- 使用 區域loading  -->
  <div>
    <Swiper
      :breakpoints="{
        '767': {
          'slidesPerView': 1,
          'spaceBetween': 20
        },
        '768': {
          'slidesPerView': 3,
          'spaceBetween': 20
        },
        '1024': {
          'slidesPerView': 4,
          'spaceBetween': 20
        }
      }"
      :autoplay="{
        'delay': 2500,
        'disableOnInteraction': true,
        'pauseOnMouseEnter': true
      }"
      :navigation="true"
      :loop="true"
    >
      <template v-if="products.length > 0">
        <SwiperSlide
          v-for="item in filterProducts"
          :key="item.id"
        >
          <div
            class="card h-100"
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
                  <span class="text-danger h5 ms-auto">特價： {{ item.price }} 元</span>
                </template>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </template>
      <template v-else>
        <SwiperSlide>
          載入中...
        </SwiperSlide>
      </template>
    </Swiper>
  </div>
</template>

<script>
export default {
  name: 'ProductsSwiper',
  props: {
    category: {
      type: String,
      default () {
        return ''
      }
    }
  },
  data () {
    return {
      products: [],
      favoriteList: []
    }
  },
  computed: {
    filterProducts () {
      return this.products?.filter((item) => {
        return this.category === '' || item.category === this.category
      })
    }
  },
  created () {
    this.getFavorite()
    this.getProducts()
  },
  methods: {
    getProducts () {
      this.$http
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`)
        .then((res) => {
          if (res.data.success) {
            const { products } = res.data
            this.products = products
          } else {
            this.$swal(res.data.message, '', 'error')
          }
        })
        .catch((error) => {
          this.$swal(error, '', 'error')
        })
    },
    getProductDetail (id) {
      if (this.category === '') {
        this.$emitter.emit('fullScreenLoaidng', true)
        this.$http
          .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${id}`)
          .then((res) => {
            this.$emitter.emit('fullScreenLoaidng', false)
            if (res.data.success) {
              this.$router.push(`/product/${id}`)
            } else {
              this.$swal(res.data.message, '', 'error')
            }
          })
          .catch((error) => {
            this.$swal(error, '', 'error')
            this.$emitter.emit('fullScreenLoaidng', false)
          })
      } else {
        this.$emit('get-product-detail', id)
      }
    },
    getFavorite () {
      const favoriteList = localStorage.getItem('homeLessFavorite') || '[]'
      this.favoriteList = JSON.parse(favoriteList)
      this.$emitter.emit('nav-getfavorite')
      this.$emit('get-favorite')
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
