<template>
  <div class="headers">
    <div class="header">
      <div class="icon_one">
        <a href ="">
          <i class="iconfont" v-html="header[0]"></i>
        </a>
        <a href="#/searchShop">
          <i class="iconfont" v-html="header[1]"></i>
        </a>
      </div>
      <div class="img">
        <img :src="header[2]">
      </div>
      <div class="icon_two">
        <a href="#/login">
          <i class="iconfont" v-html="header[3]"></i>
        </a>
        <a href="#/login">
          <i class="iconfont" v-html="header[4]"></i>
        </a>
        <a href="#/login">
          <i class="iconfont" v-html="header[5]"></i>
        </a>
      </div>
     
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      header: [
        "&#xe609;",
        "&#xe606;",
        "http://m.fnji.com/view-v2/web/static/img/page-header/fnji_white.png",
        "&#xe603;",
        "&#xe60a;",
        "&#xe622;"
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  display: flex;
  align-items: center;
  height: 1.25rem;
  .icon_one {
    width: 1.52rem;
    margin-right: 1.4rem;
  }
  .icon_two {
    width: 2.15rem;
    margin-left: 1.5rem;
  }
  .img {
    width: 0.9rem;
    height: 1.25rem;
    background: #000;
    img {
      margin: .1rem auto;
      height: 1rem;
    }
  }
  .iconfont {
    font-size: 0.5rem;
    color:#ccc;
  }
  a {
    padding: 0 0.1rem;
  }
}
</style>