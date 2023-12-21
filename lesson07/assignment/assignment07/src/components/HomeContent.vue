<template>
<!-- main content -->
  <div class="container">
    <h1>Welcome to Kuhaku</h1>
    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

    <!-- changes to button code to get it working with vue -->
    <b-button id="popover-target" class="btn btn-lg btn-danger"> Drink Me! (Popover)</b-button>
    <b-popover target="popover-target" triggers="click" placement="top">
      <template #title>Why would you do that?</template>
      Don't drink random things you find online!
    </b-popover>
  </div>
</template>

<script>
export default {
  name: 'HomeContent',
  props: {
    msg: String
  }
}
</script>
