<script lang="ts" setup>
defineProps({
  type: {type: String},
  MvName: {type: String},
  url: {type: String}
})
</script>

<template>
  <div :style=" 'background-image: url('+ url +');'" class="card">
    <div class="cand-info">{{ type }}</div>
    <div class="cand-name">{{ MvName }}</div>
  </div>
</template>

<style lang="sass" scoped>

</style>