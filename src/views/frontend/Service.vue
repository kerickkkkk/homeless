<template>
  <div class="about">
    <HeaderPic
      title="常見問題"
      :url="url"
    />
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
            常見問題
          </li>
        </ol>
      </nav>
      <h3>商品保存期限</h3>
      <p class="mb-5">
        因食材都是新鮮現做，隔餐勿食。
      </p>
      <h3>取餐方式</h3>
      <p class="mb-5">
        請您保管好您的訂單編號，屆時取餐會依照訂單編號來辨認。
      </p>
      <h3>取餐時間</h3>
      <p class="mb-5">
        套餐系列準備時間較長，請於前一天預定，會依單製作，其餘系列無此規定。
      </p>
      <h3>
        訂單成立
      </h3>
      <p class="mb-5">
        完成整個訂購流程後，會看到訂購完成即表示您已經完成訂購流程，請記得保留訂單號碼，以此號碼取餐。
      </p>
      <h3>
        付款方式
      </h3>
      <p class="mb-5">
        可接受 ATM 轉帳，線上刷卡。
      </p>
      <h3>取消、修改訂單</h3>
      <p class="mb-5">
        訂單取消，以及修改 請直接撥打 <a
          href="tel:0800000000"
          target="_blank"
        > 電話</a> ，或者 <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >粉絲頁</a> 留言。
      </p>
      <h3>退貨以及退款</h3>
      <ul>
        <li>
          您發現提供不符合訂單內容的商品，您可以透過將會退還您支付的金額。
          <a
            href="tel:0800000000"
            target="_blank"
          > 電話</a>
          通知專人
        </li>
        <li>使用信用卡或者 ATM 則會進行退款處理，但所需要消耗的時間，則需要看個別銀行的作業時間。</li>
      </ul>
    </div>
  </div>
</template>

<script>
import HeaderPic from '@/components/HeaderPic.vue'

export default {
  name: 'About',
  components: {
    HeaderPic
  },
  data () {
    return {
      url: 'https://storage.googleapis.com/vue-course-api.appspot.com/pet/1627778041796.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=jbqYqb%2BnBd9rC20tRbH0q6jl5TqZRLzNoNuj50Tz2nZWwtN39CPaFRhuv9ISfSqKkET7obAxG6J7DSEecKvbUv9d%2BHyJb7ihdSoUi56lmESaILL%2FYPsY08Mp5vZewBkHHE%2Bv%2Bk2%2FJkpubgiBU0OK5GNujtsJOxa0j86sXZvyqgLrFr6baLQQuaWkdKoQ4Dzt%2BGKGunnby6kOXqgzl7piUC%2FGAlYgOC2l8orQv98a2xScKQ%2BJ9LXseFJPISoWrzUWz03QcbTpXTMAtsnZjv0Fg6Git8KJN6RAaCvvDJTM3QRwREPLrCRKoRJfTrb17c4ZMMvsZI5%2Btd8MkwX%2BKPyurQ%3D%3D'
    }
  }
}
</script>
