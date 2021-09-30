<template>
<section class="container-fluid" id="sec-3">
  <div class="thumb-example">
     <h3>Section 3</h3>
    <!-- swiper1 -->
    <swiper class="swiper gallery-top" :options="swiperOptionTop" ref="swiperTop">
      <swiper-slide v-for="(image) in images" v-bind:key="image.id" v-bind:style="{'background-image': 'url(' + image.url + ')'}" class="slide-1"></swiper-slide>

      <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
      <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
    </swiper>
    <!-- swiper2 Thumbs -->
    <swiper class="swiper gallery-thumbs" :options="swiperOptionThumbs" ref="swiperThumbs">
      <swiper-slide v-for="(image) in images" v-bind:key="image.id" v-bind:style="{'background-image': 'url(' + image.thumbnailUrl + ')'}" class="slide-1"></swiper-slide>
    </swiper>
  </div>
</section>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import "swiper/css/swiper.css"
  import axios from 'axios'
  

  export default {
    name: 'swiper-example-thumbs-gallery',
    title: 'Thumbs gallery with Two-way control',
    components: {
      swiper,
      swiperSlide
    },
    data() {
      return {
        swiperOptionTop: {
          loop: true,
          spaceBetween: 10,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
        swiperOptionThumbs: {
          loop: true,
          spaceBetween: 10,
          centeredSlides: true,
          slidesPerView: 'auto',
          touchRatio: 0.2,
          slideToClickedSlide: true
        },
        images: []
      }
    },
     mounted() {
      this.$nextTick(() => {
        const swiperTop = this.$refs.swiperTop.swiper
        const swiperThumbs = this.$refs.swiperThumbs.swiper
        swiperTop.controller.control = swiperThumbs
        swiperThumbs.controller.control = swiperTop
      }),
      axios
          .get('https://jsonplaceholder.typicode.com/photos?albumId=1')
          .then(response => (this.images = response.data))
    } 
  }
</script>


<style lang="scss" scoped>
  .title {
    text-align: center;
  }
  .thumb-example {
    height: 480px;
    width: 600px;
    margin: auto;
    margin-top: 40px;
    margin-bottom: 100px;
    text-align: center;
  }
  .swiper {
    .swiper-slide {
      background-size: cover;
      background-position: center;
      border-radius: 3%;
    }
    &.gallery-top {
      height: 80%;
      width: 100%;
    }
    &.gallery-thumbs {
      height: 20%;
      box-sizing: border-box;
      margin-top: 10px;
      border-radius: 2%;
    }
    &.gallery-thumbs .swiper-slide {
      width: 25%;
      height: 100%;
      opacity: 0.4;
    }
    &.gallery-thumbs .swiper-slide-active {
      opacity: 1;
    }
  }
  @media(max-width: 620px) {
  .thumb-example {
    height: 300px;
    width: 400px;
    margin: auto;
    margin-top: 40px;
    margin-bottom: 100px;
    text-align: center;
  }
  }
  @media(max-width: 420px) {
  .thumb-example {
    height: 200px;
    width: 300px;
    margin: auto;
    margin-top: 40px;
    margin-bottom: 100px;
    text-align: center;
  }
  }
</style>