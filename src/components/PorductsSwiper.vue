
<template>
  <!-- 使用 區域loading  -->
  <div>
    <swiper
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
        'disableOnInteraction': false
      }"
      :navigation="true"
      :loop="true"
      class="productsSwiper"
    >
      <template v-if="products.length > 0">
        <swiper-slide
          v-for="item in filterProducts"
          :key="item.id"
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
        </swiper-slide>
      </template>
      <template v-else>
        <swiper-slide>
          載入中...
        </swiper-slide>
      </template>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'PorductsSwiper',
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
      products: []

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
    this.getProducts()
  },
  methods: {
    getProducts () {
      // this.$emitter.emit('fullScreenLoaidng', true)

      this.$http
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`)
        .then((res) => {
          if (res.data.success) {
            const { products } = res.data
            this.products = products
          } else {
            this.$swal(res.data.message, '', 'error')
          }
          // this.$emitter.emit('fullScreenLoaidng', false)
        })
        .catch((error) => {
          this.$swal(error, '', 'error')
          // this.$emitter.emit('fullScreenLoaidng', false)
        })
    },
    getProductDetail (id) {
      this.$emit('get-product-detail', id)
      //  以下使用 vue router 轉換 comonent 沒有轉換無法使 component 刷新

      // this.$emitter.emit('fullScreenLoaidng', true)
      // this.$http
      //   .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${id}`)
      //   .then((res) => {
      //     this.$emitter.emit('fullScreenLoaidng', false)
      //     if (res.data.success) {
      //       // console.log(`/product/${id}`)
      //       // this.$router.push(`/product/${id}`)
      //       this.$router.push(
      //         { name: 'Product', params: { id } }
      //       )
      //     } else {
      //       this.$swal(res.data.message, '', 'error')
      //     }
      //   })
      //   .catch((error) => {
      //     this.$swal(error, '', 'error')
      //     this.$emitter.emit('fullScreenLoaidng', false)
      //   })
    }
  }
}
</script>
