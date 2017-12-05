<template>
  <div class="slider-container" ref="container">
    <div class="slider" :style="{
      width: awidth,
      transform: 'translateX(' + pos + 'px)',
    }" ref="slider">
      <div class="slider-item"
        v-for="l in list"
        :style="{
          'background-image': 'url(' + l.url +')',
          width: swidth
        }"
      >
        <div class="title-wrapper">
          <div :class="Object.assign({
              'title-area': true,
            }, getClassName(l.type)
          )">
            <h1 class="title">{{l.title}}</h1>
            <h2 class="small-title" v-if="l.stitle">
              {{l.stitle}}
            </h2>
            <router-link :to="l.btn.url" class="link-to-info"
              v-else-if="l.btn && l.btn instanceof Object"
            >
              了解详情
            </router-link>
            <a :href="" clas
          </div>
        </div>
      </div>
    </div>
    <ul class="slider-dots" v-on:click="changeBanner">
      <li v-for="(l, i) in list" :data-index="i">
        <span :class="{
          dots: true,
          'dots-active': i === dindex
        }"></span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    mounted() {
      const { slider, container } = this.$refs;

      const width = container.offsetWidth;
      this.awidth = `${width * this.n}px`;
      this.swidth = `${width}px`;

      const node = slider.childNodes[0].cloneNode(true);
      node.style.width = this.swidth;
      slider.appendChild(node);

      // 自动轮播
      this.sport();
      // 监听移动事件
      this.move();
    },
    destroyed() {
      if (this.timer != null) {
        this.pause();
      }
    },
    props: ['list', 'time'],
    data() {
      const width = '100%';
      return {
        awidth: width,  // wrapper div 宽度
        swidth: width,  // 单个div 宽度
        index: 0,       // banner索引
        dindex: 0,      // dots索引
        pos: 0,         // wrapper div position
        n: this.$props.list.length + 1,
      };
    },
    methods: {
      getClassName(classname = '') {
        return classname.split('.').reduce((style, c) => ({
          ...style,
          [c]: true,
        }), {});
      },
      setPos(index) {
        this.index = index;
        this.pos = -index * parseFloat(this.swidth);
      },
      /* eslint-disable no-param-reassign */
      resetPos(dom, pos = 0) {
        dom.style.transition = 'none';
        dom.style.transform = `translate(${pos}px)`;
      },
      right(i) {
        const index = (this.index + 1) % this.n;
        const { slider } = this.$refs;
        const flag = index === 0;

        if (flag) {
          this.resetPos(slider);
          // 下一个event loop重置
          setTimeout(() => {
            slider.style.transition = 'transform 1s ease';
            this.dindex = i || 1;
            this.setPos(i || index + 1);
          }, 20);
        } else {
          this.setPos(index);
          this.dindex = index === this.n - 1 ? 0 : index;
        }
      },
      left() {
        const index = (this.index - 1) % this.n;
        const { slider } = this.$refs;
        const flag = index < 0;
        const last = this.n - 2;

        if (flag) {
          this.resetPos(slider, -(last + 1) * parseFloat(this.swidth));
          setTimeout(() => {
            slider.style.transition = 'transform 1s ease';
            this.dindex = last;
            this.setPos(last);
          }, 20);
        } else {
          this.setPos(index);
          this.dindex = index;
        }
      },
      createTimer() {
        return setInterval(this.right, this.$props.time);
      },
      sport() {
        this.timer = this.createTimer();
      },
      pause() {
        clearInterval(this.timer);
        this.timer = null;
      },
      restart() {
        this.timer = this.createTimer();
      },
      changeBanner(e) {
        let ele = e.target;
        const tag = ele.tagName.toLowerCase();
        if (tag === 'ul') {
          return;
        } else if (tag === 'span') {
          ele = ele.parentNode;
        }

        const index = Number(ele.getAttribute('data-index'));
        const len = this.n - 1;
        if (
          index !== this.index &&
          !(index === 0 && this.index === len)
        ) {
          this.pause();
          // 最后一张到第一张
          if (
            (index === 0 && this.index === this.n - 2) ||
            this.index === len
          ) {
            this.right(index);
          } else {
            this.setPos(index);
            this.dindex = index;
          }
          this.restart();
        }
      },
      baseMove(starte, ende, threshold, fn) {
        const { slider } = this.$refs;
        let startX;
        slider.addEventListener(starte, (e) => {
          startX = fn(e);
        });
        slider.addEventListener(ende, (e) => {
          const res = startX - fn(e);
          if (Math.abs(res) >= threshold) {
            this.pause();
            if (res < 0) {
              this.right();
            } else {
              this.left();
            }
            this.restart();
          }
        });
      },
      move() {
        if (process.mobile) {
          this.baseMove(
            'touchstart',
            'touchend',
            20,
            e => e.changedTouches[0].clientX,
          );
        } else {
          this.baseMove(
            'mousedown',
            'mouseup',
            50,
            e => e.clientX,
          );
        }
      },
    },
  };
</script>

<style lang="less" scoped>
  @import './index';
  @import './main.less';
</style>
