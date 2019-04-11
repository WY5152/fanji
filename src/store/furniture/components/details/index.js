import {getData} from "@/api/furniture/components/details";
export default {
    state: {
        banner:[],
        color:[]
    },
    actions: {
        async handleGetData({commit}){
            let data = await getData();
            //console.log(data.data.spu.sku)
            //console.log(data.data.spu.categorySpecValue)
            commit("handleGetData",data.data.spu.sku)
            commit("handleColorData",data.data.spu.categorySpecValue.color)
        }
    },
    mutations: {
        handleGetData(state,params){
            state.banner.push(params)
        },
        handleColorData(state,params){
            state.color.push(params)
        },

    },
    namespaced: true,
}