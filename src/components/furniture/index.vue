<template>
  <div class="furniture">
      <div class="nav">
        <BScroll>
          <div class="content">
            <ul>
              <a href="##">
                <li v-for="(item,index) in nav" :key="index"
                @click="handleClick(index)" 
                :class="ClickIndex === index ? 'active':''"
                >{{item.description}}</li>
              </a>
            </ul>
          </div>
        </BScroll>
      </div>
    <Chair/>
  </div>
</template>
<script>
import Vuex from "vuex";
import Chair from "./chair";
export default {
  name: "furniture",
  components:{
    Chair,

  },
  data(){
      return{
         ClickIndex:0,
      }
  },
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
    }),
    handleClick(index){
      this.ClickIndex = index;
      
    }
  }
};
</script>
<style lang="scss" scoped>
.content {
  width: max-content;
  ul{
    width: 100%;
    border-bottom: 1px solid #ccc;
    a{
      display:block;
      display: flex;
      height: 100%;
      justify-content: space-around;
      align-items: center;
       li {
      font-size: 0.26rem;
      color: #000;
      padding: 0 0.34rem;
      flex-shrink: 0;
      line-height: 0.84rem;
    }
    }
   
  }
}
.active{
  border-bottom:1px solid #000;
  font-size:.24rem;
  font-weight:bold;
}
</style>