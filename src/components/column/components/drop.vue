<template>
  <div id="drop">
    <div class="tilt">
      <img src="http://m.fnji.com/view-v2/web/static/img/magazine/droplogo.png">
      <img
        class="img"
        src="http://static.fnji.com/temp/upload/s1200_1508730678_5521.jpeg?imageMogr2/thumbnail/500x"
      >
      <div class="min">
        <div>EVW</div>
        <div>fnjivisit friend</div>
        <div>-</div>
        <div>BOOK</div>
      </div>
      <div class="p">
        2009年，梵几成立的前一年，古奇（梵几创始人兼主设计师）来到北京，
        那时和朋友们见面不是约在咖啡馆就是商场，而小时候，父母友人间相互串门的方式让他难以忘怀，那时古奇就在朋友圈发起了一场“串门“活动......
      </div>
    </div>
    <div>
      <div class="center">
        <div class="list" v-for="(item,index) in drop" :key="index">
          <img :src="'http://static.fnji.com/temp/upload/'+item.coverImgNew">
          <div class="name">{{item.title}}</div>
          <div class="address">{{item.address}}</div>
          <div class="data">{{item.publishDate}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vuex from "vuex";
export default {
  name: "drop",
  computed: {
    ...Vuex.mapState({
      drop: state => state.Col.drop[0]
    })
  },
  created() {
    this.handleDropData();
  },
  methods: {
    ...Vuex.mapActions({
      handleDropData: "Col/handleDropData"
    })
  }
};
</script>  

<style lang="scss" scoped>
.tilt {
  width: 100%;
  position: relative;
  img {
    margin: 1rem auto;
  }
  .img {
    width: 4.4rem;
    height: 3.1rem;
  }
  .min {
    width: 1.5rem;
    height: 1.5rem;
    background: #000;
    position: absolute;
    z-index: 3;
    bottom: 1.6rem;
    left: 1.53rem;
    padding-top: 0.2rem;
    div {
      color: #fff;
      font-size: 0.2rem;
      text-align: center;
    }
  }
}
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
      white-space: nowrap;
      text-overflow: ellipsis;
      color: #000;
      font-size: 0.24rem;
      line-height: 0.7rem;
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
  height: 6.1rem;
  img {
    width: 4.4rem;
    height: 3rem;
  }
  div {
    display: none;
  }
}
.center:after {
  content:"";
  flex: auto;
}
.p {
  font-size: .22rem;
  width: 4.4rem;
  position: absolute;
  left: 1.5rem;
  top: 9rem;
}
</style>