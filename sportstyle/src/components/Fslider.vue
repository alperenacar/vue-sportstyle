<template>
      <!--MAİN SLİDER-->
    <div class="relative mt-36">
        <div class="flex flex-wrap">

                <swiper  
                :slidesPerView="1"
                :loop="true"
                :pagination="{
                    clickable: true,
                }"  
                :modules="modules"  
                class="main-slider">
                <swiper-slide>
                 <a href="#"> <img class="w-full" src="../assets/img/mainslider.jpg" width="1920" height="781" alt=""></a>
                </swiper-slide>
                <swiper-slide>
                     <a href="#"> <img class="w-full" src="../assets/img/mainslider.jpg" width="1920" height="781" alt=""></a>
                </swiper-slide>
            
                </swiper>

        </div>
    </div>
</template>

<script>

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

// import required modules
import { Autoplay } from "swiper";

export default {
    name : 'Fslider',
    components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination],
    };
  },
};

</script>