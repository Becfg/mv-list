<script setup lang="ts">
import ch from "../assets/channels.json"
import mov from "../assets/movies.json"
import img from "../assets/anime.webp"
import {useRoute} from "vue-router";
import {ref} from "vue";

const route = ref(useRoute())

</script>

<template>
  <div class="page">
    <div class="player">
      <div class="video">
        <video src="https://codelover.club/coursefiles/lnnpREORzoIdSs-hRgPHOKXVIzwM.mp4" controls></video>
      </div>
    </div>
    <div class="content-box">
      <div class="content">
        <!-- 电影内容 -->

        <div class="movie-card">
          <div class="body">
            <h3 class="name">{{ route.params.movie_id }}</h3>
            <p class="info">动画</p>
          </div>
        </div>

        <!-- 推荐列表 -->
        <div class="interest">
          <template v-for="cate in ch" :key="cate.name">
            <h3 class="title">{{ cate.name }}</h3>
            <div class="list-row">
              <div class="list" :style="{ width: (200 + 5) * mov.length + 'px' }">
                <!-- 电影列表 -->
                <div
                    v-for="mv in mov"
                    class="category-card"
                    :style="{ backgroundImage: 'url(' +img + ')' }"
                >
                  <div class="info">
                    <span>{{ cate.name }}</span>/
                    <span>01'14</span>
                  </div>
                  <div class="name">
                    <span>{{ mv.name }}</span>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>

    <div class="msg-box">
      <div class="input-box">
        <label class="fa fa-pencil-square-o"></label>
        <input type="text" value="评论"/>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.page {
  .player {
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 1;


    .video {
      height: 100%;
      position: relative;

      video {
        width: 100%;
        max-height: 200px;
        background: black;
      }
    }


  }

  .content-box {
    margin-top: 145px;
    margin-bottom: 50px;
    // 内容
    .content {

      overflow: hidden;
      padding: 0 10px;

      .movie-card {
        padding: 5px 16px;
        position: relative;
        margin: 5px 5px;
        border-bottom: 1px solid #f4f4f4;

        .body {
          text-align: left;
        }
      }

      .interest {
        text-align: left;

        .title {
        }

        .list-row {
          width: 100%;
          overflow-y: hidden;
          overflow-x: scroll;

          .list {
            display: flex;
            // width: 300%;
            .category-card {
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-end;
              // border: 1px solid red;
              background-color: rgb(0, 0, 0);
              height: 100px;
              width: 200px;
              margin-right: 5px;
              padding-left: 10px;
              padding-bottom: 10px;
              box-sizing: border-box;
              background-size: cover;
              color: white;

              .info {
                font-size: 14px;
              }

              .name {
                font-size: 16px;
              }
            }
          }
        }
      }
    }

  }


  // 聊天栏
  .msg-box {
    display: flex;
    justify-content: space-around;
    font-size: 14px;
    box-shadow: 3px 5px 20px #a6a6a6;
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 10px 0px;
    background-color: white;

    .input-box {
      display: flex;
      flex-direction: row;
      align-items: center;
      border: 1px solid gray;
      border-radius: 18px;
      padding: 0px 15px;
      font-size: 18px;
      height: 28px;

      input {
        border: none;
        font-size: 18px;
        padding-left: 5px;

        &:focus-visible {
          outline: none;
        }
      }
    }
  }
}
</style>