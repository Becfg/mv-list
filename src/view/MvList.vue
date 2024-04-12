<script lang="ts" setup>
import {ref} from "vue";

const channels = ref([
  {name: "创意", url: "https://codelover.club/coursefiles/images/film/创意.jpeg", id: 1},
  {name: "剧情", url: "https://codelover.club/coursefiles/images/film/剧情.jpeg", id: 2},
  {name: "动画", url: "https://codelover.club/coursefiles/images/film/动画.jpeg", id: 3},
  {name: "励志", url: "https://codelover.club/coursefiles/images/film/励志.jpeg", id: 4},
  {name: "实验", url: "https://codelover.club/coursefiles/images/film/实验.jpeg", id: 5},
  {name: "广告", url: "https://codelover.club/coursefiles/images/film/广告.jpeg", id: 6},
  {name: "搞笑", url: "https://codelover.club/coursefiles/images/film/搞笑.jpeg", id: 7},
  {name: "旅行", url: "https://codelover.club/coursefiles/images/film/旅行.jpeg", id: 8},
  {name: "时尚", url: "https://codelover.club/coursefiles/images/film/时尚.jpeg", id: 9},
  {name: "汽车", url: "https://codelover.club/coursefiles/images/film/汽车.jpeg", id: 10},
  {name: "混剪", url: "https://codelover.club/coursefiles/images/film/混剪.jpeg", id: 11},
  {name: "游戏", url: "https://codelover.club/coursefiles/images/film/游戏.jpeg", id: 12},
  {name: "爱情", url: "https://codelover.club/coursefiles/images/film/爱情.jpeg", id: 13},
  {name: "生活", url: "https://codelover.club/coursefiles/images/film/生活.jpeg", id: 14},
  {name: "科幻", url: "https://codelover.club/coursefiles/images/film/科幻.jpeg", id: 15},
  {name: "纪录", url: "https://codelover.club/coursefiles/images/film/纪录.jpeg", id: 16},
  {name: "美食", url: "https://codelover.club/coursefiles/images/film/美食.jpeg", id: 17},
  {name: "运动", url: "https://codelover.club/coursefiles/images/film/运动.jpeg", id: 18},
  {name: "音乐", url: "https://codelover.club/coursefiles/images/film/音乐.jpeg", id: 19},
  {name: "预告", url: "https://codelover.club/coursefiles/images/film/预告.jpeg", id: 20}
])
</script>

<template>
  <ul class="channels">
    <li class="item" v-for="item in channels" :key="item.id" :style=" 'background-image: url('+ item.url +');'">
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