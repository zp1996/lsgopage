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
      <footer class="footer">
        <span>Copyright © {{footer.copyright}}</span>
        <span>{{footer.record}}</span>
        <span>公司地址：{{footer.address}}</span>
      </footer>
    </div>
    <nav :class="{
      'nav': true,
      'nav-active': touched,
      'nav-closed': touched === false
    }">
      <div class="nav-box" v-for="menu in menus">
        <router-link :to="menu.href" class="nav-link">
          {{menu.name}}
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
  import Data from './data';

  export default {
    props: ['children'],
    data() {
      return {
        touched: 0,
        ...Data.data,
      };
    },
    created: Data.created(),
    methods: {
      toggleNav() {
        this.touched = !this.touched;
      },
    },
  };
</script>

<style lang="less" scoped>
  @import "./index.mobile.less";
</style>
