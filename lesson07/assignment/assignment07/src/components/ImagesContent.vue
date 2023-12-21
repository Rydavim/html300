<template>
<!-- responsive images -->
  <div class="container">
    <h1>Images</h1>
    <!-- iterate over img array to build gallery -->
    <div v-for="(image, index) in images" :key="index">
      <img class="img-fluid" :src="image.src" :alt="image.alt">
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageContent',
  props: {
    msg: String
  },
  data() {
    return {
      // image array - iterate over images to add to template
      images: [
        { src: require('../assets/DALLE-cabin-plans.png'), alt: 'simple blueprint sketches for a small winter cabin' },
        { src: require('../assets/DALLE-holiday-TARDIS.png'), alt: 'low-poly illustration of the TARDIS from Doctor Who decorated for the holidays' },
        { src: require('../assets/DALLE-jumping-fox.png'), alt: 'low-poly illustration of a fox jumping into snow' },
        { src: require('../assets/DALLE-snow-woman.png'), alt: 'a woman in a long red winter coat standing in the snow' },
        { src: require('../assets/DALLE-urban-gifts.png'), alt: 'illustration of a large pile of wrapped gifts stacked by a graffitied wall in a city' },
        { src: require('../assets/DALLE-winter-bird.png'), alt: 'watercolor painting of a fluffy bird sitting on a snowy holly bush' }
      ]
    };
  }
}
</script>
