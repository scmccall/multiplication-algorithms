import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
<<<<<<< HEAD
  render: h => h(App),
=======
  render: function (h) { return h(App) },
>>>>>>> backend-timer
}).$mount('#app')
