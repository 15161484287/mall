<template>
  <div>
    <div v-if="!active">
      <slot name="img"><img :src="item.img"></slot>
    </div>
    <div v-else>
      <slot name="activeImg"><img :src="item.activeImg"></slot>
    </div>
    <div :style="itemStyle">
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

<style>
</style>
