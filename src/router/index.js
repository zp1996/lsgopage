import Vue from 'vue';
import Router from 'vue-router';
import HomePage from 'Components/HomePage/HomePage';
import DemoPage from 'Components/DemoPage/DemoPage';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/demo',
      name: 'demo',
      component: DemoPage,
    },
  ],
});
