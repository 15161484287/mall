<template>
  <div class="recommend-list">
    <div class="recommend-item" v-for="(item, index) in list" @click="clickRecommendItem(item)">
       <img :src="item.image">
       <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'RecommendList',
    props: {
      list: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    methods: {
      clickRecommendItem(item) {
        window.open(item.link);
      }
    },
  }
</script>

<style scoped>
  .recommend-list {
    display: flex;
    background-color: #FFF;
    padding: 20px 0;
  }
  .recommend-item{
    flex: 1;
    text-align: center;
  }
  .recommend-item img {
    width: 70px;
  }
</style>
