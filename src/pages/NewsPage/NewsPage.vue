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
  export default {
    data() {
      return {
        news: [
          {
            title: '亿嘉和参加2017国际服务机器人产业高峰论坛并发表主题演讲',
            img: 'http://www.yijiahe.com.cn/mainpic//2017/12/05/0f42568c4bcf1b1afedc1cc618e37d24.jpg',
            des: '公司副总裁许春山博士发表《积极参与行业标准 谋求快速发展通道》的主题演讲。',
          }, {
            title: '十三届全运会开幕：亿嘉和机器人助力电力保障',
            img: 'http://www.yijiahe.com.cn/mainpic//2017/12/05/8637c0db35331aec510aac04107c133d.jpg',
            des: '第十三届全国运动会在天津隆重开幕，亿嘉和智能巡检机器人助力全运会保电工作。',
          }, {
            title: '亿嘉和受邀参加 “未来已来”全球人工智能高峰论坛暨中国（杭州）人工智能小镇启动仪式 ',
            img: 'http://www.yijiahe.com.cn/mainpic//2017/12/05/a62d68f75eaee3cc445a3abce56b72bc.jpg',
            des: '',
          }, {
            title: '大院大所合作对接会召开 亿嘉和-东南大学合作研发机器人',
            img: 'http://www.yijiahe.com.cn/mainpic//2017/07/08/44826067c1c591253c8793ebcc4d312f.jpg',
            des: '亿嘉和与东南大学开展产学研合作，联合攻克机器人关键技术。',
          },
        ],
      };
    },
  };
</script>

<style lang="less" scoped>
  @import './index';
</style>
