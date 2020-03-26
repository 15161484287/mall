<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item v-for="(item, index) in list" :key="index" @click="clickSwipeItem(item)">
      <img :src="item.image" />
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
    methods: {
      clickSwipeItem(item) {
        window.open(item.link);
      }
    }
  }
</script>

<style scoped>
  .my-swipe img {
    width: 100%;
  }
</style>
