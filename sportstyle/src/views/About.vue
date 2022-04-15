<template>
    <Header></Header>
     <div class="container mx-auto mt-40">
        <Aus></Aus>
        <div class="pt-4 md:px-8">
        <Slider></Slider>
        </div>
            <div class="flex-col md:px-8">

            <div class="relative grid p-4 mt-4 bg-white md:p-8">
                <div class="">
                    <div class="text-center"> <span class="font-bold xl:text-s-18 lg:text-s-16 text-s-14">İletişim</span></div>
                </div>
                <Contact></Contact>
            </div>

        </div>
        
     </div>
    <Footer></Footer>
</template>



<script>
// @ is an alias to /src
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Slider from '../components/Slider.vue'
import Aus from '../components/Aus.vue'
import Contact from '../components/Contact.vue'

export default {
  name: 'About',
  components: {
    Header,
    Footer,
    Slider,
    Aus,
    Contact,
  }
}
 
</script>