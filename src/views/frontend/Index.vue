
<template>
  <div>
    <swiper
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
        <div
          class="position-relative overflow-hidden py-5 m-md-3 text-center bg-cover"
          style="background-image:url(https://images.unsplash.com/photo-1495293453185-532fbd0a872c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1190&q=80)"
        >
          <div class="col-md-5 p-lg-5 mx-auto my-5">
            <h1 class="display-4 fw-normal">
              食材不能妥協
            </h1>
            <p class="lead fw-normal">
              老闆瘋到會下海去捕魚，不是在食物堆內，就是在尋找好的食材的路上。
            </p>
            <router-link
              class="btn btn-outline-primary"
              to="/products"
            >
              看菜單
            </router-link>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div
          class="position-relative overflow-hidden py-5 m-md-3 text-center bg-cover text-white"
          style="background-image:linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.3)), url(https://images.unsplash.com/photo-1622082671199-bdea11a6174c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80) "
        >
          <div class="col-md-5 p-lg-5 mx-auto my-5">
            <h2 class="display-4 fw-normal ">
              新鮮咖啡到貨
            </h2>
            <p class="lead fw-normal">
              想喝就要快~
            </p>
            <router-link
              class="btn btn-secondary"
              to="/products"
            >
              看菜單
            </router-link>
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <!--車子上釣魚 https://images.unsplash.com/photo-1523268847884-e86b91f40024?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80 -->

    <section class="about  my-4 bg-light ">
      <div class="container py-4">
        <div class="row featurette align-items-center">
          <div class="col-md-5  order-md-1">
            <div
              class="bg-cover"
              style="background-image:url(https://images.unsplash.com/photo-1595801105145-795f1927c0fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80); height:300px"
            />
          </div>
          <div class="col-md-7 order-0 order-md-1">
            <div class="p-3">
              <h2 class="featurette-heading">
                手工現作<span class="text-muted"> 做好每一到食物環節的把關</span>
              </h2>
              <p class="lead">
                挑剔，限量，但更佳的珍貴，因為品質值得等待！
                追求好 還要更好。
              </p>
              <router-link
                to="/about"
                class="btn btn-outline-primary"
              >
                關於我們 >>
              </router-link>
            </div>
          </div>
        </div>
        <div class="row featurette align-items-center">
          <div class="col-md-7 order-1 order-md-0">
            <div class="p-3">
              <h2 class="featurette-heading">
                原裝進口<span class="text-muted"> 取材絕不妥協</span>
              </h2>
              <p class="lead">
                採純淨農場所栽種出的作物，經典農莊嚴格把關，創造出最重要的核心麵條。
              </p>
              <router-link
                to="/about"
                class="btn btn-outline-primary"
              >
                關於我們 >>
              </router-link>
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
              <router-link
                to="/about"
                class="btn btn-outline-primary"
              >
                關於我們 >>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="container mb-5">
      <div class="row align-items-stretch text-center h-100">
        <div class="col-md-6">
          <div
            class="card"
          >
            <iframe
              class="mb-2"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2705.754019597818!2d121.78844174966153!3d25.144199846253624!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8258934b8536e5ba!2z5YWr5paX5a2Q5ryB5riv!5e0!3m2!1szh-TW!2stw!4v1625921326345!5m2!1szh-TW!2stw"
              width="100%"
              height="450"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
            />
            <div class="card-body">
              <h4 class="card-title">
                今日在哪裡
              </h4>
              <p class="card-text">
                八斗子漁港 ，帶著港邊海的味道，有著新鮮的漁獲，喧鬧的叫賣聲不絕於耳，如果您早起了，也許會看到老闆穿梭在其中，尋找心中那最鮮美的那一塊。
              </p>
              <router-link
                to="/products"
                class="btn btn-outline-primary"
              >
                尋找好味道
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-md-6 h-100">
          <div
            class="card"
          >
            <div
              class="bg-cover"
              style="background-image:url(https://images.unsplash.com/photo-1529385101576-4e03aae38ffc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80); height:450px"
            >
              <!-- <img
                src=""
                class="card-img-top"
                alt="旅程照片"
              > -->
            </div>
            <div class="card-body">
              <h4 class="card-title">
                老闆分享照
                <small>乾杯~</small>
              </h4>
              <p class="card-text">
                附上前陣子的旅行的照片，是否的太過於安逸，快來找我們，跟著我們走片整個台灣吧！
              </p>
              <router-link
                to="/about"
                class="btn btn-outline-primary"
              >
                了解更多
              </router-link>
            </div>
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
<style scoped lang="scss">
.where__img{
  height: 450px;
}
</style>
