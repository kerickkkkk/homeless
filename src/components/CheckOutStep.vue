<template>
  <ul class="row justify-content-center list-unstyled py-5 px-3">
    <li class="col-md-3">
      <div
        class="bg-primary p-3 badge rounded-pill fs-3 w-100 mb-2"
      >
        1. 填寫訂單
      </div>
    </li>
    <li class="col-md-3 ">
      <div
        class=" p-3  badge rounded-pill fs-3 w-100 w-100 mb-2"
        :class="payment"
      >
        2. 訂單結帳
      </div>
    </li>
    <li class="col-md-3 ">
      <div
        :class="paid"
        class="p-3 badge rounded-pill fs-3 w-100 w-100 mb-2"
      >
        3. 付款完成
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    step: {
      type: String,
      default: ''
    }
  },

  computed: {
    payment () {
      return (this.step === 'payment' || this.step === 'paid') ? 'text-light bg-primary' : 'text-primary bg-light'
    },
    paid () {
      return this.step === 'paid' ? 'text-light bg-primary' : 'text-primary bg-light'
    }
  }
}
</script>
