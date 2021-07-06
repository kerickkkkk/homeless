
<template>
  <div>
    <!-- <swiper
      :slides-per-view="1"
      :space-between="30"
      :loop="true"
      :pagination="{
        'clickable': true
      }"
      :navigation="true"
      class="mySwiper"
    >
      <swiper-slide>
        <img
          src="https://images.unsplash.com/photo-1624038030386-f3970b0c9c04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          class="card-img-top"
          alt="..."
        >
      </swiper-slide>
    </swiper> -->

    <section class="about container my-4 ">
      <div class="row featurette align-items-center">
        <div class="col-md-7 order-1 order-md-0">
          <div class="p-3">
            <h2 class="featurette-heading">
              原裝進口<span class="text-muted"> 取材絕不妥協</span>
            </h2>
            <p class="lead">
              採純淨農場所栽種出的作物，經典農莊嚴格把關，創造出最重要的核心麵條。
            </p>
            <button class="btn btn-outline-primary">
              關於我們 >>
            </button>
          </div>
        </div>
        <div class="col-md-5 oreder-0 order-md-1">
          <div
            class="bg-cover"
            style="background-image:url(https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80); height:300px"
          />
        </div>
      </div>
      <div class="row featurette align-items-center">
        <div class="col-md-5  order-md-1">
          <div
            class="bg-cover"
            style="background-image:url(https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80); height:300px"
          />
        </div>
        <div class="col-md-7 order-0 order-md-1">
          <div class="p-3">
            <h2 class="featurette-heading">
              產地鮮採<span class="text-muted"> 鮮多少買多少</span>
            </h2>
            <p class="lead">
              絕不囤貨，當天訂購賣完為止，出餐多寡，全看鮮材多寡。
            </p>
            <button class="btn btn-outline-primary">
              關於我們 >>
            </button>
          </div>
        </div>
      </div>
    </section>
    <SubScribe />
  </div>
</template>
<script>
import SubScribe from '../../components/SubScribe.vue'
export default {
  components: {
    SubScribe
  }
}
</script>
