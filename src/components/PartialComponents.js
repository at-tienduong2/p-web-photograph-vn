import Carousel from './partial/carousel.vue'
import ArticleTag from './partial/article/article-tag.vue'
import PreArticle from './partial/article/pre-article.vue'
import GridArticle from './partial/article/grid-article.vue'

/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */

const PartialComponents = {
  install (Vue) {
    Vue.component('carousel', Carousel)
    Vue.component('tag', ArticleTag)
    Vue.component('pre-article', PreArticle)
    Vue.component('grid-article', GridArticle)
  }
}

export default PartialComponents
