<template>
  <section
    class="bg-cover text-white p-3"
    :style="`background-image:linear-gradient(to bottom,rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${url})`"
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
    },
    url: {
      type: String,
      default: 'https://storage.googleapis.com/vue-course-api.appspot.com/pet/1627725743798.jpeg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=B0urWJyIBQAQ3dSjkCiowGLobrsB06EbZw7pSzdZ3cczq4z2385fFAPFgFwM3TMEw6TbRn5mgua6A6x39oSO1BpyMoOxjb3ddRDB3MO5KBZBNzKezl154gL%2Bxk77LbWU6pGla7S9QXtJ%2FsX7dP7OWHUpDtb7f3Fg0obeyPFlsp46vjEbBhMv7WuFCtJ8wz0aBaEgXkHOz8t5eQC9GpcETu7dDQBgzhSLja0Ik1MnkllRJNSu%2B6OQjSvrhkVV%2BA3g1rSvqhUJoLVySloYh7UZrvJ68MdNW4kP0kZys9ZmqBnUV2rsmX7jW1OI62EQ8Yr1qD0wUf4kSTacNekaLJqNng%3D%3D'
    }
  }
}
</script>
