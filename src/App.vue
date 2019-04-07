<template>
  <div id="app">
    <TabBarCom v-if="this.$route.meta.tabBarFlag"/>
    <keep-alive>
       <router-view/>
    </keep-alive>
   

  </div>
</template>
<script>
import TabBarCom from "./common/tabbar";
export default {
  name:"app",
  components:{
    TabBarCom,
   
  }
}
</script>
<style >

</style>
