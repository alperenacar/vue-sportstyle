<template>
<!--Footer-->
    <footer class="w-full mt-10">
    <Cp></Cp>
    <Mailc></Mailc>
      <div class="container w-full mx-auto md:py-10 md:px-10">
            <div class="grid grid-cols-5 mx-auto gap-x-10 xl:w-4/5 lg:w-5/6 md:w-11/12">
                <div class="flex-col justify-center w-full grid-cols-2 col-span-5 mx-auto xs:order-2 md:col-span-2 md:grid gap-x-5">
                    <div class="hidden col-span-1 mt-12 md:mt-4 md:block">
                        <img src="../assets/img/tarz.png" class="object-scale-down w-full h-auto" width="205" height="75" alt="footer logo">
                    </div>
                    <div class="flex-col items-center block col-span-1 mt-0 md:mt-4 xs:py-8 md:items-start lg:items-start">

                        <img src="../assets/img/sportsylelogo.png" class="object-scale-down w-full h-auto" width="184" height="20" alt="footer logo">

                        <div class="grid items-center justify-center grid-cols-1 gap-4 text-xs xl:mt-5 lg:mt-3 md:mt-2">

                            <div class="inline-grid items-center justify-start grid-cols-3 w-ful xl:gap-x-2 lg:gap-x-4 md:gap-x-6 xs:w-1/2 xs:mx-auto">
                                <a class="col-span-1" href="#">
                                    <img class="object-scale-down h-auto xs:mx-auto" src="../assets/img/face.png" width="12" height="23" alt="facebook icon">
                                </a>
                                <a class="col-span-1" href="#">
                                    <img class="object-scale-down h-auto xs:mx-auto" src="../assets/img/insta.png" width="23" height="23" alt="instagram icon">
                                </a>
                                <a class="col-span-1" href="#">
                                    <img class="object-scale-down h-auto xs:mx-auto" src="../assets/img/youtube.png" width="23" height="16" alt="youtube icon">
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-span-5 md:col-span-3 xs:order-1">
                    <div class="grid w-full grid-cols-3 p-0 mt-12 gap-x-5 md:mt-4 text-c-58 md:flex lg:pl-15 ">
                        <div class="flex-col items-center hidden w-full col-span-1 md:block md:items-start xl:text-s-16 lg:text-s-14 md:text-s-12">
                            <h1 class="font-medium ">Kategoriler</h1>
                            <ul class="grid grid-cols-1 gap-0.5 font-light mt-4">
                                <li><a href="#">Kadın</a></li>
                                <li><a href="#">Erkek</a></li>
                                <li><a href="#">Çocuk</a></li>
                                <li><a href="#">Yeniler</a></li>
                                <li><a href="#">Markalar</a></li>
                                <li><a href="#">Outlet</a></li>
                            </ul>
                        </div>
                        <div class="block col-span-3 px-8 py-5 transition border-b md:hidden border-brd-de">
                            <!-- header -->
                            <div class="flex items-center justify-between space-x-5 transition cursor-pointer text-ktxtgray accordion-header">
                                <span class="font-medium text-s-16">ADRES</span>
                                <i class="fas text-s-16 fa-angle-down"></i>
                            </div>
                            <!-- Content -->

                            <div class="relative overflow-hidden font-light transition-all duration-700 text-ktxtgray accordion-content max-h-0 custom-scrollbar" style="max-height: 0px;" x-ref="category" x-bind:style="selected == 1 ? 'max-height: ' + 277 + 'px' : ''">
                                <div class="grid grid-cols-1 gap-2 font-light lg:text-smSize xl:xlSize text-xsmSize">

                                    <div>
                                        <a href="#">Kadın</a>
                                    </div>
                                    <div>
                                        <a href="#">Erkek</a>
                                    </div>
                                    <div>
                                        <a href="#">Çocuk</a>
                                    </div>
                                    <div>
                                        <a href="#">Yeniler</a>
                                    </div>
                                    <div>
                                        <a href="#">Markalar</a>
                                    </div>
                                    <div>
                                        <a href="#">Outlet</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex-col items-center hidden w-full col-span-1 md:block md:items-start xl:text-s-16 lg:text-s-14 md:text-s-12">
                            <h1 class="font-medium">Önemli Bilgiler</h1>
                            <ul class="grid grid-cols-1 gap-0.5 font-light  mt-4 ">
                                <li>
                                    <a href="#">Teslimat  ve Garanti</a>
                                </li>
                                <li>
                                    <a href="#">Üyelik Sözleşmesi</a>
                                </li>
                                <li>
                                    <a href="#">Satış Sözleşmesi</a>
                                </li>
                                <li>
                                    <a href="#">İade ve Değişim</a>
                                </li>
                                <li>
                                    <a href="#">Gizlilik ve Güvenlik</a>
                                </li>
                                <li>
                                    <a href="#">Bize Ulaşın</a>
                                </li>
                            </ul>
                        </div>
                        <div class="block col-span-3 px-8 py-5 transition border-b md:hidden border-brd-de">
                            <!-- header -->
                            <div class="flex items-center justify-between space-x-5 transition cursor-pointer text-ktxtgray accordion-header">
                                <span class="font-medium text-s-16">Önemli Bilgiler</span>
                                <i class="fas text-s-16 fa-angle-down"></i>
                            </div>
                            <!-- Content -->

                            <div class="relative overflow-hidden font-light transition-all duration-700 text-ktxtgray accordion-content max-h-0 custom-scrollbar" style="max-height: 0px;" x-ref="category" x-bind:style="selected == 1 ? 'max-height: ' + 277 + 'px' : ''">
                                <div class="grid grid-cols-1 gap-2 font-light lg:text-smSize xl:xlSize text-xsmSize">

                                    <div>
                                        <a href="#">Teslimat  ve Garanti</a>
                                    </div>
                                    <div>
                                        <a href="#">Üyelik Sözleşmesi</a>
                                    </div>
                                    <div>
                                        <a href="#">Satış Sözleşmesi</a>
                                    </div>
                                    <div>
                                        <a href="#">İade ve Değişim</a>
                                    </div>
                                    <div>
                                        <a href="#">Gizlilik ve Güvenlik</a>
                                    </div>
                                    <div>
                                        <a href="#">Bize Ulaşın</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex-col items-center hidden w-full col-span-1 md:block md:items-start xl:text-s-16 lg:text-s-14 md:text-s-12">
                            <h1 class="font-medium ">Sport Style Hakkında</h1>
                            <ul class="grid grid-cols-1 gap-0.5 font-light  mt-4 ">
                                <li>
                                    <a href="#">Hakkımızda</a>
                                </li>
                                <li>
                                    <a href="#">İletişim</a>
                                </li>
                                <li>
                                    <a href="#">Müşteri Hizmetleri</a>
                                </li>
                                <li>
                                    <a href="#">S.S.S</a>
                                </li>
                                <li>
                                    <a href="#">Blog</a>
                                </li>
                            </ul>
                        </div>
                        <div class="block col-span-3 px-8 py-5 transition border-b md:hidden border-brd-de">
                            <!-- header -->
                            <div class="flex items-center justify-between space-x-5 transition cursor-pointer text-ktxtgray accordion-header">
                                <span class="font-medium text-s-16">Sport Style Hakkında</span>
                                <i class="fas text-s-16 fa-angle-down"></i>
                            </div>
                            <!-- Content -->

                            <div class="relative overflow-hidden font-light transition-all duration-700 text-ktxtgray accordion-content max-h-0 custom-scrollbar" style="max-height: 0px;" x-ref="category" x-bind:style="selected == 1 ? 'max-height: ' + 277 + 'px' : ''">
                                <div class="grid grid-cols-1 gap-2 font-light lg:text-smSize xl:xlSize text-xsmSize">

                                    <div>
                                        <a href="#">Hakkımızda</a>
                                    </div>
                                    <div>
                                        <a href="#">İletişim</a>
                                    </div>
                                    <div>
                                        <a href="#">Müşteri Hizmetleri</a>
                                    </div>
                                    <div>
                                        <a href="#">S.S.S</a>
                                    </div>
                                    <div>
                                        <a href="#">Blog</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex flex-col items-center justify-center py-4 mx-auto text-xs font-medium border-t lg:flex-row border-brd-de">
            <span class="italic font-normal font-roboto text-s-10">© 2021 SportStyle. Tüm Hakları Saklıdır.</span>
        </div>
    </footer>
</template>

<script>
import Cp from '../components/Cp.vue'
import Mailc from '../components/Mailc.vue'

export default {
  name : 'Footer',
   components: {
     Cp,
     Mailc,
  }
}
</script>