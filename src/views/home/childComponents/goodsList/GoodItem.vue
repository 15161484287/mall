<template>
  <div class="goods-item">
    <vantImage :src="item.show.img">
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
    }
  }
</script>

<style scoped>
  .goods-item {
    width: 50%;
    padding: 5px 5px 40px 5px;
    position: relative;
  }

  .goods-item img {
    width: 100%;
    border-radius: 10px;
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
