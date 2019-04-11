<template>
    <div>
      <div class="header">
           <input type="text" placeholder="搜索">
           <i class="iconfont">&#xe606;</i>
      </div>
      <div class="btn">
          <button>关闭</button>
          <button class="butt_2">搜索</button>
      </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .header{
        width:100%;
        height: 1rem;
        position:fixed;
        top:0;
        right:0;
        display:flex;
        justify-content: center;
        align-items: center;
        i{
            position:absolute;
            top: .27rem;
            left: .6rem;
            font-size: .4rem;
        }
        input{
            width:90%;
            height: 70%;
            padding-left: .8rem;
            font-size: .3rem;
            outline:none;
        }
    }
    .btn{
        width:100%;
        padding-top: 1rem;
        display:flex;
        justify-content: space-around;
        align-items: center;
        button{
            width:3.2rem;
            height: .7rem;
            border:1px solid #ccc;
            color:#000;
            font-size: .3rem;
            background:#fff;
            outline:none;
        }
        .butt_2{
            background:#000;
            color:#fff;
        }
    }
</style>