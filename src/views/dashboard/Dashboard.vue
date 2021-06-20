<template>
  <div class="dashBoard">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <router-link
          to="/"
          class="navbar-brand"
        >
          食無定所
        </router-link>
        <div
          id="navbarSupportedContent"
          class="collapse navbar-collapse"
        >
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link
                to="/"
                class="nav-link "
              >
                返回前台
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/admin/products"
                class="nav-link active"
              >
                產品列表
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/admin/orders"
                class="nav-link"
              >
                訂單列表
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/admin/coupons"
                class="nav-link"
              >
                優惠劵列表
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/admin/articles"
                class="nav-link"
              >
                貼文
              </router-link>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                aria-current="page"
                href="#"
              >登出</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'DashBoard',
  data () {
    return {}
  },
  methods: {

  }
}
</script>
