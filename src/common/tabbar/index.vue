<template>
  <div id="tabbar">
    <ul>
      <router-link tag="li" v-for="(item,index) in tabbar" :key="index" :to="item.path">
        <span>{{item.title}}</span>
        <span>{{item.span}}</span>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: "tabBar",
  data() {
    return {
      tabbar: [
        {
          title: "家具",
          path: "/furniture",
          span: "|"
        },
        {
          title: "家居",
          path: "/furnishing",
          span: "|"
        },
        {
          title: "艺术",
          path: "/art",
          span: "|"
        },
        {
          title: "栏目",
          path: "/column",
          span: "|"
        },
        {
          title: "新事",
          path: "/newthings"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
$color: #000;
#tabbar {
  width: 100%;
  height: 1rem;
  border: 1px solid #ccc;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index:2;
  ul {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 1rem;
    background: #fff;
    li {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      color: #666;
      span {
        font-size: 0.3rem;
        display: block;
      }
    }
  }
}
#tabbar > ul > .router-link-active {
  color: $color;
  font-weight: 900;
  border-top: 2px solid #000;
}
</style>