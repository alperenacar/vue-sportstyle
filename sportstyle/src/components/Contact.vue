<template>
    <!--İletişim-->
 
             
                <form action="" method="get">
                    <div class="grid grid-cols-2 gap-2 py-4 mx-auto font-light md:gap-4 md:w-5/6 ">
                        <div class="grid grid-cols-2 col-span-2 gap-2 mx-auto md:gap-4 ">
                            <div class="grid col-span-1 gap-2 md:gap-4 xs:order-1">
                                <div class="flex">
                                    <div class="my-auto"><img src="../assets/img/iltsm-tel.png"></div>
                                    <div class="my-auto"><span class="ml-2 xl:text-s-13 lg:text-s-12 text-s-10 md:ml-8"> 0850 305 84 93</span></div>
                                </div>
                                <div class="flex">
                                    <div class="my-auto"><img src="../assets/img/iltsm-eposta.png"></div>
                                    <div class="my-auto"><span class="ml-2 xl:text-s-13 lg:text-s-12 text-s-10 md:ml-8">destek@sportstyle.com.tr</span></div>
                                </div>
                            </div>
                            <div class="grid col-span-1 gap-2 md:gap-4 xs:order-3">
                                <div class="flex">
                                    <div><img src="../assets/img/iltsm-adres.png"></div>
                                    <div class="">
                                        <ul class="ml-2 xl:text-s-13 lg:text-s-12 text-s-10 md:ml-8">
                                            <li>PlaySports Tekstil A.Ş.</li>
                                            <li>PTS-CMA 09:00-18:00</li>
                                            <li>CTS 10:00-17:00</li>
                                            <li>Sultan Selim Mah. Hümeyra Sok.</li>
                                            <li>Falcon Plaza No:6/4 </li>
                                            <li>Kağıthane İstanbul</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-span-1 col-start-2 xs:order-2 xs:mx-auto xs:my-auto">
                                <div class="flex">
                                    <div class="flex justify-around gap-4 px-4 py-2 font-medium text-center text-white bg-black rounded-md">
                                        <img src="../assets/img/face-w.png">
                                        <img src="../assets/img/insta-w.png">
                                        <img src="../assets/img/youtube-w.png">
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="w-full col-span-2 border-t border-brd-de">
                            <div class="flex justify-center py-4 text-center">
                                <span class="font-medium xl:text-s-19 lg:text-s-18 text-s-16">Bizimle İletişime mi Geçmek İstiyorsun?</span>
                            </div>
                        </div>
                        <div class="grid col-span-2 gap-2 md:col-span-1">
                            <div class="">
                                <div>
                                    <input type="text" id="ad" class="block w-full py-1 font-light placeholder-gray-400 border-transparent rounded-lg xl:text-s-13 lg:text-s-12 text-s-10 bg-main-gray text-c-aa focus:ring-0 focus:border-transparent" placeholder="Adınız*">
                                </div>
                            </div>
                            <div class="">
                                <div>
                                    <input type="text" id="soyad" class="block w-full py-1 font-light placeholder-gray-400 border-transparent rounded-lg xl:text-s-13 lg:text-s-12 text-s-10 bg-main-gray text-c-aa focus:ring-0 focus:border-transparent" placeholder="Soyadınız*">
                                </div>
                            </div>
                            <div class="">
                                <div>
                                    <input type="email" id="email" class="block w-full py-1 font-light placeholder-gray-400 border-transparent rounded-lg xl:text-s-13 lg:text-s-12 text-s-10 bg-main-gray text-c-aa focus:ring-0 focus:border-transparent" placeholder="E-posta Adresiniz*">
                                </div>
                            </div>
                            <div class="">
                                <div>
                                    <input type="tel" id="phone" class="block w-full py-1 font-light placeholder-gray-400 border-transparent rounded-lg xl:text-s-13 lg:text-s-12 text-s-10 bg-main-gray text-c-aa focus:ring-0 focus:border-transparent" placeholder="Telefon Numaranız (İsteğe Bağlı)">
                                </div>
                            </div>
                        </div>
                        <div class="grid col-span-2 md:col-span-1">
                            <textarea class="block w-full py-1 font-light placeholder-gray-400 border-transparent rounded-lg xl:text-s-13 lg:text-s-12 text-s-10 bg-main-gray text-c-aa focus:ring-0 focus:border-transparent" placeholder="Mesajınız*"></textarea>
                        </div>
                        <div class="grid col-span-2 gap-2 md:col-span-1 md:col-start-2">
                            <div class="">
                                <label class="inline-flex items-center xl:text-s-13 lg:text-s-12 text-s-10" for="flexRadioDefault1"> 
                                    <input class="mr-2 font-light shadow-none xl:w-4 xl:h-4 lg:h-3 lg:w-3 focus:ring-transparent bg-main-gray border-brd-aa text-c-aa" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1">
                                    Gizlilik ve Güvenlik Politikasını Okudum, Kabul Ediyorum.
                                  </label>
                            </div>
                            <div class="  py-1.5  font-medium xl:text-s-16 lg:text-s-14 text-s-12  text-center text-white bg-black rounded-lg cursor-pointer"><a href="# ">GÖNDER</a></div>
                        </div>
                    </div>
                </form>
             
 
</template>

<script>
export default {
  name : 'Contact'
}
</script>