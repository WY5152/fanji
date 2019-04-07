<template>
  <div id="artist">
    <div class="tilt">
      <img src="http://m.fnji.com/view-v2/web/static/img/magazine/artistlogo.png">
    </div>
    <p class="p">
      梵几不定期邀请艺术家用[玩]的方式一起打造主题橱窗它不被定义/是品牌与艺术家的跨界尝试
      相信会给大家带来新鲜有趣的视觉呈现
      ......
    </p>
    <div class="centers">
      <div class="center" v-for="(item,index) in artist" :key="index">
        <a href>
          <img
            :src="'http://static.fnji.com/temp/upload/'+item.coverImg+'?imageMogr2/thumbnail/800x'"
          >
        </a>
        <div>{{item.title}}</div>
        <div>{{'['+item.address+']'}}</div>
        <div>{{item.publishDate}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Vuex from "vuex";
export default {
  name: "artist",
  computed: {
    ...Vuex.mapState({
      artist: state => state.Col.artist[0]
    })
  },
  created() {
    this.handleArtistData();
  },
  methods: {
    ...Vuex.mapActions({
      handleArtistData: "Col/handleArtistData"
    })
  }
};
</script>  
<style lang="scss" scoped>
.tilt {
  width: 100%;
  img {
    width: 1.4rem;
    height: 1.23rem;
    margin: 1rem auto;
  }
}
.centers {
  width: 100%;
  .center {
    width: 7.1rem;
    height: 5.84rem;
    margin: auto;
    a {
      img {
        width: 6.4rem;
        height: 3.55rem;
        margin: auto;
      }
    }
    div:nth-of-type(1) {
      width: 7.1rem;
      height: 0.76rem;
      text-align: center;
      font-size: 0.28rem;
      font-weight: bolder;
      color: #000;
      padding-top: 0.2rem;
      margin-bottom: 0.2rem;
    }
    div:nth-of-type(2) {
      width: 100%;
      height: 0.29rem;
      text-align: center;
      font-size: 0.2rem;
      color: #888;
      line-height: 0.29rem;
    }
    div:nth-of-type(3) {
      width: 100%;
      height: 0.29rem;
      text-align: center;
      font-size: 0.2rem;
      color: #888;
      line-height: 0.29rem;
    }
  }
}
.center:nth-of-type(1) > div {
  display: none;
}
.p {
  color: #666;
  font-size: 0.22rem;
  position: relative;
  left: 1.5rem;
  top: 6rem;
  width: 4.4rem;
  height: 1.88rem;
}
</style>