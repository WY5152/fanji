import http from "../../utils/http.js";

export const getData=(id=2)=>http("get","/api/s/product-list/getByCategory",{category:id})