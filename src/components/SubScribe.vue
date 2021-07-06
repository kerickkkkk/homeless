<template>
  <div
    class="parallax bg-cover "
    style="background-image:linear-gradient(to right,rgba(0, 0, 0, 0.6), rgba(255, 255, 255, 0)), url('https://images.unsplash.com/photo-1612966874574-e0a92ad2bc43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80')"
  >
    <div class="container">
      <div class="row p-3">
        <div class="col-lg-4 col-md-6">
          <div class="subscribe py-5 my-5">
            <h3 class="mb-3 text-white">
              訂閱 優惠訊息
            </h3>
            <div class="input-group mb-3">
              <input
                type="email"
                class="form-control"
                placeholder="馬上輸入信箱取得優惠"
              >
              <div class="input-group-append">
                <button
                  class="btn btn-primary"
                  type="button"
                >
                  送出
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SubScribe'
}
</script>
