<template>
  <div class="modal" id="ftr-modal" action="https://test.playsports.com.tr/user/address">
        <div class="modal-content 2xl:overflow-y-hidden">
            <div class="relative bg-white rounded-lg shadow ">
                <!-- Modal header -->
                <div class="flex items-start justify-end rounded-t">
                    <button onclick="modal('ftr-modal')" class="inline-flex items-center p-3 ml-auto text-black bg-transparent rounded-lg hover:bg-gray-200">
                        <img class="w-full" src="assest/img/popupclose.png" alt="">
                    </button>
                </div>
                <!-- Modal body -->
                <div class="w-3/4 p-6 pb-12 mx-auto space-y-6">
                    <form action="popup" method="get">
                        <div class="grid gap-4">
                            <div class="text-center">
                                <span class="font-bold xl:text-s-20 lg:text-s-18 text-s-16">  Bize Katıl!</span>
                            </div>
                            <div class="text-center ">
                                <p class="font-light xl:text-s-16 lg:text-s-14 text-s-12">
                                    Avantajlı kampanyalar ve hakkımızdaki son gelişmelerden herkesten önce haberin olsun!
                                </p>
                            </div>
                            <div class="">
                                <div>
                                    <input type="email" id="email" class="block w-full font-light placeholder-gray-400 bg-transparent rounded-lg xl:text-s-16 lg:text-s-14 text-s-12 border-brd-aa text-c-aa focus:ring-0 focus:border-brd-aa" placeholder="Adı">
                                </div>
                            </div>
                            <div class="">
                                <div>
                                    <input type="date" id="bd" class="block w-full font-light placeholder-gray-400 bg-transparent rounded-lg xl:text-s-16 lg:text-s-14 text-s-12 border-brd-aa text-c-aa focus:ring-0 focus:border-brd-aa" placeholder="Doğum tarihi">
                                </div>
                            </div>
                            <div class="">
                                <div class="relative inline-block w-full ">
                                    <select class="block w-full font-light placeholder-gray-400 bg-transparent rounded-lg bg-none xl:text-s-16 lg:text-s-14 text-s-12 border-brd-aa text-c-aa focus:ring-0 focus:border-brd-aa" placeholder="Alışveriş Tercihi">
                                      <option hidden>Alışveriş Tercihi</option>
                                      <option>Ayakkabı</option>
                                      <option>Kıyafet</option>
                                    </select>
                                </div>
                            </div>
                            <div class="mx-auto ">
                                <a class="px-8 py-2 my-2 font-medium text-center text-white bg-black rounded-lg cursor-pointer xl:text-s-16 lg:text-s-14 text-s-12" href="# "> Kaydol</a>
                            </div>
                            <div class="">
                                <p class="font-normal text-center xl:text-s-12 text-s-9 ">Kaydolduğunda Sport Style'ın
                                    <a class="underline " href="#"> Gizlilik Politikası</a>'nı ve
                                    <a class="underline " href="#">Kullanım Şartları</a>'nı kabul etmiş olursun.
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
                <!-- Modal footer -->

            </div>

        </div>
    </div>
</template>

<script>
export default {
  name : 'Poppup'
}
</script>