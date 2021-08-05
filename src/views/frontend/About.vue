<template>
  <div class="about">
    <HeaderPic title="沒有最好 只有更好" />
    <div class="container my-5">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link
              to="/"
              class="nav-link active p-0"
            >
              首頁
            </router-link>
          </li>
          <li
            class="breadcrumb-item active"
            aria-current="page"
          >
            關於我們
          </li>
        </ol>
      </nav>
      <div class="row featurette align-items-center">
        <div class="col-md-5  order-md-1">
          <div
            class="bg-cover"
            style="background-image:url(https://storage.googleapis.com/vue-course-api.appspot.com/pet/1627724356442.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=mq970pQXq1koVb5CH3N5ZLXEvUXn8KUiS4N1u1gQqaE0ssLvKJ2Ss2wvF7ygJiSfJxTKCuIVTWFvqc8l2%2FM43BZ1QPEThlGIquubE7x8%2FiE7YcepFJJII8SlOV3CNlxXLvHmyx1lIHwzKekjIPPEY9k2chuNONjbZWdEDu1kI49PyngL8%2BM6FN%2B%2Fue0wRGd2qBJjcWUxaOOBJFBPFgct6oRYKWV50tHkgIzuH3YQBtwwUO1Q3BdFHhVkDPHPVx4%2BszXouuDP3oigrRhOEprDbznAdZdhLzNtVsIWb18n7BHdxjbEmLcTvIBRYJJju3wyztqkYxESdaP97OvRxXOgDA%3D%3D); height:300px"
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

        <p class="lead w-50 mx-auto">
          以最簡單的配方，高級麵粉、水、加上陽光炙熱的雙手，所製作出來最純粹的好吃的麵條。
        </p>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-3 col-6 mb-3">
          <div>
            <img
              src="https://storage.googleapis.com/vue-course-api.appspot.com/pet/1627725290386.jpeg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=WC5E7JNpS2%2FQW%2FMHOVcri1HXkcgWq4D8ntJor9TAC5imPxwOvPIwLATwo6raPQKGVy4DzafIpny69bJxk%2FxfNvrh3Xp0tdrrBYx0zFT0KcoKMnfro5yB0lNJhFRREoaqN0cYa9Fez7bTM4Qz4lvwlmK9pTXSE5xZnsfAC10NQFPKFP0PWkyTQO1OJTBTWVVcHU8WzIpnlIG2TfriV3%2BVSqeg3SoK%2Bdc9%2F7BpCdQjivwZNJIawsT4MoFjVpXyqRELKLi7tpMIWkQ0pg0ootkg8i1IagSueaHQBOziHiMPrA8tMNKTfryBQzJQ7CnAuW9hX78pDV62him5hq1Kvki8Vg%3D%3D"
              alt="特製麵條流程"
            >
          </div>
        </div>
        <div class="col-md-3 col-6 mb-3">
          <div>
            <img
              src="https://storage.googleapis.com/vue-course-api.appspot.com/pet/1627725193170.jpeg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=WaNEM8aALKX7iY7tvk77wRqiZsc%2FjKEupjYAjMEZQ8aqzu7RmAeNx%2BBnxDMLsfhvQnzoPy%2F7V%2BbcPMZCcEANehJeRcT6kFUkhYLpWKKtX3I0KQTAAhGi1MnqncXHlkCydsIrOvr1ott39kVNz%2FhGL07AteKBlGVzOkcRylxsS80Zm1FX6bSHAxbYgDC109GI3bU173TBphyY5MPnWLb71%2Fxai62ISzTaBbUgyXUiMf%2F01edjh%2BFN26ix7CNnYx4Y0WdRSVVVJbNfiRb59G5sA4Vzm1wDpGQacfufWFWyS6V1YHxzLMbbI%2Fw7VoGKL%2FcJAMATGuuykxNeGOuw7NH4wQ%3D%3D"
              alt="特製麵條流程"
            >
          </div>
        </div>
        <div class="col-md-3 col-6 mb-3">
          <div>
            <img
              src="https://storage.googleapis.com/vue-course-api.appspot.com/pet/1627725214695.jpeg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=DYiAeR7INUCEVCXplQlPihIYxtVDNA750rg1tghh4wyMIV%2BbXxDiXvCZY6oX%2BbDzZs2Rus7lblUFVb3iGgmXTxog5kquzgd7oYWMZS9fxz5qJkChkEMNHx%2BnNGCHZLziKDXOhCyRuHKc20hL9le3x074HlUGPd4l%2BRwyhylJ5t8Reh2vfNu5ROa2CKgv3%2FZkVWdTG1KFipy3mnjilItPJuJ1plrbHaQVAH9%2BQcZjP61qkF2GCBJHiRpSEXPi8fuqg9v30RiKWWKSsP2wZBo%2FHRcmfdEzO56D9nlGLSJF5c9ZnoFkuramHfeS5ayHXEUj96prWniiutU64mYOzJPs8w%3D%3D"
              alt="特製麵條流程"
            >
          </div>
        </div>
        <div class="col-md-3 col-6 mb-3">
          <div>
            <img
              src="https://storage.googleapis.com/vue-course-api.appspot.com/pet/1627725237848.jpeg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=QY%2FtKC6hlGPGJRCtj9VXoGki3ovgrX967ym0oH2fLMusVDNz4xacSMho46ouDiM1W%2F1tTtJ%2F%2FaJ9S4cQemI3kndkf4BKBQcAtoIL8MZCozg8qvB8zDFcaaLAyt8JtS4SszFvRP%2FiopJdx%2Bt0AAIDzZF%2BCLgXd47PXadYAMM5qBDOyxvhax0Jy%2Feu9iZZL0dGGIGsZxat3cc%2B4zhEOrBEW7Rf0Q%2Bo6%2Fm7CRGlmis2MactETpxmdHXGLHt1f8FyEJtozrYldpFRN9n6iHljIBfp0MOTxbX0RBVopdlL6i5SJZZgUzbBpKdshjyiYfJehfobbJ47Q1MCtjcEARAnl5%2F2g%3D%3D"
              alt="特製麵條流程"
            >
          </div>
        </div>
      </div>
    </section>
    <section class="mb-5">
      <h2 class="text-center mb-3">
        合作夥伴
      </h2>
      <div class="container">
        <Swiper
          :loop="true"
          :autoplay="swiper.autoplay"
          :breakpoints="swiper.breakpoints"
          @swiper="controlSwiper"
          @mouseleave="startSwiper"
        >
          <SwiperSlide
            v-for="slide in swiper.data"
            :key="slide"
          >
            <img
              style="height:300px;"
              :src="slide"
              alt="合作廠商"
            >
          </SwiperSlide>
        </Swiper>
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
    return {
      swiper: {
        breakpoints: {
          767: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20
          }
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: true,
          pauseOnMouseEnter: true
        },
        data: [
          'https://storage.googleapis.com/vue-course-api.appspot.com/pet/1627786691440.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=N%2Fjx%2Fw%2FoQBNFomKC5Uuz%2BpKOAcZtDNlDuBxmXoDtjtBe7i%2BD6D2Uj0cNMO011ZJ%2FCrqwsLImkai5QfpQColi5VotmbZ85wJDCx%2FILS3qrUQY8a6JY4p8OhiyO1x%2BgEP4RuXiMivAJn3qH98yw8B9yOp9cxWMdGzH88pMpmKSErnG8HuihTnTamETxlpDLjyCvUPxEkcqsVMhtgKXaXx9Un3Tw8Lxn%2FiIlMLf61gsYEnvA%2FDi68OOpt3eN6ZogDAJt6jvRjolhIBzvQXihNBORlGLmSl4E9ZzTL4C4AzHtgpY%2BAxgC4xaWHkQoPUltmEN%2F4NufQ58WHHten6%2BT8BDNA%3D%3D',
          'https://storage.googleapis.com/vue-course-api.appspot.com/pet/1627786778205.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=crdO04cxwAAaL1VPwFNUcx6%2BjL2SgXsRlsGeQQuHYftCj1%2BFgu1A%2B3HmJl1kxMe2QbjYKzwY0q2g0tJm%2Bgi5VM9aX18PFvr0DCPdYLnHf5Pzsaa05Jl9UZasYceefwxStAlAQ2Y8Wl9bHDDu%2FJnS9VzwnE2Dcvf97Z%2BZUqByMPscdml1knRzMNlrIaIdeWFApxWCJvcFTJx%2F%2B%2BeLKeCvFueR2Ikdwy4xV0SQZlGYo6hQycTk2wykl6jkaYaOwYdot%2FCyCUR114f2kdLD9o%2FM0qYprbrDERiTUMRoaremU50TCy1c%2FzhFZ4JTWGM92nFmlTZZuuySh6ouLYUrsookYA%3D%3D',
          'https://storage.googleapis.com/vue-course-api.appspot.com/pet/1627786829182.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=keTR%2B4T6szmxjSIilN3N2U4jfo5kikXvS6336yBDQOGBgITw5oVFSGJFDHMaCg7DNowGkkIczzsqWV4sLjz8p7CHbd2%2ByfD7w%2BkGqN6RHdWle8xHj8tBFyljVAaXO0iaLEQfC1Nknnx9cDITXEAsxyUnzuNEEp12QZv7r2LwI%2B%2Fo1gYz7c77CqMTO88Ohk3qUxUAQz0fhmjGM9tBXlBf%2FpYme2HRSMcEgwjiFHiJ5wraq4vxgMFCMozcCKl2bEnS96MSiNbx0mokt3JCtMllRQ9XHAiIOih64EpQkWUihZkg%2B6x44vDSNjEQtwDASg9GLij3bUKinBVKw12wXpYt8Q%3D%3D',
          'https://storage.googleapis.com/vue-course-api.appspot.com/pet/1627786879232.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=gb3aXD6pDRuk9wU9mE5c83fxIS9k7qWft%2B6ZYsCZh7faRaJBQYBPeymn7EOh0A6FFJoU44Uq7ZREuqXzGElprCUlMA9f4NEUWQCL7mCImu3dTVW3YyQh9LjOhEIaSOD%2FeopL0S6Y%2BzHgvsGHOE5MLHQDRLO4HEQPDOvASfqY5L3ukQiInNm%2FaRTeFZBkhzYgb2SqWoOdvUq%2BHw18ldkteQcJy74cEW4yTxx6u6BegQ6ZgKfpvzLr6LA1%2FEVvZaVYVkxu0wi4sqJKGUB24cdfcbxuasTASpbbvHQcNIXZfT6PkParkfcN9a7JYbMGHWUURpdYR7lgiWzs07Uo1J4Pfw%3D%3D',
          'https://storage.googleapis.com/vue-course-api.appspot.com/pet/1627787039807.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=gv5WQLKMWLZo3bPOXjIu2UmMxU7acFqCDoXpYG%2FdYe7QxVT9znPOU4K7uXPY0kgmUswKnoog18wgFW9W%2Fx%2B%2FlaPSv4Gxyb3AMMh8hsABrRGxK0D%2FJ3I8hrkI1XxVehDOM5Gpg4PWbAw6Yz6Gb5ZIK2i603QPHi0CjlwBEyNsb15vPV2JhpYJNOFDmYwCbvwvaxB9k4PxNBmdLa6welJbjPDHeoMTI7Zozbn0Hs22k%2FF7%2BjAoD0tYc8prUbXuc%2FJyLhqd0dxd5Fbes8aUhqrac1wmQTQ351YR7puqRARZ9HuAz6H5Bgy%2F6%2FwNuVngTdwRtbO1rj2lhDdmxbhqscxmzQ%3D%3D'
        ]
      }
    }
  },
  methods: {
    controlSwiper (e) {
      this.swiperInstance = e
    },
    startSwiper () {
      // 滑鼠移出畫面重新啟動
      this.swiperInstance.autoplay.start()
    }
  }
}
</script>
