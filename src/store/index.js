import Vue from 'vue'
import Vuex from 'vuex'
import Furn from "./furniture";
import FurnS from "./furnishing";
import Art from "./art";
import Col from "./column";
import Details from "./furniture/components/details";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  actions: {},
  mutations: {},
  modules: {
    Furn,
    FurnS,
    Art,
    Col,
    Details,
  }
})
