
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
      class="mySwiper mb-5"
    >
      <swiper-slide>
        <div
          class="position-relative overflow-hidden py-5 m-md-3 text-center bg-cover"
          style="background-image:url(https://storage.googleapis.com/vue-course-api.appspot.com/pet/1627722914528.jpeg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=b5I39jfAYCL0Pq6oDtoM49dsPgecbg6oYwXR7LXqzN%2Fm8JxHN1mRL5%2BcPokqnNqxsDFo%2By8CSdSp4l31UCBRGH8zEoHWTWBAZT1M9WcFGhUJ%2BqZ9A6ETeafcjGCxa3SbU1mwceruYhY8JT3wQ5RmCIbM9xgkH%2FmgDZtAnHvMM%2FkEcUooxzBPZ%2BjwD29svfV0sUv7VO9x5Q0yXPq5KmXQjT2OxBN7GGtnI0oY2QesBFcS3n9WqZT%2Bs9amTgYpyM0WeSpPa4iT3WoonumvMB%2B9pJLy4N5%2FEYeX9ln2ipzZvEPfImF0lCl7S1BiMvdDjKEOoOfShGHqiViTwNoCQRVqtw%3D%3D)"
        >
          <div class="col-md-5 p-lg-5 mx-auto my-5">
            <h1 class="display-4 fw-normal">
              食材不能妥協
            </h1>
            <p class="lead fw-normal">
              不是在食物堆內，就是在尋找好的食材的路上。
            </p>
            <router-link
              class="btn btn-primary"
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
          style="background-image:linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.3)), url(https://storage.googleapis.com/vue-course-api.appspot.com/pet/1627722588476.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=VHNsVClHqY8eXln99xpGhHy4BXrcpOPBetJfDX6uO0rOXmBi86qp7D3zxXkM%2B66jJ45yJ87B0GEh5emXUoOqbkOa3eHUwvVmroXfzH7agMlQBxG31Q%2BN6xmDW41mt5fqQKcZ7OyoxH1aMV91upkpjhhsOnETRT2HiOPC%2BmblAPuagfN%2BQ30yY28stMYmjZ92ktZ44u95hx4eckRCP9zRgwwwiTL7XQsyrzrRUdwSWjA9O2MagLSDZmElifX3vo7IdRWHQCEHWyhEvU2PrEEbUL%2F6us7xmE4NKzYooBd5hfUch4ojfbvooNm8jMpsf4aIKYGTG0O87QdWNPtbLH6VKQ%3D%3D)"
        >
          <div class="col-md-5 p-lg-5 mx-auto my-5">
            <h2 class="display-4 fw-normal">
              新鮮咖啡到貨
            </h2>
            <p class="lead fw-normal">
              想喝就要快~
            </p>
            <router-link
              class="btn btn-primary"
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
          style="background-image:linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.3)), url(https://storage.googleapis.com/vue-course-api.appspot.com/pet/1627722166219.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=V%2Bgrt7Fi9z6CxuNWUklHC8mt3dXVBB8r8Pe2kTmWKbOkV1%2BtFDuRPIGhSGUnC34W6xtxDuMhk1XZ7GLiV1g9MCeEWF3eRVvmem5i3fgdb6ycDw0uqGJltBzUdZ9yjMHSxM6BfkHCV%2F6T8TVTFSn21eAVBaBaSuxVgac9HhsnSvT%2F9UIWG%2F%2FVdd%2BT%2F%2BXBcLGxE8rQTMq3zzRUJOwr9iqmahr%2Bkl7kNVooL31rxj7U2pNqwF%2Fhc5rInD6K0CF5CbF4db3B3yQk2L64zekcSolFrH42jaqxcoLu0kqhjsZ5f7CjYgCK%2FmqyQ0adMHc9EMCFd0EbRgRzdrJWEQFUA%2B5GLw%3D%3D)"
        >
          <div class="col-md-5 p-lg-5 mx-auto my-5">
            <h2 class="display-4 fw-normal">
              想補充咖啡因嗎?
            </h2>
            <p class="lead fw-normal">
              這裡提供各式的精品咖啡!!
            </p>
            <router-link
              class="btn btn-primary"
              to="/products"
            >
              看菜單
            </router-link>
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <section class="mb-5 bg-light">
      <h2 class="text-center py-3">
        沒有最好，只有更好。
      </h2>
      <div class="container py-4">
        <div class="row featurette align-items-center">
          <div class="col-md-5  order-md-1">
            <div
              class="bg-cover"
              style="background-image:url(https://storage.googleapis.com/vue-course-api.appspot.com/pet/1627723616589.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=JkjAeJdPz0sjEFriE0lJDjEBk%2Bbe%2F9FSMlcPaoDfTRl%2FPEfK6xhyVV%2FATW7NydmfQ6bMJmm2H0fGupbSy9YNRmKFw%2F1LTs50c1aG7PVoFKLQJUf6b%2BvOI9Ty1vIgpBrTcgr1rY4GDlOzH%2B5wUM4wbHlZuwn3GUC54V0MUYzvBbyhIBoBlh5SxvpkWTT4SG02JIE9jLyahlPjCFKF2xn1E34VQgBWVBdbsrlFyVaFtMIXhgihAKx%2BZJ8nuS6zky4ECyTYKzGevkfNE%2FYNG4lBbCXOH97XN2a%2FAbZYOspoGSwQWdLvzS%2BCn960mQ69fy%2B0MwvuoNN%2FU1CC%2BD6UuiZYJg%3D%3D); height:300px"
            />
          </div>
          <div class="col-md-7 order-0 order-md-1">
            <div class="p-3">
              <h3 class="featurette-heading">
                手工現作<span class="text-muted"> 做好每一到食物環節的把關</span>
              </h3>
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
              <h3 class="featurette-heading">
                原裝進口<span class="text-muted"> 取材絕不妥協</span>
              </h3>
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
              style="background-image:url(https://storage.googleapis.com/vue-course-api.appspot.com/pet/1627723830003.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=jwPucVChKonhxiKv2DAuhxzt4XU3p3OLIceQPpN8askgaBoXlaPuh0PQFenNMgf2qztNYATOimz3uynNDe98L8iD7cBftlcNqiinlLseCP30uGNkdC7R10w5HqComagHqDaVcYq%2B9MzTz9%2FV6Oe%2BwpiTAGAYK1U8UYV2W7U7vbHlhgkgMrITwLCIDYVvCKN2DQu99xsp%2BiyVWEJgmvZuSc93OXQhvZuhl72vO8BMkcHtQ6F8s%2FIhlSXX2lE%2FyHTNsjEru91Qq6y8vvFOb33dZH29u7abkZEouAH%2Bwnfojs8BnrbU0KbJQMt1KJR2Xp9aEpmtJ9ogywDqWbba9boNDA%3D%3D); height:300px"
            />
          </div>
        </div>
        <div class="row featurette align-items-center">
          <div class="col-md-5  order-md-1">
            <div
              class="bg-cover"
              style="background-image:url(https://storage.googleapis.com/vue-course-api.appspot.com/pet/1627724022244.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=PBnCgH8S8jZT%2F82RdWGnAh9NzlelcZun0aPOrmtiZVWjsjiz8ejWsGJKYDlJ6gDNkh32Ez8vwqG9yGfBf41arCqjy5sSPBr%2F7D0K%2FsJas5JmRSA5bOkucOyecgzOB7rPtZPf9ns%2BArKYEEL5nlU5ef2ZOzFQHDoPRQXtMrnhlUBFnAfeQp3JOc46qvg5vowJLZ%2BJHTpDsbZ4ZJhHBhvW%2FGHU8U0k86FV13QwusceBuJULDCkerG8TiaaZRWiEilqPrMHR72s2VkGosbZ3KUmoxjRd9oTS5i6bWy15TJ7PNZPVqPusSTfk7Xf%2FexvPE3AyOgk9NhkPx9bctcyTYkBVQ%3D%3D); height:300px"
            />
          </div>
          <div class="col-md-7 order-0 order-md-1">
            <div class="p-3">
              <h3 class="featurette-heading">
                產地鮮採<span class="text-muted"> 鮮多少買多少</span>
              </h3>
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
    <section class="mb-5 pt-3">
      <h2 class="text-center mb-3">
        本期推薦
      </h2>
      <ProductsSwiper category="套餐" />
    </section>
    <section class="bg-light pt-3 pb-5">
      <div class="container">
        <h2 class="text-center mb-3">
          最新消息
        </h2>
        <div class="row align-items-stretch text-center h-100 mb-5">
          <div class="col-md-6 h-100">
            <div
              class="card"
            >
              <iframe
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
                style="background-image:url(https://storage.googleapis.com/vue-course-api.appspot.com/pet/1627724091131.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=XT1VvAjlI47esJc4P4z8cysanmEdyIzRbnl7Juh2yxkOiroB8dQp6vSzlrM%2B9tvnaOvvJ9GzUWTZMyqdrBDILTjNkUv4x16QMlWBbQ%2B9RUcg7zEcGUO07hQRcKZJAQyZege9En1gODu4MIz8OQs4Tgjcilcw71vgJBdkydC28pyu%2BpjQsgRndgncyUaIx5UgNnMVmC6PMr%2BuROjjOh5S5UScZbw1teRoLSPzJZMR3Vrc8FL60nT8DHSODVWE8zNgiwwUmT0s7opdQuFebqV0eU1DrI%2BrzLeOuYl3OlGgy8QB6AqKhfRdr5MPWU%2FmZS0ONgtlEN%2FAiFDZ7OU7AFa%2BMA%3D%3D); height:450px"
              />
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
        <hr>
        <h3 class="text-center pt-3">
          顧客怎麼說
        </h3>
        <ul class="row">
          <li class="col-lg-3 col-md-6">
            <div class="d-flex p-2 align-items-center">
              <img
                style="width:100px; height:100px"
                src="https://storage.googleapis.com/vue-course-api.appspot.com/pet/1627838978067.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Swa%2Fg3zHCNT1%2BDpinzqmvA07O8oVAZCam6rKZ6lu%2FpbeC0pBUqW09F6Kc1cmNZt653n2SEyoWiEwpaFmUW%2BsiXxi3126mhLGIFpJepUXgaAwgJRM%2FFYNLw%2F9RM3BHjSWA3YBbeK2ydLn64GsB%2FsNSqp1DGk7uYW%2BPnNjPzI4kTJDX1e6r%2Bn0MZ%2F12zs20rADoMvBG8cmEr%2FcRpAG3H4fboDR%2BaXA2BeXkM4A76VXWQpQey9tsf6X7Rb%2BoULbryOf%2FQXqtpum0iedW3X5Px%2B5LyiFUexLY3YPHVd%2FSFbbzK53QnyR%2F%2BFQT6frXKzn1Lu56tk3Vhnq1mhYYnikoVg88Q%3D%3D"
                alt="顧客怎麼說"
                class="rounded-circle me-2"
              >
              <div>
                <h4 class="h6">
                  雞腿
                </h4>
                <p>自從居無定所吃過以後，已經好久沒有吃其他的食物了!</p>
              </div>
            </div>
          </li>
          <li class="col-lg-3 col-md-6">
            <div class="d-flex p-2 align-items-center">
              <img
                style="width:100px; height:100px"
                src="https://storage.googleapis.com/vue-course-api.appspot.com/pet/1627839027501.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=PveQTCjcPWjzq3%2Fobsq%2BBN%2FoBg2bMSKLKfJPriSpgCD7smMlJp788ijr%2BQsNHrNcg0qUXrZ7GhIeG2q7fEC26bSaXHeJcPM5REDtmw02hoWjyAqDT4CQCAlPE2mUMSHLTIbZBaxvAn0I%2BUNJjjgjxmaYdrQJ%2F47CuKzhCMekNO4LRqVSw5fgclBBDOxWFfIv%2FQ8AIZt7yJYaDbPMLJUx0izNpaKn9Prkch9%2Be%2Bu48EwExXYOMXkemSMjl6ALebkGAm7uU6Bn9E3CHrFiqBMop0RTYMUtgh1GYfCMNI5UQD%2BXOQH2GdP5Z2nCB5oD5Dn9v61vljHboCaazQUpczXfJQ%3D%3D"
                alt="顧客怎麼說"
                class="rounded-circle me-2"
              >
              <div>
                <h4 class="h6">
                  阿龍
                </h4>
                <p>咖啡等級絕對推薦老闆幫你選，絕對會有讓你驚豔的感覺!</p>
              </div>
            </div>
          </li>
          <li class="col-lg-3 col-md-6">
            <div class="d-flex p-2 align-items-center">
              <img
                style="width:100px; height:100px"
                src="https://storage.googleapis.com/vue-course-api.appspot.com/pet/1627839109561.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=PRPdZnnS%2FcUfSZP4jrAKDcYVtiJou7F6a%2BbyfiNaRS9yJfIGL45xz%2F1rQ5mQWrqNYmX%2B%2Bw0o2aZR34IELIlpfjnTOT6mzBzfAD0I6l8HSRS8c9R%2B73DskJTrgcwr4MIH6hlpinxsT%2FwGTwq7XmAfz6xBK%2FJwyPFto%2Fk4K3eofcZ73p1lGAk1j%2FD%2Fcuxgkt85rNWYnKJlFAVryEMQ%2B95tjLOIOEQ%2B0UcyFmq6fcv0lDZZTziO6FhiFD1%2BmjTvsDczLKP%2BXipsPCN2e2RumS0EuBKE9WtA2bVGRuIe%2BbaKDz5LBRC5Q9Qe8d4z0xv12PHXvPWchmY1PPFM0Hz6rLa8ZQ%3D%3D"
                alt="顧客怎麼說"
                class="rounded-circle me-2"
              >
              <div>
                <h4 class="h6">
                  小綠
                </h4>
                <p>主廚超貼心，沒想到來吃過一次，第二次來就已 VIP 的享受了。</p>
              </div>
            </div>
          </li>
          <li class="col-lg-3 col-md-6">
            <div class="d-flex p-2 align-items-center">
              <img
                style="width:100px; height:100px"
                src="https://storage.googleapis.com/vue-course-api.appspot.com/pet/1627839205890.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=L65DU0nuQe3jo1pzO5ozziD7fAHiVmdBgJZVAEeAFGzZSnx%2B0vyE5DcscbWb9bgvGNuFtes8l8iFmN16qbsmkNS7pJUSR7BEYBcLIJLB5uOXWtzKEDa%2BOehyXuOUs0dl2fnPQVqgjkCoD00Zd2c9TeLokuoyd3uy4grUJCTfZSNaGoK5Pjw2GwfKEmagd8O6hJMJbhKu%2Bgk0CXXdn5VB%2FXaJH5xmekDumvypvXgOxi1wWs%2BdbRv03M82HSiFJlrIQsDxX7IPf3FHoTaPNyZVwf0FiUrcoOWSf6OBljjZHGzatbYlOebr73kZL7yVVcc%2BoelxGKekWsjl2cIZbZ0pGA%3D%3D"
                alt="顧客怎麼說"
                class="rounded-circle me-2"
              >
              <div>
                <h4 class="h6">
                  黃大瓜
                </h4>
                <p>超級划算實惠的價格，已經沒有店家可以和居無定所相比了</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <SubScribe />
  </div>
</template>
<script>
import SubScribe from '@/components/SubScribe.vue'
import ProductsSwiper from '@/components/ProductsSwiper.vue'
export default {
  components: {
    SubScribe,
    ProductsSwiper
  }
}
</script>
<style scoped lang="scss">
.where__img{
  height: 450px;
}
</style>
