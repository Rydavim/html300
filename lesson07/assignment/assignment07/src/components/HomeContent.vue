<template>
<!-- main content -->
  <div class="container">
    <h1>Welcome to Kuhaku</h1>
    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

    <!-- conditionally change button class based on popover state -->
    <b-button id="popover-target" :class="isPopoverVisible ? 'btn-success' : 'btn-danger'" class="btn btn-lg" @click="togglePopover">
      <!-- v-if v-else to update button text based on popover visibility -->
      <span v-if="isPopoverVisible">Put It Down!</span>
      <span v-else>Drink Me!</span>
    </b-button>
    <b-popover target="popover-target" triggers="click" placement="top">
      <template #title>Why would you do that?</template>
      Don't drink random things you find online!
    </b-popover>
  </div>
</template>

<script>
export default {
  name: 'HomeContent',
  data() {
    return {
      isPopoverVisible: false,  // tracking popover visibility, default false
    };
  },
  methods: {
    togglePopover() {
      this.isPopoverVisible = !this.isPopoverVisible; // toggle popover state
    }
  },
  props: {
    msg: String
  }
}
</script>
