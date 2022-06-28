import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  const currentUser = store.state.auth.user
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) {
    next('/login')
  } else {
    next()
  }
})

// Auth first before loading the app
store.dispatch('auth/authenticate')
  .catch(() => {})
  // Render the app
  .then(() => {
    // eslint-disable-next-line no-new
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  })
