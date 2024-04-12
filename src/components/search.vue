<script setup lang="ts">
import ch from "../assets/channels.json"

const emit = defineEmits(["close"])
</script>

<template>
  <div class="search-cont">
    <div class="search-box">
      <div class="search-bar">
        <input type="text">
        <span @click="$emit('close')">取消</span>
      </div>
      <div class="filter">
        <div>影片</div>
        <div>默认排序</div>
        <div>全部频道</div>
      </div>
    </div>
    <div class="filter-content">
      <div class="item">全部频道</div>
      <div class="item" v-for="item in ch">{{ item.name }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
* {
  //border: 1px solid red;
}

.search-cont {
  z-index: 10;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgb(0, 0, 0, 0.6);
  color: #a2a2a2;

  .search-box {
    background: #232323;
    padding-bottom: 10px;

    .search-bar {
      input {
        margin: 5px;
        margin-left: 20px;
        height: 30px;
        width: 80vw;
      }
    }

    .filter {
      display: flex;
      justify-content: space-evenly;

      div {
        font-size: 20px;
      }
    }
  }

  .filter-content {
    padding: 5px;
    display: flex;
    flex-wrap: wrap;
    background-color: #171717;

    .item {
      margin-right: 18px;
      margin-bottom: 5px;
      border-radius: 5px;
      padding: 3px;
      background-color: #3b3b3b;
    }
  }
}
</style>