<template>
  <div @click="clickImg" class="feature-view">
    <img :src="img">
  </div>
</template>

<script>
  export default {
    name: 'FeatureView',
    data() {
      return {
        img: require('assets/img/feature_views_img.jpg'),
      }
    },
    methods: {
      clickImg() {
          window.open(item.link);
      }
    }
  }
</script>

<style scoped>
  .feature-view {
    background-color: #F1F1F1;
    padding-top: 10px;
  }
  .feature-view img {
    width: 100%;
  }
</style>
