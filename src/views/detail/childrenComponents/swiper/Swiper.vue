<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item v-for="(item, index) in list" :key="index">
      <img :src="item" />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
  export default {
    name: 'Swiper',
    props: {
      list: {
        type: Array,
        default() {
          return [];
        }
      }
    },
  }
</script>

<style scoped>
  .my-swipe {
    height: 300px;
    overflow: hidden;
  }
  .my-swipe img {
    width: 100%;
  }
</style>
