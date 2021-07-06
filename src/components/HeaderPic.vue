<template>
  <section
    class="bg-cover text-white"
    style="background-image:linear-gradient(to right,rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1051&q=80')"
  >
    <div class="container">
      <div class="h-100 p-5">
        <h2 class="text-center my-5">
          {{ title }}
        </h2>
        <!--           <p>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.</p> -->
        <!--           <button class="btn btn-outline-light" type="button">Example button</button> -->
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
