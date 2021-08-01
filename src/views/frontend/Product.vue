<template>
  <div>
    <HeaderPic
      title="商品介紹"
      :url="url"
    />
    <div class="container">
      <div class="row mb-3 p-3">
        <div class="col-md-6 mb-3">
          <div class="slide__main">
            <div
              class="bg-cover img-fluid"
              :style="`background-image: url(${productDetail.imageUrl})`"
              style="min-height: 350px;"
              :alt="productDetail.title"
            />
          </div>
        </div>
        <div class="col-md-6 mb-3">
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
                {{ category || '餐點類型' }}
              </li>
            </ol>
          </nav>
          <div class="">
            <h1 class="text-primary mb-3">
              {{ productDetail.title }}
            </h1>
            <p>
              {{ productDetail.description }}
            </p>
            <p>
              付款方式： ATM 、 信用卡
            </p>
            <div class="d-flex align-items-center mb-2">
              <div class="me-2">
                數量:
              </div>
              <div
                class="btn-group me-3"
                role="group"
                aria-label="Basic checkbox toggle button group"
              >
                <button
                  :disabled="numRangeLimit < 2"
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
            <div class="d-flex justify-content-end mb-2">
              <div
                :class="{'text-decoration-line-through' :
                  productDetail.origin_price !== productDetail.price
                }"
              >
                原價： {{ productDetail.origin_price }} 元
              </div>
              <div
                v-if="productDetail.origin_price !== productDetail.price"
                class="text-primary ms-auto"
              >
                特價：<span class="h4">
                  {{ productDetail.price }}
                </span> 元
              </div>
            </div>
            <div class="d-flex justify-content-end">
              <div
                class="btn btn-outline-primary me-2"
                @click.prevent.stop="addCart"
              >
                加入購物車
              </div>
              <button
                type="button"
                class="btn btn-primary"
                @click.prevent="addCart(true)"
              >
                直接結帳
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="bg-light p-3 mb-5">
      <div class="container">
        <section>
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
      </div>
    </section>
    <section class="mb-5">
      <div class="container">
        <h3 class="text-primary mb-3">
          買了這些商品也買了...
        </h3>
        <ProductsSwiper
          :category="category"
        />
      </div>
    </section>
  </div>
</template>

<script>
import HeaderPic from '@/components/HeaderPic.vue'
import ProductsSwiper from '@/components/ProductsSwiper.vue'

export default {
  name: 'Product',
  components: {
    HeaderPic,
    ProductsSwiper
  },
  beforeRouteUpdate (to, from, next) {
    // 攔截寫入
    this.id = to.params.id
    // 沒有觸發先改手動觸發
    next()
  },
  data () {
    return {
      url: 'https://storage.googleapis.com/vue-course-api.appspot.com/pet/1627778041796.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=jbqYqb%2BnBd9rC20tRbH0q6jl5TqZRLzNoNuj50Tz2nZWwtN39CPaFRhuv9ISfSqKkET7obAxG6J7DSEecKvbUv9d%2BHyJb7ihdSoUi56lmESaILL%2FYPsY08Mp5vZewBkHHE%2Bv%2Bk2%2FJkpubgiBU0OK5GNujtsJOxa0j86sXZvyqgLrFr6baLQQuaWkdKoQ4Dzt%2BGKGunnby6kOXqgzl7piUC%2FGAlYgOC2l8orQv98a2xScKQ%2BJ9LXseFJPISoWrzUWz03QcbTpXTMAtsnZjv0Fg6Git8KJN6RAaCvvDJTM3QRwREPLrCRKoRJfTrb17c4ZMMvsZI5%2Btd8MkwX%2BKPyurQ%3D%3D',
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
  watch: {
    $route: {
      immediate: true,
      handler (to) {
        // 避免 非 prodcut 跳轉 會有問題
        if (to.name === 'product') {
          this.id = to.params.id
          this.getProductDetail(this.id)
        }
      }
    }
  },
  mounted () {
    // 因有同樣產品 改由 watch 控制
    // this.id = this.$route.params.id
    // this.getProductDetail(this.id)
  },
  methods: {
    // 更動到 global 變數
    // scrollToTop () {
    //   // 更換產品不刷新頁面要把卷軸往上拉
    //   // vue scroll to top of same route
    //   window.scrollTo(0, 0)
    // },
    getProductDetail (id) {
      this.$emitter.emit('fullScreenLoading', true)

      this.$http
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${id}`)
        .then((res) => {
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
          this.$emitter.emit('fullScreenLoading', false)
        }).catch((error) => {
          this.$swal(error, '', 'error')
          this.$emitter.emit('fullScreenLoading', false)
        })
    },
    addCart (goCheckOut) {
      const data = { data: { product_id: this.id, qty: this.numRangeLimit } }
      this.$emitter.emit('fullScreenLoading', true)
      this.$http
        .post(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`, data)
        .then((res) => {
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
          this.$emitter.emit('fullScreenLoading', false)
        })
        .catch((error) => {
          this.$swal(error, '', 'error')
          this.$emitter.emit('fullScreenLoading', false)
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
