<script lang="ts" setup>

import Card from "../components/card.vue";
import mov from "../assets/movies.json"
import img from "../assets/anime.webp"
import {useRouter} from "vue-router";

const router = useRouter()
</script>

<template>
  <card v-for="movie in mov" :key="movie.id" :MvName="movie.name"
        :type="movie.type" :url="img"
        @click="router.push({path:'/play/'+movie.name})"></card>
</template>

<style scoped lang="scss">

</style>