<template>
  <div class="sweetToast" />
</template>

<script>
export default {
  name: 'SweetToast',
  mounted () {
    this.$emitter.on('toast:push', ({ icon, title }) => {
      // 如果傳入 undefined 會噴錯
      icon = icon || 'error'
      // 上方式較佳的寫法
      // icon = icon ? icon : 'error'
      this.$swal({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', this.$swal.stopTimer)
          toast.addEventListener('mouseleave', this.$swal.resumeTimer)
        },
        icon,
        title
      })
    })
  }
}
</script>
