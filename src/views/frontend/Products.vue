<template>
  <div>
    <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
      <div class="col-md-5 p-lg-5 mx-auto my-5">
        <h1 class="display-4 fw-normal">
          Punny headline
        </h1>
        <p class="lead fw-normal">
          And an even wittier subheading to boot. Jumpstart your marketing efforts with this example based on Apple’s marketing pages.
        </p>
        <a
          class="btn btn-outline-secondary"
          href="#"
        >Coming soon</a>
      </div>
      <div class="product-device shadow-sm d-none d-md-block" />
      <div class="product-device product-device-2 shadow-sm d-none d-md-block" />
    </div>
    <div class="container py-5">
      <div class="row">
        <div class="col-md-3">
          <div class="list-group">
            <a
              href="#"
              :class="{active: list.currentCategory === 'all'}"
              class="list-group-item list-group-item-action"
              aria-current="true"
              @click.prevent="list.currentCategory = 'all'"
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
              @click.prevent="list.currentCategory = item"
            >
              {{ item }}
            </a>
          </div>
        </div>
        <div class="col-md-9">
          <div class="row">
            <div
              v-for="item in filterProduct"
              :key="item.id"
              class="col-lg-4 col-md-6 mb-3"
            >
              <div class="card h-100">
                <div
                  class="bg-cover"
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
              v-if="list.currentCategory === 'all'"
              :pagination="pagination"
              @get-products="getProducts"
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
        ary: []
      },
      products: null,
      pagination: null
    }
  },
  computed: {
    filterProduct () {
      return this.products?.filter(product => this.list.currentCategory === 'all' || product.category === this.list.currentCategory)
    }
  },
  created () {
    this.getProducts()
  },
  methods: {
    getProducts (page = 1) {
      this.$emitter.emit('fullScreenLoaidng', true)

      this.$http
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products?page=${page}`)
        .then((res) => {
          if (res.data.success) {
            const { products, pagination } = res.data
            this.products = products
            this.pagination = pagination
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
          this.loadingStatus.itemLoading = null
          if (res.data.success) {
            this.$emitter.emit('nav-getCarts')
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
      console.log(categorys)
      this.list.ary = [...new Set(categorys)]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/assets/stylesheet/all';
.list-group-item{
  cursor: pointer;
  color: $primary;
  &:hover , &.active{
    background-color: $primary;
    color:#fff;
  }
}
</style>
