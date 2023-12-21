<template>
  <div @click="toggleBorder">
    <img :class="['img-fluid', { 'bordered': isBordered }]" :src="src" :alt="alt" :title="title">
  </div>
</template>

<script>
// import mixin
import toggleBorderMixin from './toggleBorderMixin';

export default {
  name: 'ImageItem',
  mixins: [toggleBorderMixin], // using mixin
  // validation
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: ''
    }
  }
};
</script>

<style>
.bordered {
  border: 2px solid black; /* example border styles */
}
</style>
