<template>
  <div id="app">
    <MainTabbar></MainTabbar>
    <router-view></router-view>
  </div>
</template>

<script>
  import MainTabbar from 'components/content/maintabbar/MainTabbar.vue';

export default {
  name: 'App',
  components: {
    MainTabbar
  },
	data() {
		return {

		}
	},
}
</script>

<style>
@import "assets/css/base.css";
</style>
