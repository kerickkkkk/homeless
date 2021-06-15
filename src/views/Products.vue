<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          分類
        </div>
        <div class="col-md-9">
          <h3>產品區塊</h3>
          <div class="row">
            <div
              v-for="item in products"
              :key="item.id"
              class="col-md-4 mb-3"
            >
              <div class="card h-100">
                <img
                  :src="item.imageUrl"
                  class="card-img-top"
                  alt="圖片"
                >
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
                      <span class="h5 ms-auto">${{ item.origin_price }}</span>
                    </template>
                    <template v-else>
                      <del>${{ item.origin_price }}</del>
                      <span class="text-danger h5 ms-auto">${{ item.price }}</span>
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
                      class="btn btn-danger"
                      type="button"
                      @click="addCart(item.id)"
                    >
                      <span
                        v-if="loadingStatus.itemLoading === item.id"
                        class="spinner-grow spinner-grow-sm"
                        role="status"
                        aria-hidden="true"
                      />

                      加入購物車
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Products',
  data () {
    return {
      loadingStatus: {
        fullScreeningLoading: false
      },
      products: null,
      pagination: null
    }
  },
  mounted () {
    console.log(process.env.VUE_APP_API)
    console.log(process.env.VUE_APP_PATH)
    this.getProducts()
  },
  methods: {
    getProducts (page = 1) {
      this.loadingStatus.fullScreeningLoading = true
      this.$http
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products?page=${page}`)
        .then((res) => {
          this.loadingStatus.fullScreeningLoading = false
          if (res.data.success) {
            const { products, pagination } = res.data
            this.products = products
            this.pagination = pagination
          } else {
            this.loadingStatus.fullScreeningLoading = false
            alert(res.data.message)
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
