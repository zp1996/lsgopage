<template>
  <header class="menu-wrapper">
    <div class="menu">
      <router-link to="/" class="logo">
        <img :src="logo"/>
      </router-link>
      <nav class="nav">
        <div class="nav-box" v-for="menu in menus">
          <router-link :to="menu.href" :class="{
            'nav-link': true,
            'nav-link-active': path === menu.href
          }">
            {{menu.name}}
          </router-link>
        </div>
        <div class="search-area">
          <input :value="search" class="search-input"/>
          <span class="search-btn"></span>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
  export default {
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
      };
    },
  };
</script>

<style lang="less" scoped>
  @import './index.less';
</style>
