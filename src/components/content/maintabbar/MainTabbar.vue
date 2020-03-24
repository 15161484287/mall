<template>
  <div class="tabbar">
    <div v-for="item in itemList" class="tabbaritem" @click="changeRouter(item.path)">
      <TabbarItem :item="item" :activeColor="activeColor">
        <template #img><img :src="item.img" class="tabbar-img"></template>
        <template #activeImg><img :src="item.activeImg" class="tabbar-img-active"></template>
        <template #title>
          <div class="tabbar-title">
            {{item.title}}
          </div>
        </template>
      </TabbarItem>
    </div>
  </div>
</template>

<script>
  import TabbarItem from 'components/common/tabbar/TabbarItem';
  export default {
    name: 'MainTabbar',
    data() {
      return {
        activeColor: '#3C80E6',
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
  .tabbar {
    display: flex;
    position: fixed;
    bottom: 0;
    width: 100%;
  }

  .tabbaritem {
    flex: 1;
    text-align: center;
    vertical-align: middle;
  }
  .tabbar-title {
    line-height: 20px;
  }
  .tabbar-img,
  .tabbar-img-active {
    width: 20px;
  }
</style>
