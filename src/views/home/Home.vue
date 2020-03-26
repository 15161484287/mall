<template>
  <div>
    <MainNavBar></MainNavBar>
    <Swiper :list="banner.list"></Swiper>
    <RecommendList :list="recommend.list"></RecommendList>
  </div>
</template>

<script>
  import MainNavBar from 'components/content/mainnavbar/MainNavBar.vue';
  import Swiper from 'components/content/swiper/Swiper.vue';
  import RecommendList from 'components/content/recommendList/RecommendList.vue';
  
  import {getHomeMuliData} from 'network/home.js';

  export default {
    name: 'Home',
    components: {
      MainNavBar,
      Swiper,
      RecommendList
    },
    data() {
      return {
        banner: {},
        dKeyword: {},
        keywords: {},
        recommend: {}
      }
    },
    created() {
      // 请求多个数据
      getHomeMuliData()
      .then(res=> {
        let data = res.data;
          this.banner = data.banner;
          this.dKeyword = data.dKeyword;
          this.keywords = data.keywords;
          this.recommend = data.recommend;
      })
      .catch(err=> {
        console.log(err);
      });
    }
  }
</script>

<style>
</style>
