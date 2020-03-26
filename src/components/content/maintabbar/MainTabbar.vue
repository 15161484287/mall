<template>
  <Tabbar>
      <TabbarItem v-for="item in itemList" :item="item" :activeColor="activeColor" @click.native="changeRouter(item.path)" :key="item.title">
        <template #img><img :src="item.img"></template>
        <template #activeImg><img :src="item.activeImg"></template>
        <template #title>
          <div class="tabbar-title">
            {{item.title}}
          </div>
        </template>
      </TabbarItem>
  </Tabbar>
</template>

<script>
  import Tabbar from 'components/common/tabbar/Tabbar';
  import TabbarItem from 'components/common/tabbar/TabbarItem';
  export default {
    name: 'MainTabbar',
    data() {
      return {
        activeColor: 'red',
        itemList: [{
            img: require('assets/img/home.png'),
            activeImg: require('assets/img/home_active.png'),
            title: '首页',
            path: '/home'
          },
          {
            img: require('assets/img/category.png'),
            activeImg: require('assets/img/category_active.png'),
            title: '分类',
            path: '/category'
          },
          {
            img: require('assets/img/cart.png'),
            activeImg: require('assets/img/cart_active.png'),
            title: '购物车',
            path: '/cart'
          },
          {
            img: require('assets/img/profile.png'),
            activeImg: require('assets/img/profile_active.png'),
            title: '我的',
            path: '/profile'
          }
        ]
      }
    },
    components: {
      Tabbar,
      TabbarItem
    },
    methods: {
      changeRouter(path) {
        if (this.$route.path != path) {
          this.$router.replace(path);
        }
      }
    }
  }
</script>

<style scoped>


</style>
