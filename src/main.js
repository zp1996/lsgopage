import Vue from 'vue';
import 'Styles/reset.less';
import Container from 'Components/Container/index';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

// register component
Vue.component('Container', Container);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
