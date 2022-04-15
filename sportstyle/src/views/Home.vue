<template>
    <Header></Header>
    <Fslider></Fslider>
    <Brands></Brands>
    <Mmb></Mmb>
    <Mtab></Mtab>
    <Mpromo></Mpromo>
    <Mfbanner></Mfbanner>
    <Mslider></Mslider>
    <Mqb></Mqb>
    <Mvideo></Mvideo>
    <Mblog></Mblog>
    <Footer></Footer>
</template>



<script>
// @ is an alias to /src

import Header from '../components/Header.vue'
import Fslider from '../components/Fslider.vue'
import Brands from  '../components/Brands.vue'
import Mmb from '../components/Mmb.vue'
import Mtab from '../components/Mtab.vue'
import Mpromo from '../components/Mpromo.vue'
import Mfbanner from '../components/Mfbanner.vue'
import Mslider from '../components/Mslider.vue'
import Mqb from '../components/Mqb.vue'
import Mvideo from '../components/Mvideo.vue'
import Mblog from '../components/Mblog.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Fslider,
    Brands,
    Mmb,
    Mtab,
    Mpromo,
    Mfbanner,
    Mslider,
    Mqb,
    Mvideo,
    Mblog,
    Footer,
  }
}
 
</script>