<template>
  <div class="news-list">
    <h2 class="title">
      <span class="zn-title">新闻媒体</span>
      <span class="en-title">Latest News</span>
      <i class="divide"></i>
    </h2>
    <ul class="list">
      <li v-for="n in news" class="list-item">
        <img :src="n.img" class="list-item-img" />
        <span class="list-item-text">
          <h3 class="list-item-title">{{n.title}}</h3>
          <p class="list-item-des" v-if="pc">
            {{n.des ? n.des : '暂无详情描述，请点击查阅~'}}
          </p>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: ['news'],
    data() {
      return {
        pc: !process.mobile,
      };
    },
  };
</script>

<style lang="less" scoped>
  @import './index';
  @import './main.less';
</style>
