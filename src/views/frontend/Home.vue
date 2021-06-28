<template>
  <div class="home">
    <nav
      class="navbar fixed-top navbar-expand-lg "
      :class="[navClassList.nav, navClassList.bg, navClassList.padding]"
    >
      <div class="container-fluid">
        <a
          class="navbar-brand"
          href="#"
        >居無定所</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div
          id="navbarSupportedContent"
          class="collapse navbar-collapse"
        >
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link
                to="/"
                class="nav-link active"
              >
                首頁
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/about"
                class="nav-link active"
              >
                關於我們
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/products"
                class="nav-link active"
              >
                餐點
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/contact"
                class="nav-link active"
              >
                聯絡我們
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                to="/cart"
                class="nav-link active"
              >
                購物車
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <router-view />

    <footer>
      footer
    </footer>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      isLoading: true,
      navClassList: {
        nav: 'navbar-dark',
        bg: 'bg-transparent',
        padding: 'py-5'
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', () => {
      const windowY = window.scrollY
      // 如果需要 dom 可以用 offSetTop
      if (windowY > 500) {
        this.navClassList = {
          nav: 'navbar-light',
          bg: 'bg-light',
          padding: 'py-1'
        }
      } else {
        this.navClassList = {
          nav: 'navbar-dark',
          bg: 'bg-transparent',
          padding: 'py-3'

        }
      }
    })
  }

}
</script>

<style scoped>
.navbar{
  transition: background-color .8s, padding .5s;
}
</style>
