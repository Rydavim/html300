<template>
  <div id="app">
    <nav class="navbar bg-light justify-content-center">
      <ul class="nav">
        <router-link tag="li" class="nav-item" to="/" exact>
          <a class="nav-link">Home</a>
        </router-link>
        <router-link tag="li" class="nav-item" to="/images">
          <a class="nav-link">Images</a>
        </router-link>
        <router-link tag="li" class="nav-item" to="/accordion">
          <a class="nav-link">Accordion</a>
        </router-link>
        <router-link tag="li" class="nav-item" to="/grid">
          <a class="nav-link">Grid</a>
        </router-link>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {

  }
}
</script>

<style lang="scss">
  @import "@/assets/style.scss";
</style>
