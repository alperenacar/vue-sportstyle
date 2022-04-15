<template>
    <!--DHeader-->
 <div class="z-40 mx-auto align-middle xs:py-2">
            <div class="container grid items-center justify-between grid-cols-3 mx-auto bg-white md:grid-cols-2">
                <div class="relative flex col-span-1 px-4 py-3 my-auto text-center xl:px-10 lg:px-6 md:px-3">
                    <div class="flex my-auto xl:gap-6 lg:gap-3 md:gap-2">
                        <!--MOBİL MEGA MENU-->
                        <div class="block my-auto mobile-menu-bar md:hidden">
                            <div class="mobile-button">
                                <button class=" second-button" type="button">
                                        <div class="animated-icon2"><span></span><span></span><span></span><span></span></div>
                                    </button>
                            </div>
                        </div>
                        <!--MOBİL MEGA MENU-->
                        <a class="hidden my-auto md:block" href="#"> <img class="w-auto lg:h-auto md:h-4" src="../assets/img/sportsylelogo.png" width="184" height="20" alt=""></a>

                        <div class="relative hidden h-10 my-auto md:flex">
                            <img class="absolute left-2 h-3/6 top-2" src="../assets/img/zoom-2.svg" width="21" height="24">
                            <input type="text" class="w-full pl-10 text-xs border-none rounded-lg focus:outline-none focus:ring-0 bg-main-gray text-dark-flower h-9" placeholder="Ara:">
                        </div>

                    </div>
                </div>
                <div class="block col-span-1 my-auto md:hidden xl:px-10 lg:px-6 md:px-3">
                    <a class="" href="#"> <img class="h-auto mx-auto " src="../assets/img/sportsylelogo.png" width="141" height="24" alt=""></a>
                </div>
                <div class="col-span-1 px-4 py-3 my-auto xl:px-10 lg:px-6 md:px-3">
                    <ul class="flex items-center justify-end gap-1 text-center 2xl:gap-5 xl:gap-4 lg:gap-3 md:gap-2 ">
                        <li class="items-center hidden h-10 px-2 rounded-lg md:flex bg-main-gray">
                            <a href="#" class="flex ">
                                <img src="../assets/img/person.svg" width="16" height="16" alt="giris icon">
                                <div class="flex-col ml-1 font-normal text-left">
                                    <div class=""> Giriş Yap </div>
                                    <div style="font-size: 0.6rem;">veya Üye Ol</div>
                                </div>
                            </a>
                        </li>
                        <li class="items-center hidden h-10 px-2 rounded-lg md:flex bg-main-gray">
                            <a href="#" class="flex ">
                                <img src="../assets/img/heart.svg" width="16" height="17" alt="favoriler icon">
                                <span class="ml-1 font-normal">
                                        Favorilerim
                                    </span>
                            </a>
                        </li>
                        <li class="relative flex items-center h-10 px-2 rounded-lg md:bg-main-gray">
                            <a href="#" class="flex ">
                                <span class="absolute top-0 right-0 w-4 h-4 text-center text-white bg-black rounded-full md:-top-1 md:-right-1">1</span>
                                <img class="xs:relative xs:h-8" width="16" height="16" src="../assets/img/cart.svg" alt="cart icon">
                                <span class="hidden ml-1 font-normal md:block">
                                        Sepetim
                                    </span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="block col-span-3 md:hidden">
                    <form action="https://sstyle.redwork.com.tr/search" method="get">
                        <div class="flex gap-1 px-4 pt-2">
                            <div class="relative flex w-full h-10 my-auto">
                                <img class="absolute left-2 h-3/6 top-2" src="../assets/img/zoom-2.svg" width="28" height="32">
                                <input type="text" class="w-full pl-10 text-xs border-none rounded-lg focus:outline-none focus:ring-0 bg-main-gray text-dark-flower h-9" placeholder="Ara:">
                            </div>
                            <button class="px-4 text-white border-none h-9 bg-btn-green rounded-xl" type="submit">BUL</button>
                        </div>
                    </form>
                </div>
            </div>
            <div class="items-center justify-between hidden grid-cols-3 bg-white border-y border-brd-de md:grid md:grid-cols-2 ">
                <div class="container col-span-3 mx-auto bg-white md:col-span-2">
                    <div class="grid w-full grid-cols-9 xl:py-2 py-1.5  divide-x  divide-brd-de">
                        <!--Hoverable Link-->
                        <div class="flex items-center justify-center col-span-1 px-2 py-1 hoverable lg:py-2 xl:px-4">
                            <a href="#" class="relative block font-normal xl:text-s-13 lg:text-s-12 ">YENİ SEZON</a>
                            <div class="block p-6 mb-16 bg-white shadow-xl mega-menu sm:mb-0 ">
                                <div class="container flex flex-col justify-center w-full mx-auto md:flex-row">

                                    <div class="flex justify-center w-full gap-10 p-0 mx-auto">

                                        <div class="flex-col text-s-14">
                                            <a href="#" class="font-medium">Kadın Ayakkabı</a>
                                            <ul class="grid grid-cols-1 gap-1 mt-2 font-light">
                                                <li><a href="#">Antrenman</a></li>
                                                <li><a href="#">Günlük Kullanım</a></li>
                                                <li><a href="#">Koşu</a></li>
                                                <li><a href="#">Terlik</a></li>

                                            </ul>
                                        </div>
                                        <div class="flex-col text-s-14">
                                            <a href="#" class="font-medium">Kadın Giyim</a>
                                            <ul class="grid grid-cols-1 gap-1 mt-2 font-light">
                                                <li><a href="#">Eşofman Altı</a></li>
                                                <li><a href="#">Mont ve Yağmurluklar </a></li>
                                                <li><a href="#">Şort </a></li>
                                                <li><a href="#">Sweatshirt</a></li>
                                                <li><a href="#">T-shirt</a></li>
                                                <li><a href="#">Atlet</a></li>
                                            </ul>
                                        </div>
                                        <div class="flex-col text-s-14">
                                            <a href="#" class="font-medium">Kadın Aksesuar</a>
                                            <ul class="grid grid-cols-1 gap-1 mt-2 font-light ">
                                                <li><a href="#">Çanta Cüzdan</a></li>
                                                <li><a href="#">Çorap</a></li>
                                                <li><a href="#">Şapka - Bere</a></li>
                                            </ul>
                                        </div>
                                        <div class="flex-col text-s-14">
                                            <a href="#" class="font-medium ">Markalar</a>
                                            <ul class="grid grid-cols-1 gap-1 mt-2 font-light">
                                                <li><a href="#">Adidas</a></li>
                                                <li><a href="#">Diadora</a></li>
                                                <li><a href="#">New Balance</a></li>
                                                <li><a href="#">Nike</a></li>
                                                <li><a href="#">Vans</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center justify-center col-span-1 px-2 py-1 hoverable lg:py-2 xl:px-4">
                            <a href="#" class="relative block font-normal xl:text-s-13 lg:text-s-12 ">KADIN</a>
                            <div class="block p-6 mb-16 bg-white shadow-xl mega-menu sm:mb-0 ">
                                <div class="container flex flex-col justify-center w-full mx-auto md:flex-row">

                                    <div class="flex justify-center w-full gap-10 p-0 mx-auto">

                                        <div class="flex-col text-s-14">
                                            <a href="#" class="font-medium">Kadın Ayakkabı</a>
                                            <ul class="grid grid-cols-1 gap-1 mt-2 font-light">
                                                <li><a href="#">Antrenman</a></li>
                                                <li><a href="#">Günlük Kullanım</a></li>
                                                <li><a href="#">Koşu</a></li>
                                                <li><a href="#">Terlik</a></li>

                                            </ul>
                                        </div>
                                        <div class="flex-col text-s-14">
                                            <a href="#" class="font-medium">Kadın Giyim</a>
                                            <ul class="grid grid-cols-1 gap-1 mt-2 font-light">
                                                <li><a href="#">Eşofman Altı</a></li>
                                                <li><a href="#">Mont ve Yağmurluklar </a></li>
                                                <li><a href="#">Şort </a></li>
                                                <li><a href="#">Sweatshirt</a></li>
                                                <li><a href="#">T-shirt</a></li>
                                                <li><a href="#">Atlet</a></li>
                                            </ul>
                                        </div>
                                        <div class="flex-col text-s-14">
                                            <a href="#" class="font-medium">Kadın Aksesuar</a>
                                            <ul class="grid grid-cols-1 gap-1 mt-2 font-light ">
                                                <li><a href="#">Çanta Cüzdan</a></li>
                                                <li><a href="#">Çorap</a></li>
                                                <li><a href="#">Şapka - Bere</a></li>
                                            </ul>
                                        </div>
                                        <div class="flex-col text-s-14">
                                            <a href="#" class="font-medium ">Markalar</a>
                                            <ul class="grid grid-cols-1 gap-1 mt-2 font-light">
                                                <li><a href="#">Adidas</a></li>
                                                <li><a href="#">Diadora</a></li>
                                                <li><a href="#">New Balance</a></li>
                                                <li><a href="#">Nike</a></li>
                                                <li><a href="#">Vans</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center justify-center col-span-1 px-2 py-1 hoverable lg:py-2 xl:px-4">
                            <a href="#" class="relative block font-normal xl:text-s-13 lg:text-s-12 ">ERKEK</a>
                            <div class="block p-6 mb-16 bg-white shadow-xl mega-menu sm:mb-0 ">
                                <div class="container flex flex-col justify-center w-full mx-auto md:flex-row">

                                    <div class="flex justify-center w-full gap-10 p-0 mx-auto">

                                        <div class="flex-col text-s-14">
                                            <a href="#" class="font-medium">Kadın Ayakkabı</a>
                                            <ul class="grid grid-cols-1 gap-1 mt-2 font-light">
                                                <li><a href="#">Antrenman</a></li>
                                                <li><a href="#">Günlük Kullanım</a></li>
                                                <li><a href="#">Koşu</a></li>
                                                <li><a href="#">Terlik</a></li>

                                            </ul>
                                        </div>
                                        <div class="flex-col text-s-14">
                                            <a href="#" class="font-medium">Kadın Giyim</a>
                                            <ul class="grid grid-cols-1 gap-1 mt-2 font-light">
                                                <li><a href="#">Eşofman Altı</a></li>
                                                <li><a href="#">Mont ve Yağmurluklar </a></li>
                                                <li><a href="#">Şort </a></li>
                                                <li><a href="#">Sweatshirt</a></li>
                                                <li><a href="#">T-shirt</a></li>
                                                <li><a href="#">Atlet</a></li>
                                            </ul>
                                        </div>
                                        <div class="flex-col text-s-14">
                                            <a href="#" class="font-medium">Kadın Aksesuar</a>
                                            <ul class="grid grid-cols-1 gap-1 mt-2 font-light ">
                                                <li><a href="#">Çanta Cüzdan</a></li>
                                                <li><a href="#">Çorap</a></li>
                                                <li><a href="#">Şapka - Bere</a></li>
                                            </ul>
                                        </div>
                                        <div class="flex-col text-s-14">
                                            <a href="#" class="font-medium ">Markalar</a>
                                            <ul class="grid grid-cols-1 gap-1 mt-2 font-light">
                                                <li><a href="#">Adidas</a></li>
                                                <li><a href="#">Diadora</a></li>
                                                <li><a href="#">New Balance</a></li>
                                                <li><a href="#">Nike</a></li>
                                                <li><a href="#">Vans</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center justify-center col-span-1 px-2 py-1 hoverable lg:py-2 xl:px-4">
                            <a href="#" class="relative block font-normal xl:text-s-13 lg:text-s-12 ">ÇOCUK</a>
                            <div class="block p-6 mb-16 bg-white shadow-xl mega-menu sm:mb-0 ">
                                <div class="container flex flex-col justify-center w-full mx-auto md:flex-row">

                                    <div class="flex justify-center w-full gap-10 p-0 mx-auto">

                                        <div class="flex-col text-s-14">
                                            <a href="#" class="font-medium">Kadın Ayakkabı</a>
                                            <ul class="grid grid-cols-1 gap-1 mt-2 font-light">
                                                <li><a href="#">Antrenman</a></li>
                                                <li><a href="#">Günlük Kullanım</a></li>
                                                <li><a href="#">Koşu</a></li>
                                                <li><a href="#">Terlik</a></li>

                                            </ul>
                                        </div>
                                        <div class="flex-col text-s-14">
                                            <a href="#" class="font-medium">Kadın Giyim</a>
                                            <ul class="grid grid-cols-1 gap-1 mt-2 font-light">
                                                <li><a href="#">Eşofman Altı</a></li>
                                                <li><a href="#">Mont ve Yağmurluklar </a></li>
                                                <li><a href="#">Şort </a></li>
                                                <li><a href="#">Sweatshirt</a></li>
                                                <li><a href="#">T-shirt</a></li>
                                                <li><a href="#">Atlet</a></li>
                                            </ul>
                                        </div>
                                        <div class="flex-col text-s-14">
                                            <a href="#" class="font-medium">Kadın Aksesuar</a>
                                            <ul class="grid grid-cols-1 gap-1 mt-2 font-light ">
                                                <li><a href="#">Çanta Cüzdan</a></li>
                                                <li><a href="#">Çorap</a></li>
                                                <li><a href="#">Şapka - Bere</a></li>
                                            </ul>
                                        </div>
                                        <div class="flex-col text-s-14">
                                            <a href="#" class="font-medium ">Markalar</a>
                                            <ul class="grid grid-cols-1 gap-1 mt-2 font-light">
                                                <li><a href="#">Adidas</a></li>
                                                <li><a href="#">Diadora</a></li>
                                                <li><a href="#">New Balance</a></li>
                                                <li><a href="#">Nike</a></li>
                                                <li><a href="#">Vans</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center justify-center col-span-1 px-2 py-1 hoverable lg:py-2 xl:px-4">
                            <a href="#" class="relative block font-normal xl:text-s-13 lg:text-s-12">MARKALAR</a>
                            <div class="block p-6 mb-16 bg-white shadow-xl mega-menu sm:mb-0 ">
                                <div class="container flex flex-col justify-center w-full mx-auto md:flex-row">

                                    <div class="flex justify-center w-full gap-10 p-0 mx-auto">

                                        <div class="flex-col text-s-14">
                                            <a href="#" class="font-medium">Kadın Ayakkabı</a>
                                            <ul class="grid grid-cols-1 gap-1 mt-2 font-light">
                                                <li><a href="#">Antrenman</a></li>
                                                <li><a href="#">Günlük Kullanım</a></li>
                                                <li><a href="#">Koşu</a></li>
                                                <li><a href="#">Terlik</a></li>

                                            </ul>
                                        </div>
                                        <div class="flex-col text-s-14">
                                            <a href="#" class="font-medium">Kadın Giyim</a>
                                            <ul class="grid grid-cols-1 gap-1 mt-2 font-light">
                                                <li><a href="#">Eşofman Altı</a></li>
                                                <li><a href="#">Mont ve Yağmurluklar </a></li>
                                                <li><a href="#">Şort </a></li>
                                                <li><a href="#">Sweatshirt</a></li>
                                                <li><a href="#">T-shirt</a></li>
                                                <li><a href="#">Atlet</a></li>
                                            </ul>
                                        </div>
                                        <div class="flex-col text-s-14">
                                            <a href="#" class="font-medium">Kadın Aksesuar</a>
                                            <ul class="grid grid-cols-1 gap-1 mt-2 font-light ">
                                                <li><a href="#">Çanta Cüzdan</a></li>
                                                <li><a href="#">Çorap</a></li>
                                                <li><a href="#">Şapka - Bere</a></li>
                                            </ul>
                                        </div>
                                        <div class="flex-col text-s-14">
                                            <a href="#" class="font-medium ">Markalar</a>
                                            <ul class="grid grid-cols-1 gap-1 mt-2 font-light">
                                                <li><a href="#">Adidas</a></li>
                                                <li><a href="#">Diadora</a></li>
                                                <li><a href="#">New Balance</a></li>
                                                <li><a href="#">Nike</a></li>
                                                <li><a href="#">Vans</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center justify-center col-span-1 px-2 py-1 hoverable lg:py-2 xl:px-4">
                            <a href="#" class="relative block font-normal xl:text-s-13 lg:text-s-12">OUTLET</a>
                            <div class="block p-6 mb-16 bg-white shadow-xl mega-menu sm:mb-0 ">
                                <div class="container flex flex-col justify-center w-full mx-auto md:flex-row">

                                    <div class="flex justify-center w-full gap-10 p-0 mx-auto">

                                        <div class="flex-col text-s-14">
                                            <a href="#" class="font-medium">Kadın Ayakkabı</a>
                                            <ul class="grid grid-cols-1 gap-1 mt-2 font-light">
                                                <li><a href="#">Antrenman</a></li>
                                                <li><a href="#">Günlük Kullanım</a></li>
                                                <li><a href="#">Koşu</a></li>
                                                <li><a href="#">Terlik</a></li>

                                            </ul>
                                        </div>
                                        <div class="flex-col text-s-14">
                                            <a href="#" class="font-medium">Kadın Giyim</a>
                                            <ul class="grid grid-cols-1 gap-1 mt-2 font-light">
                                                <li><a href="#">Eşofman Altı</a></li>
                                                <li><a href="#">Mont ve Yağmurluklar </a></li>
                                                <li><a href="#">Şort </a></li>
                                                <li><a href="#">Sweatshirt</a></li>
                                                <li><a href="#">T-shirt</a></li>
                                                <li><a href="#">Atlet</a></li>
                                            </ul>
                                        </div>
                                        <div class="flex-col text-s-14">
                                            <a href="#" class="font-medium">Kadın Aksesuar</a>
                                            <ul class="grid grid-cols-1 gap-1 mt-2 font-light ">
                                                <li><a href="#">Çanta Cüzdan</a></li>
                                                <li><a href="#">Çorap</a></li>
                                                <li><a href="#">Şapka - Bere</a></li>
                                            </ul>
                                        </div>
                                        <div class="flex-col text-s-14">
                                            <a href="#" class="font-medium ">Markalar</a>
                                            <ul class="grid grid-cols-1 gap-1 mt-2 font-light">
                                                <li><a href="#">Adidas</a></li>
                                                <li><a href="#">Diadora</a></li>
                                                <li><a href="#">New Balance</a></li>
                                                <li><a href="#">Nike</a></li>
                                                <li><a href="#">Vans</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center justify-center col-span-1 px-2 py-1 hoverable lg:py-2 xl:px-4">
                            <a href="#" class="relative block font-normal xl:text-s-13 lg:text-s-12">SÜPER İNDİRİM</a>
                            <div class="block p-6 mb-16 bg-white shadow-xl mega-menu sm:mb-0 ">
                                <div class="container flex flex-col justify-center w-full mx-auto md:flex-row">

                                    <div class="flex justify-center w-full gap-10 p-0 mx-auto">

                                        <div class="flex-col text-s-14">
                                            <a href="#" class="font-medium">Kadın Ayakkabı</a>
                                            <ul class="grid grid-cols-1 gap-1 mt-2 font-light">
                                                <li><a href="#">Antrenman</a></li>
                                                <li><a href="#">Günlük Kullanım</a></li>
                                                <li><a href="#">Koşu</a></li>
                                                <li><a href="#">Terlik</a></li>

                                            </ul>
                                        </div>
                                        <div class="flex-col text-s-14">
                                            <a href="#" class="font-medium">Kadın Giyim</a>
                                            <ul class="grid grid-cols-1 gap-1 mt-2 font-light">
                                                <li><a href="#">Eşofman Altı</a></li>
                                                <li><a href="#">Mont ve Yağmurluklar </a></li>
                                                <li><a href="#">Şort </a></li>
                                                <li><a href="#">Sweatshirt</a></li>
                                                <li><a href="#">T-shirt</a></li>
                                                <li><a href="#">Atlet</a></li>
                                            </ul>
                                        </div>
                                        <div class="flex-col text-s-14">
                                            <a href="#" class="font-medium">Kadın Aksesuar</a>
                                            <ul class="grid grid-cols-1 gap-1 mt-2 font-light ">
                                                <li><a href="#">Çanta Cüzdan</a></li>
                                                <li><a href="#">Çorap</a></li>
                                                <li><a href="#">Şapka - Bere</a></li>
                                            </ul>
                                        </div>
                                        <div class="flex-col text-s-14">
                                            <a href="#" class="font-medium ">Markalar</a>
                                            <ul class="grid grid-cols-1 gap-1 mt-2 font-light">
                                                <li><a href="#">Adidas</a></li>
                                                <li><a href="#">Diadora</a></li>
                                                <li><a href="#">New Balance</a></li>
                                                <li><a href="#">Nike</a></li>
                                                <li><a href="#">Vans</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center justify-center col-span-1 px-2 py-1 hoverable lg:py-2 xl:px-4">
                            <a href="#" class="relative block font-normal xl:text-s-13 lg:text-s-12">TARZINI BELİRLE</a>
                            <div class="block p-6 mb-16 bg-white shadow-xl mega-menu sm:mb-0 ">
                                <div class="container flex flex-col justify-center w-full mx-auto md:flex-row">

                                    <div class="flex justify-center w-full gap-10 p-0 mx-auto">

                                        <div class="flex-col text-s-14">
                                            <a href="#" class="font-medium">Kadın Ayakkabı</a>
                                            <ul class="grid grid-cols-1 gap-1 mt-2 font-light">
                                                <li><a href="#">Antrenman</a></li>
                                                <li><a href="#">Günlük Kullanım</a></li>
                                                <li><a href="#">Koşu</a></li>
                                                <li><a href="#">Terlik</a></li>

                                            </ul>
                                        </div>
                                        <div class="flex-col text-s-14">
                                            <a href="#" class="font-medium">Kadın Giyim</a>
                                            <ul class="grid grid-cols-1 gap-1 mt-2 font-light">
                                                <li><a href="#">Eşofman Altı</a></li>
                                                <li><a href="#">Mont ve Yağmurluklar </a></li>
                                                <li><a href="#">Şort </a></li>
                                                <li><a href="#">Sweatshirt</a></li>
                                                <li><a href="#">T-shirt</a></li>
                                                <li><a href="#">Atlet</a></li>
                                            </ul>
                                        </div>
                                        <div class="flex-col text-s-14">
                                            <a href="#" class="font-medium">Kadın Aksesuar</a>
                                            <ul class="grid grid-cols-1 gap-1 mt-2 font-light ">
                                                <li><a href="#">Çanta Cüzdan</a></li>
                                                <li><a href="#">Çorap</a></li>
                                                <li><a href="#">Şapka - Bere</a></li>
                                            </ul>
                                        </div>
                                        <div class="flex-col text-s-14">
                                            <a href="#" class="font-medium ">Markalar</a>
                                            <ul class="grid grid-cols-1 gap-1 mt-2 font-light">
                                                <li><a href="#">Adidas</a></li>
                                                <li><a href="#">Diadora</a></li>
                                                <li><a href="#">New Balance</a></li>
                                                <li><a href="#">Nike</a></li>
                                                <li><a href="#">Vans</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center justify-center col-span-1 px-2 py-1 hoverable lg:py-2 xl:px-4">
                            <a href="#" class="relative block font-normal xl:text-s-13 lg:text-s-12">İNDİRİMLİLER</a>
                            <div class="block p-6 mb-16 bg-white shadow-xl mega-menu sm:mb-0 ">
                                <div class="container flex flex-col justify-center w-full mx-auto md:flex-row">

                                    <div class="flex justify-center w-full gap-10 p-0 mx-auto">

                                        <div class="flex-col text-s-14">
                                            <a href="#" class="font-medium">Kadın Ayakkabı</a>
                                            <ul class="grid grid-cols-1 gap-1 mt-2 font-light">
                                                <li><a href="#">Antrenman</a></li>
                                                <li><a href="#">Günlük Kullanım</a></li>
                                                <li><a href="#">Koşu</a></li>
                                                <li><a href="#">Terlik</a></li>

                                            </ul>
                                        </div>
                                        <div class="flex-col text-s-14">
                                            <a href="#" class="font-medium">Kadın Giyim</a>
                                            <ul class="grid grid-cols-1 gap-1 mt-2 font-light">
                                                <li><a href="#">Eşofman Altı</a></li>
                                                <li><a href="#">Mont ve Yağmurluklar </a></li>
                                                <li><a href="#">Şort </a></li>
                                                <li><a href="#">Sweatshirt</a></li>
                                                <li><a href="#">T-shirt</a></li>
                                                <li><a href="#">Atlet</a></li>
                                            </ul>
                                        </div>
                                        <div class="flex-col text-s-14">
                                            <a href="#" class="font-medium">Kadın Aksesuar</a>
                                            <ul class="grid grid-cols-1 gap-1 mt-2 font-light ">
                                                <li><a href="#">Çanta Cüzdan</a></li>
                                                <li><a href="#">Çorap</a></li>
                                                <li><a href="#">Şapka - Bere</a></li>
                                            </ul>
                                        </div>
                                        <div class="flex-col text-s-14">
                                            <a href="#" class="font-medium ">Markalar</a>
                                            <ul class="grid grid-cols-1 gap-1 mt-2 font-light">
                                                <li><a href="#">Adidas</a></li>
                                                <li><a href="#">Diadora</a></li>
                                                <li><a href="#">New Balance</a></li>
                                                <li><a href="#">Nike</a></li>
                                                <li><a href="#">Vans</a></li>
                                            </ul>
                                        </div>
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
  name : 'Dheader'
}
</script>