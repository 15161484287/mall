<template>
  <div id="app">
    <MainTabbar></MainTabbar>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import MainTabbar from 'components/content/maintabbar/MainTabbar.vue';
  import Vue from 'vue';
 
  export default {
    name: 'App',
    components: {
      MainTabbar
    },
    data() {
      return {}
    },
  }
</script>

<style>
  @import "assets/css/base.css";
  .van-list__error-text, .van-list__finished-text, .van-list__loading {
    flex: 1!important;
  }
</style>
