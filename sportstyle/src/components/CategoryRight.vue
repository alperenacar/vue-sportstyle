<template>
    <!--Category Right-->
      

                <!--Sıralama-->

                <div class="flex-col">

                    <div class="grid grid-cols-2 mb-4 md:grid-cols-3">

                        <div class="col-span-2 md:col-span-1 md:col-start-2 xs:order-2">
                            <div class="flex items-center h-full font-medium align-middle md:justify-center xl:text-s-24 lg:text-s-22 md:text-s-20 text-s-18">Kadın</div>
                        </div>
                        <div class="col-span-2 md:col-span-1 xs:order-1 ktgry-select">
                            <form method="get">
                                <div class="flex justify-around">
                                    <select class=" bg-transparent border rounded-lg bg-white border-brd-de  xl:text-s-14 lg:text-s-12 md:text-s-10 text-s-12 pl-3 py-2 pr-0 md:pl-0.5  lg:pl-1.5 lg:pr-2 md:py-0.5 lg:py-1 xl:py-1.5 focus:ring-0 focus:outline-none active:border-black  focus:border-black"
                                        name="siralama">
                                        <option value="">
                                            Standart Sıralama
                                        </option>
                                        <option >
                                          Fiyat (Azalandan-Artana)
                                        </option>
                                        <option >
                                          Fiyat (Artandan-Azalana)
                                        </option>
                                        <option >
                                          En Yüksek Puan
                                        </option>
                                        <option>
                                          YENİ ÜRÜNLER
                                        </option> 
                                      </select>
                                    <div class="my-auto">
                                        <label class="inline-flex items-center lg:text-s-14 xl:text-s-16 text-s-10 ">
                                            <input class="bg-transparent border-2 border-black lg:mr-2 md:mr-1 xl:w-5 xl:h-5 lg:h-4 lg:w-4 md:h-3 md:w-3 focus:ring-transparent" type="checkbox" />
                                                Stoktakiler
                                            </label>
                                    </div>
                                </div>
                            </form>

                        </div>


                    </div>


                </div>

                <!--product cards side-->

                <div class="grid grid-cols-2 gap-2 md:grid-cols-3 xl:grid-cols-4 xl:gap-5 lg:gap-3">



                    <div class="flex flex-col w-full h-full transition-all cursor-pointer ">
                        <div class="relative w-full h-full">
                            <a href="#" class="h-full">
                                <img src="../assets/img/kategori1.jpg" class="w-full h-full " width="482" height="405" alt="">
                            </a>
                        </div>
                        <a href="#" class="">
                            <div class="relative block p-2 bg-white lg:p-4 xl:h-36 lg:h-28 md:h-24">
                                <div class="">

                                    <!--Product Card Swiper-->
                                    <CardSlider></CardSlider>
                                </div>
                                <div>
                                    <!--<div class=""><span class="font-medium text-red-600 xl:text-s-12 text-s-10">İndirim</span></div> -->
                                    <div class="truncate">
                                        <span class="font-light xl:text-s-14 lg:text-s-13 md:text-s-12">Diadora 2 pack dsadasdsadas - D202016-976</span>
                                    </div>
                                    <!-- <div class="">
                                        <span class="font-light xl:text-s-13 lg:text-s-12 md:text-s-10">Çorap</span>
                                    </div>-->
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
                    <div class="flex flex-col w-full h-full transition-all cursor-pointer ">
                        <div class="w-full h-full content-div">
                            <a href="#" class="relative flex items-center justify-center h-full">
                                <img src="../assets/img/kategori3.jpg" class="w-full h-full " width="482" height="405" alt="">
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
                    <div class="flex flex-col w-full h-full transition-all cursor-pointer ">
                        <div class="relative w-full h-full">
                            <a href="#" class="h-full">
                                <img src="../assets/img/kategori2.jpg" class="w-full h-full " width="482" height="574" alt="">
                            </a>
                        </div>

                    </div>


                    <div class="flex flex-col w-full h-full transition-all cursor-pointer ">
                        <div class="w-full h-full content-div">
                            <a href="#" class="relative flex items-center justify-center h-full">
                                <img src="../assets/img/deneme.jpg" class="w-full h-full " width="482" height="405" alt="">
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
                    <div class="flex flex-col w-full h-full transition-all cursor-pointer ">
                        <div class="w-full h-full content-div">
                            <a href="#" class="relative flex items-center justify-center h-full">
                                <img src="../assets/img/deneme1.jpg" class="w-full h-full " width="482" height="405" alt="">
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
                </div>
            
</template>

<script>
import CardSlider from './CardSlider.vue'

export default {
  name : 'CategoryRight',
    components: {
    CardSlider,
  }
}
</script>