<template>
    <Header></Header>
      <div class="container mx-auto mt-36">
        <div class="w-10/12 mx-auto lg:w-10/12 md:w-11/12 ">
            <form action="get">
                <div class="grid grid-cols-3 gap-3 xl:gap-6 lg:gap-4 ">
                    <div class="col-span-3 mt-4 border-b border-brd-de">
                       <Adrstag></Adrstag>
                    </div>
                    <div class="grid col-span-3 divide-y md:col-span-2 divide-brd-de">

                        <div class="grid gap-2 py-4">
                            <div><span class="font-medium xl:text-s-16 lg:text-s-14 text-s-12 ">Kargo ile Adrese Teslimat</span></div>
                            <div><span class="font-light xl:text-s-16 lg:text-s-14 text-s-12">Adres Tipi</span></div>
                            <div class=""> <textarea class="block w-full h-16 font-light placeholder-gray-400 bg-transparent rounded-lg xl:text-s-16 lg:text-s-14 text-s-12 border-brd-aa text-c-aa xl:h-24 lg:h-20 focus:ring-0 focus:border-brd-aa" placeholder="Adres"></textarea></div>
                            <div class="flex justify-between">
                                <div>
                                    <label class="inline-flex items-center xl:text-s-14 lg:text-s-12 text-s-10" for="flexRadioDefault1"> 
                                        <input class="mr-2 font-light shadow-none xl:w-4 xl:h-4 lg:h-3 lg:w-3 focus:ring-transparent border-brd-aa text-c-aa" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1">
                                       T.C. Vatandaşı Değil
                                      </label>
                                </div>
                                <div class="flex items-center">
                                    <a class="text-red-500 underline " href="#">Adresi Düzenle</a>
                                </div>
                            </div>
                        </div>

                        <div class="flex-col py-4">
                            <ul class="flex-col content-center gap-6 font-light align-middle">
                                <li class="font-medium xl:text-s-16 lg:text-s-14 text-s-12">Kargo Seçimi</li>
                                <li>
                                    <label class="inline-flex items-center font-light xl:text-s-16 lg:text-s-14 text-s-12" for="flexRadioDefault1"> 
                                        <input class="w-3 h-3 mr-2 text-black rounded-full focus:ring-transparent border-kbrdgray" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked>
                                        Yurtiçi Kargo
                                      </label>
                                </li>
                                <li>
                                    <label class="inline-flex items-center font-light xl:text-s-16 lg:text-s-14 text-s-12" for="flexRadioDefault2">
                                        <input class="w-3 h-3 mr-2 text-black rounded-full focus:ring-transparent border-kbrdgray" type="radio" name="flexRadioDefault" id="flexRadioDefault2" >
                                        UPS Kargo
                                      </label>
                                </li>
                            </ul>
                            <div class="col-span-2  py-1.5 my-2 mt-4 font-medium text-s-18 text-center text-white bg-black rounded-lg cursor-pointer"><a href="# ">Kaydet ve Devam Et</a></div>
                        </div>

                    </div>

                    <div class="flex items-center h-full col-span-3 md:col-span-1">
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
import Adrstag from '../components/Adrstag.vue'

export default {
  name: 'Signup',
  components: {
    Header,
    Footer,
    Adrstag,
    Os,
  }
}
 
</script>