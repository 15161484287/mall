<template>
  <div class="goods-item" @click="openDetail">
    <vantImage :src="item.show.img" class="goods-img">
      <template #loading>
        <Loading type="spinner" size="20" />
      </template>
    </vantImage>
    <div class="goods-detail">
      <div class="goods-title">{{item.title}}</div>
      <div class="goods-price">￥{{item.price}}</div>
    </div>
  </div>
</template>

<script>
  import {
    Image,
    Lazyload,
    Loading
  } from 'vant';

  export default {
    name: 'GoodItem',
    props: {
      item: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    components: {
      vantImage: Image,
      Lazyload,
      Loading,
    },
    methods: {
      openDetail() {
        this.$router.push({
          name: 'Detail',
          params: {
            iid: this.item.iid
          }
        });
      }
    }
  }
</script>

<style scoped>
  .goods-item {
    width: calc(50% - 7.5px);
    padding: 0px 0px 40px 0px;
    position: relative;
  }

  .goods-img {
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
  }

  .goods-detail {
    width: 100%;
    position: absolute;
    bottom: 0;
  }

  .goods-title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-title,
  .goods-price {
    text-align: center;
  }
</style>
