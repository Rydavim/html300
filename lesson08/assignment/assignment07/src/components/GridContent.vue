<template>
<!-- grid layout examples -->
  <div class="container">
    <h1>Grid Example</h1>
    <div class="container">
      <div class="row"> <!-- navigation -->
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"><h2>Nav</h2></div>
      </div>
      <div class="row"> <!-- main layout -->
        <div class="col-md-3 col-lg-4 col-xl-4 d-none d-md-block"><h2>Sidebar</h2></div>
        <div class="col-xs-12 col-sm-12 col-md-9 col-lg-8 col-xl-8"><h2>Content</h2></div>
      </div>
      <div class="row"> <!-- footer sections -->
        <div class="col-xs-12 col-sm-12 col-md-4 col-l-4 col-xl-4"><h2>A</h2></div>
        <div class="col-xs-12 col-sm-12 col-md-4 col-l-4 col-xl-4"><h2>B</h2></div>
        <div class="col-xs-12 col-sm-12 col-md-4 col-l-4 col-xl-4"><h2>C</h2></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GridContent',
  props: {
    msg: String
  }
}
</script>
