<template>
 <div class="flex flex-wrap">

                <swiper  
                :slidesPerView="1" 
                :spaceBetween="20"   
                :breakpoints="{
                '426': {
                    slidesPerView: 1,
                },
                '768': {
                    slidesPerView: 3 ,
                    spaceBetween: 10
                },
                '1024': {
                     slidesPerView: 4 ,
                   spaceBetween: 20
                },
                }"
                :modules="modules"  
                class="py-4 tab-slider">
                <swiper-slide>
                             <div class="flex flex-col w-full h-full transition-all cursor-pointer ">
                                <div class="relative w-full h-full p-2 bg-white lg:p-4 content-div">
                                    <a href="#" class="relative flex items-center justify-center h-full">
                                        <img src="../assets/img/deneme1.jpg" class="w-full h-full border-2 border-brd-f8" width="482" height="405" alt="">
                                        <div class="absolute opacity-0 fd-sh group-hover:opacity-100">
                                            <div class="text-center ">
                                                <button class="px-3 py-1 font-bold text-center bg-white rounded-lg xl:text-s-12 lg:text-s-11 text-s-10">İncele</button>
                                            </div>
                                        </div>
                                    </a>

                                </div>
                                <a href="#" class="">
                                    <div class="grid p-2 bg-white lg:p-4 xl:h-36 lg:h-28 md:h-24">
                                        <div>
                                            <div class=""><span class="font-medium text-red-600 xl:text-s-12 text-s-10">İndirim</span></div>
                                            <div class="truncate">
                                                <span class="font-light xl:text-s-14 lg:text-s-13 md:text-s-12">Diadora 2 pack - D202016-976</span>
                                            </div>
                                            <div class="">
                                                <span class="font-light xl:text-s-13 lg:text-s-12 md:text-s-10">Çorap</span>
                                            </div>
                                            <div class="flex justify-between ">
                                                <div class="flex justify-between">
                                                    <div class="my-auto"><span class="font-light text-red-600 xl:text-s-18 lg:text-s-16 md:text-s-14">100.00₺</span></div>
                                                    <div class="my-auto ml-2"><span class="font-light line-through xl:text-s-14 lg:text-s-13 md:text-s-12">220.00₺</span></div>
                                                </div>
                                                <div class="my-auto ">
                                                    <span class="flex items-center justify-center p-1 font-light text-white bg-green-500 xl:text-s-12 text-s-10"> %55 İndirim</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div> 
                </swiper-slide>
                <swiper-slide>
                     <div class="flex flex-col w-full h-full transition-all cursor-pointer ">
                                <div class="relative w-full h-full p-2 bg-white lg:p-4 content-div">
                                    <a href="#" class="relative flex items-center justify-center h-full">
                                        <img src="../assets/img/deneme1.jpg" class="w-full h-full border-2 border-brd-f8" width="482" height="405" alt="">
                                        <div class="absolute opacity-0 fd-sh group-hover:opacity-100">
                                            <div class="text-center ">
                                                <button class="px-3 py-1 font-bold text-center bg-white rounded-lg xl:text-s-12 lg:text-s-11 text-s-10">İncele</button>
                                            </div>
                                        </div>
                                    </a>

                                </div>
                                <a href="#" class="">
                                    <div class="grid p-2 bg-white lg:p-4 xl:h-36 lg:h-28 md:h-24">
                                        <div>
                                            <div class=""><span class="font-medium text-red-600 xl:text-s-12 text-s-10">İndirim</span></div>
                                            <div class="truncate">
                                                <span class="font-light xl:text-s-14 lg:text-s-13 md:text-s-12">Diadora 2 pack - D202016-976</span>
                                            </div>
                                            <div class="">
                                                <span class="font-light xl:text-s-13 lg:text-s-12 md:text-s-10">Çorap</span>
                                            </div>
                                            <div class="flex justify-between ">
                                                <div class="flex justify-between">
                                                    <div class="my-auto"><span class="font-light text-red-600 xl:text-s-18 lg:text-s-16 md:text-s-14">100.00₺</span></div>
                                                    <div class="my-auto ml-2"><span class="font-light line-through xl:text-s-14 lg:text-s-13 md:text-s-12">220.00₺</span></div>
                                                </div>
                                                <div class="my-auto ">
                                                    <span class="flex items-center justify-center p-1 font-light text-white bg-green-500 xl:text-s-12 text-s-10"> %55 İndirim</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                </swiper-slide>
                   <swiper-slide>
                  <div class="flex flex-col w-full h-full transition-all cursor-pointer ">
                                <div class="relative w-full h-full p-2 bg-white lg:p-4 content-div">
                                    <a href="#" class="relative flex items-center justify-center h-full">
                                        <img src="../assets/img/deneme1.jpg" class="w-full h-full border-2 border-brd-f8" width="482" height="405" alt="">
                                        <div class="absolute opacity-0 fd-sh group-hover:opacity-100">
                                            <div class="text-center ">
                                                <button class="px-3 py-1 font-bold text-center bg-white rounded-lg xl:text-s-12 lg:text-s-11 text-s-10">İncele</button>
                                            </div>
                                        </div>
                                    </a>

                                </div>
                                <a href="#" class="">
                                    <div class="grid p-2 bg-white lg:p-4 xl:h-36 lg:h-28 md:h-24">
                                        <div>
                                            <div class=""><span class="font-medium text-red-600 xl:text-s-12 text-s-10">İndirim</span></div>
                                            <div class="truncate">
                                                <span class="font-light xl:text-s-14 lg:text-s-13 md:text-s-12">Diadora 2 pack - D202016-976</span>
                                            </div>
                                            <div class="">
                                                <span class="font-light xl:text-s-13 lg:text-s-12 md:text-s-10">Çorap</span>
                                            </div>
                                            <div class="flex justify-between ">
                                                <div class="flex justify-between">
                                                    <div class="my-auto"><span class="font-light text-red-600 xl:text-s-18 lg:text-s-16 md:text-s-14">100.00₺</span></div>
                                                    <div class="my-auto ml-2"><span class="font-light line-through xl:text-s-14 lg:text-s-13 md:text-s-12">220.00₺</span></div>
                                                </div>
                                                <div class="my-auto ">
                                                    <span class="flex items-center justify-center p-1 font-light text-white bg-green-500 xl:text-s-12 text-s-10"> %55 İndirim</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                </swiper-slide>
                  <swiper-slide>
                   <div class="flex flex-col w-full h-full transition-all cursor-pointer ">
                                <div class="relative w-full h-full p-2 bg-white lg:p-4 content-div">
                                    <a href="#" class="relative flex items-center justify-center h-full">
                                        <img src="../assets/img/deneme.jpg" class="w-full h-full border-2 border-brd-f8" width="482" height="405" alt="">
                                        <div class="absolute opacity-0 fd-sh group-hover:opacity-100">
                                            <div class="text-center ">
                                                <button class="px-3 py-1 font-bold text-center bg-white rounded-lg xl:text-s-12 lg:text-s-11 text-s-10">İncele</button>
                                            </div>
                                        </div>
                                    </a>

                                </div>
                                <a href="#" class="">
                                    <div class="grid p-2 bg-white lg:p-4 xl:h-36 lg:h-28 md:h-24">
                                        <div>
                                            <div class=""><span class="font-medium text-red-600 xl:text-s-12 text-s-10">İndirim</span></div>
                                            <div class="truncate">
                                                <span class="font-light xl:text-s-14 lg:text-s-13 md:text-s-12">Diadora 2 pack - D202016-976</span>
                                            </div>
                                            <div class="">
                                                <span class="font-light xl:text-s-13 lg:text-s-12 md:text-s-10">Çorap</span>
                                            </div>
                                            <div class="flex justify-between ">
                                                <div class="flex justify-between">
                                                    <div class="my-auto"><span class="font-light text-red-600 xl:text-s-18 lg:text-s-16 md:text-s-14">100.00₺</span></div>
                                                    <div class="my-auto ml-2"><span class="font-light line-through xl:text-s-14 lg:text-s-13 md:text-s-12">220.00₺</span></div>
                                                </div>
                                                <div class="my-auto ">
                                                    <span class="flex items-center justify-center p-1 font-light text-white bg-green-500 xl:text-s-12 text-s-10"> %55 İndirim</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                </swiper-slide>
                <swiper-slide>
                   <div class="flex flex-col w-full h-full transition-all cursor-pointer ">
                                <div class="relative w-full h-full p-2 bg-white lg:p-4 content-div">
                                    <a href="#" class="relative flex items-center justify-center h-full">
                                        <img src="../assets/img/deneme.jpg" class="w-full h-full border-2 border-brd-f8" width="482" height="405" alt="">
                                        <div class="absolute opacity-0 fd-sh group-hover:opacity-100">
                                            <div class="text-center ">
                                                <button class="px-3 py-1 font-bold text-center bg-white rounded-lg xl:text-s-12 lg:text-s-11 text-s-10">İncele</button>
                                            </div>
                                        </div>
                                    </a>

                                </div>
                                <a href="#" class="">
                                    <div class="grid p-2 bg-white lg:p-4 xl:h-36 lg:h-28 md:h-24">
                                        <div>
                                            <div class=""><span class="font-medium text-red-600 xl:text-s-12 text-s-10">İndirim</span></div>
                                            <div class="truncate">
                                                <span class="font-light xl:text-s-14 lg:text-s-13 md:text-s-12">Diadora 2 pack - D202016-976</span>
                                            </div>
                                            <div class="">
                                                <span class="font-light xl:text-s-13 lg:text-s-12 md:text-s-10">Çorap</span>
                                            </div>
                                            <div class="flex justify-between ">
                                                <div class="flex justify-between">
                                                    <div class="my-auto"><span class="font-light text-red-600 xl:text-s-18 lg:text-s-16 md:text-s-14">100.00₺</span></div>
                                                    <div class="my-auto ml-2"><span class="font-light line-through xl:text-s-14 lg:text-s-13 md:text-s-12">220.00₺</span></div>
                                                </div>
                                                <div class="my-auto ">
                                                    <span class="flex items-center justify-center p-1 font-light text-white bg-green-500 xl:text-s-12 text-s-10"> %55 İndirim</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                </swiper-slide>
                <swiper-slide>
                   <div class="flex flex-col w-full h-full transition-all cursor-pointer ">
                                <div class="relative w-full h-full p-2 bg-white lg:p-4 content-div">
                                    <a href="#" class="relative flex items-center justify-center h-full">
                                        <img src="../assets/img/deneme.jpg" class="w-full h-full border-2 border-brd-f8" width="482" height="405" alt="">
                                        <div class="absolute opacity-0 fd-sh group-hover:opacity-100">
                                            <div class="text-center ">
                                                <button class="px-3 py-1 font-bold text-center bg-white rounded-lg xl:text-s-12 lg:text-s-11 text-s-10">İncele</button>
                                            </div>
                                        </div>
                                    </a>

                                </div>
                                <a href="#" class="">
                                    <div class="grid p-2 bg-white lg:p-4 xl:h-36 lg:h-28 md:h-24">
                                        <div>
                                            <div class=""><span class="font-medium text-red-600 xl:text-s-12 text-s-10">İndirim</span></div>
                                            <div class="truncate">
                                                <span class="font-light xl:text-s-14 lg:text-s-13 md:text-s-12">Diadora 2 pack - D202016-976</span>
                                            </div>
                                            <div class="">
                                                <span class="font-light xl:text-s-13 lg:text-s-12 md:text-s-10">Çorap</span>
                                            </div>
                                            <div class="flex justify-between ">
                                                <div class="flex justify-between">
                                                    <div class="my-auto"><span class="font-light text-red-600 xl:text-s-18 lg:text-s-16 md:text-s-14">100.00₺</span></div>
                                                    <div class="my-auto ml-2"><span class="font-light line-through xl:text-s-14 lg:text-s-13 md:text-s-12">220.00₺</span></div>
                                                </div>
                                                <div class="my-auto ">
                                                    <span class="flex items-center justify-center p-1 font-light text-white bg-green-500 xl:text-s-12 text-s-10"> %55 İndirim</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                </swiper-slide>
                </swiper>

            </div>
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
    name : 'Slider',
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