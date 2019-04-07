import axios from "axios";
const http = axios.create({
    timerout:10000,
    //baseUrl:"公司域名"
    withCredentials:true
})

http.interceptors.request.use((config)=>{
    if(config.method == "post"){
        config.data = config.data;
    }else if(config.method == "get"){
        config.data?config.params = {...config.data} :config.params = {...config.params}
        
    }
    return config;
},(e)=>{
    Promise.reject(e)
})

http.interceptors.response.use((res)=>{
    if(res.statusText == "OK"){
        return res.data;
    }
})

export default (method,url,data={})=>{
    if(method == "get"){
        console.log(url)
        return http.get(url,{params:data});
    }else if(method == "post"){
        return http.post(url,data);
    }else{
        return;
    }
}