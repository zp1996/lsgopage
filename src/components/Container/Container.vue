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
  </div>
</template>

<script>
  import data from './data';

  export default {
    props: ['children'],
    mounted() {
      console.log(process.mobile);
    },
    data() {
      return {
        search: '',
        path: this.$route.path,
        ...data,
      };
    },
    methods: {
    },
  };
</script>

<style lang="less" scoped>
  @import "./index.less";
</style>
