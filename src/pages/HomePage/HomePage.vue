<template>
  <Container>
    <div class="homepage" slot="content">
      <Slider :list="slider.list" :time="slider.time" />
    </div>
  </Container>
</template>

<script>
  import { getHomePageData } from 'Services/home';

  export default {
    data() {
      return {
        slider: {
          list: [
            'http://www.yijiahe.com.cn/temp/slider_index_02.jpg',
            'http://www.yijiahe.com.cn/temp/slider_index_01.jpg',
            'http://www.yijiahe.com.cn/temp/slider_index_03.jpg',
            'http://www.yijiahe.com.cn/temp/slider_index_06.jpg',
            'http://www.yijiahe.com.cn/temp/slider_index_05.jpg',
          ],
          time: 5000,
        },
      };
    },
    created() {
      // 动态请求页面数据
      getHomePageData();
    },
  };
</script>

<style lang="less">
  @import './index';
</style>
