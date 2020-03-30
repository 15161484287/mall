<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'Tabbar'
  }
</script>

<style scoped>
  .tabbar {
    display: flex;
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #F6F6F6;
    padding: 10px 0;
    border-top: 1px solid #F5F5F5;
		z-index: 998;
  }
</style>
