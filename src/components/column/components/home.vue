<template>
  <div id="homes">
    <div class="box">
      <img src="http://m.fnji.com/view-v2/web/static/img/magazine/homelogo.png">
      <div class="pos">
        <img src="http://m.fnji.com/view-v2/web/static/img/magazine/corner.jpg">
        <div class="min">
          <div>NEW</div>
          <div>fnjiathome</div>
          <div>-</div>
          <div>NO31</div>
        </div>
      </div>
      <p class="brief">
        [梵几在家] 是梵几品牌的自媒体栏目，透过栏目展现梵几家具在不同人家中的状态，
        分享家具不同的搭配使用，传达家具主人的生活态......
      </p>
    </div>
    <div class="center">
      <div class="list" v-for="(item,index) in home" :key="index">
        <img :src="'http://static.fnji.com/temp/upload/'+item.coverImgNew">
        <div class="name">{{item.title}}</div>
        <div class="address">{{item.address}}</div>
        <div class="data">{{item.publishDate}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import Vuex from "vuex";
export default {
  name: "home",
  computed: {
    ...Vuex.mapState({
      home: state => state.Col.home[0]
    })
  },
  created() {
    this.handleHomeData();
  },
  methods: {
    ...Vuex.mapActions({
      handleHomeData: "Col/handleHomeData"
    })
  }
};
</script>  

<style lang="scss" scoped>
.center {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  .list {
    padding-top: 0.5rem;
    img {
      width: 3.43rem;
      height: 4.3rem;
    }
    .name {
      width: 3.43rem;
      overflow: hidden;
      color: #000;
      font-size: 0.24rem;
      line-height: 0.76rem;
    }
    .address {
      width: 100%;
      color: #888;
      font-size: 0.2rem;
      line-height: 0.3rem;
    }
    .data {
      width: 100%;
      color: #888;
      font-size: 0.2rem;
      line-height: 0.3rem;
    }
  }
}
.center > .list:nth-of-type(1) {
  position: relative;
  bottom: 1.5rem;
  img {
    width: 4.4rem;
    height: 6.1rem;
  }
  div {
    display: none;
  }
}
.box {
  img {
      margin:1rem auto;
  }
  .pos {
    position: relative;
    img {
      width: 0.8rem;
      height: 0.8rem;
      position: absolute;
      top:-.93rem;
      left: 5.2rem;
      z-index: 1;
    }
    .min {
      background: #000;
      width: 1.5rem;
      height: 1.7rem;
      position: absolute;
      top: 4.5rem;
      left: 4.44rem;
      z-index: 1;
      padding-top: 0.3rem;
      div {
        color: #fff;
        text-align: center;
        font-size: 0.22rem;
      }
    }
  }
  .brief {
   position: relative;
   top: 6.5rem;
    width: 4.4rem;
    font-size: .22rem;
    left:1.5rem;
}
}
</style>