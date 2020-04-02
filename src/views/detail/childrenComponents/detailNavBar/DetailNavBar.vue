<template>
  <div>
    <NavBar>
       <template #leftBtn>
         <div class="nav_back" @click="back">
           <img src="~assets/img/nav_back.png" >
         </div>
       </template>
         <template #center>
           <div class="title-list">
             <div class="title" v-for="(title, index) in titles" :class="{'title-active': currentIndex == index}" @click="switchTitle(index)">{{title}}</div>
           </div>
         </template>
      <!--   <template #rightBtn>rightBtn</template> -->
    </NavBar>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar.vue";
  export default {
    name: 'DetailNavBar',
    components: {
    	NavBar
    },
    data() {
      return {
        titles: ['商品', '参数', '评论', '推荐'],
        currentIndex: 0
      }
    },
    methods: {
      back() {
        this.$router.back();
      },
      switchTitle(index) {
        this.currentIndex = index;
      }
    }
  }
</script>

<style scoped>
  .nav_back {
    text-align: center;
  }
  .nav_back img {
    width: 24px;
    margin-top: 10px;
  }
  .title-list {
    display: flex;
    text-align: center;
  }
  .title {
    flex: 1;
  }
  .title-active {
    color: red;
  }
</style>
