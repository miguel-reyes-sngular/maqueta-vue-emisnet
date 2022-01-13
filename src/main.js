import Vue from 'vue'
import 'carbon-components/css/carbon-components.css';
import CarbonComponentsVue from '@carbon/vue';
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

Vue.use(CarbonComponentsVue);