<template>
  <div id="app">
    <MainTabbar></MainTabbar>
    <keep-alive exclude="Detail">
     <!-- <router-view v-if="$route.meta.keepAlive"></router-view> -->
      <router-view></router-view>
    </keep-alive>
    <!-- <router-view v-if="!$route.meta.keepAlive"></router-view> -->
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
    mounted() {
      console.log(this.$router)
    },
    data() {
      return {}
    },
  }
</script>

<style>
  @import "assets/css/base.css";

</style>
