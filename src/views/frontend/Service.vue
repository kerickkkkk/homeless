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
      <h3><i class="bi bi-info-circle" /> 商品保存期限</h3>
      <p class="ps-4 mb-5">
        因食材都是新鮮現做，隔餐勿食。
      </p>
      <h3><i class="bi bi-info-circle" /> 取餐方式</h3>
      <p class="ps-4 mb-5">
        請您保管好您的訂單編號，屆時取餐會依照訂單編號來辨認。
      </p>
      <h3><i class="bi bi-info-circle" /> 取餐時間</h3>
      <p class="ps-4 mb-5">
        套餐系列準備時間較長，請於前一天預定，會依單製作，其餘系列無此規定。
      </p>
      <h3>
        <i class="bi bi-info-circle" />
        訂單成立
      </h3>
      <p class="ps-4 mb-5">
        完成整個訂購流程後，會看到訂購完成即表示您已經完成訂購流程，請記得保留訂單號碼，以此號碼取餐。
      </p>
      <h3>
        <i class="bi bi-info-circle" />
        付款方式
      </h3>
      <p class="ps-4 mb-5">
        可接受 ATM 轉帳，線上刷卡。
      </p>
      <h3><i class="bi bi-info-circle" /> 取消、修改訂單</h3>
      <p class="ps-4 mb-5">
        訂單取消，以及修改 請直接撥打 <a
          href="tel:0800000000"
          target="_blank"
        > 電話</a> ，或者 <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >粉絲頁</a> 留言。
      </p>
      <h3><i class="bi bi-info-circle" /> 退貨以及退款</h3>
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
  name: 'Service',
  components: {
    HeaderPic
  },
  data () {
    return {
      url: 'https://storage.googleapis.com/vue-course-api.appspot.com/pet/1627779758371.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=gT78EFZM6IrjS%2F8RGEIeoS%2F%2Fj4nul1fEIj%2FAnOSXLOaTaHoG%2FnfwNhozRjki78%2Bt0qKxY7oyToLR%2FdEbdNk4c0FHUx1FttylH12C8XJ7B6lTxB2%2BnP%2BdhcwMFSZdCpBIptXvjlRUKypDWfZkUS86G8tDAMHhVjnwdJfFug8Zkgvx8r4y3FAGFt37AQ4fXSyOswH6G82nnENLAUPJzpSYM5RSyvS0jHyZN5L4Z3YMaIEInCklfFBgIY%2FjodzuxD9iVrnR88pSMH9M1UyLX9jXkfkw3UYVLo0yK3hrfqh8yX3Y%2F35OtzDK4wZquKZdoBauMnJo%2FzFAGGECCWCbrPNchQ%3D%3D'
    }
  }
}
</script>
