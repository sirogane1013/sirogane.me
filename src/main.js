import Vue from 'vue'
import App from './App.vue'
import VueScrollmagic from 'vue-scrollmagic'
import VueLazyload from "vue-lazyload";

Vue.config.productionTip = false;

require('@/assets/scss/all.scss');

Vue.use(VueScrollmagic);
Vue.use(VueLazyload);

new Vue({
  render: h => h(App),
}).$mount('#app');
