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
  mounted () {
    this.$emitter.on('fullScreenLoaidng', (status) => {
      this.loading = status
    })
  }
}
</script>
<style lang="scss">
@import "./assets/stylesheet/all.scss";
</style>
