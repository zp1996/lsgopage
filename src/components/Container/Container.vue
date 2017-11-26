<template>
  <div>
    <div :class="{
      'content-wrapper': true,
      'content-wrapper-touched': touched,
      'content-wrapper-closed': touched === false
    }">
      <header class="menu-wrapper">
        <div class="menu">
          <router-link to="/" class="logo">
            <img :src="logo"/>
          </router-link>
          <div class="toggle-btn" v-on:click="toggleNav">
            <span class="icon-i"></span>
            <span class="icon-i"></span>
            <span class="icon-i"></span>
          </div>
        </div>
      </header>
      <div class="content">
        <slot name="content"></slot>
      </div>
    </div>
    <nav class="nav">
      <div class="nav-box" v-for="menu in menus">
        <router-link :to="menu.href" class="nav-link">
          {{menu.name}}
        </router-link>
      </div>
      <div class="search-area" v-if="!mobile">
        <input :value="search" class="search-input"/>
        <span class="search-btn"></span>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    props: ['children'],
    mounted() {
      console.log(process.mobile);
    },
    data() {
      return {
        logo: 'http://www.yijiahe.com/css/images/logo_main_2x.png',
        menus: [
          { href: '/', name: '首页' },
          { href: '/demo', name: '关于亿嘉和' },
          { href: '/test', name: '服务支持' },
        ],
        search: '',
        mobile: process.mobile,
        touched: 0,
      };
    },
    methods: {
      toggleNav() {
        this.touched = !this.touched;
      },
    },
  };
</script>

<style lang="less" scoped>
  @import "./index";
</style>
