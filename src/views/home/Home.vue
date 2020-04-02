<template>
  <div class="home">
    <!-- 顶部导航栏 -->
    <MainNavBar class="main-nav-bar"></MainNavBar>
    <!-- 轮播图 -->
    <Swiper class="swiper" :list="banner.list"></Swiper>
    <!-- 推荐列表 -->
    <RecommendList :list="recommend.list"></RecommendList>
    <!-- 精选 -->
    <FeatureView></FeatureView>
    <!-- 商品tab控制器 -->
    <Sticky :offset-top="44">
      <TabController :titles="titles" @clicktabc="switchGoodsType"></TabController>
    </Sticky>
    <!-- 商品列表 -->
    <GoodsList :list="goodsList" :isEnd="isEnd" @getMoreData="getMoreData" ref="goodsList"></GoodsList>
  </div>
</template>

<script>
  import MainNavBar from 'components/content/mainnavbar/MainNavBar.vue';
  import TabController from 'components/common/tabController/TabController.vue';

  import Swiper from 'views/home/childComponents/swiper/Swiper.vue';
  import RecommendList from 'views/home/childComponents/recommendList/RecommendList.vue';
  import GoodsList from 'views/home/childComponents/goodsList/GoodsList.vue';

  import FeatureView from 'views/home/childComponents/featureView/FeatureView.vue';

  import {
    Sticky
  } from 'vant';

  import {
    getHomeMuliData,
    getHomeGoods
  } from 'network/home.js';

  export default {
    name: 'Home',
    components: {
      MainNavBar,
      Swiper,
      RecommendList,
      FeatureView,
      TabController,
      Sticky,
      GoodsList
    },
    data() {
      return {
        banner: {},
        dKeyword: {},
        keywords: {},
        recommend: {},
        titles: ['流行', '新款', '精选'],
        goods: {
          'pop': {
            page: 1,
            list: [],
            isEnd: false
          },
          'new': {
            page: 1,
            list: [],
            isEnd: false
          },
          'sell': {
            page: 1,
            list: [],
            isEnd: false
          }
        },
        goodsIndex: 0
      }
    },
    computed: {
      goodsList() {
        let goodsType = '';
        switch (this.goodsIndex) {
          case 0:
            goodsType = 'pop';
            break;
          case 1:
            goodsType = 'new';
            break;
          case 2:
            goodsType = 'sell';
            break;
        }
        return this.goods[goodsType].list;
      },
      isEnd() {
         let goodsType = '';
        switch (this.goodsIndex) {
          case 0:
            goodsType = 'pop';
            break;
          case 1:
            goodsType = 'new';
            break;
          case 2:
            goodsType = 'sell';
            break;
        }
        return this.goods[goodsType].isEnd;
      },
    },
    created() {
      // 请求首页数据
      this.getHomeMuliData();
      // 请求商品数据
     // this.initGoods();
    },
    methods: {
      /**
       * @description 网络请求相关方法
       */
      /**
       * @description 初始化商品数据
       */
      initGoods() {
        for (let type in this.goods) {
          this.getHomeGoods(type);
        }
      },
      /**
       * @description 获取首页数据
       */
      getHomeMuliData() {
        getHomeMuliData()
          .then(res => {
            let data = res.data;
            this.banner = data.banner;
            this.dKeyword = data?.dKeyword || [];
            this.keywords = data?.keywords;
            this.recommend = data?.recommend;
          });
      },
      /**
       * @description 获取商品数据
       * @param {Object} type 商品类别
       */
      getHomeGoods(type) {
        let page = this.goods[type].page;
        getHomeGoods(page, type)
          .then(res => {
            this.goods[type].isEnd = res.data.isEnd;
            this.goods[type].list.push(...res.data.list);
            this.goods[type].page++;
            this.$refs.goodsList.loading = false;
          })
          .catch(err=> {
            this.goods[type].isEnd = true;
          });
      },
      /**
       * @description  切换商品列表
       * @param {Object} index 商品类别索引值
       */
      switchGoodsType(index) {
        this.goodsIndex = index;
      },
      /**
       * @description 下拉加载更多
       *
       */
      getMoreData() {
        let goodsType = '';
        switch (this.goodsIndex) {
          case 0:
            goodsType = 'pop';
            break;
          case 1:
            goodsType = 'new';
            break;
          case 2:
            goodsType = 'sell';
            break;
        }
        this.getHomeGoods(goodsType);
      }
    }
  }
</script>

<style scoped>
  .home {
    padding-bottom: 65px;
  }

  .main-nav-bar {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 998;
  }

  .swiper {
    margin-top: 44px;
  }
</style>
