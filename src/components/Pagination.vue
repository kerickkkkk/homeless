<template>
  <nav v-if="watchPagination.total_pages > 0">
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
          @click.prevent="getProducts(watchPagination.current_page-1)"
        ><span aria-hidden="true">&laquo;</span></a>
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
        ><span aria-hidden="true">&raquo;</span></a>
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

    },
    isAllProducts: {
      type: Boolean,
      default () {
        return false
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
      // immediate: true
      deep: true
    }
  },
  methods: {
    getProducts (page) {
      if (!this.isAllProducts) {
        this.$emit('get-items', page)
      } else {
        this.$emit('changePage', page)
      }
    }
  }
}
</script>
