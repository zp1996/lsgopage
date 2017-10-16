<template>
  <div class="homepage">
    <router-link :to="{ path: '/demo', query: { username: 'zp1996' } }">
      demo
    </router-link>
    <h2>{{msg}}</h2>
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

<style scoped>
  @import './index';
  @import "../../helpers/func.less";

  .homepage {
    width: 600px;
    height: 100px;
    background: test(red);
    color: #fff;
    margin: auto;
  }
</style>
