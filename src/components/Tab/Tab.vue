<template>
  <div class="tab">
    <div class="title-container">
      <div class="tab-title">
        <ul v-on:click="change">
          <li v-for="(t, i) in tab" :style="{ width: width }"
            :class="{
              'title-item': true,
              'active-title': i === index
            }"
            :data-index="i"
          >
            <h3 class="title">{{t.title}}</h3>
            <h4 class="small-title" v-if="pc">{{t.stitle}}</h4>
          </li>
        </ul>
      </div>
    </div>
    <div class="tab-content">
      <div class="content-item" v-for="(t, i) in tab"
        :style="{ display: i === index ? 'block' : 'none' }"
      >
        <h1 class="content-title">
          {{t.title}}
          <i class="divide"></i>
        </h1>
        <div class="des">{{t.des}}</div>
        <img :src="t.pic" class="pic" />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['tab'],
    data() {
      return {
        width: `${100 / this.$props.tab.length}%`,
        index: 0,
        pc: !process.mobile,
      };
    },
    methods: {
      change(e) {
        let ele = e.target;
        const tag = ele.tagName.toLowerCase();
        if (tag !== 'li') {
          ele = ele.parentNode;
        }
        const index = Number(ele.getAttribute('data-index'));
        if (!isNaN(index) && index !== this.index) {
          this.index = index;
        }
      },
    },
  };
</script>

<style lang="less" scoped>
  @import './index';
  @import './main.less';
</style>
