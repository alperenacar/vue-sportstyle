<template>
    <Header></Header>
   <div class="container mx-auto mt-40">
        <div class="grid grid-cols-4 xl:gap-x-8 xl:gap-y-6 gap-x-6 gap-y-4 md:px-8">
            <div class="col-span-4">
                <div class="text-center">
                    <span class="font-medium xl:text-s-18 lg:text-s-16 text-s-14">Sport Style Blog</span>
                </div>
            </div>
            <div class="col-span-4 p-8 bg-white md:col-span-3">
                <div class="grid gap-6 divide-y divide-brd-de">
                    <div class="grid grid-cols-9 gap-4">
                        <div class="col-span-5 md:col-span-7 xs:order-1">
                            <span class="p-1 font-light text-white bg-black rounded-md xl:text-s-13 lg:text-s-12 text-s-11">03 Kasım 2021</span>
                        </div>
                        <div class="col-span-9 col-start-1 md:col-span-6 xs:order-3">
                            <span class="font-bold xl:text-s-18 lg:text-s-16 text-s-14">Sağlıklı Yaşam Rehberi: Sporu Kavramak</span>
                        </div>
                        <div class="col-span-4 text-right md:col-span-3 xs:order-2 md:col-start-7">
                            <span class="italic font-light xl:text-s-13 lg:text-s-12 text-s-11">Okuma Süresi: 3 dk</span>
                        </div>
                    </div>
                    <div class="grid gap-8">
                        <div class="pt-4 mx-auto md:w-1/2"> <img class="w-full" src="../assets/img/blog.png" alt=""></div>
                        <div class="grid gap-4 font-light xl:text-s-13 lg:text-s-12 text-s-10">
                            <span> <strong>Kategoriler:</strong> #sağlık #yaşam #spor #bilim</span>
                            <p class="font-medium"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet enim consequat, pulvinar sem et, fringilla leo. Nam ac mi at purus vehicula tempus eget non felis. Sed efficitur dictum lectus consectetur rhoncus. Nullam
                                pharetra nibh at ultrices interdum.
                            </p>
                            <p>
                                Praesent iaculis nec dui elementum imperdiet. Pellentesque lobortis dapibus magna, suscipit commodo sem cursus eu. Sed quam quam, rhoncus quis aliquam vel, sagittis a velit. Sed elit eros, commodo ut molestie sed, ultricies quis enim. Nunc ultrices, mauris
                                sed aliquet semper, orci ex finibus erat, eget pretium lorem lacus quis libero.
                            </p>
                            <p>
                                Cras venenatis ligula quis vestibulum posuere. Phasellus scelerisque odio id odio cursus, vehicula sagittis leo aliquam. Aenean bibendum quam at venenatis auctor. Sed velit mauris, ullamcorper ac lorem ut, rhoncus viverra lorem. Donec in porta leo. Proin
                                vehicula tincidunt libero, quis rhoncus diam tincidunt nec. Proin eget pretium lacus. Nullam et risus quis ante congue rhoncus. Nulla scelerisque dui nunc, quis rutrum tellus volutpat a.
                            </p>
                            <p>
                                Proin nec lectus quis lacus egestas pellentesque. Suspendisse ac erat ut sem pellentesque laoreet. Aliquam erat volutpat. Proin ut eros id justo efficitur volutpat vitae ut ante. Sed tincidunt sem volutpat ultricies feugiat. Nullam eu odio dui. Donec
                                quam sem, facilisis sed fermentum vel, ultricies a neque. Fusce vel vehicula lacus. Phasellus sit amet nisl tellus.
                            </p>
                        </div>
                    </div>
                    <div class="grid gap-8">
                        <div class="flex pt-4">
                            <div class="flex justify-around gap-4 text-center">
                                <a class="my-auto" href="#"> <img src="../assets/img/blog-links.png"></a>
                                <a class="my-auto" href="#"><img src="../assets/img/blog-share.png"></a>
                            </div>
                        </div>
                        <!--Buraya bir product slider gelicek-->
                        <div class="grid gap-4 font-light xl:text-s-13 lg:text-s-12 text-s-10">
                            <p class="font-medium xl:text-s-16 lg:text-s-14 text-s-12">
                                İlginizi Çekebilir: Spora Faydası Olduğu Bilinen Yiyecekler
                            </p>
                            <p class="font-medium">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet enim consequat, pulvinar sem et, fringilla leo. Nam ac mi at purus vehicula tempus eget non felis. Sed efficitur dictum lectus consectetur rhoncus. Nullam pharetra nibh at ultrices
                                interdum.

                            </p>
                            <p>
                                Praesent iaculis nec dui elementum imperdiet. Pellentesque lobortis dapibus magna, suscipit commodo sem cursus eu. Sed quam quam, rhoncus quis aliquam vel, sagittis a velit. Sed elit eros, commodo ut molestie sed, ultricies quis enim. Nunc ultrices, mauris
                                sed aliquet semper, orci ex finibus erat, eget pretium lorem lacus quis libero.
                            </p>
                            <div class="flex justify-between">
                                <div>
                                    <a href="#" class="p-1 font-light text-white bg-black rounded-md xl:text-s-13 lg:text-s-12 text-s-11">03 Kasım 2021</a>
                                </div>
                                <div>
                                    <span class="font-light xl:text-s-13 lg:text-s-12 text-s-11">11 Ekim 2021</span>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div class=" md:hidden">
                        <div class="grid gap-8">
                            <div class="">
                                <form action="blog" method="get">
                                    <div class="flex justify-between py-4 font-medium border-b xl:text-s-13 lg:text-s-12 text-s-11 border-brd-de">
                                        <div>
                                            <div class="relative flex items-center w-full h-full">
                                                <span>Blog Arşivi</span>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="relative flex items-center w-full h-full">
                                                <span class="mr-1">Yıl:</span>
                                                <select class="bg-transparent bg-none py-0 px-3 3xs:px-1.5 text-center    xl:text-s-13 lg:text-s-12 text-s-11 border-brd-aa text-c-aa    rounded-md focus:ring-0 focus:border-brd-aa   block w-full  placeholder-gray-400" placeholder="İl Seçin">
                                                  
                                                  <option>2020</option>
                                                  <option>2021</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="relative flex items-center w-full h-full">
                                                <span class="mr-1">Ay:</span>
                                                <select class="bg-transparent bg-none py-0 px-3 3xs:px-1.5 text-center   xl:text-s-13 lg:text-s-12 text-s-11 border-brd-aa text-c-aa    rounded-md focus:ring-0 focus:border-brd-aa   block w-full  placeholder-gray-400" placeholder="İl Seçin">
                                                 
                                                  <option>Ekim</option>
                                                  <option>Kasım</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="relative flex items-center w-full h-full">
                                                <input type="submit" class="px-4 py-1 font-light text-white bg-black rounded-md 3xs:px-2" value="BUL">
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="grid gap-4 font-light xl:text-s-13 lg:text-s-12 text-s-10">
                                <p class="font-medium xl:text-s-16 lg:text-s-14 text-s-12">
                                    Spor Yaparken Dikkat Edilmesi Gerekenler
                                </p>
                                <p class="font-medium">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet enim consequat, pulvinar sem et, fringilla leo. Nam ac mi at purus vehicula tempus eget non felis. Sed efficitur dictum lectus consectetur rhoncus. Nullam pharetra nibh at ultrices
                                    interdum.

                                </p>
                                <p>
                                    Etiam vel dui eu risus ultricies rutrum. Suspendisse vehicula, dolor a laoreet porta, tellus urna aliquet turpis, sit amet efficitur felis ante quis sem. Mauris quis semper lacus. Aliquam nulla diam, tempus nec purus vitae, imperdiet euismod nibh.
                                </p>
                                <div class="flex justify-between">
                                    <div>
                                        <a href="#" class="p-1 font-light text-white bg-black rounded-md xl:text-s-13 lg:text-s-12 text-s-11">03 Kasım 2021</a>
                                    </div>
                                    <div>
                                        <span class="font-light xl:text-s-13 lg:text-s-12 text-s-11">11 Ekim 2021</span>
                                    </div>

                                </div>
                            </div>
                            <div class="grid gap-4 font-light xl:text-s-13 lg:text-s-12 text-s-10">
                                <p class="font-medium xl:text-s-16 lg:text-s-14 text-s-12">
                                    Spor Yaparken Dikkat Edilmesi Gerekenler
                                </p>
                                <p class="font-medium">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet enim consequat, pulvinar sem et, fringilla leo. Nam ac mi at purus vehicula tempus eget non felis. Sed efficitur dictum lectus consectetur rhoncus. Nullam pharetra nibh at ultrices
                                    interdum.

                                </p>
                                <p>
                                    Etiam vel dui eu risus ultricies rutrum. Suspendisse vehicula, dolor a laoreet porta, tellus urna aliquet turpis, sit amet efficitur felis ante quis sem. Mauris quis semper lacus. Aliquam nulla diam, tempus nec purus vitae, imperdiet euismod nibh.
                                </p>
                                <div class="flex justify-between">
                                    <div>
                                        <a href="#" class="p-1 font-light text-white bg-black rounded-md xl:text-s-13 lg:text-s-12 text-s-11">03 Kasım 2021</a>
                                    </div>
                                    <div>
                                        <span class="font-light xl:text-s-13 lg:text-s-12 text-s-11">11 Ekim 2021</span>
                                    </div>

                                </div>
                            </div>
                            <div class="grid gap-4 ">
                                <p class="font-medium xl:text-s-16 lg:text-s-14 text-s-12">
                                    Spor Yaparken Dikkat Edilmesi Gerekenler
                                </p>
                                <p class="font-medium">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet enim consequat, pulvinar sem et, fringilla leo. Nam ac mi at purus vehicula tempus eget non felis. Sed efficitur dictum lectus consectetur rhoncus. Nullam pharetra nibh at ultrices
                                    interdum.

                                </p>
                                <p>
                                    Etiam vel dui eu risus ultricies rutrum. Suspendisse vehicula, dolor a laoreet porta, tellus urna aliquet turpis, sit amet efficitur felis ante quis sem. Mauris quis semper lacus. Aliquam nulla diam, tempus nec purus vitae, imperdiet euismod nibh.
                                </p>
                                <div class="flex justify-between">
                                    <div>
                                        <a href="#" class="p-1 font-light text-white bg-black rounded-md xl:text-s-13 lg:text-s-12 text-s-11">03 Kasım 2021</a>
                                    </div>
                                    <div>
                                        <span class="font-light xl:text-s-13 lg:text-s-12 text-s-11">11 Ekim 2021</span>
                                    </div>

                                </div>
                            </div>
                            <div class="flex items-center justify-center h-full font-medium xl:text-s-13 lg:text-s-12 text-s-14">
                                <a href="#">&lt;</a>
                                <div class="flex items-center justify-center w-8 h-6 mx-2 bg-transparent border rounded-md border-brd-aa ">
                                    <span class="block text-center xl:text-s-13 lg:text-s-12 text-s-11"> 1 </span>
                                </div>
                                <a href="#">&gt;</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid col-span-1 gap-4 xs:hidden">
                <div class="col-span-1 my-auto">
                    <div class="text-center">
                        <span class="font-medium xl:text-s-18 lg:text-s-16 text-s-14">Bu Ürünleri Keşfet</span>
                    </div>
                </div>
                <div class="col-span-1">
                    <div class="flex flex-col w-full h-full p-2 transition-all bg-white cursor-pointer lg:p-4 hover:-mt-1 hover:mb-1">
                        <div class="relative w-full h-full">
                            <a href="#" class="h-full">
                                <img src="../assets/img/kategori1.jpg" class="w-full h-full border-2 border-brd-aa" alt="">
                            </a>
                        </div>
                        <a href="#" class="">
                            <div class="grid pt-2 lg:pt-4 xl:h-24 lg:h-20 md:h-16">
                                <div class=""><span class="font-medium xl:text-s-12 text-s-10 ">New Balance</span></div>
                                <div class="truncate">
                                    <span class="font-light xl:text-s-14 lg:text-s-13 md:text-s-12">New Balance 2 pack dsadasdsadas - D202016-976</span>
                                </div>
                                <!--   <div class="">
                                    <span class="font-light xl:text-s-13 lg:text-s-12 md:text-s-10">Çorap</span>
                                </div> -->
                                <div class="flex justify-between ">
                                    <div class="flex justify-between">
                                        <div class="my-auto"><span class="font-light xl:text-s-18 lg:text-s-16 md:text-s-14 ">100.00₺</span></div>
                                        <!--    <div class="my-auto ml-2"><span class="font-light line-through xl:text-s-14 lg:text-s-13 md:text-s-12">220.00₺</span></div>-->
                                    </div>
                                </div>
                                <!-- <div class="my-auto ">
                                    <span class="flex items-center justify-center p-1 font-light text-white bg-green-500 xl:text-s-12 text-s-10"> %55 İndirim</span>
                                </div>-->
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-span-1">
                    <div class="flex flex-col w-full h-full p-2 transition-all bg-white cursor-pointer lg:p-4 hover:-mt-1 hover:mb-1">
                        <div class="relative w-full h-full">
                            <a href="#" class="h-full">
                                <img src="../assets/img/kategori2.jpg" class="w-full h-full border-2 border-brd-aa" alt="">
                            </a>
                        </div>
                        <a href="#" class="">
                            <div class="grid pt-2 lg:pt-4 xl:h-24 lg:h-20 md:h-16">
                                <div class=""><span class="font-medium xl:text-s-12 text-s-10 ">New Balance</span></div>
                                <div class="truncate">
                                    <span class="font-light xl:text-s-14 lg:text-s-13 md:text-s-12">New Balance 2 pack dsadasdsadas - D202016-976</span>
                                </div>
                                <!--   <div class="">
                                    <span class="font-light xl:text-s-13 lg:text-s-12 md:text-s-10">Çorap</span>
                                </div> -->
                                <div class="flex justify-between ">
                                    <div class="flex justify-between">
                                        <div class="my-auto"><span class="font-light xl:text-s-18 lg:text-s-16 md:text-s-14 ">100.00₺</span></div>
                                        <!--    <div class="my-auto ml-2"><span class="font-light line-through xl:text-s-14 lg:text-s-13 md:text-s-12">220.00₺</span></div>-->
                                    </div>
                                </div>
                                <!-- <div class="my-auto ">
                                    <span class="flex items-center justify-center p-1 font-light text-white bg-green-500 xl:text-s-12 text-s-10"> %55 İndirim</span>
                                </div>-->
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-span-1">
                    <div class="flex flex-col w-full h-full p-2 transition-all bg-white cursor-pointer lg:p-4 hover:-mt-1 hover:mb-1">
                        <div class="relative w-full h-full">
                            <a href="#" class="h-full">
                                <img src="../assets/img/kategori3.jpg" class="w-full h-full border-2 border-brd-aa" alt="">
                            </a>
                        </div>
                        <a href="#" class="">
                            <div class="grid pt-2 lg:pt-4 xl:h-24 lg:h-20 md:h-16">
                                <div class=""><span class="font-medium xl:text-s-12 text-s-10 ">New Balance</span></div>
                                <div class="truncate">
                                    <span class="font-light xl:text-s-14 lg:text-s-13 md:text-s-12">New Balance 2 pack dsadasdsadas - D202016-976</span>
                                </div>
                                <!--   <div class="">
                                    <span class="font-light xl:text-s-13 lg:text-s-12 md:text-s-10">Çorap</span>
                                </div> -->
                                <div class="flex justify-between ">
                                    <div class="flex justify-between">
                                        <div class="my-auto"><span class="font-light xl:text-s-18 lg:text-s-16 md:text-s-14 ">100.00₺</span></div>
                                        <!--    <div class="my-auto ml-2"><span class="font-light line-through xl:text-s-14 lg:text-s-13 md:text-s-12">220.00₺</span></div>-->
                                    </div>
                                </div>
                                <!-- <div class="my-auto ">
                                    <span class="flex items-center justify-center p-1 font-light text-white bg-green-500 xl:text-s-12 text-s-10"> %55 İndirim</span>
                                </div>-->
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <Footer></Footer>
</template>



<script>
// @ is an alias to /src
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
 

export default {
  name: 'BlogDetail',
  components: {
    Header,
    Footer,
   
  }
}
 
</script>