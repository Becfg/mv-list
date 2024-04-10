<script lang="ts" setup>

</script>

<template>
  <div class="nav">
    <router-link to="">首页</router-link>
    <router-link to="">频道列表</router-link>
    <router-link to="">我的</router-link>
  </div>
</template>

<style lang="scss" scoped>
.nav {
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  background-color: #2c3e50;
  line-height: 50px;
  a {
    color: white;
    text-decoration: none;
  }
}

</style>