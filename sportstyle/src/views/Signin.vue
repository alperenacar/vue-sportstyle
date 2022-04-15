<template>
    <Header></Header>
            <div class="container mx-auto mt-36">
        <div class="w-10/12 mx-auto ">
            <form action="get">
                <div class="grid grid-cols-3 gap-6 ">
                      <Logintag></Logintag>

                    <div class="col-span-3 md:col-span-1 md:col-start-2">
                        <div class="grid grid-cols-2 xl:gap-x-5 lg:gap-y-5 gap-x-2 gap-y-3">
                            <div class="col-span-2 ">
                                <div>
                                    <input type="email" id="email" class="block w-full font-light placeholder-gray-400 bg-transparent rounded-lg border-brd-aa text-c-aa focus:ring-0 focus:border-brd-aa" placeholder="E-posta Adresi">
                                </div>
                            </div>
                            <div class="col-span-2 ">
                                <input type="password" id="sifre" class="block w-full font-light placeholder-gray-400 bg-transparent rounded-lg border-brd-aa text-c-aa focus:ring-0 focus:border-brd-aa" placeholder="Şifre">

                            </div>
                            <div class="col-span-1 ">
                                <label class="inline-flex items-center font-normal xl:text-s-12 lg:text-s-10 md:text-s-8 text-s-10" for="flexRadioDefault1"> 
                                    <input class="mr-2 font-light shadow-none xl:w-4 xl:h-4 lg:h-3 lg:w-3 focus:ring-transparent border-brd-aa text-c-aa" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1">
                                   Oturumu açık bırak
                                  </label>
                            </div>
                            <div class="col-span-1 font-normal text-right xl:text-s-10 text-s-8">
                                <a href="#">Şifreni mi unuttun?</a>
                            </div>

                            <div class="col-span-2 ">
                                <p class="font-normal text-center xl:text-s-12 text-s-9 ">Oturum açarak Sport Style'ın
                                    <a class="underline " href="#"> Gizlilik Politikası</a>'nı ve
                                    <a class="underline " href="#">Kullanım Şartları</a>'nı kabul etmiş olursun.</p>
                            </div>
                            <div class="col-span-2 py-1.5 my-2 mt-4 font-semibold text-s-18 text-center text-white bg-black rounded-lg cursor-pointer">
                                <a href="#">Oturum Aç</a>
                            </div>
                            <div class="col-span-2 ">
                                <p class="font-medium text-center xl:text-s-12 text-s-10">Üye Değil misin?
                                    <a class="underline " href="#">Bize Katıl</a>
                                </p>
                            </div>
                        </div>
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
import Logintag from '../components/Logintag.vue' 

export default {
  name: 'Signin',
  components: {
    Header,
    Footer,
    Logintag,
  }
}
 
</script>