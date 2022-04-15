<template>
<!--İletişim Sayfası-->
    <Header></Header>
          <div class="container mx-auto mt-40">

        <div class="flex-col md:px-8">
            <div class="text-center"> <span class="font-bold xl:text-s-18 lg:text-s-16 text-s-14">İletişim</span></div>

            <div class="relative grid p-4 mt-4 bg-white md:p-8">
                <div class="">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3177502.407015908!2d27.5745462!3d38.94615!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab77d7f1ef533%3A0xd4901be01b1f296d!2sSportStyle!5e0!3m2!1str!2str!4v1636026600448!5m2!1str!2str" class="w-full border-none min-h-[13rem]"
                        allowfullscreen="" loading="lazy"></iframe>
                </div>
                <div class="py-4">
                <Contact></Contact>
                </div>
            </div>

        </div>
    </div>
    <Footer></Footer>
</template>



<script>
// @ is an alias to /src
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Contact from '../components/Contact.vue' 
 

export default {
  name: 'Signup',
  components: {
    Header,
    Footer,
    Contact,
  }
}
 
</script>