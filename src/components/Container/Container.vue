<template>
  <div>
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
    <div class="content">
      <slot name="content"></slot>
    </div>
    <footer class="footer">
      <div class="footer-content">
        <span>Copyright © {{footer.copyright}}</span>
        <span class="record">{{footer.record}}</span>
        <span class="address">公司地址：{{footer.address}}</span>
      </div>
    </footer>
    <ToTop />
  </div>
</template>

<script>
  import Data from './data';

  export default {
    props: ['children'],
    data() {
      return {
        search: '',
        path: this.$route.path,
        ...Data.data,
      };
    },
    created: Data.created(),
  };
</script>

<style lang="less" scoped>
  @import "./index.less";
</style>
