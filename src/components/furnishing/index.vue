<template>
  <div class="furnishing">
    <div class="nav">
      <BScroll>
        <div class="content">
          <ul>
            <a href="##">
              <li
                v-for="(item,index) in navs"
                :key="index"
                @click="handleClick(index)"
                :class="ClickIndex === index ? 'active':''"
              > {{item.descriptionM}} </li>
            </a>
          </ul>
        </div>
      </BScroll>
    </div>
    <Coff/>
  </div>
</template>
<script>
import Vuex from "vuex";
import Coff from "./coffee";

export default {
  name: "furnishing",
  components: {
    Coff
  },
  data() {
    return {
      ClickIndex: 0
    };
  },
  created() {
    this.getActionsData();
  },
  computed: {
    ...Vuex.mapState({
      navs: state => state.FurnS.fnav[0]
    })
  },
  methods: {
    ...Vuex.mapActions({
      getActionsData: "FurnS/getActionsData"
    }),
    handleClick(index) {
      this.ClickIndex = index;
    }
  }
};
</script>
<style lang="scss" scoped>
.content {
  width: max-content;
  ul {
    width: 100%;
    border-bottom: 1px solid #ccc;
    display: block;
    a {
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
.active {
  border-bottom: 1px solid #000;
  font-size: 0.24rem;
  font-weight: bold;
}
</style>  







