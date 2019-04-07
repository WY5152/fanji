<template>
  <div class="swiperWrapper" ref="swiperWrapper">
    <slot></slot>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
  mounted() {
    new Swiper(this.$refs.swiperWrapper, {
      autoplay: {
        disableOnInteraction: false
      },
      loop: true,
      pagination: {
        el: ".swiper-pagination"
      }
    });
  }
};
</script>
<style lang="scss">
.swiperWrapper {
  position: relative;
}
</style>