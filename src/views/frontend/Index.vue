
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
        <img
          src="https://images.unsplash.com/photo-1624038030386-f3970b0c9c04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          class="card-img-top"
          alt="..."
        >
      </swiper-slide>  <swiper-slide>
        <img
          src="https://images.unsplash.com/photo-1624038030386-f3970b0c9c04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          class="card-img-top"
          alt="..."
        >
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://images.unsplash.com/photo-1624038030386-f3970b0c9c04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          class="card-img-top"
          alt="..."
        >
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://images.unsplash.com/photo-1624038030386-f3970b0c9c04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          class="card-img-top"
          alt="..."
        >
      </swiper-slide>
    </swiper>
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
