import { getArt,getAll } from "@/api/art";

export default {
    state: {
        banner:[],
        all:[],
        works:[],
        brand:[]
    },
    actions: {
      async  handleActionsData({commit}){
             let data = await getArt();
             //console.log(data.data);
             commit("handleMutationsData",data.data)
        },
       async handleActionsAll({commit}){
           let data = await getAll();
           //console.log(data.data.brandAll);
           commit("handleMutationsAll",data.data.brandAll)
       },
       async handleWorkData({commit}){
           let data = await getAll();
           //console.log(data.data.works);
           commit("handleWorkData",data.data.works)
       },
       async handleBrandData({commit}){
           let data = await getAll();
           //console.log(data.data.exhibitAll);
           commit("handleBrandData",data.data.exhibitAll)
       },
       handleClick({commit},index){
            commit("handleClick",index)
       }
    },
    mutations: {
        handleMutationsData(state,params){
            state.banner.push(params);
        },
        handleMutationsAll(state,params){
            state.all.push(params);
        },
        handleWorkData(state,params){
            state.works.push(params);
        },
        handleBrandData(state,params){
            state.brand.push(params);
        },
       handleClick(state,params){
           console.log(params)
       }
        
    },
    namespaced: true,
}
