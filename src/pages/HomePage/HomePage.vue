<template>
  <Container>
    <div slot="content">
      <Slider :list="slider.list" :time="slider.time" />
      <Tab :tab="tab" />
      <NewList :news="news" />
    </div>
  </Container>
</template>

<script>
  import { getHomePageData } from 'Services/home';

  export default {
    data() {
      return {
        slider: {
          list: [],
          time: 5000,
        },
        tab: [
          {
            title: '智能机器人',
            stitle: 'Intelligent Robot',
            des: '智能机器人产品是实现数据采集、决策判断、信息集成及运维操作的重要平台，以智能机器人为平台，结合物联网、大数据、专家系统等技术，实现设备状态检测、状态评价、故障预警、运行维护等功能，代替人工完成环境信息量化与联动、设备状态信息采集、安防联动与呼叫平台等功能，使得状态数据大数据化，结合管理后台，实现工业系统安全、可靠运行。',
            pic: 'http://www.yijiahe.com.cn/temp/robot_01.png',
          }, {
            title: '智能运维服务',
            stitle: 'Smart Maintenance',
            des: '智能化运维服务是结合大数据平台，面向电力、市政、通信等行业，提供多样化的智能化产品和解决方案，实现工业设备状态检测与评价、故障预警与运行维护等功能。将数据和业务相关联，实现最终的安全、精益生产需求。',
            pic: 'http://www.yijiahe.com.cn/temp/robot_02.png',
          }, {
            title: '智能软件系统',
            stitle: 'Clever Software',
            des: '智能软件包括基于机器人技术的智能系统和数据机房业务两大模块。提供多样的智能化需求，结合物联网、大数据等平台，实现数据在现、数据分析、数据状态诊断、决策与控制等需要，在技术上更加符合市场需求。',
            pic: 'http://www.yijiahe.com.cn/temp/robot_03.png',
          },
        ],
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
    created() {
      getHomePageData()
        .then((res) => {
          this.slider.list = res.slider;
        });
    },
  };
</script>

<style lang="less">

</style>
