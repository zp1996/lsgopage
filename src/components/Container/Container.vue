<template>
  <div>
    <Menu/>
    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['children'],
  };
</script>

<style lang="less" scoped>
  @import "./index.less";
</style>
