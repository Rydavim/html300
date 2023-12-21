<template>
<!-- responsive images -->
  <div class="container">
    <h1>Images</h1>
    <!-- iterate over img array to build gallery -->
    <image-item v-for="(image, index) in images" :key="index" :src="image.src" :alt="image.alt" :title="image.title" />
  </div>
</template>

<script>
import ImageItem from './ImageItem.vue'; // import modular image component
export default {
  name: 'ImageContent',
  components: {
    ImageItem  // add image item component
  },
  props: {
    msg: String
  },
  data() {
    return {
      // image array - iterate over images to add to template
      images: [
        { src: require('../assets/DALLE-cabin-plans.png'), alt: 'simple blueprint sketches for a small winter cabin', title: 'Cabin Plans' },
        { src: require('../assets/DALLE-holiday-TARDIS.png'), alt: 'low-poly illustration of the TARDIS from Doctor Who decorated for the holidays', title: 'Holiday TARDIS' },
        { src: require('../assets/DALLE-jumping-fox.png'), alt: 'low-poly illustration of a fox jumping into snow', title: 'Jumping Fox' },
        { src: require('../assets/DALLE-snow-woman.png'), alt: 'a woman in a long red winter coat standing in the snow', title: 'Woman in Snow' },
        { src: require('../assets/DALLE-urban-gifts.png'), alt: 'illustration of a large pile of wrapped gifts stacked by a graffitied wall in a city', title:'City Gifts' },
        { src: require('../assets/DALLE-winter-bird.png'), alt: 'watercolor painting of a fluffy bird sitting on a snowy holly bush', title:'Winter Bird' }
      ]
    };
  }
}
</script>
