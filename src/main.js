import Vue from 'vue';
import 'Styles/reset.less';
import Container from 'Components/Container/index';
import DetailContainer from 'Components/DetailContainer/DetailContainer';
import Slider from 'Components/Slider/Slider';
import Tab from 'Components/Tab/Tab';
import ToTop from 'Components/ToTop/ToTop';
import NewList from 'Components/NewList/NewList';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

// register component
Vue.component('Container', Container);
Vue.component('Slider', Slider);
Vue.component('Tab', Tab);
Vue.component('NewList', NewList);
Vue.component('DetailContainer', DetailContainer);
if (!process.mobile) {
  Vue.component('ToTop', ToTop);
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});

if (process.mobile) {
  if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', () => {
      /* eslint-disable no-undef */
      FastClick.attach(document.body);
    }, false);
  }
}
