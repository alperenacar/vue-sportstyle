<template>
    <!--Main quickly buy-->
     <div class="hidden md:flex-wrap md:flex">
        <div class="w-full">
            <div class="relative flex flex-col w-full min-w-0 break-words bg-second-gray ">
                <div class="container mx-auto">
                    <div class="flex-auto py-10 ">
                        <div class="grid w-3/4 grid-cols-2 gap-10 mx-auto">

                            <div class="flex flex-col w-full col-span-1 gap-2 xl:gap-4 lg:gap-3">
                                <div class="relative w-full ">
                                    <a href="#">
                                        <img src="../assets/img/sp1.jpg" class="w-full bg-white border-2 border-brd-f8" width="469" height="398" alt="">
                                    </a>
                                </div>
                                <div class="grid grid-cols-3 gap-2 xl:gap-4 lg:gap-3">
                                    <a href="#"><img src="../assets/img/sp1.jpg" class="w-full bg-white border-2 cursor-pointer border-brd-f8" width="151" height="129" alt=""></a>
                                    <a href="#"><img src="../assets/img/sp1.jpg" class="w-full bg-white border-2 cursor-pointer border-brd-f8" width="151" height="129" alt=""></a>
                                    <a href="#"><img src="../assets/img/sp1.jpg" class="w-full bg-white border-2 cursor-pointer border-brd-f8" width="151" height="129" alt=""></a>
                                </div>
                            </div>
                            <div class="grid content-between">
                                <div class="flex flex-col w-full col-span-1 gap-y-2 xl:text-s-18 lg:text-s-16 md:text-s-12">
                                    <div class="relative flex flex-col w-full py-2 border-b border-brd-de ">
                                        <span class="font-medium uppercase xl:text-s-22 lg:text-s-20 md:text-s-16">New Balance</span>
                                        <span class="font-light capitalize ">Kadın Yürüyüş Ayakkabısı <span class="float-right">573,30 ₺</span></span>
                                    </div>
                                    <div class="relative flex flex-col w-full py-2 border-b border-brd-de">
                                        <span class="font-light capitalize ">Renk Seçimi</span>
                                        <div class="flex flex-wrap gap-2 pt-2 my-auto xl:gap-4 lg:gap-3 ">
                                            <div class="flex items-center ">
                                                <input id="radio1" type="radio" name="radio" class="hidden renkS" checked />
                                                <label for="radio1" class="flex items-center border-2 border-transparent rounded-full cursor-pointer label-checked:border-brd-b9">
                                        <span class="inline-block w-6 h-6 m-0.5 bg-white rounded-full"></span>
                                    </label>
                                            </div>
                                            <div class="flex items-center ">
                                                <input id="radio2" type="radio" name="radio" class="hidden renkS" />
                                                <label for="radio2" class="flex items-center border-2 border-transparent rounded-full cursor-pointer label-checked:border-brd-b9">
                                     <span class="inline-block w-6 h-6 m-0.5 bg-black rounded-full"></span>
                                     </label>
                                            </div>
                                            <div class="flex items-center ">
                                                <input id="radio3" type="radio" name="radio" class="hidden renkS" />
                                                <label for="radio3" class="flex items-center border-2 border-transparent rounded-full cursor-pointer label-checked:border-brd-b9">
                                     <span class="inline-block w-6 h-6 m-0.5 rounded-full bg-rgray"></span>
                                     </label>
                                            </div>
                                            <div class="flex items-center ">
                                                <input id="radio4" type="radio" name="radio" class="hidden renkS" />
                                                <label for="radio4" class="flex items-center border-2 border-transparent rounded-full cursor-pointer label-checked:border-brd-b9">
                                     <span class="inline-block w-6 h-6 m-0.5 rounded-full bg-rred"></span>
                                     </label>
                                            </div>
                                            <div class="flex items-center ">
                                                <input id="radio5" type="radio" name="radio" class="hidden renkS" />
                                                <label for="radio5" class="flex items-center border-2 border-transparent rounded-full cursor-pointer label-checked:border-brd-b9">
                                     <span class="inline-block w-6 h-6 m-0.5 rounded-full bg-rgreen"></span>
                                     </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="relative flex flex-col w-full py-2 ">

                                        <span class="font-light capitalize ">Numara</span>
                                        <div class="flex flex-wrap gap-2 pt-2 my-auto xl:gap-4 lg:gap-3 nmbr xl:text-s-12 lg:text-s-11 md:text-s-10">
                                            <div class="flex items-center ">
                                                <input id="radio6" type="radio" name="radio" class="hidden numbrS" checked />
                                                <label for="radio6" class="border-2 rounded-full cursor-pointer border-brd-b9 label-checked:bg-bg-b9">
                                    <span class="flex items-center justify-center w-6 h-6">36</span>
                                </label>
                                            </div>
                                            <div class="flex items-center ">
                                                <input id="radio7" type="radio" name="radio" class="hidden numbrS" />
                                                <label for="radio7" class="border-2 rounded-full cursor-pointer border-brd-b9 label-checked:bg-bg-b9">
                                 <span class="flex items-center justify-center w-6 h-6">37</span>
                                 </label>
                                            </div>
                                            <div class="flex items-center ">
                                                <input id="radio8" type="radio" name="radio" class="hidden numbrS" />
                                                <label for="radio8" class="border-2 rounded-full cursor-pointer border-brd-b9 label-checked:bg-bg-b9">
                                 <span class="flex items-center justify-center w-6 h-6">38</span>
                                 </label>
                                            </div>
                                            <div class="flex items-center ">
                                                <input id="radio9" type="radio" name="radio" class="hidden numbrS" />
                                                <label for="radio9" class="border-2 rounded-full cursor-pointer border-brd-b9 label-checked:bg-bg-b9">
                                 <span class="flex items-center justify-center w-6 h-6">39</span>
                                 </label>
                                            </div>
                                            <div class="flex items-center ">
                                                <input id="radio10" type="radio" name="radio" class="hidden numbrS" />
                                                <label for="radio10" class="border-2 rounded-full cursor-pointer border-brd-b9 label-checked:bg-bg-b9">
                                 <span class="flex items-center justify-center w-6 h-6">40</span>
                                 </label>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div class="relative flex flex-col w-full lg:gap-y-2 gap-y-1 xl:text-s-16 lg:text-s-14 md:text-s-11">
                                    <a class="border-2 p-1.5 text-center hover:border-border-sgray bg-black hover:bg-second-gray text-white hover:text-black cursor-pointer font-medium " href="#">Sepete ekle</a>
                                    <a class="border-2 p-1.5 text-center hover:border-border-sgray bg-black hover:bg-second-gray text-white hover:text-black cursor-pointer font-medium " href="#">Şimdi satın al</a>
                                    <a class="font-light xl:text-s-12 lg:text-s-11 md:text-s-10" href="#">Daha fazla bilgi</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name : 'Mqb'
}
</script>