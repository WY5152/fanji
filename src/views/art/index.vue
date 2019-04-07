<template>
    <div class="art">
       <Header/>
        <Art/>
    </div>
</template>

<script>
import Art from "../../components/art";
export default {
    name:"art",
    components:{
        Art,
        
    }
}
</script>

<style lang="scss" scoped>
    .art{
        padding-bottom:2rem;
    }
</style>