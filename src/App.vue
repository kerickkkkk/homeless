<template>
  <div>
    <div id="nav">
      <router-link to="/">
        Home
      </router-link> |
      <router-link to="/about">
        About
      </router-link>
    </div>
    <router-view />
    <button
      type="button"
      class="btn btn-primary"
    >
      Primary
    </button>
    <button
      type="button"
      class="btn btn-secondary"
    >
      Secondary
    </button>
    <button
      type="button"
      class="btn btn-success"
    >
      Success
    </button>
    <button
      type="button"
      class="btn btn-danger"
    >
      Danger
    </button>
    <button
      type="button"
      class="btn btn-warning"
    >
      Warning
    </button>
    <button
      type="button"
      class="btn btn-info"
    >
      Info
    </button>
    <button
      type="button"
      class="btn btn-light"
    >
      Light
    </button>
    <button
      type="button"
      class="btn btn-dark"
    >
      Dark
    </button>

    <button
      type="button"
      class="btn btn-link"
    >
      Link
    </button>
  </div>
</template>

<script>
export default {
  created () {
    console.dir(this.$http)
  }
}
</script>
<style lang="scss">
@import "./assets/all.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
