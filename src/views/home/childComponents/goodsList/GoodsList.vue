<template>
  <div>
    <PullRefresh v-model="refreshing" @refresh="onRefresh">
      <List v-model="loading" :finished="isEnd" finished-text="没有更多了" @load="onLoad" class="goods-list">
        <GoodItem v-for="(item, index) in list" :item="item" :key="item.shopId + index"></GoodItem>
      </List>
    </PullRefresh>
  </div>
</template>

<script>
  import {
    List,
    PullRefresh
  } from 'vant';

  import GoodItem from './GoodItem';

  export default {
    name: 'GoodsList',
    props: {
      list: {
        type: Array,
        default () {
          return [];
        }
      },
      isEnd: {
        type: Boolean,
        default() {
          return false;
        }
      }
    },
    watch: {
      isEnd(isEnd) {

        if (isEnd) {
          this.loading = false;
        }
      }
    },
    computed: {

    },
    data() {
      return {
        loading: false,
        refreshing: false
      }
    },
    mounted() {
      
    },
    components: {
      GoodItem,
      List,
      PullRefresh
    },
    methods: {
      onRefresh() {

      },
      onLoad() {
        this.$emit('getMoreData');
      }
    }
  }
</script>

<style scoped>
  .goods-list {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .goods-list .van-list__loading {
    flex: 1!important;
  }
</style>
