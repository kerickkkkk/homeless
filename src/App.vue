<template>
  <div>
    <Loading
      :active="loading"
      color="#00BFFF"
      loader="dots"
    />
    <router-view />
  </div>
</template>

<script>
export default {
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
    this.$emitter.on('fullLoaidng', (status) => {
      this.loading = status
    })
    this.$swal('Hello Vue world!!!')
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
