<template>
    <Header></Header>
    <div class="container mx-auto mt-36">
        <div class="w-10/12 mx-auto lg:w-10/12 md:w-11/12 ">
            <form action="get">
                <div class="grid grid-cols-3 xl:gap-x-5 lg:gap-x-4 gap-x-3 xl:gap-y-4 lg:gap-y-3 gap-y-2">
                    <div class="col-span-3 mt-4 ">
                        <div class="flex grid-cols-5 gap-2 md:grid">
                            <div class="w-full col-span-5 px-4 py-2 font-medium text-center bg-transparent border rounded-md md:col-span-1">
                                <span class=" xl:text-s-18 lg:text-s-16 text-s-14">Adres Bilgileri</span>
                            </div>
                            <div class="flex items-end">
                                <a class="underline xl:text-s-14 lg:text-s-12 text-s-11" href="#">Düzenle</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-3 border-b border-brd-de">
                        <nav class="flex w-full gap-2 mb-4 rounded-md xs:grid odeme-nav" id="myDIV">
                            <div class="">
                                <a class="odemeStyle active" href="#">
                                    <div class="odemeStyle-div xl:text-s-18 lg:text-s-16 text-s-14">Kredi Kartı / Banka Kartı ile Ödeme</div>
                                </a>
                            </div>
                            <div class="">
                                <a class="odemeStyle " href="#">
                                    <div class="odemeStyle-div xl:text-s-18 lg:text-s-16 text-s-14">Kapıda Ödeme</div>
                                </a>
                            </div>
                            <div class="">
                                <a class="odemeStyle" href="#">
                                    <div class="odemeStyle-div xl:text-s-18 lg:text-s-16 text-s-14">Havale ile Ödeme</div>
                                </a>
                            </div>
                        </nav>

                    </div>

                    <div class="flex-col col-span-3 md:col-span-2">
                        <div class="grid grid-cols-3 gap-2 xl:gap-5 lg:gap-3 ">
                            <div class="col-span-3 ">
                                <div class="flex-col">
                                    <div class="py-2 xl:text-s-14 lg:text-s-12 text-s-11">Kredi Kartı / Banka Kartı ile Öde</div>
                                    <input type="text" id="karti" class="block w-full font-light placeholder-gray-400 bg-transparent rounded-lg xl:text-s-16 lg:text-s-14 text-s-12 border-brd-aa text-c-aa focus:ring-0 focus:border-brd-aa" placeholder="Kartın Üzerindeki İsim">
                                </div>
                            </div>
                            <div class="col-span-3 ">
                                <input type="number" id="kartN" class="block w-full font-light placeholder-gray-400 bg-transparent rounded-lg xl:text-s-16 lg:text-s-14 text-s-12 border-brd-aa text-c-aa focus:ring-0 focus:border-brd-aa" placeholder="Kart Numarası">
                            </div>
                            <div class="col-span-1 ">
                                <input type="number" id="ay" class="block w-full font-light placeholder-gray-400 bg-transparent rounded-lg xl:text-s-16 lg:text-s-14 text-s-12 border-brd-aa text-c-aa focus:ring-0 focus:border-brd-aa" placeholder="Ay">
                            </div>
                            <div class="col-span-1 ">
                                <input type="number" id="yil" class="block w-full font-light placeholder-gray-400 bg-transparent rounded-lg xl:text-s-16 lg:text-s-14 text-s-12 border-brd-aa text-c-aa focus:ring-0 focus:border-brd-aa" placeholder="Yıl">
                            </div>
                            <div class="col-span-1 ">
                                <input type="password" id="cvc" class="block w-full font-light placeholder-gray-400 bg-transparent rounded-lg xl:text-s-16 lg:text-s-14 text-s-12 border-brd-aa text-c-aa focus:ring-0 focus:border-brd-aa" placeholder="CVC">
                            </div>
                            <div class="flex-col col-span-3">
                                <div class="py-2 xl:text-s-14 lg:text-s-12 text-s-11">Mesafeli Satış Sözleşmesi</div>
                                <textarea class="block w-full h-24 font-light placeholder-gray-400 bg-transparent rounded-lg xl:text-s-16 lg:text-s-14 text-s-12 border-brd-aa text-c-aa xl:h-48 lg:h-32 focus:ring-0 focus:border-brd-aa" placeholder="MESAFELİ SATIŞ SÖZLEŞMESİ"></textarea>
                            </div>
                            <div class="flex-col col-span-3">
                                <div class="py-2 xl:text-s-14 lg:text-s-12 text-s-11">Ön Bilgilendirme Formu</div>
                                <textarea class="block w-full h-24 font-light placeholder-gray-400 bg-transparent rounded-lg xl:text-s-16 lg:text-s-14 text-s-12 border-brd-aa text-c-aa xl:h-48 lg:h-32 focus:ring-0 focus:border-brd-aa" placeholder="ÖN BİLGİLENDİRME FORMU"></textarea>
                            </div>
                            <div class="col-span-3  py-1.5  font-medium xl:text-s-16 lg:text-s-14 text-s-12  text-center text-white bg-black rounded-lg cursor-pointer"><a href="# ">3D Secure ile Ödeme Yap</a></div>
                        </div>
                    </div>
                    <div class="col-span-3 md:col-span-1 ">
                         <Os></Os>
                    </div>
                </div>
            </form>

        </div>
    </div>
    
    <Footer></Footer>
</template>



<script>
// @ is an alias to /src
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Os from '../components/Os.vue' 
 

export default {
  name: 'Signup',
  components: {
    Header,
    Footer,
    Os,
  }
}
 
</script>