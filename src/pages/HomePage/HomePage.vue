<template>
  <Container>
    <div class="homepage" slot="content">
      <router-link :to="{ path: '/demo', query: { username: 'zp1996' } }">
        demo
      </router-link>
      <h3>{{msg}}</h3>
    </div>
  </Container>
</template>

<script>
  import { getHomePageData } from 'Services/home';

  export default {
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
      };
    },
    created() {
      // 动态请求页面数据
      getHomePageData();
    },
  };
</script>

<style lang="less">
  @import './index';
</style>
