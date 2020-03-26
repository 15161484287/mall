<template>
  <div class="navbar">
    <div class="left">
      <slot name="leftBtn"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="rightBtn"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NavBar',
    props: {
      backgroundColor:String
    },
    computed: {
    }
  }
</script>

<style scoped>
  .navbar {
    display: flex;
    line-height: 44px;
  }
  .left,
  .right {
    width: 60px;
  }
  .center {
    flex: 1;
    text-align: center;
  }
</style>
