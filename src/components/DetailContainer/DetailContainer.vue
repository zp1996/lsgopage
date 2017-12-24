<template>
  <Container>
    <div slot="content">
      <div class="wrapper" :style="{
        'background-image': 'url(' + require(`../../assets/${img}`) + ')',
      }">
        <div class="title-wrapper">
          <div class="title-area">
            <h1 class="title">{{title}}</h1>
            <i class="divide"></i>
            <h3 class="stitle" v-if="stitle">{{stitle}}</h3>
          </div>
        </div>
      </div>
      <div :class="{
        'detail-content': true,
        'white-content': type === 'white'
      }">
        <slot name="content"></slot>
      </div>
    </div>
  </Container>
</template>

<script>
  export default {
    props: ['children', 'img', 'title', 'stitle', 'type'],
  };
</script>

<style lang="less" scoped>
  @import './index';

  .wrapper {
    box-sizing: border-box;
    background-position: center;
    background-size: cover;
  }
  .title-wrapper {
    width: 100%;
    height: 100%;
    display: table;
  }
  .title-area {
    color: #fff;
    text-align: left;
    display: table-cell;
    vertical-align: middle;
  }
  .divide {
    display: block;
    background: #fff;
  }
  .white-content {
    background: #fff;
  }
</style>
