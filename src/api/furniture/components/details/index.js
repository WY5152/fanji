import http from "@/utils/http.js";

export const getData=(params)=>http("get","/api/s/shop/product/getDetail?id=4889&preview=0",params);
