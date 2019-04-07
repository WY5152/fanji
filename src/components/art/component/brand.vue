<template>
  <div id="brands">
    <div class="header_one">
      <img :src="brands[0]">
      <p>{{brands[1]}}</p>
    </div>
    <div class="pics">
      <div class="pic">
        <img 
        :src="'http://static.fnji.com/temp/upload/'+item.coverImg" 
        v-for="(item,index) in brand" :key="index"
        @click="handleClick(index)"
        >
      </div>
    </div>
  </div>
</template>

<script>
import Vuex from "vuex";
export default {
  name: "work",
  data() {
    return {
      brands: [
        "http://m.fnji.com/view-v2/web/shop/static/exhibit.png",
        "展览/EXHIBITION"
      ],
    };
  },
  computed: {
    ...Vuex.mapState({
      brand:state => state.Art.brand[0],
    })
  },
  created() {
    this.handleBrandData();
  },
  methods: {
    ...Vuex.mapActions({
      handleBrandData: "Art/handleBrandData",
      handleClick:"Art/handleClick"
    }),
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
    vertical-align: middle;
  }
  p {
    width: 100%;
    color: #888;
    font-size: 0.2rem;
    text-align: center;
  }
}
.pics {
  width: 7rem;
  height: 5.2rem;
  margin: 0 auto;
  overflow: hidden;
  .pic {
    width: 3.5rem;
    height: 3.2rem;
    margin: 0 auto;
    position: relative;
    transform-style: preserve-3d;
    perspective: 1500px;
    img {
      width: 3.3rem;
      height: 3.74rem;
      position: absolute;
      left: calc(50% - 163px);
      top: calc(50% - 105px);
      border-radius: 0;
      transition: 0.8s ease-in-out;
      opacity: 1;
      cursor: pointer;
    }
  }
}
.pic>img:nth-of-type(1){
  transform:translateX(-300px) translateZ(-100px) rotateY(30deg);
}
.pic>img:nth-of-type(2){
  transform:translateX(-200px) translateZ(0px) rotateY(30deg);
}

.pic>img:nth-of-type(3){
  transform:translateX(-100px) translateZ(100px) rotateY(30deg);
}

.pic>img:nth-of-type(4){
  transform:translateZ(300px);
}

.pic>img:nth-of-type(5){
  transform:translateX(100px) translateZ(100px) rotateY(-30deg);
}

.pic>img:nth-of-type(6){
  transform:translateX(200px) translateZ(0px) rotateY(-30deg);
}
.pic>img:nth-of-type(7){
  transform:translateX( 300px) translateZ(-100px) rotateY(-30deg);
}

</style>