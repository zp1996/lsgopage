import Vue from 'vue';
import Router from 'vue-router';
import HomePage from 'Pages/HomePage/HomePage';
import IntroductionPage from 'Pages/IntroductionPage/IntroductionPage';
import NewsPage from 'Pages/NewsPage/NewsPage';
import ConcatPage from 'Pages/ConcatPage/ConcatPage';
import DetailPage from 'Pages/DetailPage/DetailPage';

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
    {
      path: '/news',
      name: 'news',
      component: NewsPage,
    },
    {
      path: '/concat',
      name: 'concat',
      component: ConcatPage,
    },
    {
      path: '/detailnew/:id',
      name: 'detailnew',
      component: DetailPage,
    },
  ],
});
