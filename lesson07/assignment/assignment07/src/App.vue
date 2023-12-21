<template>
  <div id="app">
    <nav class="navbar bg-light justify-content-center">
      <ul class="nav">
        <router-link v-for="(navLink, index) in navLinks" :key="index" tag="li" class="nav-item" active-class="active" :to="navLink.to" :exact="navLink.exact">
          {{ navLink.txt }}
        </router-link>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App';
},
data () {
  return {
    // nav link array for population
    navLinks: [
      { to: '/', exact: true, txt: 'Home' },
      { to: '/images', exact: false, txt: 'Images' },
      { to: '/accordion', exact: false, txt: 'Accordion' },
      { to: '/grid', exact: false, txt: 'Grid' }
    ]
  }
}
</script>

<style lang="scss">
  @import "@/assets/style.scss";
</style>
