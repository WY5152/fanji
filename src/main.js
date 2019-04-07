import Vue from 'vue'
import App from './App.vue'
import router from "./routers";
import store from "./store";
import "./mComponent";

Vue.config.productionTip = false

Vue.filter("toSign",(vul)=>{
  return "￥"+vul;
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
