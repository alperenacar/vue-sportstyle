<template>
    <Header></Header>
     <div class="container relative px-5 mx-auto mt-44">
        <div class="relative grid grid-cols-2 gap-5">
            <!--Product left block-->
            <div class="col-span-2 md:col-span-1 xs:hidden">
                <div class="grid gap-5 bg-bg-f6">
                    <div class="relative items-center justify-center bg-white">
                        <div class="absolute right-3 top-3 ">
                            <div class="prd-like">
                                <input type="checkbox" name="option" id="option20" class="hidden" />
                                <label for="option20" class="flex items-center justify-center bg-transparent lk-btn md:text-s-10 lg:text-s-12 xl:text-s-14 2xl:text-s-16 ">
                                    <i class="text-white fa-solid fa-heart"></i>
                                </label>
                            </div>
                        </div>
                        <img class="w-full " src="../assets/img/prd-1.jpg" width="875" height="722" alt="">
                    </div>
                    <div class="items-center justify-center bg-white ">
                        <img class="w-full " src="../assets/img/prd-2.jpg" width="875" height="722" alt="">
                    </div>
                    <div class="items-center justify-center bg-white ">
                        <img class="w-full " src="../assets/img/prd-3.jpg" width="875" height="722" alt="">
                    </div>
                    <div class="items-center justify-center bg-white ">
                        <img class="w-full " src="../assets/img/prd-4.jpg" width="875" height="722" alt="">
                    </div>
                </div>
            </div>
            <!--Mobil Product slider-->
            <div class="relative col-span-2 md:hidden ">
                <div class="swiper swiper-mbl-prdct swiper-container">
                    <!-- Additional required wrapper -->
                    <div class="swiper-wrapper">
                        <!-- Slides -->
                        <div class="swiper-slide">
                            <div class="relative items-center justify-center bg-white">
                                <div class="absolute right-3 top-3 ">
                                    <div class="prd-like">
                                        <input type="checkbox" name="option" id="option20" class="hidden" />
                                        <label for="option20" class="flex items-center justify-center bg-transparent lk-btn text-s-16">
                                        <i class="text-white fa-solid fa-heart"></i>
                                    </label>
                                    </div>
                                </div>
                                <img src="../assets/img/prd-1.jpg" width="815" height="673" alt="">
                            </div>
                        </div>
                        <div class="swiper-slide"> <img src="../assets/img/prd-2.jpg" width="815" height="673" alt=""></div>
                        <div class="swiper-slide"> <img src="../assets/img/prd-3.jpg" width="815" height="673" alt=""></div>
                        <div class="swiper-slide"> <img src="../assets/img/prd-4.jpg" width="815" height="673" alt=""></div>

                    </div>
                    <!-- If we need scrollbar -->
                    <div class="swiper-scrollbar"></div>
                </div>
            </div>


            <!--Right block-->
            <div class="relative col-span-2 md:col-span-1">
                <div class="sticky top-40">
                    <form action="get">
                        <div class="grid gap-4 2xl:text-s-20 md:text-s-12 lg:text-s-14 xl:text-s-16 text-s-16">
                            <div class="grid gap-0.5">
                                <div class="">
                                    <span class="font-bold 2xl:text-s-24 md:text-s-16 lg:text-s-18 xl:text-s-19 text-s-19">Nike Air Force 1 '07</span>
                                </div>
                                <div class="w-full 2xl:text-s-20 md:text-s-12 lg:text-s-14 xl:text-s-16 text-s-14">
                                    <span class="font-normal leading-3">Erkek Ayakkabısı</span>
                                </div>
                                <div class="flex gap-5">
                                    <div class="font-medium text-right 2xl:text-s-24 xl:text-s-22 lg:text-s-20 md:text-s-19 text-s-22"> <span>700.00₺</span></div>
                                    <div class="flex items-center"><span class="font-light line-through 2xl:text-s-20 xl:text-s-19 lg:text-s-18 md:text-s-16 text-s-18 text-c-aa">999.00₺</span></div>
                                </div>
                            </div>
                            <div class="flex-col">
                                <span class="font-bold 2xl:text-s-18 md:text-s-12 lg:text-s-14 xl:text-s-16 ">Renk : Beyaz</span>
                                <div class="flex gap-2 mt-4 2xl:gap-4 xl:gap-3">
                                    <div class="">
                                        <div>
                                            <input type="radio" name="renk" id="option30" class="hidden" />
                                            <label for="option30" class="flex items-center justify-center w-10 h-10 font-bold bg-transparent border rounded border-brd-aa label-checked:border-transparent label-checked:text-white md:h-8 md:w-8 lg:h-10 lg:w-10 xl:h-12 xl:w-12 2xl:h-14 2xl:w-14">
                                            <img src="../assets/img/kg-1.png" width="65" height="65" alt="">
                                        </label>
                                        </div>
                                    </div>
                                    <div class="">
                                        <div>
                                            <input type="radio" name="renk" id="option31" class="hidden" />
                                            <label for="option31" class="flex items-center justify-center w-10 h-10 font-bold bg-transparent border rounded border-brd-aa label-checked:border-transparent label-checked:text-white md:h-8 md:w-8 lg:h-10 lg:w-10 xl:h-12 xl:w-12 2xl:h-14 2xl:w-14">
                                            <img src="../assets/img/kg-2.png" width="65" height="65" alt="">
                                        </label>
                                        </div>
                                    </div>
                                </div>


                            </div>

                            <div class="flex-col ">
                                <div class="flex justify-between">
                                    <span class="font-bold 2xl:text-s-18 md:text-s-12 lg:text-s-14 xl:text-s-16 ">Beden : 40</span>
                                    <a href="javascript:;" onclick="modal('beden-modal')" class="my-auto ">
                                        <div class=" xl:text-s-14 lg:text-s-13 text-s-12 text-c-97">Beden Tablosu</div>
                                    </a>
                                </div>
                                <div class="flex gap-2 mt-4 2xl:gap-4 xl:gap-3">
                                    <div class="">
                                        <div>
                                            <input type="radio" name="option" id="option1" class="hidden" />
                                            <label for="option1" class="flex items-center justify-center w-10 h-10 font-bold bg-transparent border rounded border-brd-aa label-checked:border-transparent label-checked:text-white label-checked:bg-black md:text-s-10 lg:text-s-12 xl:text-s-14 2xl:text-s-16 md:h-8 md:w-8 lg:h-10 lg:w-10 xl:h-12 xl:w-12 2xl:h-14 2xl:w-14">35.5</label>
                                        </div>
                                    </div>
                                    <div class="">
                                        <div>
                                            <input type="radio" name="option" id="option2" class="hidden" />
                                            <label for="option2" class="flex items-center justify-center w-10 h-10 font-bold bg-transparent border rounded border-brd-aa label-checked:border-transparent label-checked:text-white label-checked:bg-black md:text-s-10 lg:text-s-12 xl:text-s-14 2xl:text-s-16 md:h-8 md:w-8 lg:h-10 lg:w-10 xl:h-12 xl:w-12 2xl:h-14 2xl:w-14">36</label>
                                        </div>
                                    </div>
                                    <div class="">
                                        <div>
                                            <input type="radio" name="option" id="option3" class="hidden" />
                                            <label for="option3" class="flex items-center justify-center w-10 h-10 font-bold bg-transparent border rounded border-brd-aa label-checked:border-transparent label-checked:text-white label-checked:bg-black md:text-s-10 lg:text-s-12 xl:text-s-14 2xl:text-s-16 md:h-8 md:w-8 lg:h-10 lg:w-10 xl:h-12 xl:w-12 2xl:h-14 2xl:w-14">36.5</label>
                                        </div>
                                    </div>
                                    <div class="">
                                        <div>
                                            <input type="radio" name="option" id="option4" class="hidden" />
                                            <label for="option4" class="flex items-center justify-center w-10 h-10 font-bold bg-transparent border rounded border-brd-aa label-checked:border-transparent label-checked:text-white label-checked:bg-black md:text-s-10 lg:text-s-12 xl:text-s-14 2xl:text-s-16 md:h-8 md:w-8 lg:h-10 lg:w-10 xl:h-12 xl:w-12 2xl:h-14 2xl:w-14">37</label>
                                        </div>
                                    </div>
                                    <div class="">
                                        <div>
                                            <input type="radio" name="option" id="option5" class="hidden" />
                                            <label for="option5" class="flex items-center justify-center w-10 h-10 font-bold bg-transparent border rounded border-brd-aa label-checked:border-transparent label-checked:text-white label-checked:bg-black md:text-s-10 lg:text-s-12 xl:text-s-14 2xl:text-s-16 md:h-8 md:w-8 lg:h-10 lg:w-10 xl:h-12 xl:w-12 2xl:h-14 2xl:w-14">37.5</label>
                                        </div>
                                    </div>
                                    <div class="">
                                        <div>
                                            <input type="radio" name="option" id="option6" class="hidden" />
                                            <label for="option6" class="flex items-center justify-center w-10 h-10 font-bold bg-transparent border rounded border-brd-aa label-checked:border-transparent label-checked:product-check label-checked:text-white label-checked:bg-black md:text-s-10 lg:text-s-12 xl:text-s-14 2xl:text-s-16 md:h-8 md:w-8 lg:h-10 lg:w-10 xl:h-12 xl:w-12 2xl:h-14 2xl:w-14">38</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="grid flex-col gap-4 text-center">
                                <div class="py-2.5 font-normal xl:text-s-18 lg:text-s-16 text-s-14 text-center text-white bg-black rounded-lg cursor-pointer"><a href="# ">Sepete Ekle</a></div>

                            </div>
                            <div>
                                <a href="#" class="font-medium underline text-c-aa xl:text-s-18 lg:text-s-16 text-s-14">Fiyatı Düşünce Haber Ver</a>
                            </div>
                            <div class="flex items-center gap-3 p-4 bg-second-gray rounded-xl">
                                <div>
                                    <img src="../assets/img/kpn.png" width="24" height="44" alt="">
                                </div>
                                <div>
                                    <p class="font-light xl:text-s-18 lg:text-s-16 text-s-14">
                                        Üyelere özel ilk alışverişte geçerli %15 indirim kodunu bu üründe kullanabilirsin. İndirim kodunu almak için hemen üye ol!
                                    </p>
                                </div>
                            </div>
                            <div class="grid items-center grid-cols-12 gap-5 ">
                                <div class="col-span-1">
                                    <img src="../assets/img/car.png" width="52" height="40" alt="">
                                </div>
                                <div class="flex-col col-span-11">
                                    <span>ÜCRETSİZ KARGO</span>
                                    <p class="font-light xl:text-s-18 lg:text-s-16 text-s-14">
                                        150 TL ve üzeri siparişlerde geçerli ücretsiz kargo fırsatı </p>
                                </div>
                            </div>
                            <div class="grid items-center grid-cols-12 gap-5 ">
                                <div class="col-span-1">
                                    <img src="../assets/img/krg.png" width="39" height="40" alt="">
                                </div>
                                <div class="flex-col col-span-11">
                                    <span>DİLEDİĞİN GİBİ</span>
                                    <p class="font-light xl:text-s-18 lg:text-s-16 text-s-14">
                                        Siparişin teslim alınmasından sonraki 14 gün içerisinde iade ve değişim imkanı </p>
                                </div>
                            </div>
                            <div class="flex-col">
                                <div class="py-2 font-medium xl:text-s-16 lg:text-s-14 md:text-s-12 text-s-14">Nike Air Force 1 ‘07 ile birlikte bu ürünler avantajlı</div>
                                <div class="grid gap-2 mx-auto md:grid-cols-4 lg:gap-3 xs:w-1/2 xs:text-center">
                                    <div class="md:col-span-3">
                                        <div class="grid gap-1 md:grid-cols-11 xs:divide-y divide-brd-de">

                                            <div class="flex-col md:col-span-3">
                                                <div>
                                                    <img class="w-full" src="../assets/img/prd-1.jpg" width="193" height="151" alt="">
                                                </div>
                                                <div class="flex-col ">
                                                    <div class="font-medium truncate xl:text-s-12 lg:text-s-11 md:text-s-10 text-s-12">Nike Air Force 1 '07</div>
                                                </div>
                                                <div class="flex-col truncate">
                                                    <div class="font-light xl:text-s-12 lg:text-s-11 md:text-s-10 text-s-12">(İncelenen Ürün)</div>
                                                </div>
                                                <div class="mt-2"> <span class="items-center justify-center px-2 py-1 font-light text-white bg-green-500 xl:text-s-10 lg:text-s-9 md:text-s-7 text-s-10"> %55 İndirim</span></div>
                                                <div class="flex items-center gap-2 mt-1 xs:justify-center">
                                                    <div class="font-medium xl:text-s-13 lg:text-s-12 md:text-s-11 text-s-13 "> <span>700.00₺</span></div>
                                                    <div class="flex items-center"><span class="font-light line-through xl:text-s-10 lg:text-s-11 md:text-s-9 text-s-10 text-c-aa">999.00₺</span></div>
                                                </div>
                                            </div>
                                            <div class="flex items-center justify-center col-span-1 xs:hidden">
                                                <img src="../assets/img/plus.png" width="10" height="11" alt="">
                                            </div>
                                            <div class="flex-col md:col-span-3">
                                                <div>
                                                    <img class="w-full" src="../assets/img/avantaj1.jpg" width="193" height="151" alt="">
                                                </div>
                                                <div class="flex-col ">
                                                    <div class="font-medium truncate xl:text-s-12 lg:text-s-11 md:text-s-10 text-s-12">New Balance </div>
                                                </div>
                                                <div class="flex-col ">
                                                    <div class="font-medium truncate xl:text-s-12 lg:text-s-11 md:text-s-10 text-s-12"> Erkek Pantolon </div>
                                                </div>
                                                <div class="mt-2"> <span class="items-center justify-center px-2 py-1 font-light text-white bg-green-500 xl:text-s-10 lg:text-s-9 md:text-s-7 text-s-10"> %55 İndirim</span></div>
                                                <div class="flex items-center gap-2 mt-1 xs:justify-center">
                                                    <div class="font-medium xl:text-s-13 lg:text-s-12 md:text-s-11 text-s-13 "> <span>700.00₺</span></div>
                                                    <div class="flex items-center"><span class="font-light line-through xl:text-s-10 lg:text-s-11 md:text-s-9 text-s-10 text-c-aa">999.00₺</span></div>
                                                </div>
                                            </div>
                                            <div class="flex items-center justify-center col-span-1 xs:hidden">
                                                <img src="../assets/img/plus.png" width="10" height="11" alt="">
                                            </div>
                                            <div class="flex-col md:col-span-3">
                                                <div>
                                                    <img class="w-full" src="../assets/img/avantaj2.jpg" width="193" height="151" alt="">
                                                </div>
                                                <div class="flex-col ">
                                                    <div class="font-medium truncate xl:text-s-12 lg:text-s-11 md:text-s-10 text-s-12">New Balance </div>
                                                </div>
                                                <div class="flex-col ">
                                                    <div class="font-medium truncate xl:text-s-12 lg:text-s-11 md:text-s-10 text-s-12">N Swim Shorts Erkek</div>
                                                </div>
                                                <div class="mt-2"> <span class="items-center justify-center px-2 py-1 font-light text-white bg-green-500 xl:text-s-10 lg:text-s-9 md:text-s-7 text-s-10"> %55 İndirim</span></div>
                                                <div class="flex items-center gap-2 mt-1 xs:justify-center">
                                                    <div class="font-medium xl:text-s-13 lg:text-s-12 md:text-s-11 text-s-13 "> <span>700.00₺</span></div>
                                                    <div class="flex items-center"><span class="font-light line-through xl:text-s-10 lg:text-s-11 md:text-s-9 text-s-10 text-c-aa">999.00₺</span></div>
                                                </div>
                                            </div>
                                        </div>



                                    </div>
                                    <div class="md:col-span-1">
                                        <div class="mt-4"> <span class="items-center justify-center p-1 font-light text-white bg-green-500 xl:text-s-10 lg:text-s-9 md:text-s-7 text-s-10">Kazancınız: 208,07 TL</span></div>
                                        <div class="flex items-center gap-1 mt-1 xs:justify-center lg:gap-2">
                                            <div class="font-medium xl:text-s-13 lg:text-s-12 md:text-s-11 text-s-13"> <span>700.00₺</span></div>
                                            <div class="flex items-center"><span class="font-light line-through xl:text-s-10 lg:text-s-11 md:text-s-9 text-s-10 text-c-aa">999.00₺</span></div>
                                        </div>
                                        <div class="py-2 font-normal text-center text-white bg-black rounded-md cursor-pointer xl:text-s-10 lg:text-s-11 md:text-s-8 text-s-12"><a href="# ">3 Ürünü Sepete Ekle</a></div>
                                    </div>
                                </div>
                            </div>
                            <div class="grid divide-y divide-brd-de prdct-accordion">
                                <div class="accordion xl:text-s-16 lg:text-s-14 text-s-12" id="accordionExample5">
                                    <div class="bg-transparent border-b accordion-item border-brd-de">
                                        <h2 class="mb-0 accordion-header " id="headingThree5">
                                            <button class="relative flex items-center w-full py-4 font-light text-left text-gray-800 transition bg-transparent border-none rounded-none accordion-button focus:outline-none collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree5"
                                                aria-expanded="false" aria-controls="collapseThree5">
                                    Yorumlar (0)
                                    </button>
                                        </h2>
                                        <div id="collapseThree5" class="accordion-collapse collapse bg-main-gray" aria-labelledby="headingThree5">
                                            <div class="pb-4 font-light accordion-body">
                                                <div class="grid">
                                                    <div>
                                                        <div class="px-4 py-2 font-normal text-alertw-c bg-alertw-b xl:text-s-12 lg:text-s-11 text-s-10">Yorum yazabilmeniz için üye girişi yapmanız gerekmektedir !</div>
                                                    </div>
                                                    <hr>
                                                    <div>
                                                        <div class="grid px-4 py-2 font-normal alert-info xl:text-s-12 lg:text-s-11 text-s-10">
                                                            <div>Yorum yazabilmeniz için üye girişi yapmanız gerekmektedir !</div>
                                                            <div class="mt-4"><a href="#" class="block w-full py-2 cursor-pointer text-white rounded-md xl:text-s-12 lg:text-s-11 text-s-10 text-center  bg-[#28a745]">Üye girişi yapmak için tıklayınız</a></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="bg-transparent border-b accordion-item border-brd-de">
                                        <h2 class="mb-0 accordion-header " id="headingOne5">
                                            <button class="relative flex items-center w-full py-4 font-light text-left text-gray-800 transition bg-transparent border-none rounded-none accordion-button focus:outline-none collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne5"
                                                aria-expanded="false" aria-controls="collapseOne5">
                                    Teslimat ve Kargo Detayları
                                    </button>
                                        </h2>
                                        <div id="collapseOne5" class="accordion-collapse collapse bg-main-gray" aria-labelledby="headingOne5">
                                            <div class="pb-4 font-light accordion-body">
                                                This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                                You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the though the transition does limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="bg-transparent accordion-item ">
                                        <h2 class="mb-0 accordion-header " id="headingTwo5">
                                            <button class="relative flex items-center w-full py-4 font-light text-left text-gray-800 transition border-none rounded-none accordion-button bg-main-gray focus:outline-none collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo5"
                                                aria-expanded="false" aria-controls="collapseTwo5">
                                    Ürün Bilgileri
                                    </button>
                                        </h2>
                                        <div id="collapseTwo5" class="accordion-collapse collapse " aria-labelledby="headingTwo5">
                                            <div class="flex-col font-light accordion-body">
                                                <div>Marka: Nike </div>
                                                <div>Cinsiyet: Erkek </div>
                                                <div>Renk: Beyaz</div>
                                                <div class="py-4"> <a href="#" class="underline">Ürün Detaylarını Görüntüle</a> </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div class="py-4 font-light xl:text-s-16 lg:text-s-14 text-s-12">Ürün Adı: Nike Air Force 1 '07</div>
                                <div class="py-4 font-light xl:text-s-16 lg:text-s-14 text-s-12">
                                    <a href="#" class="flex items-center">
                                        <img src="../assets/img/blog-share.png" width="25" height="34" alt=""> <span class="px-2">Paylaş</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <!--Slider-->
        <div class="bg-transparent ">
            <div class="container mx-auto ">
                <div class="mx-auto text-center p-7">
                    <span class="font-medium 2xl:text-s-24 md:text-s-16 lg:text-s-18 xl:text-s-19 text-s-19 ">Yeni Sezon</span>
                </div>
                <Slider></Slider>
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

export default {
  name: 'Product',
  components: {
    Header,
    Footer,
    Slider,
  }
}
 
</script>