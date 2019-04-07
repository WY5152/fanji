import {getData,getAll} from "@/api/column";
export default {
    state:{
        banner:[],
        home:[],
        drop:[],
        artist:[],

    },
    actions:{
      async  handleBannerData({commit}){
            let data = await getData();
            commit("handleBannerData",data.data)
       },
       async handleHomeData({commit}){
           let data = await getAll();
           commit("handleHomeData",data.data.fnjiHome)
       },
       async handleDropData({commit}){
            let data = await getAll()
            commit("handleDropData",data.data.fnjiDrop)
       },
       async handleArtistData({commit}){
           let data = await getAll();
           //console.log(data.data.artist);
           commit("handleArtistData",data.data.artist);
       }
    },
    mutations:{
        handleBannerData(state,params){
            state.banner.push(params);
        },
        handleHomeData(state,params){
            state.home.push(params);
        },
        handleDropData(state,params){
            state.drop.push(params)
        },
        handleArtistData(state,params){
            state.artist.push(params);
        }
    },
    namespaced:true,
}