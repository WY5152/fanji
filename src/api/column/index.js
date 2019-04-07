import http from "@/utils/http.js";

export const getData=(id=4)=>http("get","/api/s/sitebanner/getSlideByType",{type:id})

export const getAll =()=>http("get","/api/m/s/MagazineHome/getIndex")