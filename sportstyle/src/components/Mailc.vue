<template>
<!--Mail Contact-->
     <div class="w-full h-full overflow-hidden flexrelative">
            <div class="relative flex items-center justify-center">
                <div class="object-scale-down w-full h-auto bg-center bg-no-repeat bg-cover xl:h-64 lg:h-56 md:h-48 xs:h-40 bg-abonelik">
                    <div class="flex items-center w-5/6 h-full mx-auto my-auto">
                        <div class="grid w-1/2 grid-cols-1 md:w-1/3 3xs:w-3/5">
                            <div class="my-auto font-semibold xl:text-s-24 lg:text-s-20 md:text-s-16">Bize Katılmaya Ne Dersin?</div>
                            <div>
                                <p class="font-light xl:text-s-16 lg:text-s-13 md:text-s-10">
                                    Avantajlı kampanyalar ve hakkımızdaki son gelişmelerden herkesten önce haberin olsun!
                                </p>
                            </div>
                            <div class="relative mt-3 xl:h-10 sm:mt-5">
                                <input type="text" class="w-full h-full pl-5 rounded-md xl:text-s-14 lg:text-s-13 md:text-s-12 xs:text-s-10 focus:outline-none focus:ring-0 bg-main-gray text-dark-flower " placeholder="E-posta adresin">
                                <a class="absolute top-0 right-0 flex items-center justify-center h-full px-2 text-white rounded-md xl:text-s-14 lg:text-s-13 md:text-s-12 xs:text-s-10 bg-btn-green" href="#">
                                        GÖNDER
                                    </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
  name : 'Mailc'
}
</script>