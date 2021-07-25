<template>
  <div class="about">
    <HeaderPic title="關於我們" />
    <div class="container my-5">
      <div class="row featurette align-items-center">
        <div class="col-md-5  order-md-1">
          <div
            class="bg-cover"
            style="background-image:url(https://images.unsplash.com/photo-1548705085-101177834f47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1189&q=80); height:300px"
          />
        </div>
        <div class="col-md-7 order-0 order-md-1">
          <div class="p-3">
            <h2 class="featurette-heading">
              逐食而居
            </h2>
            <p class="lead">
              只要待著就會渾身不舒服，再某個轉彎點，毅然地跨出舒適圈選擇了，走到哪吃到哪？ 一台車，一群朋友，開啟了走到哪賣到哪，以這種心情和顧客分享，每個地方的特色。
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- 手工製麵 -->
    <section class="container-fluid mb-5 text-center">
      <div class="featurette">
        <h2 class="mb-3 featurette-heading">
          特製麵條
        </h2>
        <p class="lead">
          以最簡單的配方，高級麵粉、水、加上陽光炙熱的雙手，所製作出來最純粹的好吃的麵條。
        </p>
      </div>
      <div class="row justify-content-center">
        <div class="col-2">
          <div>
            <img
              src="https://images.unsplash.com/photo-1610649332778-a8600f4ac3a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
              alt=""
            >
          </div>
        </div>
        <div class="col-2">
          <div>
            <img
              src="https://images.unsplash.com/photo-1610649332755-12e7701db5e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
              alt=""
            >
          </div>
        </div>
        <div class="col-2">
          <div>
            <img
              src="https://images.unsplash.com/photo-1610649332744-34632bbe8256?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
              alt=""
            >
          </div>
        </div>
        <div class="col-2">
          <div>
            <img
              src="https://images.unsplash.com/photo-1610649333217-31ea4ea0df1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              alt=""
            >
          </div>
        </div>
        <div class="col-2">
          <div>
            <img
              src="https://images.unsplash.com/photo-1570700258112-e259d3dbafb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
              alt=""
            >
          </div>
        </div>
      </div>
    </section>
    <SubScribe />
  </div>
</template>

<script>
import HeaderPic from '@/components/HeaderPic.vue'
import SubScribe from '@/components/SubScribe.vue'
export default {
  name: 'About',
  components: {
    HeaderPic,
    SubScribe
  },
  data () {
    return {}
  },
  methods: {

  }
}
</script>
