<template>
  <div>
    <div class="tab-controller">
      <div class="tab-controller-item" v-for="(title, index) in titles" @click="clickTitle(index)" :class="{'tab-controller-item-active': index == activeIndex}">{{title}}</div>
      <div class="tab-controller-line" :style="linePosition"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TabController',
    props: {
      titles: {
        type: Array,
        default () {
          return [];
        }
      }
    },
    data() {
      return {
        activeIndex: 0
      }
    },
    computed: {
      linePosition() {
        let left = `calc((${this.activeIndex} + 0.5) / ${this.titles.length} * 100vw - 11px) `;
        return {
          left: left
        }
      }
    },
    methods: {
      clickTitle(index) {
        this.activeIndex = index;
        this.$emit('clicktabc', index);
      }
    }
  }
</script>

<style scoped>
  .tab-controller {
    line-height: 34px;
    display: flex;
    position: relative;
    background-color: #fff;
  }

  .tab-controller-item {
    flex: 1;
    color: #333;
    text-align: center;
  }

  .tab-controller-item-active {
    color: red;
  }

  .tab-controller-line {
    position: absolute;
    transition: all 0.2s linear;
    background-color: red;
    width: 22px;
    height: 2px;
    top: 30px;
  }
</style>
