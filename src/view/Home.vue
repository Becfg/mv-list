<script lang="ts" setup>

import Card from "../components/card.vue";
import img from "../assets/anime.webp"
import { ref } from "vue";

const movies = ref([
  { id: 1, type: "动画", name: "迷宫饭", url: img },
  { id: 2, type: "动画", name: "迷宫饭", url: img },
  { id: 3, type: "动画", name: "迷宫饭", url: img },
  { id: 4, type: "动画", name: "迷宫饭", url: img },
  { id: 5, type: "动画", name: "迷宫饭", url: img },
])
</script>

<template>
  <card v-for="movie in movies" :key="movie.id" :MvName="movie.name" :type="movie.type" :url="movie.url"></card>
</template>

<style scoped lang="scss">

</style>