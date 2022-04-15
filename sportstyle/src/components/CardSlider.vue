<template>
          <swiper  
                :spaceBetween="10"  
                :slidesPerView="6" 
                :slidesPerGroup="1"
                :slidesPerColumn="1" 
                :observeParents="true" 
                :observer="true"  
                :modules="modules"  
                class="CardSlider">
                <swiper-slide>
                   <img class="w-auto " src="../assets/img/ps-1.jpg" width="250" height="250" alt="">
                </swiper-slide>

                <swiper-slide>
                  <img class="w-auto " src="../assets/img/ps-2.jpg" width="600" height="600" alt="">   
                </swiper-slide>

                   <swiper-slide>
                <img class="w-auto " src="../assets/img/ps-3.jpg" width="600" height="600" alt="">
                </swiper-slide>

                  <swiper-slide>
                  <img class="w-auto " src="../assets/img/ps-1.jpg" width="250" height="250" alt="">
                </swiper-slide>

                <swiper-slide>
                    <img class="w-auto " src="../assets/img/ps-2.jpg" width="600" height="600" alt="">
                </swiper-slide>

                <swiper-slide>
                 <img class="w-auto " src="../assets/img/ps-3.jpg" width="600" height="600" alt="">
                </swiper-slide>

                   <swiper-slide>
                    <img class="w-auto " src="../assets/img/ps-2.jpg" width="600" height="600" alt="">
                </swiper-slide>

                <swiper-slide>
                 <img class="w-auto " src="../assets/img/ps-3.jpg" width="600" height="600" alt="">
                </swiper-slide>
                
                </swiper>



</template>


<script>

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";


// import required modules
import { Autoplay } from "swiper";

export default {
    name : 'CardSlider',
    components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay],
    };
  },
};

</script>