import Vue from 'vue';
import Router from 'vue-router';

import Home from './components/HomeContent.vue';
import Images from './components/ImagesContent.vue';
import Accordion from './components/AccordionContent.vue';
import Grid from './components/GridContent.vue';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', component: Home },
    { path: '/images', component: Images },
    { path: '/accordion', component: Accordion },
    { path: '/grid', component: Grid }
  ]
});
