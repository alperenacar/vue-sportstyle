<template>
  <!--VIDEO BANNER-->
    <div class="static flex flex-wrap">
        <div class="w-full">
            <div class="relative flex flex-col w-full min-w-0 my-12 break-words bg-second-gray ">
                <div class="flex-auto py-8 ">
                    <div class="container mx-auto">
                        <div class="grid grid-cols-5 mx-auto md:gap-10 xs:px-4">

                            <div class="flex flex-col w-full col-span-5 md:col-span-3 md:col-start-2">
                                <div class="relative w-full ">
                                    <div class="aspect-w-16 aspect-h-9">

                                    </div>
                                </div>
                            </div>
                            <div class="sticky top-0 flex-col hidden w-2/3 col-span-1 col-start-5 my-auto md:block">
                                <div class="relative flex flex-col w-full ">
                                    <span class="absolute right-1.5 top-1.5 flex justify-center items-center  rounded-full bg-black text-white text-center w-6 h-6">X</span>
                                    <img class="h-1/4" src="../assets/img/video-urn.jpg" width="235" height="271" alt="">
                                    <div class="flex flex-col p-3 pb-4 bg-white ">
                                        <span class="font-medium uppercase ">New Balance</span>
                                        <span class="flex-col font-light capitalize ">Kadın Beyaz Yürüyüş Ayakkabısı</span>
                                        <div class="flex pt-3 pb-1">
                                            <img class="w-auto h-2 lg:h-3" src="../assets/img/yldz-s.svg" width="16" height="15" alt="">
                                            <img class="w-auto h-2 lg:h-3" src="../assets/img/yldz-s.svg" width="16" height="15" alt="">
                                            <img class="w-auto h-2 lg:h-3" src="../assets/img/yldz-s.svg" width="16" height="15" alt="">
                                            <img class="w-auto h-2 lg:h-3" src="../assets/img/yldz-s.svg" width="16" height="15" alt="">
                                            <img class="w-auto h-2 lg:h-3" src="../assets/img/yldz-s.svg" width="16" height="15" alt="">
                                        </div>
                                        <span class="text-xs font-light">Şu sıralar favorilerde </span>
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
  name : 'Mvideo'
}
</script>