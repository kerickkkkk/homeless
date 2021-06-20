<template>
  <div>
    單一產品
  </div>
</template>

<script>
export default {
  name: 'Product',
  data () {
    return {}
  },
  mounted () {
    console.log(this.$route.params.id)
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
