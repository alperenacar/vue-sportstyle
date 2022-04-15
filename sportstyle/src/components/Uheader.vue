<template>
    <!--UHeader-->
  <div class="z-30 grid grid-cols-3 py-2 bg-main-gray">
            <div class="container flex justify-center col-span-3 mx-auto my-auto ">

                <swiper 
                :centeredSlides="true"
                :slidesPerView="1" 
                :slidesPerGroup="1"
                :slidesPerColumn="1" 
                :direction="'vertical'"   
                :autoplay="true" 
                :loop="true" 
                :modules="modules" class="manset_slider">
                    <swiper-slide>
                    <a href="#" class="my-auto "><span class="font-normal uppercase text-s-12">150 TL ÜSTÜ KARGO ÜCRETSİZ</span></a>
                    </swiper-slide>
                    <swiper-slide>
                    <a href="#" class="my-auto "><span class="font-normal uppercase text-s-12">İLK ÜYELERE ÖZEL %5 İNDİRİM</span></a>
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

// import required modules
import { Autoplay } from "swiper";

export default {
    name : 'Uheader',
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

 