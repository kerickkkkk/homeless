<template>
  <section
    class="bg-cover text-white p-3"
    style="background-image:linear-gradient(to right,rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1051&q=80')"
  >
    <div class="container">
      <div class="h-100 p-5">
        <h2 class="text-center my-5">
          {{ title }}
        </h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SubScribe',
  props: {
    title: {
      type: String,
      default: '標題'
    }
  }
}
</script>
