<template>
  <div class="about">
    xxx
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {}
  },
  methods: {
    put () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/`
      const param = { data: '' }
      this.$emitter.emit('fullScreenLoaidng', true)

      // this.$emitter.emit('toast:push', { icon: 'success', title: 'title' })

      this.$http.put(url, param)
        .then((res) => {
          this.$emitter.emit('fullScreenLoaidng', false)
          if (res.data.success) {
            this.$swal(res.data.message, '', 'success').then(() => {
              this.$emit('get-products', this.pagination.current_page)
            })
          } else {
            this.$swal(res.data.message, '', 'error')
          }
        }).catch((error) => {
          this.$emitter.emit('fullScreenLoaidng', false)
          this.$swal(error, '', 'error')
        })
    }
  }
}
</script>
