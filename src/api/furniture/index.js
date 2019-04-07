import http from "@/utils/http.js";

export const getFurniture = (id = 1) => http("get", "/api/s/product-list/getByCategory", { category:id })
