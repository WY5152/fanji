<template>
  <div class="home">
    <div class="header">
      <div class="imgs">
        <div>
          <img src="http://m.fnji.com/view-v2/web/static/img/page-header/fnji_white.png">
        </div>
      </div>
      <a href="#/art">.上海客厅预约.</a>
    </div>
    <Swiper>
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in img" :key="index">
          <img :src="item">
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </Swiper>
    <div class="lists">
      <ul>
        <router-link tag="li" 
        v-for="(item,index) in list" :key="index"
        :to="item.path"
        >
          <img :src="item.img">
          <p>{{item.message}}</p>
        </router-link>
        <router-view></router-view>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      img: [
        "http://static.fnji.com/temp/upload/s2048_1544695050_4953.jpg?imageMogr2/thumbnail/750x>",
        "http://static.fnji.com/temp/upload/s2048_1544695040_2018.jpg?imageMogr2/thumbnail/750x>"
      ],
      list: []
    };
  },
  created() {
    axios({
      method: "get",
      url: "http://localhost:3000/data"
    }).then(data => {
      this.list = data.data;
    });
  }
};
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  height: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  .imgs {
    flex: 1;
    padding-left: 3.3rem;
    div {
      width: 1rem;
      height: 1.25rem;
      background: #000;
      img {
        padding-top: 0.1rem;
        padding-left: 0.23rem;
        height: 1rem;
      }
    }
  }
  a {
    font-size: 0.24rem;
    color: #000;
    width: 2rem;
  }
}
.swiper-slide {
  img {
    height: 7.05rem;
    width: 100%;
  }
}
.swiper-pagination {
  position: absolute;
}

.home {
  .lists {
    width: 100%;
    ul {
      width: 98%;
      height: 98%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;
      li {
        width: 2.2rem;
        height: 2rem;
        margin: 0.3rem auto;
        img {
          width: 0.5rem;
          height: 1.1rem;
          margin: auto;
        }
        p {
          font-size: 0.2rem;
          color: #000;
          text-align: center;
        }
      }
    }
  }
}
</style>