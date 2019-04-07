import Vue from 'vue'
import Router from 'vue-router'
import art from "./art";
import furniture from "./furniture";
import column from "./column";
import newthings from "./newthings"
import furnishing from "./furnishing"
import  searchShop from "./searchShop";
import Home from "../views/home";
Vue.use(Router)

export default new Router({
  routes:[
    {
      path:"/",
      redirect:"/home"
    },
    {
      name:"home",
      path:"/home",
      component:Home,
    },
    searchShop,
    furniture, 
    furnishing,
    art, 
    column,
    newthings,
   
  ]
})
