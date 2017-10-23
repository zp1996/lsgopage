// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Container from 'Components/Container/Container';
import Menu from 'Components/Menu/Menu';
import 'Styles/reset.less';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

// 注册组件
Vue.component('Container', Container);
Vue.component('Menu', Menu);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
