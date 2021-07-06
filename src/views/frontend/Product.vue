<template>
  <div>
    <Loading
      :active="isLoading"
      color="#00BFFF"
      loader="dots"
    />
    <div class="container">
      <div class="row mb-3">
        <div class="col-md-6">
          <div class="slide__main p-3">
            <div
              class="bg-cover img-fluid"
              :style="`background-image: url(${productDetail.imageUrl})`"
              style="min-height: 350px ;"
              alt="productDetail.title"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="d-flex flex-column justify-content-between h-100">
            <h1 class="p-3">
              #{{ productDetail.title }}
            </h1>
            <!-- <div class="d-flex mb-3">
                        <div class="me-3">口味:</div>
                        <div class="me-3"><button class="btn btn-sm btn-primary">青</button></div>
                        <div class="me-3"><button class="btn btn-sm btn-primary">青</button></div>
                        <div class="me-3"><button class="btn btn-sm btn-primary">青</button></div>
                        <div class="me-3"><button class="btn btn-sm btn-primary">青</button></div>
                        <div><button class="btn btn-sm btn-primary">青</button></div>
                      </div> -->
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
            <div class="d-flex justify-content-cnter">
              <div
                class="btn btn-lg btn-outline-primary mr-3"
                @click.prevent.stop="addCart"
              >
                加入購物車
              </div>
              <router-link
                to="/cart"
                class="btn btn-primary"
              >
                直接購買
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <ul
          id="pills-tab"
          class="nav nav-pills mb-3"
          role="tablist"
        >
          <li
            class="nav-item"
            role="presentation"
          >
            <button
              id="pills-home-tab"
              class="nav-link active"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              簡介
            </button>
          </li>
          <li
            class="nav-item"
            role="presentation"
          >
            <button
              id="pills-profile-tab"
              class="nav-link"
              data-bs-toggle="pill"
              data-bs-target="#pills-profile"
              type="button"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              詳細
            </button>
          </li>
          <li
            class="nav-item"
            role="presentation"
          >
            <button
              id="pills-contact-tab"
              class="nav-link"
              data-bs-toggle="pill"
              data-bs-target="#pills-contact"
              type="button"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="false"
            >
              購買流程
            </button>
          </li>
        </ul>
        <div
          id="pills-tabContent"
          class="tab-content"
        >
          <div
            id="pills-home"
            class="tab-pane fade show active"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            {{ productDetail.description }}
          </div>
          <div
            id="pills-profile"
            class="tab-pane fade"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            {{ productDetail.content }}
          </div>
          <div
            id="pills-contact"
            class="tab-pane fade"
            role="tabpanel"
            aria-labelledby="pills-contact-tab"
          >
            購買流程 ...
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  data () {
    return {
      isLoading: false,
      productDetail: {},
      num: 1,
      id: null
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
    getProductDetail (id) {
      this.isLoading = true
      this.$http
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${id}`)
        .then((res) => {
          this.isLoading = false
          if (res.data.success) {
            this.productDetail = res.data.product
          } else {
            alert(res.data.message)
          }
        })
        .catch((error) => {
          this.isLoading = false
          console.log(error)
        })
    },
    addCart () {
      const data = { data: { product_id: this.id, qty: this.numRangeLimit } }
      this.$emitter.emit('fullScreenLoaidng', true)
      this.$http
        .post(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`, data)
        .then((res) => {
          this.$emitter.emit('fullScreenLoaidng', false)
          if (res.data.success) {
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
