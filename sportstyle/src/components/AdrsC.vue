<template>
    <!--Address Content-->
     <div class="flex-col col-span-3 xl:text-s-16 lg:text-s-14 text-s-12">
                        <span class="font-medium ">Kargo ile Adrese Teslimat</span>
                        <div class="flex">
                            <ul class="flex content-center gap-6 font-light align-middle">
                                <li>Adres Tipi</li>
                                <li>
                                    <label class="inline-flex items-center" for="flexRadioDefault1"> 
                                        <input class="w-3 h-3 mr-2 text-black rounded-full focus:ring-transparent border-kbrdgray" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked>
                                       Bireysel
                                      </label>
                                </li>
                                <li>
                                    <label class="inline-flex items-center" for="flexRadioDefault2">
                                        <input class="w-3 h-3 mr-2 text-black rounded-full focus:ring-transparent border-kbrdgray" type="radio" name="flexRadioDefault" id="flexRadioDefault2" >
                                        Kurumsal
                                      </label>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="flex-col col-span-3 md:col-span-2">
                        <div class="grid grid-cols-2 gap-2 xl:gap-5 lg:gap-3 ">
                            <div class="col-span-1 ">
                                <div>
                                    <input type="email" id="email" class="block w-full font-light placeholder-gray-400 bg-transparent rounded-lg xl:text-s-16 lg:text-s-14 text-s-12 border-brd-aa text-c-aa focus:ring-0 focus:border-brd-aa" placeholder="Adı">
                                </div>
                            </div>
                            <div class="col-span-1 ">
                                <input type="email" id="email" class="block w-full font-light placeholder-gray-400 bg-transparent rounded-lg xl:text-s-16 lg:text-s-14 text-s-12 border-brd-aa text-c-aa focus:ring-0 focus:border-brd-aa" placeholder="Soyadı">

                            </div>
                            <div class="col-span-2 "> <input type="email" id="email" class="block w-full font-light placeholder-gray-400 bg-transparent rounded-lg xl:text-s-16 lg:text-s-14 text-s-12 border-brd-aa text-c-aa focus:ring-0 focus:border-brd-aa" placeholder="E-Posta Adresi">
                            </div>
                            <div class="col-span-2 "> <input type="tel" id="phone" class="block w-full font-light placeholder-gray-400 bg-transparent rounded-lg xl:text-s-16 lg:text-s-14 text-s-12 border-brd-aa text-c-aa focus:ring-0 focus:border-brd-aa" placeholder="Telefon">
                            </div>
                            <div class="col-span-2 ">
                                <div class="relative inline-block w-full ">
                                    <select class="block w-full font-light placeholder-gray-400 bg-transparent rounded-lg bg-none xl:text-s-16 lg:text-s-14 text-s-12 border-brd-aa text-c-aa focus:ring-0 focus:border-brd-aa" placeholder="Ülke Seçin">
                                      <option>Türkiye</option>
                                      <option></option>
                                      <option></option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-span-1 ">
                                <div class="relative inline-block w-full ">
                                    <select class="block w-full font-light placeholder-gray-400 bg-transparent rounded-lg bg-none xl:text-s-16 lg:text-s-14 text-s-12 border-brd-aa text-c-aa focus:ring-0 focus:border-brd-aa" placeholder="İl Seçin">
                                      <option>İl Seçin</option>
                                      <option></option>
                                      <option></option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-span-1 ">
                                <div class="relative inline-block w-full ">
                                    <select class="block w-full font-light placeholder-gray-400 bg-transparent rounded-lg bg-none xl:text-s-16 lg:text-s-14 text-s-12 border-brd-aa text-c-aa focus:ring-0 focus:border-brd-aa" placeholder="İlçe Seçin">
                                      <option>İlçe Seçin</option>
                                      <option></option>
                                      <option></option>
                                    </select>
                                </div>

                            </div>
                            <div class="col-span-2 "> <textarea class="block w-full h-24 font-light placeholder-gray-400 bg-transparent rounded-lg xl:text-s-16 lg:text-s-14 text-s-12 border-brd-aa text-c-aa xl:h-48 lg:h-32 focus:ring-0 focus:border-brd-aa" placeholder="Adres"></textarea></div>
                            <div class="col-span-2 "> <input type="number" id="pkodu" class="block w-full font-light placeholder-gray-400 bg-transparent rounded-lg xl:text-s-16 lg:text-s-14 text-s-12 border-brd-aa text-c-aa focus:ring-0 focus:border-brd-aa" placeholder="Posta Kodu">
                            </div>
                            <div class="col-span-2 "> <input type="number" id="kimlik" class="block w-full font-light placeholder-gray-400 bg-transparent rounded-lg xl:text-s-16 lg:text-s-14 text-s-12 border-brd-aa text-c-aa focus:ring-0 focus:border-brd-aa" placeholder="T.C. Kimlik No">
                            </div>
                            <div class="col-span-2 ">
                                <label class="inline-flex items-center xl:text-s-14 lg:text-s-12 text-s-10" for="flexRadioDefault1"> 
                                    <input class="mr-2 font-light shadow-none xl:w-4 xl:h-4 lg:h-3 lg:w-3 focus:ring-transparent border-brd-aa text-c-aa" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1">
                                   T.C. Vatandaşı Değil
                                  </label>
                            </div>
                            <div class="col-span-2 ">
                                <input type="text" id="adres" class="block w-full font-light placeholder-gray-400 bg-transparent rounded-lg xl:text-s-16 lg:text-s-14 text-s-12 border-brd-aa text-c-aa focus:ring-0 focus:border-brd-aa" placeholder="Adres Başlığı (Örneğin: Ev Adresi)">
                            </div>
                            <div class="col-span-2  py-1.5 my-2 mt-4 font-medium text-s-18 text-center text-white bg-black rounded-lg cursor-pointer"><a href="# ">Kaydet ve Devam Et</a></div>
                        </div>
                    </div>
</template>

<script>
export default {
  name : 'AdrsC'
}
</script>