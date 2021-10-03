<template>
  <div id="app">
    <Banner></Banner>
    <NavBar></NavBar>
    <Section-1></Section-1>
    <Section-2></Section-2>
    <Swiper></Swiper>
    <Footer></Footer>
  </div>
</template>

<script>
import Swiper from './components/Swiper.vue'
import Banner from './components/Banner.vue'
import NavBar from './components/NavBar.vue'
import Section1 from './components/Section1.vue'
import Section2 from './components/Section2.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
   Section1,
   Section2,
   Banner,
   NavBar,
   Swiper,
   Footer
  }
}
</script>