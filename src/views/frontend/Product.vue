<template>
  <div>
    <HeaderPic title="商品介紹" />
    <div class="container">
      <div class="row mb-3">
        <div class="col-md-6">
          <div class="slide__main p-3">
            <div
              class="bg-cover img-fluid"
              :style="`background-image: url(${productDetail.imageUrl})`"
              style="min-height: 350px ;"
              :alt="productDetail.title"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="d-flex flex-column justify-content-between h-100">
            <h1 class="text-primary p-3">
              {{ productDetail.title }}
            </h1>
            <section>
              {{ productDetail.description }}
            </section>
            <section>
              付款方式： ATM 、 信用卡
            </section>
            <div class="d-flex mb-3 align-items-center">
              <div class="me-2">
                數量:
              </div>
              <div
                class="btn-group me-3"
                role="group"
                aria-label="Basic checkbox toggle button group"
              >
                <button
                  type="button"
                  class="btn btn-primary"
                  @click="numCountHandler('minus')"
                >
                  -
                </button>
                <input
                  v-model.number="numRangeLimit"
                  type="number"
                  min="1"
                  class="form-control rounded-0"
                  style="width:80px"
                >

                <button
                  type="button"
                  class="btn btn-primary"
                  @click="numCountHandler('pluse')"
                >
                  +
                </button>
              </div>
              {{ productDetail.unit }}
            </div>
            <div class="d-flex align-items-end">
              <div
                :class="{'text-decoration-line-through' :
                  productDetail.origin_price !== productDetail.price
                }"
              >
                原價： {{ productDetail.origin_price }} 元
              </div>
              <div
                v-if="productDetail.origin_price !== productDetail.price"
                class="ms-auto text-danger"
              >
                特價： <span class="h4">
                  {{ productDetail.price }}
                </span> 元
              </div>
            </div>
            <div class="d-flex justify-content-end">
              <div
                class="btn btn-primary me-2"
                @click.prevent.stop="addCart"
              >
                加入購物車
              </div>
              <button
                type="button"
                class="btn btn-danger"
                @click.prevent="addCart(true)"
              >
                直接結帳
              </button>
            </div>
          </div>
        </div>
      </div>
      <section class="bg-light p-3 mb-5">
        <section class="productDetail__content">
          <h4 class="text-primary">
            產品詳細
          </h4>
          <p>{{ productDetail.content }}</p>
        </section>
        <section>
          <h4 class="text-primary">
            訂購及其他說明
          </h4>
          <ul>
            <li>
              取餐時間：
              套餐類型
              <span class="text-danger">
                提前三天
              </span>
              預購，其餘商品如不想等候請提前一天訂購。
            </li>
            <li>
              外送服務： 請提早確認是否人手充足可以外送，運送範圍為該天販售地點 10 公里以內。
            </li>
            <li>
              生鮮食品因其規格問題，會依照其重量在正負範圍 5% ，外觀大小以及厚度一定會略有差異。
            </li>
            <li>
              因無任何添加，食材，飲料皆已新鮮現煮，請把握鮮期使用。
            </li>
          </ul>
        </section>
      </section>
    </div>
    <section class="mb-5">
      <div class="container">
        <h3 class="text-primary mb-3">
          買了這些商品也買了...
        </h3>
        <PorductsSwiper
          :category="category"
          @get-product-detail="getProductDetail"
        />
      </div>
    </section>
  </div>
</template>

<script>
import HeaderPic from '@/components/HeaderPic.vue'
import PorductsSwiper from '@/components/PorductsSwiper.vue'

export default {
  name: 'Product',
  components: {
    HeaderPic,
    PorductsSwiper
  },
  data () {
    return {
      productDetail: {},
      num: 1,
      id: null,
      category: ''
    }
  },
  computed: {
    numRangeLimit: {
      get () {
        return this.num
      },
      set (val) {
        this.num = val < 1 ? 1 : val >= 999 ? 999 : val
      }
    }
  },
  mounted () {
    this.id = this.$route.params.id
    this.getProductDetail(this.id)
  },
  methods: {
    // scrollToTop () {
    //   // 更換產品不刷新頁面要把卷軸往上拉
    //   // vue scroll to top of same route
    //   window.scrollTo(0, 0)
    // },
    getProductDetail (id) {
      this.$emitter.emit('fullScreenLoaidng', true)

      this.$http
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${id}`)
        .then((res) => {
          this.$emitter.emit('fullScreenLoaidng', false)

          if (res.data.success) {
            this.productDetail = res.data.product
            this.category = res.data.product.category
            this.$tools.goTop()
          } else {
            const config = {
              title: res.data.message,
              icon: 'error',
              confirmButtonText: '回產品頁'
            }
            this.$swal(config).then(() => {
              this.$router.push('/products')
            })
          }
        })
        .catch((error) => {
          this.$emitter.emit('fullScreenLoaidng', false)
          this.$swal(error, '', 'error')
        })
    },
    addCart (goCheckOut) {
      const data = { data: { product_id: this.id, qty: this.numRangeLimit } }
      this.$emitter.emit('fullScreenLoaidng', true)
      this.$http
        .post(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`, data)
        .then((res) => {
          this.$emitter.emit('fullScreenLoaidng', false)
          if (res.data.success) {
            // 預設會傳物件 會爆掉
            if (goCheckOut === true) {
              this.$router.push('/cart')
            } else {
              this.$emitter.emit('toast:push', { icon: 'success', title: res.data.message })
            }
            this.$emitter.emit('nav-getCarts')
          } else {
            const erroMsg = res.data.message.reduce((prev, next) => (`${prev} ${next}`), '')
            this.$swal(erroMsg, '', 'error')
          }
        })
        .catch((error) => {
          this.$emitter.emit('fullScreenLoaidng', false)
          this.$swal(error, '', 'error')
        })
    },
    numCountHandler (type) {
      this.numRangeLimit = type === 'pluse' ? ++this.numRangeLimit : --this.numRangeLimit
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
