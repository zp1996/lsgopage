<template>
</template>

<script>
  export default {
    mounted() {
      console.log(process.mobile);
    },
    data() {
      const { path } = this.$route;
      return {
        logo: 'http://www.yijiahe.com/css/images/logo_main_2x.png',
        menus: [
          { href: '/', name: '首页' },
          { href: '/demo', name: '关于亿嘉和' },
          { href: '/test', name: '服务支持' },
        ],
        path,
        search: '',
        mobile: process.mobile,
      };
    },
  };
</script>

<style lang="less" scoped>
  @import './index';
</style>
