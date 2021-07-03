<template>
  <div>
    <Loading
      :active="loading"
      color="#A13E1E"
      loader="dots"
    />
    <SweetToast />
    <router-view />
  </div>
</template>

<script>
import SweetToast from './components/SweetToast.vue'

export default {
  components: {
    SweetToast
  },
  data () {
    return {
      loading: false
    }
  },
  created () {
    // const loader = this.$loading.show()
    // setTimeout(() => {
    //   loader.hide()
    // }, 1000)
  },
  mounted () {
    this.$emitter.on('fullScreenLoaidng', (status) => {
      this.loading = status
    })
    // this.$emitter.emit('toast:push', { title: 'title', icon: 'error' })
    // this.$emitter.emit('toast:push', 'error', 'tes11111t', '123')
  }
}
</script>
<style lang="scss">
@import "./assets/stylesheet/all.scss";
</style>
