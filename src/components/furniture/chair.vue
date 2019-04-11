<template>
  <div>
    <div v-for="(item,index) in nav" :key="index">
      <div class="headers">
        <div>
          <p>{{item.class}}/{{item.description}}</p>
        </div>
      </div>
      <ul class="box">
        <router-link tag="a" to="/details">
          <li class="centent" v-for="(items,index) in item.goods" :key="index">
            <div class="imgs">
              <img :src="'http://static.fnji.com/temp/upload/' + items.mainImage">
            </div>
            <div class="mess">
              <div class="name">{{items.name}}</div>
              <div class="price">{{items.price | toSign}}</div>
            </div>
          </li>
        </router-link>
      </ul>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
 <script>
import Vuex from "vuex";
export default {
  created() {
    this.handleGetData();
  },
  computed: {
    ...Vuex.mapState({
      nav: state => state.Furn.nav
    })
  },
  methods: {
    ...Vuex.mapActions({
      handleGetData: "Furn/handleGetData"
    })
  }
};
</script>

<style lang="scss" scoped>
$display: block;
.headers {
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
.box,
a {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}
.box:after {
  content: "";
  flex: auto;
}
.centent {
  width: 3.2rem;
  .imgs {
    width: 3.2rem;
    height: 3.2rem;
    background: #e8ece7;
    padding: 0.6rem;
    img {
      width: 2rem;
      height: 2rem;
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