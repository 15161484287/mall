<template>
  <div>
    <DetailNavBar></DetailNavBar>
    <Swiper :list="topImages"></Swiper>
  </div>

</template>

<script>
  import DetailNavBar from 'views/detail/childrenComponents/detailNavBar/DetailNavBar.vue';
  import Swiper from 'views/detail/childrenComponents/swiper/Swiper.vue';

  import {
    getDetail
  } from "network/detail.js";

  export default {
    name: 'Detail',
    components: {
      DetailNavBar,
      Swiper
    },
    data() {
      return {
        iid: this.$route.params.iid,
        topImages: [],
      }
    },

    // beforeRouteEnter(to, from, next) {
    //   next(vm => {
    //     vm.getDetail(vm.$route.params.iid);
    //   });
    // },
    created() {
      this.getDetail(this.iid);
    },
    methods: {
      /**
       * @description 获取详情信息
       */
      getDetail(iid) {
        getDetail(iid)
          .then((res) => {
            this.topImages = res.result.itemInfo.topImages;
          })
      }
    }
  }
</script>

<style scoped>
</style>
