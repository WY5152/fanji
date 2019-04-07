<template>
  <div class="art"  id="arts">
    <div class="art_tilt">
      <p>NEW ARTIST</p>
      <p>-</p>
    </div>
    <div class="header_one">
      <img :src="art[0]">
      <p>
        {{art[1]}}
        <span>{{art[2]}}</span>
      </p>
    </div>
    <div class="pic">
      <div v-for="(item,index) in all" :key="index">
        <img :src="'http://static.fnji.com/temp/upload/'+item.brandLogo">
        <p>{{item.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Vuex from "vuex";
export default {
  name: "art",
  data() {
    return {
      art: [
        "http://m.fnji.com/view-v2/web/shop/static/artist.png?111",
        "艺术家",
        "/ARTISTS"
      ]
    };
  },
  computed: {
    ...Vuex.mapState({
      all: state => state.Art.all[0]
    })
  },
  created() {
    this.handleActionsAll();
  },
  methods: {
    ...Vuex.mapActions({
      handleActionsAll: "Art/handleActionsAll"
    })
  }
};
</script>


<style lang="scss" scoped>
.art_tilt {
  font-size: 0.19rem;
  color: #888;
  p:nth-of-type(1) {
    width: 100%;
    text-align: center;
    height: 1.09rem;
    line-height: 1.09rem;
    padding-top: 0.3rem;
  }
  p:nth-of-type(2) {
    width: 100%;
    text-align: center;
    height: 0.3rem;
  }
}
.pic > div:nth-of-type(1) {
  width: 100%;
  padding: 30%;
  position: relative;
  top: -5.3rem;
  img {
    width: 3.1rem;
    height: 3.1rem;
    border-radius: 50%;
    position: absolute;
    bottom: -1.5rem;
  }
  p {
    width: 100%;
    text-align: center;
    height: 0.7rem;
    position: absolute;
    left: -0.1rem;
    color: #888;
    font-size: 0.2rem;
  }
}
//
.pic{
    width:100%;
    display:flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
  div {
      height: 4.17rem;
      width:50%;
    img {
      width: 2.95rem;
      height: 2.95rem ;
      margin:auto;
    }
    p{
        font-size: .24rem;
        padding-top: .3rem;
        color:#888;
        padding-left: .5rem;
    }
  }
}
.pic:after{
    content:"";
    flex:auto;
}
.header_one {
  height: 3rem;
  width: 100%;
  padding-top: 1.5rem;
  position: relative;
  top: 4.2rem;
  right: 0.1rem;
  img {
    width: 0.45rem;
    height: 0.66rem;
    margin-left: 48%;
  }
  p {
    width: 100%;
    color: #888;
    font-size: 0.2rem;
    text-align: center;
  }
}
</style>