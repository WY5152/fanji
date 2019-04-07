<template>
  <div class="furnishing">
    <div v-for="(item,index) in cent" :key="index">
      <div class="header">
        <div>
          <p>{{item.descriptionM}}/</p>
        </div>
      </div>
      <ul class="box">
        <li class="centent" v-for="(items,index) in item.goods" :key="index">
          <div class="imgs">
            <img :src="'http://static.fnji.com/temp/upload/' + items.mainImage">
          </div>
          <div class="mess">
            <div class="name">{{items.name}}</div>
            <div class="price">{{items.price | toSign}}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Vuex from "vuex";
export default {
  name: "furnishing",
  created() {
    this.handleCoffData();
  },
  computed: {
    ...Vuex.mapState({
      cent: state => state.FurnS.centent[0]
    })
  },
  methods: {
    ...Vuex.mapActions({
      handleCoffData: "FurnS/handleCoffData"
    })
  },
};
</script>
<style lang="scss" scoped>
$display: block;
.header {
  height: 3.12rem;
  width: 100%;
  div {
    padding-top: 1.5rem;
    width: 100%;
    height: 1.77rem;
    img {
      display: block;
      width: 1.12rem;
      height: 0.93rem;
      margin: auto;
    }
    p {
      text-align: center;
    }
  }
}
.box {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}
.box:after{
   content:"";
    flex:auto;
}
.centent {
  width: 3.2rem;
  .imgs {
    width: 3.2rem;
    height: 3.2rem;
    background: #e8ece7;
    img {
      width: 3.2rem;
      height: 3.2rem;
    }
  }
  .mess {
    width: 3.2rem;
    height: 0.89rem;
    text-align: center;
    padding-top: 0.2rem;
    .name {
      font-size: 0.2rem;
    }
    .price {
      font-size: 0.2rem;
    }
  }
}
</style>  


