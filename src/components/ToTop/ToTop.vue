<template>
  <div :class="{
    'back-to-top': true,
    show: show
  }" v-on:click="back">
    <img src="../../assets/arr_top.png" class="img" />
  </div>
</template>

<script>
  import { debounce } from 'Utils/dom';

  export default {
    mounted() {
      window.onscroll = debounce(() => {
        const show = document.documentElement.scrollTop > 100;
        this.show = show;
      }, 100, 200);
    },
    destroyed() {
      this.clearTimer();
    },
    data() {
      return {
        show: false,
      };
    },
    methods: {
      clearTimer() {
        if (this.timer != null) {
          clearInterval(this.timer);
          this.timer = null;
        }
      },
      back() {
        let start = document.documentElement.scrollTop;
        this.timer = setInterval(() => {
          let end = start - 25;
          start = end;
          if (end <= 0) {
            this.clearTimer();
            end = 0;
          }
          document.documentElement.scrollTop = end;
        }, 16);
      },
    },
  };
</script>

<style lang="less" scoped>
  .back-to-top {
    position: fixed;
    bottom: 90px;
    right: 20px;
    background: rgba(0, 0, 0, 0.6);
    padding: 7px;
    z-index: 99999;
    opacity: 0;
    transition: opacity 0.3s;
    cursor: pointer;
  }
  .show {
    opacity: 1;
  }
  .img {
    margin: auto;
  }
</style>
