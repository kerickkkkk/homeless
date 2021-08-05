<template>
  <div class="vh-100 d-flex justify-content-center align-items-center">
    <div class="wrap text-center">
      <h1 class="mb-5">
        4 0 4
      </h1>
      <div
        class="mb-5 display-1"
      >
        糟糕~ 有錯誤 !
        <br>
        倒數  <strong class="text-warning display-1">{{ times }}</strong> 秒
      </div>

      <router-link
        to="/"
        class="btn btn-lg btn-outline-primary"
      >
        手動回首頁
      </router-link>
    </div>
  </div>
</template>

<script>
let timer = null

export default {
  name: 'NotFound',
  data () {
    return {
      times: 10
    }
  },
  mounted () {
    this.countTime()
  },
  unmounted () {
    clearTimeout(timer)
  },
  methods: {
    countTime () {
      timer = setTimeout(() => {
        this.times -= 1
        if (this.times > 0) {
          this.countTime()
        } else {
          this.$swal('回首頁囉', '', 'success').then(() => {
            this.$router.push('/')
          })
        }
      }, 1000)
    }
  }
}
</script>

<style scoped>
h1{
  font-size: 10rem;
}
</style>
