<template>
  <nav>
    <ul class="pagination justify-content-center">
      <li
        class="page-item "
        :class="{disabled: !watchPagination.has_pre}"
      >
        <a
          class="page-link"
          href="#"
          tabindex="-1"
          aria-disabled="true"
          @click.prevent="getProducts(watchPagination.currentPage-1)"
        >Previous</a>
      </li>
      <li
        v-for="page in watchPagination.total_pages"
        :key="page"
        :class="{active: page === watchPagination.current_page}"
        class="page-item"
      >
        <a
          class="page-link"
          href="#"
          @click.prevent="getProducts(page)"
        >{{ page }}</a>
      </li>
      <li
        class="page-item"
        :class="{disabled: !watchPagination.has_next}"
      >
        <a
          class="page-link"
          href="#"
          @click.prevent="getProducts(watchPagination.current_page+1)"
        >Next</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    pagination: {
      type: Object,
      default () {
        return {}
      }

    }
  },
  data () {
    return {
      watchPagination: {
        category: null,
        current_page: null,
        has_next: false,
        has_pre: false,
        total_pages: null
      }
    }
  },
  watch: {
    pagination: {
      handler () {
        this.watchPagination = { ...this.pagination }
      },
      immediate: true
    }
  },
  methods: {
    getProducts (page) {
      this.$emit('get-products', page)
    }
  }
}
</script>
