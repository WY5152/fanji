<template>
  <div id="works">
    <div class="header_one">
      <img :src="work[0]">
      <p>
        {{work[1]}}
        <span>{{work[2]}}</span>
      </p>
    </div>
    <keep-alive>
      <div class="imgs">
        <div v-for="(item,index) in works" :key="index">
          <img :src="'http://static.fnji.com/temp/upload/'+item.mainImgBig">
          <div>
            <p>{{item.name}}</p>
            <p>{{item.price}}</p>
          </div>
        </div>
      </div>
    </keep-alive>
  </div>
</template>

<script>
import Vuex from "vuex";
export default {
  name: "work",
  data() {
    return {
      work: [
        "http://m.fnji.com/view-v2/web/shop/static/exhibit.png",
        "WORKS",
        "作品"
      ]
    };
  },
  computed: {
    ...Vuex.mapState({
      works: state => state.Art.works[0]
    })
  },
  created() {
    this.handleWorkData();
  },
  methods: {
    ...Vuex.mapActions({
      handleWorkData: "Art/handleWorkData"
    })
  }
};
</script>

<style lang="scss" scoped>
.header_one {
  height: 3rem;
  width: 100%;
  padding-top: 1.5rem;
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
.imgs {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  div {
    height: 5.08rem;
    img {
      width: 3rem;
      height: 3rem;
    }
    div {
      padding-top: 0.3rem;
      p {
        color: #888;
        font-size: 0.2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        width:3rem;
        overflow:hidden;

      }
    }
  }
}
</style>