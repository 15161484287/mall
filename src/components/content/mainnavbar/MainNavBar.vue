<template>
  <NavBar class="home-nav">
  <!--  <template #leftBtn>leftBtn</template> -->
    <template #center>购物街</template>
 <!--   <template #rightBtn>rightBtn</template> -->
  </NavBar>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar';
  export default {
    name: 'MainNabBar',
    components: {
      NavBar
    }
  }
</script>

<style scoped>
  .home-nav {
    background-color: #42B983;
    color: #FFF;
  }
</style>
