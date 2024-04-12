<script lang="ts" setup>
import ch from "../assets/channels.json"


</script>

<template>
  <ul class="channels">
    <li class="item" v-for="item in ch" :key="item.id" :style=" 'background-image: url('+ item.url +');'">
      <span class="item-name">#{{ item.name }}#</span>
    </li>
  </ul>
</template>

<style scoped lang="scss">
.channels {
  display: flex;
  flex-wrap: wrap;

  .item {
    display: flex;
    width: 50vw;
    height: 50vw;
    justify-content: center;
    align-items: center;
    background-size: cover;

    .item-name {
      color: white;
      font-size: 26px;
    }
  }
}
</style>