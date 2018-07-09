import Carousel from './partial/carousel.vue'

/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */

const PartialComponents = {
  install (Vue) {
    Vue.component('carousel', Carousel)
  }
}

export default PartialComponents
