<template>
  <div class="headers">
    <mt-header title="登录">
      <router-link to="/" slot="left">
        <mt-button icon="back" @click="handle"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right" @click="falg=true"></mt-button>
    </mt-header>
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

    <div class="imgs"></div>
    <div class="login_name">
      <input type="text" placeholder="手机/邮箱">
      <i class="iconfont">&#xe622;</i>
      <br>
      <input type="text" placeholder="密码">
      <i class="iconfont">&#xe672;</i>
    </div>
    <div class="hotMe">
      <label>
        <input type="checkbox">
        <span>记住密码</span>
      </label>
      <div class="mess">忘记密码或账号</div>
    </div>
    <div class="btn">
      <button>登录</button>
    </div>
    <div class="click">
      还没有梵几账号
      点击注册
    </div>
    <div class="foot">
      <button>快捷登录</button>
      <button>微信登录</button>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Header } from "mint-ui";
Vue.component(Header.name, Header);
export default {
  name: "login",
  data() {
    return {
      falg: false
    };
  },
  methods: {
    handle() {
      this.$router.back();
    },
    handleClick(e) {
      if (!this.$refs.mask.contains(e.target)) {
        this.falg = false;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
$outline: none;
.headers {
  width: 100%;
  height: 100%;
}
.mint-header {
  height: 1.25rem;
  background: #fff;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 3;
  width: 100%;
  border-bottom: 1px solid #ccc;
}
.mint-header-button .is-left {
  height: 1.25rem;
}
.mint-header,
.iconfont {
  color: #000;
  font-size: 0.3rem;
}
.imgs {
  background: #fff;
  padding-top: 2rem;
  padding-bottom: 1rem;
  img {
    width: 0.65rem;
    height: 1.19rem;
    margin: auto;
  }
}
.login_name {
  width: 100%;
  text-align: center;
  input {
    width: 76%;
    height: 1rem;
    margin-bottom: 0.2rem;
    border: 0;
    border-bottom: 1px solid #ccc;
    font-size: 0.3rem;
    outline: $outline;
  }
  .iconfont {
    font-size: 0.5rem;
    color: #c9c9c9;
    font-weight: 200;
  }
}
.hotMe {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 1rem;
  label {
    padding-right: 1.5rem;
    input {
      width: 0.26rem;
      height: 0.25rem;
      border: 0;
      background: #eee;
    }
    span {
      color: #555;
      font-size: 0.26rem;
    }
  }
  a {
    color: #d0aa8c;
    font-size: 0.23rem;
    text-decoration: underline;
    line-height: 0.23rem;
  }
}
.btn {
  width: 100%;
  text-align: center;
  button {
    color: #fff;
    font-size: 0.3rem;
    width: 90%;
    background: #000;
    height: 0.9rem;
  }
}
.click {
  width: 100%;
  text-align: center;
  color: #666;
  font-size: 0.2rem;
  height: 1.3rem;
  line-height: 1.3rem;
  a {
    color: #d0aa8c;
    font-size: 0.2rem;
    text-decoration: underline;
  }
}
.foot {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  button {
    width: 3rem;
    height: 0.86rem;
    background: #979797;
    color: #fff;
    font-size: 0.3rem;
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
</style>
