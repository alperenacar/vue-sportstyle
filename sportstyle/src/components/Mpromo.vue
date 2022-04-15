<template>
    <!--PROMO-->
    <div class="container mx-auto">
        <div class="flex flex-wrap">
            <div class="w-full">
                <div class="relative flex flex-col w-full min-w-0 mb-6 break-words ">
                    <div class="flex-auto py-5">
                        <div class="grid grid-cols-3 gap-6 xl:text-s-18 lg:text-s-16 md:text-s-14">

                            <div class="col-span-3 md:col-span-1">
                                <div class="relative w-full">
                                    <a href="#">
                                        <img src="../assets/img/afis1.jpg" class="w-full" width="567" height="720" alt="">
                                    </a>

                                    <div class="absolute flex items-center justify-center px-6 py-2 my-auto text-black bg-white rounded-md left-6 bottom-6 lg:left-8 lg:bottom-8">
                                        <span class="block font-medium uppercase">Kadın</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-span-3 md:col-span-1">
                                <div class="relative w-full">
                                    <a href="#">
                                        <img src="../assets/img/afis2.jpg" class="w-full" width="567" height="720" alt="">
                                    </a>

                                    <div class="absolute flex items-center justify-center px-6 py-2 my-auto text-black bg-white rounded-md left-6 bottom-6 lg:left-8 lg:bottom-8">
                                        <span class="block font-medium uppercase">Erkek</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-span-3 md:col-span-1">
                                <div class="relative w-full">
                                    <a href="#">
                                        <img src="../assets/img/afis3.jpg" class="w-full" width="567" height="720" alt="">
                                    </a>

                                    <div class="absolute flex items-center justify-center px-6 py-2 my-auto text-black bg-white rounded-md left-6 bottom-6 lg:left-8 lg:bottom-8">
                                        <span class="block font-medium uppercase">Çocuk</span>
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
  name : 'Mpromo'
}
</script>