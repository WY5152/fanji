<template>
  <div class="column">
    <div class="nav">
      <ul>
        <a href="#homes">
          <li>{{tilt[0]}}</li>
        </a>
        <a href="#drop">
          <li>{{tilt[1]}}</li>
        </a>
        <a href="#artist">
          <li>{{tilt[2]}}</li>
        </a>
      </ul>
    </div>
    <!-- bannerstart -->
    <Swiper>
      <div class="swiper-wrapper">
        <div class="banner swiper-slide" v-for="(item,index) in banner" :key="index">
          <img :src="'http://static.fnji.com/temp/upload/'+item.imgs">
        </div>
      </div>
      <div class="swiper-pagination swiper"></div>
    </Swiper>
    <!-- bannerend -->
    <Home/>
    <Drop/>
    <Artist/>
  </div>
</template>

<script>
import Home from "./components/home";
import Artist from "./components/artist";
import Drop from "./components/drop";
import Vuex from "vuex";
export default {
  name: "column",
  components: {
    Home,
    Artist,
    Drop
  },
  data() {
    return {
      tilt: ["在家", "串门", "橱窗"]
    };
  },
  computed: {
    ...Vuex.mapState({
      banner: state => state.Col.banner[0]
    })
  },
  created() {
    this.handleBannerData();
  },
  methods: {
    ...Vuex.mapActions({
      handleBannerData: "Col/handleBannerData"
    })
  }
};
</script>

<style lang="scss" scoped>
.column{
 padding-bottom: 1rem;
}
.nav {
  padding-bottom: 0.03rem;
  ul {
    width: 100%;
    padding: 0 1.4rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 0.85rem;
    li {
      width: 100%;
      height: 100%;
      text-align: center;
      line-height: 0.85rem;
      color: #000;
    }
  }
}
.banner {
  img {
    width: 100%;
    height: 2.498rem;
  }
}
</style>