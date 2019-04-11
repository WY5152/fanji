<template>
  <div>
    <div class="header">
      <mt-header>
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
        <mt-button icon="more" slot="right" @click="falg=true"></mt-button>
      </mt-header>
      <div class="img">
        <img src="http://m.fnji.com/view-v2/web/static/img/page-header/fnji_white.png">
      </div>
      <div class="mask" @click="handleClick($event)" v-show="falg">
        <div id="moke" ref="mask">
          <span class="span"></span>
          <ul>
            <li>
              <i class="iconfont">&#xe600;</i>
              梵几主页
            </li>
            <li>
              <i class="iconfont">&#xe603;</i>
              购物中心
            </li>
            <li>
              <i class="iconfont">&#xe60a;</i>
              我的订单
            </li>

            <li>
              <i class="iconfont">&#xe622;</i>
              个人中心
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- nr -->
    <div class="boxs">
      <div class="box">
        <div class="container">
          <div class="one">
            <!-- banner -->
            <!-- <swiper> -->
            <div class="swiper-wrapper swiper">
              <div class="swiper-slide" v-for="(item,index) in banner" :key="index">
                <img :src="'http://static.fnji.com/temp/upload/'+ item.柳黄美国白蜡木.mainPic">
              </div>
            </div>
            <div class="swiper-pagination"></div>
            <!-- </swiper> -->
            <!-- 选项 -->
            <div class="Choice">
              <div class="name">
                <div class="mess_name">
                  <p>螳螂椅</p>
                  <p>F3-Y-13-013-02</p>
                </div>
                <div class="mess_price">
                  <span>￥66666</span>
                </div>
              </div>
              <hr>
              <div class="mess_Color">
                <div>颜色Colour</div>
                <ul>
                  <li v-for="(item,index) in color" :key="index">
                    <span class="radiu"></span>
                    {{item}}
                  </li>
                </ul>
              </div>
              <div class="material">
                <div>木色Material</div>
                <ul>
                  <li>美国白蜡木</li>
                  <li>美国白蜡木（骏马黑</li>
                  <li>美国黑胡桃木</li>
                </ul>
              </div>
              <div class="quantity">
                <div class="quant">选购数量Quantity</div>
                <div class="cum">
                  <button @click="handleReduce()">-</button>
                  <div class="val">{{val}}</div>
                  <button @click="handleAdd()">+</button>
                  <span>件/piece</span>
                </div>
              </div>
              <div class="delivery">
                <div>发货周期Delivery</div>
                <div>家具制作周期为6-8周</div>
              </div>
              <div class="text">
                <span>点击查询</span>
                <a href="##">配送详情</a>
                <span>或</span>
                <a href="##">会员制度</a>
              </div>
            </div>
          </div>
          <div class="design">
            <div class="img_">
              <img
                src="http://m.fnji.com/view-v2/webm/site/dist/b54c29f67bcd3a352faf99592b0e7227.png"
              >
            </div>
            <p>梵几设计</p>
            <p>DESIGNED BY FNJI</p>
            <p>“自然界有很多曲线，仿生角度的灵感有时得来非常偶然。”</p>
          </div>
        </div>
        <div class="footer">
          <i class="iconfont">1</i>
          <i class="iconfont">&#xe6ee;</i>
          <div class="go" @click="show=true">加入购物车</div>
          <router-link tag="div" class="pay" to="/login">立即购买</router-link>
        </div>
        <div class="msakTwo" v-show="show">
          <div class="goShopping" ref="msakTwo">
            <div class="fixed" @click="handleFixed()">X</div>
            <p>
              商品已经添加购物车,现车内共有
              <span>99</span>件商品合计
              <span>$3614</span>
            </p>
            <div class="button">
              <button>继续购买</button>
              <button>去结算</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vuex from "vuex";
import Vue from "vue";
import { Header } from "mint-ui";
Vue.component(Header.name, Header);
export default {
  name: "detatils",
  data() {
    return {
      falg: false,
      show: false,
      val: "1"
    };
  },
  created() {
    this.handleGetData();
  },
  computed: {
    ...Vuex.mapState({
      banner: state => state.Details.banner,
      color: state => state.Details.color[0]
    })
  },
  methods: {
    ...Vuex.mapActions({
      handleGetData: "Details/handleGetData"
    }),
    handleClick(e) {
      if (!this.$refs.mask.contains(e.target)) {
        this.falg = false;
      }
    },
    handleFixed() {
      this.show = false;
    },
    handleReduce() {
      if (this.val <= 1) {
        this.val = 1;
      } else {
        this.val--;
      }
    },
    handleAdd() {
      this.val++;
    }
  }
};
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  height: 1.25rem;
  .mint-header {
    height: 1.25rem;
    background: #fff;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 3;
    width: 100%;
  }
}
.mint-header-button .is-left {
  height: 1.25rem;
}
.mint-header {
  color: #000;
}
.img {
  position: absolute;
  background: #000;
  left: 3rem;
  top: -0.2rem;
  width: 1rem;
  height: 1.4rem;
  z-index: 4;
  img {
    width: 0.6rem;
    height: 1rem;
    margin: 0.3rem auto;
  }
}
.mask {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 101;
  #moke {
    position: absolute;
    top: 1.3rem;
    left: 4.8rem;
    z-index: 18;
    background: #fff;
    .span {
      border: 10px solid;
      border-color: transparent transparent #fff transparent;
      position: absolute;
      left: 2rem;
      top: -0.2rem;
    }
    ul {
      width: 3rem;
      background: #fff;
      text-align: center;
      li {
        color: #000;
        font-size: 0.3rem;
        width: 2.47rem;
        height: 1rem;
        border-bottom: 1px solid #ccc;
        line-height: 1rem;
      }
      li:nth-of-type(4) {
        border: 0;
      }
    }
  }
}
//footer
.footer {
  width: 100%;
  height: 0.9rem;
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  .go {
    color: #fff;
    font-size: 0.3rem;
    background: #979797;
    width: 2.8rem;
    height: 100%;
    text-align: center;
    line-height: 0.9rem;
  }
  .pay {
    color: #fff;
    font-size: 0.3rem;
    background: #000;
    width: 2.8rem;
    height: 100%;
    text-align: center;
    line-height: 0.9rem;
  }
  i {
    flex: 1;
    background: #c9c9c9;
    height: 0.9rem;
    font-size: 0.4rem;
    text-align: center;
    line-height: 0.9rem;
  }
}
//弹出框
.msakTwo {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 101;
  .goShopping {
    position: absolute;
    z-index: 189;
    background: #fff;
    width: 5rem;
    height: 2.97rem;
    left: 1.3rem;
    top: 4rem;
    .fixed {
      position: absolute;
      left: 4.5rem;
      top: 0.1rem;
    }
    p {
      margin-top: 0.6rem;
      width: 4.64rem;
      height: 0.85rem;
      text-align: center;
      font-size: 0.2rem;
    }
    .button {
      padding-top: 0.3rem;
      display: flex;
      width: 100%;
      justify-content: space-around;
      align-items: center;
      button {
        width: 1.9rem;
        height: 0.7rem;
        background: #393939;
        color: #fff;
        font-size: 0.3rem;
      }
    }
  }
}
//nr
.boxs {
  padding-bottom: 1rem;
  .box {
    .container {
      height: 100%;
      width: 100%;
      .one {
        width: 100%;
      }
    }
  }
}
//banner
.swiper {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    width: 7.5rem;
    height: 5rem;
  }
}
//选择
.Choice {
  width: 6.2rem;
  height: 8.71rem;
  border-bottom: 2px solid #ccc;
  margin: auto;
  .name {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.3rem 0;
    .mess_name {
      color: #000;
      font-size: 0.3rem;
      p:nth-of-type(2) {
        font-size: 0.2rem;
      }
    }
    .mess_price {
      font-size: 0.24rem;
    }
  }
  .mess_Color {
    padding: 0.2rem 0;
    div {
      font-size: 0.22rem;
    }
    ul {
      width: 100%;
      display: flex;
      height: 0.53rem;
      justify-content: space-around;
      align-items: center;
      li {
        .radiu {
          width: 0.3rem;
          height: 0.3rem;
          border-radius: 50%;
          background: #f2f2f2;
          display: inline-block;
          border: 1px solid #ccc;
        }
      }
    }
  }
  .material {
    padding: 0.2rem 0;
    div {
      font-size: 0.22rem;
    }
    ul {
      width: 100%;
      display: flex;
      height: 0.53rem;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;

      li {
        border: 1px solid #ccc;
        padding: 0 0.2rem;
        height: 0.6rem;
        margin: 0.1rem;
        line-height: 0.6rem;
      }
      li:nth-of-type(3) {
        margin-left: 0.33rem;
      }
    }
    ul:after {
      content: "";
      flex: auto;
    }
  }
  .quantity {
    padding-top: 1rem;
    .quant {
      font-size: 0.22rem;
    }
    .cum {
      width: 100%;
      display: flex;
      align-items: center;
      padding: 0.3rem 0 0.3rem 0.34rem;
      button {
        width: 0.4rem;
        height: 0.46rem;
        border: 1px solid #000;
        background: #fff;
      }
      .val {
        width: 0.5rem;
        height: 0.46rem;
        border: 1px solid #000;
        text-align: center;
      }
      span {
        padding-left: 0.3rem;
        font-size: 0.22rem;
      }
    }
  }
  .delivery {
    width: 100%;
    padding: 0.3rem;
    div:nth-of-type(1) {
      font-size: 0.22rem;
      color: #000;
      font-weight: 200;
    }
    div:nth-of-type(2) {
      font-size: 0.2rem;
      padding: 0.3rem 0;
    }
  }
  .text {
    width: 100%;
    display: flex;
    align-items: center;
    span {
      color: #000;
      font-size: 0.22rem;
    }
    a {
      text-decoration: underline;
      color: #d0aa8c;
      font-size: 0.22rem;
    }
  }
}
.design {
  width: 7.5rem;
  height: 3.65rem;
  margin: 2rem 0;
  padding: 0 0.3rem;
  .img_ {
    img {
      width: 0.93rem;
      height: 1.12rem;
      margin: auto;
    }
  }
  p:nth-of-type(1) {
    font-size: 0.24rem;
    text-align: center;
  }
  p:nth-of-type(3) {
    font-size: 0.22rem;
  }
}
</style>



                
                 <div class="imgs">
                    <img :src="'http://static.fnji.com/temp/upload/'+ item.柳黄美国白蜡木.mainPic">
                  </div>
                  <div class="imgs">
                    <img src="http://static.fnji.com/temp/upload/s2048_1491700444_2095.jpg">
                  </div>
                  <div class="imgs">
                    <img :src="'http://static.fnji.com/temp/upload/'+ item.柳黄美国黑胡桃木.mainPic">
                  </div>
                  <div class="imgs">
                    <img :src="'http://static.fnji.com/temp/upload/'+ item.浅咖美国白蜡木.mainPic">
                  </div>
                  <div class="imgs">
                    <img src="http://static.fnji.com/temp/upload/s2048_1491700908_5909.jpg">
                  </div>
                  <div>
                    <img :src="'http://static.fnji.com/temp/upload/'+ item.柳黄美国白蜡木.mainPic">
                  </div>
                  <div>
                    <img src="http://static.fnji.com/temp/upload/s2048_1491997120_8741.jpg">
                  </div>
                  <div>
                    <img :src="'http://static.fnji.com/temp/upload/'+ item.浅咖美国黑胡桃木.mainPic">
                  </div>
                  <div>
                    <img :src="'http://static.fnji.com/temp/upload/'+ item.浅灰美国白蜡木.mainPic">
                  </div>
                  <div>
                    <img :src="'http://static.fnji.com/temp/upload/'+ item.浅灰美国黑胡桃木.mainPic">
                  </div>
                  <div>
                    <img :src="'http://static.fnji.com/temp/upload/'+ item.灰紫美国白蜡木.mainPic">
                  </div>
                  <div>
                    <img src="http://static.fnji.com/temp/upload/s2048_1491996956_6009.jpg">
                  </div>
             