<template>
  <Container>
    <div slot="content">
      <router-link to="/">home</router-link>
      <h2>{{msg}}</h2>
      <h3>{{$route.query.username}}</h3>
    </div>
  </Container>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'Demo Page~~~',
      };
    },
  };
</script>

<style scoped>

</style>
