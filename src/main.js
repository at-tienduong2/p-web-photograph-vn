// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import store from './store/store'
import VueI18n from 'vue-i18n'
import i18n from './locales/config'
import BootstrapVue from 'bootstrap-vue'
import ElementUI from 'element-ui'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'element-ui/lib/theme-chalk/index.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/slick/slick.css'
import './assets/slick/slick-theme.css'
import './assets/slick/slick.min.js'
import './styles/styles.scss'
import AppHeader from './components/common/header-page.vue'
import AppFooter from './components/common/footer-page.vue'
import PartialComponents from './components/PartialComponents'

Vue.use(ElementUI)
Vue.use(VueI18n)
Vue.use(Vuex)
Vue.use(BootstrapVue)
Vue.use(VueResource)

Vue.use(PartialComponents)

Vue.component('header-page', AppHeader)
Vue.component('footer-page', AppFooter)

Vue.http.options.root = process.env.SERVER_IP

Vue.config.productionTip = false

Vue.http.headers.common['Access-Token'] = localStorage.getItem('ACCESS_TOKEN')
Vue.http.headers.common['Uid'] = localStorage.getItem('UID')

library.add(faCoffee)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  store,
  components: {
    App
  },
  template: '<App/>'
})
