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
            {
              url: 'http://www.yijiahe.com.cn/temp/slider_index_02.jpg',
              title: '诚信 . 创新 . 专注 . 极致',
              stitle: '应用智能科技，改善人类生活',
              type: 'center.big',
            }, {
              url: 'http://www.yijiahe.com.cn/temp/slider_index_01.jpg',
              title: '掌握核心科技，握手智慧未来',
              stitle: '亿嘉和科技正在前行',
            }, {
              url: 'http://www.yijiahe.com.cn/temp/slider_index_03.jpg',
              title: '地下隧道综合在线监测平台',
              type: 'dark',
              btn: {
                url: '/demo',
              },
            }, {
              url: 'http://www.yijiahe.com.cn/temp/slider_index_05.jpg',
              title: '变电站智能运维管理平台',
              type: 'white',
              btn: {
                url: '/demo',
              },
            },
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
