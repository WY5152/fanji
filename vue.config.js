module.exports = {
    devServer:{
        proxy:{
            "/api":{
                target:"http://m.fnji.com",
                changeOrigin:true,
                pathRewrite:{
                    "^/api":""
                }
            }
        }
    }
}
