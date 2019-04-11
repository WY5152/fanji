
import {getFurniture} from "@/api/furniture"
export default {
    state:{
        nav:[],
    },
    actions:{
       async handleGetData({commit}){
           let data = await getFurniture();
           let nav = data.data[1].cats;
           commit("handleMutationsData",nav)
        },

    },
    mutations:{
        handleMutationsData(state,params){
            state.nav = params;
        }
    },
    namespaced:true,
}