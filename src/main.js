import Vue from 'vue'
import App from './App.vue'
import VueScrollmagic from 'vue-scrollmagic'

Vue.config.productionTip = false;

require('@/assets/scss/all.scss');

Vue.use(VueScrollmagic);

new Vue({
  render: h => h(App),
}).$mount('#app');
