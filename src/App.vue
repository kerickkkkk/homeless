<template>
  <div>
    <Loading
      :active="loading"
      color="#00BFFF"
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
    this.$emitter.emit('toast:push', { title: 'title', icon: 'error' })
    // this.$emitter.emit('toast:push', 'error', 'tes11111t', '123')
  }
}
</script>
<style lang="scss">
@import "./assets/all.scss";
// $(function(){

//   $(window).scroll(function(){
//     //var $(window).scrollTop(); 為 scroll
//     var scroll = $(window).scrollTop();
//     //當卷軸超過70px，自動加上 .navbar-fixed-top ，如果小於就移除
//     if( scroll >= 70){

//       $(".navbar-scroll").addClass("navbar-fixed-top");

//     }else{

//       $(".navbar-scroll").removeClass("navbar-fixed-top")

//     }

//   });

// });

</style>
