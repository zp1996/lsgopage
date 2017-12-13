import Vue from 'vue';
import Router from 'vue-router';
import HomePage from 'Pages/HomePage/HomePage';
import IntroductionPage from 'Pages/IntroductionPage/IntroductionPage';

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
      path: '/introduction',
      name: 'introduction',
      component: IntroductionPage,
    },
  ],
});
