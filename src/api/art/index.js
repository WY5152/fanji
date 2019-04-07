import http from "@/utils/http.js";

export const getArt=(id=3)=>http("get","/api/s/sitebanner/getSlideByType",{type:id});

export const getAll=()=>http("get","/api/s/gallery/getHomeData")

