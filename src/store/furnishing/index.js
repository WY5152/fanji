import {getData} from "@/api/furnishing";
export default {
  state:{
      fnav:[],
      centent:[]
  },
  actions:{
   async getActionsData({commit}){
      let data = await getData();
      commit("getMutationsData",data.data[1].cats)
    },
    async handleCoffData({commit}){
      let data = await getData();
      console.log(data.data[1].cats)
      commit("handleMUtationsCoffData",data.data[1].cats)
  }
  },
  mutations:{
    getMutationsData(state,params){
        state.fnav.push(params);
    },
    handleMUtationsCoffData(state,params){
        state.centent.push(params);
    }
  },
  namespaced:true,
}