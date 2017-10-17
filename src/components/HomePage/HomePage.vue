<template>
  <div class="homepage">
    <router-link :to="{ path: '/demo', query: { username: 'zp1996' } }">
      demo
    </router-link>
    <h3>{{msg}}</h3>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
      };
    },
  };
</script>

<style lang="less">
  @import './index';
</style>
