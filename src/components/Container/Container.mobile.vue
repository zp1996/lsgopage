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
  import data from './data';

  export default {
    props: ['children'],
    mounted() {
      console.log(process.mobile);
    },
    data() {
      return {
        touched: 0,
        ...data,
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
  @import "./index.mobile.less";
</style>
