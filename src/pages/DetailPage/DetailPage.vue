<template>
  <DetailContainer img="bg_about_06.jpg" title="新闻详情">
    <div slot="content">
      <div class="detail-container">
        <div class="title-wrapper">
          <h1 class="title">{{title}}</h1>
          <span class="time">发布时间：{{updateTime}}</span>
        </div>
        <div class="content-wrapper" v-html="content">
        </div>
      </div>
    </div>
  </DetailContainer>
</template>

<script>
  import { getContent } from 'Services/news';

  export default {
    created() {
      const { id } = this.$route.params;
      if (id) {
        getContent(id).then((res) => {
          Object.keys(res).forEach((key) => {
            this[key] = res[key];
          });
        });
      }
    },
    data() {
      return {
        title: '',
        content: '',
        updateTime: '',
      };
    },
  };
</script>

<style lang="less" scoped>
  @import './index';

  .detail-container {
    text-align: center;
  }
  .title {
    font-weight: 400;
  }
  .time {
    color: #999;
  }
  :global(.content-wrapper) {
    text-align: left;
  }
  :global(.content-wrapper figure) {
    width: 100%;
  }
  :global(.content-wrapper img) {
    width: 100% !important;
  }
</style>
