<template>
  <div class="art">
    <div class="nav">
      <ul>
        <a href="#arts">
          <li>{{tilt[0]}}</li>
        </a>
        <a href="#works">
          <li>{{tilt[1]}}</li>
        </a>
        <a href="#brands">
          <li>{{tilt[2]}}</li>
        </a>
      </ul>
    </div>
    <Swiper>
      <div class="swiper-wrapper">
        <div class="banner swiper-slide" v-for="(item,index) in banner" :key="index">
          <img :src="'http://static.fnji.com/temp/upload/'+item.imgs">
        </div>
        <div class="swiper-pagination swiper"></div>
      </div>
    </Swiper>
    <Art/>
    <Work/>
    <Brand/>
  </div>
</template>
<script>
import Work from "../../components/art/component/works";
import Brand from "../../components/art/component/brand";
import Art from "../../components/art/component/art";
import Vuex from "vuex";
export default {
  name: "art",
  components: {
    Art,
    Work,
    Brand
  },
  data() {
    return {
      tilt: ["艺术家", "作品", "展览"],
    };
  },
  computed: {
    ...Vuex.mapState({
      banner: state => state.Art.banner[0]
    })
  },
  created() {
    this.handleActionsData();
  },
  methods: {
    ...Vuex.mapActions({
      handleActionsData: "Art/handleActionsData"
    }),
    handleClick(index) {
      this.activeIndex = index;
      console.log(index)
    }
  }
};
</script>
<style lang="scss" scoped>
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