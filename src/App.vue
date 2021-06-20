<template>
  <router-view />
</template>

<script>
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'

export default {
  created () {
    // const loader = this.$loading.show()
    // setTimeout(() => {
    //   loader.hide()
    // }, 1000)
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
