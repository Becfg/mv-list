<script lang="ts" setup>
defineProps({
  type: {type: String},
  MvName: {type: String},
  url: {type: String}
})
</script>

<template>
  <div class="card" :style=" 'background-image: url('+ url +');'" >
    <div class="card-info">{{ type }}</div>
    <div class="card-name">{{ MvName }}</div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  // border: 1px solid red ;
  min-height: 300px;
  background-color: gray;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 10px;

  .card-info{

  }

  .card-name {
      font-size: 35px;
      font-weight: 800;
  }
}
</style>