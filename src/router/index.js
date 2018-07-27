import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../components/pages/home.vue'
import ArticleDetail from '../components/pages/article-detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home page',
      component: HomePage
    },
    {
      path: '/article',
      name: 'Article detail',
      component: ArticleDetail
    }
  ]
})
