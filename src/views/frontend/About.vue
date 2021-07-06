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
              只要待著就會渾身不舒服，再某個轉彎點，毅然地跨出舒適圈選擇了，走到哪吃到哪？一台車，一群朋友，開啟了走到哪賣到哪，吃到哪的旅程，決心要吃爆，也以這種心情和顧客分享，每個地方的特色。
            </p>
          </div>
        </div>
      </div>
    </div>
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
