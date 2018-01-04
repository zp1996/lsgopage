<template>
  <DetailContainer img="bg_about_06.jpg" title="新闻媒体">
    <div slot="content">
      <div class="news-wrapper">
        <NewList :news="news" notitle="true" />
      </div>
    </div>
  </DetailContainer>
</template>

<script>
  import { getNewsPageData } from 'Services/home';

  export default {
    data() {
      return {
        news: [],
      };
    },
    created() {
      getNewsPageData()
        .then((res) => {
          this.news = res.news;
        });
    },
  };
</script>

<style lang="less" scoped>
  @import './index';
</style>
