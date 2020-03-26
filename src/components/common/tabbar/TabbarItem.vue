<template>
  <div class="tabbaritem">
    <div v-if="!active" class="tabbar-img">
      <slot name="img"></slot>
    </div>
    <div v-else class="tabbar-img-active">
      <slot name="activeImg"></slot>
    </div>
    <div :style="itemStyle" class="tabbar-title">
      <slot name="title">{{item.title}}</slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TabbarItem',
    props: {
      item: Object,
      activeColor: {
        default () {
          return 'red'
        }
      }
    },
    computed: {
      active() {
        return this.$route.path.includes(this.item.path) ? true : false;
      },
      itemStyle() {
        let style = {
          color: this.activeColor
        };
        return this.active ? style : {};
      }
    }
  }
</script>

<style scoped>
  .tabbaritem {
    flex: 1;
    text-align: center;
  }
  .tabbar-title {
    line-height: 20px;
  }
  .tabbar-img img,
  .tabbar-img-active img {
  	width: 24px;
  	height: 24px;
  	vertical-align: middle;
  }
</style>
