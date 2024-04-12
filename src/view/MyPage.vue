<script lang="ts" setup>

</script>

<template>
  <div class="my-page">
    <div class="radius-container"></div>
    <span class="username">Cheems</span>
    <div class="btn-container">
      <button>退出登录</button>
      <button>修改密码</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.my-page {
  display: flex;
  align-items: center;
  flex-direction: column;

  .radius-container {
    height: 70vw;
    width: 70vw;
    border-radius: 50%;
    background-image: url("../assets/avatar.jpg");
    background-size: cover;
  }

  .username {
    margin-top: 15px;
    font-size: 20px;
    font-weight: 600;
  }

  .btn-container {
    margin-top: 20px;

    button:first-child {
      margin-right: 30px;
    }
  }
}

</style>